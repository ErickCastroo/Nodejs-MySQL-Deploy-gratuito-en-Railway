# Mi Proyecto de Node.js y MySQL en Railway

Este proyecto es una aplicación de Node.js que utiliza MySQL para la gestión de datos de usuarios. La aplicación ha sido desplegada en Railway.

## Rutas de la API

La aplicación expone las siguientes rutas:

### 1. `/`
https://nodejs-mysql-railway-production-8772.up.railway.app/

Esta ruta devuelve todos los usuarios almacenados en la base de datos MySQL. Cuando se accede a esta ruta, se realiza una consulta a la base de datos para obtener todos los registros de usuarios y se devuelven en formato JSON.

### 2. `/pruebaConeccion`
https://nodejs-mysql-railway-production-8772.up.railway.app/purebaConeccion

Esta ruta se utiliza para probar la conexión con la base de datos MySQL. Cuando se accede a esta ruta, la aplicación intenta establecer una conexión con la base de datos. Si la conexión es exitosa, se devuelve un mensaje indicando que la conexión ha sido exitosa.

### 3. `/create`
https://nodejs-mysql-railway-production-8772.up.railway.app/create
Esta ruta se utiliza para crear un nuevo usuario en la base de datos MySQL. Cuando se envía una solicitud POST a esta ruta con los detalles del nuevo usuario en el cuerpo de la solicitud, la aplicación crea un nuevo registro de usuario en la base de datos(SI REFRESCAS LA PAGINA PRINCIPAL SE VERA EL REGISTRO NUEVO).

