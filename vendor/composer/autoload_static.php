<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit098bab3922e54ad2fdd182bc58e8db48
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit098bab3922e54ad2fdd182bc58e8db48::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit098bab3922e54ad2fdd182bc58e8db48::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit098bab3922e54ad2fdd182bc58e8db48::$classMap;

        }, null, ClassLoader::class);
    }
}
