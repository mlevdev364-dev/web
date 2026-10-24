<?php
/**
 * SMTP configuration for SAKA OMNI contact form.
 * Keep secrets out of the repository when possible and load them from env vars.
 */

return [
    'host' => getenv('SAKA_SMTP_HOST') ?: 'mail.saka-ai.my.id',
    'port' => (int) (getenv('SAKA_SMTP_PORT') ?: 587),
    'encryption' => getenv('SAKA_SMTP_ENCRYPTION') ?: 'tls',
    'username' => getenv('SAKA_SMTP_USERNAME') ?: 'hello@saka-ai.my.id',
    'password' => getenv('SAKA_SMTP_PASSWORD') ?: '',
    'from_email' => getenv('SAKA_SMTP_FROM_EMAIL') ?: 'hello@saka-ai.my.id',
    'from_name' => getenv('SAKA_SMTP_FROM_NAME') ?: 'SAKA OMNI Website',
    'to_email' => getenv('SAKA_SMTP_TO_EMAIL') ?: 'hello@saka-ai.my.id',
    'to_name' => getenv('SAKA_SMTP_TO_NAME') ?: 'SAKA OMNI Team',
    'cc_email' => getenv('SAKA_SMTP_CC_EMAIL') ?: 'mlevian@protonmail.com',
    'timeout' => (int) (getenv('SAKA_SMTP_TIMEOUT') ?: 15),
];
