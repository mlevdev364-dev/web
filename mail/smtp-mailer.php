<?php
/**
 * =========================================================
 * SAKA OMNI — SMTP Mailer (tanpa dependency eksternal)
 * =========================================================
 * Implementasi klien SMTP sederhana lewat socket PHP (fsockopen),
 * mendukung STARTTLS (port 587) maupun SSL langsung (port 465),
 * plus AUTH LOGIN. Cukup untuk mengirim email dari form kontak
 * ke satu penerima utama + satu Cc.
 *
 * Kalau kamu lebih nyaman pakai PHPMailer (lebih matang, mendukung
 * lebih banyak server SMTP), kelas ini bisa diganti dengan:
 *   composer require phpmailer/phpmailer
 * dan panggilan di send-mail.php disesuaikan.
 */

class SmtpMailerException extends Exception {}

class SmtpMailer
{
    private $host;
    private $port;
    private $encryption;
    private $username;
    private $password;
    private $timeout;
    private $socket;

    public function __construct(array $config)
    {
        $this->host       = $config['host'];
        $this->port       = (int) $config['port'];
        $this->encryption = strtolower($config['encryption'] ?? 'tls');
        $this->username   = $config['username'];
        $this->password   = $config['password'];
        $this->timeout    = $config['timeout'] ?? 15;
    }

    /**
     * Kirim satu email teks biasa.
     */
    public function send($fromEmail, $fromName, $toEmail, $toName, $ccEmail, $replyTo, $subject, $body)
    {
        $this->connect();
        $this->readResponse(220);

        $this->ehlo();

        if ($this->encryption === 'tls') {
            $this->command("STARTTLS", 220);
            if (!stream_socket_enable_crypto($this->socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                throw new SmtpMailerException('Gagal mengaktifkan TLS ke server SMTP.');
            }
            $this->ehlo(); // wajib EHLO ulang setelah STARTTLS
        }

        $this->auth();

        $this->command("MAIL FROM:<{$fromEmail}>", 250);
        $this->command("RCPT TO:<{$toEmail}>", [250, 251]);
        if (!empty($ccEmail)) {
            $this->command("RCPT TO:<{$ccEmail}>", [250, 251]);
        }
        $this->command("DATA", 354);

        $headers   = [];
        $headers[] = "From: " . $this->encodeHeader($fromName) . " <{$fromEmail}>";
        $headers[] = "To: " . $this->encodeHeader($toName) . " <{$toEmail}>";
        if (!empty($ccEmail)) {
            $headers[] = "Cc: <{$ccEmail}>";
        }
        if (!empty($replyTo)) {
            $headers[] = "Reply-To: <{$replyTo}>";
        }
        $headers[] = "Subject: " . $this->encodeHeader($subject);
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-Type: text/plain; charset=UTF-8";
        $headers[] = "Content-Transfer-Encoding: 8bit";
        $headers[] = "Date: " . date('r');
        $headers[] = "X-Mailer: SAKA-OMNI-ContactForm";

        $payload = implode("\r\n", $headers) . "\r\n\r\n" . $this->escapeBody($body) . "\r\n.";
        $this->command($payload, 250);

        $this->command("QUIT", 221, false);
        fclose($this->socket);

        return true;
    }

    private function connect()
    {
        $transport = ($this->encryption === 'ssl') ? 'ssl://' : '';
        $remote    = $transport . $this->host . ':' . $this->port;

        $this->socket = @stream_socket_client(
            $remote,
            $errno,
            $errstr,
            $this->timeout,
            STREAM_CLIENT_CONNECT
        );

        if (!$this->socket) {
            throw new SmtpMailerException("Tidak bisa konek ke SMTP server ({$this->host}:{$this->port}): {$errstr}");
        }
        stream_set_timeout($this->socket, $this->timeout);
    }

    private function ehlo()
    {
        $this->command("EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost'), 250);
    }

    private function auth()
    {
        $this->command("AUTH LOGIN", 334);
        $this->command(base64_encode($this->username), 334);
        $this->command(base64_encode($this->password), 235);
    }

    private function command($cmd, $expectedCode, $sendCommand = true)
    {
        if ($sendCommand) {
            fwrite($this->socket, $cmd . "\r\n");
        }
        $this->readResponse($expectedCode);
    }

    private function readResponse($expectedCode)
    {
        $response = '';
        while ($line = fgets($this->socket, 515)) {
            $response .= $line;
            // Multi-line SMTP responses use "code-" ; the final line uses "code ".
            if (isset($line[3]) && $line[3] === ' ') break;
        }

        $code = (int) substr($response, 0, 3);
        $expected = is_array($expectedCode) ? $expectedCode : [$expectedCode];

        if (!in_array($code, $expected, true)) {
            throw new SmtpMailerException("Respons SMTP tidak sesuai. Diharapkan " . implode('/', $expected) . ", diterima: " . trim($response));
        }

        return $response;
    }

    private function escapeBody($body)
    {
        // "Dot-stuffing": baris yang diawali titik tunggal harus di-escape jadi titik ganda
        $lines = preg_split('/\r\n|\r|\n/', $body);
        foreach ($lines as &$line) {
            if (isset($line[0]) && $line[0] === '.') {
                $line = '.' . $line;
            }
        }
        return implode("\r\n", $lines);
    }

    private function encodeHeader($text)
    {
        // Encode header non-ASCII (misal nama dengan huruf non-Latin) sesuai RFC 2047
        if (preg_match('/[^\x20-\x7E]/', $text)) {
            return '=?UTF-8?B?' . base64_encode($text) . '?=';
        }
        return $text;
    }
}
