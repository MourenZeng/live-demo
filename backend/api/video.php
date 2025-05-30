<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$basePath = 'C:/Users/Exulansis_m/Desktop/SemesterMaterials/live-demo/backend/videos/';

$response = [
    'code' => 0,
    'msg' => 'success',
    'data' => [
        'mobile' => [
            'url' => '/live-demo/backend/videos/mobile-demo.mp4',
            'meta' => ['source_device' => 'mobile', 'resolution' => '720x1280']
        ],
        'desktop' => [
            'url' => '/live-demo/backend/videos/desktop-demo.mp4',
            'meta' => ['source_device' => 'desktop', 'resolution' => '1920x1080']
        ]
    ]
];

echo json_encode($response);
exit;