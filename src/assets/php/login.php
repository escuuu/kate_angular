<?php
    session_start();
    //login
    function conectar() {
        include './conectar.php';
        $con = pg_connect("host=$host dbname=$dbname port=$port user=$user password=$password sslmode=$ssl connect_timeout=50");
        $name = $_GET['name'];
        $password = $_GET['password'];
        $response = array();
        if ((isset($password) && empty($password) ? $password : null) || (isset($name) && empty($name) ? $name : null))  {
            $response = null;
        } else {
            $query1 = "select * from usuarios where name='".$name."'";
            $result1 = pg_query($con, $query1);
            while ($row1 = pg_fetch_assoc($result1)) {
                $sal = $row1['sal'];
                $pim = "oP&r2Q";
                $saltedPassword = $sal . $password . $pim;
                $finalpassword = hash('sha512', $saltedPassword);
                $result = "";
                $_SESSION['name']= $name;
                $_SESSION['password']= $password;
                if (!$con) {
                    die('Connection failed.');
                }
                $request = 'login';
                if($request == 'login') {
                    $query = "select * from usuarios WHERE name='".$name."' and password='".$finalpassword."'";
                    $result = pg_query($con, $query);
                    while ($row = pg_fetch_assoc($result)) {
                        $id = $row['id'];
                        $name = $row['name'];
                        $admin = $row['admin'];
                        $response[] = array(
                            "id" => $id,
                            "name" => $name,
                            "admin" => $admin
                        );
                        $_SESSION['id']= $id ;
                        $_SESSION['admin']= $admin;
                    }
                }
            }
        }
        echo json_encode($response);
        pg_close($con);
        die(); 
    }
    conectar();
?>