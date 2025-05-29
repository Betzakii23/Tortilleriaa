<?php

$con = mysqli_connect('localhost', 'root', '', 'contacto') or die('Error en la conexión con el servidor local');


$nombre = mysqli_real_escape_string($con, $_POST["nombre"]);
$calificacion = mysqli_real_escape_string($con, $_POST["calificacion"]);
$precios = mysqli_real_escape_string($con, $_POST["precios"]);
$satisfaccion = mysqli_real_escape_string($con, $_POST["satisfaccion"]);
$porque = mysqli_real_escape_string($con, $_POST["porque"]);



$sql = "INSERT INTO formulario (id, nombre, calificacion, precios, satisfaccion, porque) 
        VALUES (null, '$nombre', '$calificacion', '$precios', '$satisfaccion', '$porque')";

$resultado = mysqli_query($con, $sql) or die("Error en el query database");

mysqli_close($con);

header("Location: index.html");
exit();
?>