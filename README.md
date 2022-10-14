# Ejercicios de validación de formularios

## Ejercicio 1

Diseñar un formulario que cuente con los siguientes campos relativos a un usuario:

- El nombre (no puede estar vacío).
- La dirección de correo (debe ser válida).
- Una contraseña (de al menos 8 caracteres y que cuente al menos con un dígito).
- Repetición de la contraseña (debe coincidir con la anterior, obviamente).
- Una operación matemática de suma entre dos números enteros de un dígito determinados al azar (por ej. 5 + 3 = ?) con el fin de solicitar su resultado para evitar “bots”.
- Una casilla de verificación de “Acepto las condiciones” inicialmente desactivada. Hasta que esta opción no se verifique no se habilitará el botón de envío.
- Un botón de envío con el texto “Crear cuenta”.

Los elementos irán validándose de forma individual, de modo que si no es correcto aparecerá un texto en rojo indicando el error y el campo erróneo tomará el foco.

## Ejercicio 2

Diseñar un formulario para solicitar datos de registro de personas de la provincia de Cádiz. El formulario debe solicitar y validar los siguientes campos:

- Nombre de usuario. Debe tener, al menos, 8 caracteres (no se permiten espacios en blanco).
- Contraseña. Debe tener de entre 6 y 10 caracteres alfanuméricos y contar con al menos un dígito y una letra mayúscula.
- Población. Lista desplegable de poblaciones que contendrá “ – Seleccione –“, como primera opción, seguida de todos los municipios de la provincia de Cádiz ordenados alfabéticamente. Al menos una de ellas debe estar seleccionada.

El formulario se enviará al script “grabar.php” mediante el método más adecuado. Durante la validación se presentará un mensaje en rojo tras cada campo incorrecto un mensaje de la forma “El dato XXXXX debe YYYYY”, siendo XXXXX el nombre del campo erróneo e YYYYY la condición que debe cumplir el dato.
