<?php

// Validación de datos
if (empty($_POST['raza'])) {
  $errores['raza'] = 'Por favor, ingrese la raza del animal';
}

if (!is_numeric($_POST['edad'])) {
  $errores['edad'] = 'La edad debe ser un número';
}

if (!is_numeric($_POST['peso'])) {
  $errores['peso'] = 'El peso debe ser un número';
}

// Mensajes de error
if (!empty($errores)) {
  // Muestra los errores
  foreach ($errores as $campo => $mensaje) {
    echo "<p class='error'>{$mensaje}</p>";
  }

  // No hace nada más
  exit;
}

// Procesamiento de datos
$raza = $_POST['raza'];
$edad = $_POST['edad'];
$peso = $_POST['peso'];
$historial_salud = $_POST['historial_salud'];
$partos = $_POST['partos'];

// Almacena los datos en la base de datos
// ...

// Redirección
header('Location: /registrar-animal?registrado=true');

require_once('php/funciones.php');

?>
