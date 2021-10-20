<?php

    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, X-Auth-Token, Origin, Application");
    require 'conexion.php';

    if($_SERVER['REQUEST_METHOD'] == 'GET')
    {
        if(isset($_GET['id']))
        {
            $id = $_GET['id'];
            $sql="SELECT * FROM lista WHERE id = '$id'";
            $resultado=mysqli_query($conexion,$sql);
            $json = array();
            while($filas = mysqli_fetch_array($resultado))
            {
                $json[] = array(
                    'id' => $filas['id'],
                    'sistema' => $filas['sistema'],
                    'fecha' => $filas['fecha'],
                    'tiempo' => $filas['tiempo']
                );
            }
            $jsonstring = json_encode($json);
            header("HTTP/1.1 200 OK");
            echo $jsonstring;
        }
        else
        {
            $sql="SELECT * FROM lista ORDER by ID DESC";
            $resultado=mysqli_query($conexion,$sql);
            $json = array();
            while($filas = mysqli_fetch_array($resultado))
            {
                $json[] = array(
                    'id' => $filas['id'],
                    'sistema' => $filas['sistema'],
                    'fecha' => $filas['fecha'],
                    'tiempo' => $filas['tiempo']
                );
            }
            $jsonstring = json_encode($json);
            header("HTTP/1.1 200 OK");
            echo $jsonstring;
        }
    }

    if($_SERVER['REQUEST_METHOD'] == 'POST')
    {
        $datos = json_decode(file_get_contents('php://input'));
        if($datos != null)
        {
            $fecha = $datos->fecha;
            $tiempo = $datos->tiempo;
            $sistema = $datos->sistema;
        
            $sql = "INSERT INTO lista (fecha, tiempo, sistema) VALUES ('$fecha', '$tiempo', '$sistema')";
            $resultado = mysqli_query($conexion, $sql);
            if(!$resultado)
            {
                header("HTTP/1.1 400 Bad Request");
                echo 'error';
            }
            else
            {
                header("HTTP/1.1 200 OK");
                echo 'Bien';
            }        
        }
    }

    if($_SERVER['REQUEST_METHOD'] == 'PUT')
    {
        if(isset($_GET['id']) && isset($_GET['fecha']) && isset($_GET['tiempo']) && isset($_GET['sistema']))
        {
            $fecha = $_GET['fecha'];
            $tiempo = $_GET['tiempo'];
            $sistema = $_GET['sistema'];
            $id = $_GET['id'];
    
            $sql="UPDATE lista SET sistema = '$sistema', tiempo = '$tiempo', fecha = '$fecha' WHERE id = '$id'";
            $resultado = mysqli_query($conexion, $sql);
            if(!$resultado)
            {
                header("HTTP/1.1 400 Bad Request");
                echo 'error';
            }
            else
            {
                header("HTTP/1.1 200 OK");
                echo 'Bien';
            }
        }
        else
        {
            header("HTTP/1.1 400 Bad Request");
            echo 'error faltan datos';   
        }
    }

    if($_SERVER['REQUEST_METHOD'] == 'DELETE')
    {
        if(isset($_GET['id']))
        {
            $id = $_GET['id'];
    
            $sql="DELETE FROM lista WHERE id = '$id'";
            $resultado = mysqli_query($conexion, $sql);
            if(!$resultado)
            {
                header("HTTP/1.1 400 Bad Request");
                echo 'error';
            }
            else
            {
                header("HTTP/1.1 200 OK");
                echo 'Bien';
            }
        }
        else
        {
            header("HTTP/1.1 400 Bad Request");
            echo 'error faltan datos';   
        }
    }


?>