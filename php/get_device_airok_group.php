<?php
    function get_device_tracks_purezadb() {
        include './conectar.php';
        $dbconn = pg_connect("host=$host dbname=$dbname port=$port user=$user password=$password sslmode=$ssl connect_timeout=50") or die('No se ha podido conectar: ' . pg_last_error());
        $response = [];
        $usuario_get = $_GET["user"];
        $group_get = $_GET["group"];
        if($dbconn) {
            if (empty($group_get) || $group_get == "0") {
                $query_tracks_airok = "
                select sat.id, sat.__created_at__, sat.co2, sat.hum, sat.temp, sat.bat, sat.press, sal.active 
                from sensores_airok_tracks sat 
                join sensores_airok_lista sal  on sat.id  = sal.id 
                join grupos_usuario gu on gu.id_grupo  = sal.grupos 
                join (SELECT sat2.id, MAX(sat2.__created_at__) AS maximafecha FROM sensores_airok_tracks sat2 GROUP BY sat2.id) as subselec  ON sat.id = subselec.id AND sat.__created_at__ = subselec.maximafecha 
                where gu.id_usuario = '".$usuario_get."' and sal.active = true";
                $result_query_tracks_airok = pg_query($dbconn, $query_tracks_airok);
                while ($row = pg_fetch_assoc($result_query_tracks_airok)) { 
                    $id = $row['id'];
                    $__created_at__ = $row['__created_at__'];
                    $co2 = $row['co2'];
                    $temperature = $row['temp'];
                    $humidity = $row['hum'];
                    $press = $row['press'];
                    $bat = $row['bat'];
                    $active = $row['active'];
                    $response[] = array(
                        "id" => $id,
                        "__created_at__" => $__created_at__,
                        "co2" => $co2,
                        "temperature" => $temperature,
                        "humidity" => $humidity,
                        "press" => $press,
                        "bat" => $bat,
                        "active" => $active
                    );
                }
            } else {
                $query_tracks_airok = "
                select sat.id, sat.__created_at__, sat.co2, sat.hum, sat.temp, sat.bat, sat.press, sal.active 
                from sensores_airok_tracks sat 
                join sensores_airok_lista sal  on sat.id  = sal.id 
                join grupos_usuario gu on gu.id_grupo  = sal.grupos 
                join (SELECT sat2.id, MAX(sat2.__created_at__) AS maximafecha FROM sensores_airok_tracks sat2 GROUP BY sat2.id) as subselec  ON sat.id = subselec.id AND sat.__created_at__ = subselec.maximafecha 
                where gu.id_usuario = '".$usuario_get."' and sal.active = true and sal.grupos ='".$group_get."'";
                $result_query_tracks_airok = pg_query($dbconn, $query_tracks_airok);
                while ($row = pg_fetch_assoc($result_query_tracks_airok)) { 
                    $id = $row['id'];
                    $__created_at__ = $row['__created_at__'];
                    $co2 = $row['co2'];
                    $temperature = $row['temp'];
                    $humidity = $row['hum'];
                    $press = $row['press'];
                    $bat = $row['bat'];
                    $active = $row['active'];
                    $response[] = array(
                        "id" => $id,
                        "__created_at__" => $__created_at__,
                        "co2" => $co2,
                        "temperature" => $temperature,
                        "humidity" => $humidity,
                        "press" => $press,
                        "bat" => $bat,
                        "active" => $active
                    );
                }
            }
            echo json_encode($response);
            pg_close($dbconn);
            die();
        }
    }
    get_device_tracks_purezadb();
?>
