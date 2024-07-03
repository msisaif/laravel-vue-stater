<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>V2</title>

    @vite(['vue/src/main.js'])
</head>

<body>
    <div>V2</div>
    <div id="app">Loading...</div>
</body>
</html>