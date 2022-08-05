<?php
$ip_add = $_SERVER['REMOTE_ADDR'];
header('Content-Type: application/json');
echo "{\"country_name\":\"".json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".$ip_add))->geoplugin_countryName."\"}";
?>
