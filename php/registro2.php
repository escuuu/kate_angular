<?php
    function registro() {
        $host = "backup1.miyuneta.es";
        $user = "demo";
        $password = "mulesol_2021";
        $dbname = "mulesol_prod";
        $port = "5432";
        $ssl = "require";
        $id_usuario = "";
        $id_grupo = "";
        $dbconn = pg_connect("host=$host dbname=$dbname port=$port user=$user password=$password sslmode=$ssl connect_timeout=50") or die('No se ha podido conectar: ' . pg_last_error());
        if($dbconn) {
            $nameget = $_GET['name'];
            $passwordget = $_GET['password'];
            //quito espacios
                $name =str_replace(' ', '', $nameget);
                $password =str_replace(' ', '', $passwordget);
            //
            $sal = rand();
            $finalsal = base64_encode($sal);
            $pim = "oP&r2Q";
            $saltedPassword = $finalsal . $password . $pim;
            $finalpassword = hash('sha512', $saltedPassword);
            $result = "";
            $response = "";
            $nameask = "";
            $pattern = '/^(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){255,})(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){65,}@)(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22))(?:\\.(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-+[a-z0-9]+)*\\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-+[a-z0-9]+)*)|(?:\\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\\]))$/iD';
            if (isset($password) && empty($password) || isset($name) && empty($name) || preg_match($pattern, $name) !== 1) {
                $response = "false";
            } else {
                $query_regis_ask = "SELECT name FROM usuarios where name='".$name."'";
                $result_query_regis_ask = pg_query($dbconn, $query_regis_ask);
                while ($row = pg_fetch_assoc($result_query_regis_ask)) {
                    $nameask = $row['name'];
                }
                if ($name == $nameask) {
                    $response = "false";
                } else {
                    try {
                        $query_regis_usuarios = "INSERT INTO usuarios (name, password, sal) VALUES ('".$name."', '".$finalpassword."', '".$finalsal."')";
                        $result = pg_query($dbconn, $query_regis_usuarios);
                        $query_select_usuarios = "SELECT id from usuarios where name='".$name."'";
                        $result  = pg_query($dbconn, $query_select_usuarios);
                        while ($row = pg_fetch_assoc($result)) {
                            $id_usuario = $row['id'];
                        }
                        $query_regis_grupos = "INSERT INTO grupos (name, owner, descripcion) VALUES ('".$name."', $id_usuario, 'Personal')";
                        $result  = pg_query($dbconn, $query_regis_grupos);
                        $response = "true";
                    } catch (Exception $e) {
                        echo("<script>console.log('PHP: " . $e->getMessage(). "');</script>");
                    }
                }
            }
            echo json_encode($response);
            pg_close($dbconn);
            die();
        }
    }
registro();

?>
