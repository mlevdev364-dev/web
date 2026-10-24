<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if (!function_exists('sakaVisitorFile')) {
    function sakaVisitorFile() {
        $dir = __DIR__ . '/data';
        if (!is_dir($dir) && !mkdir($dir, 0775, true) && !is_dir($dir)) {
            return __DIR__ . '/visitors.json';
        }

        return $dir . '/visitors.json';
    }
}

if (isset($_GET['track']) && $_GET['track'] == '1') {
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    $file = sakaVisitorFile();
    $count = 1;
    $payload = ['count' => 1, 'updated_at' => date(DATE_ATOM)];

    if (file_exists($file)) {
        $existing = json_decode(file_get_contents($file), true);
        if (is_array($existing) && isset($existing['count'])) {
            $count = max(1, (int) $existing['count']);
        }
    }

    if (empty($_SESSION['saka_visitor_tracked'] ?? false)) {
        $_SESSION['saka_visitor_tracked'] = true;
        $count = $count + 1;
    }

    $payload = [
        'count' => $count,
        'updated_at' => date(DATE_ATOM),
    ];

    file_put_contents($file, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);

    echo json_encode(['count' => $count, 'updated_at' => $payload['updated_at']], JSON_UNESCAPED_SLASHES);
    exit;
}

echo json_encode(['count' => 0, 'updated_at' => date(DATE_ATOM)], JSON_UNESCAPED_SLASHES);
exit;
