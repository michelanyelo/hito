# Desglose del Código

Este código de JavaScript configura un servidor web con Express.js que maneja diversas rutas API para una aplicación backend.

---

## Importaciones

El código importa la biblioteca `express`, que es un framework web para Node.js utilizado para crear aplicaciones web y APIs.  
También importa tres módulos de rutas: `albumRoute`, `userRoute` y `authRoute`, que contienen la lógica para manejar solicitudes relacionadas con:

- **Álbumes**: *(Intentaré hacer un reproductor como Spotify la próxima vez, por lo que modificaré el contenido del JSON).*  
- **Usuarios**: Manejo de datos y operaciones relacionadas con usuarios.  
- **Autenticación**: Registro, inicio de sesión y autorización.

---

## Creación de la Aplicación Express

- Se crea una instancia de una aplicación Express y se asigna a la variable `app`.  
- La variable `port` se establece con el valor de la variable de entorno `PORT` (si está definida) o con el valor predeterminado de `3000`.  
Esto permite que el servidor se ejecute en un puerto especificado.

---

## Middleware para Parsear JSON

Esta línea activa un middleware que analiza las solicitudes entrantes con datos en formato JSON.  
Facilita la lectura de los datos JSON enviados en el cuerpo de las solicitudes, haciendo más sencillo manejar peticiones API.

---

## Definición de Rutas

Estas líneas definen los endpoints API de la aplicación:

### `"/api/users"`
- Ruta manejada por `userRoute`.
- Contiene lógica para operaciones relacionadas con usuarios, como:
  - Leer
  - Crear

### `"/api/albums"`
- Ruta manejada por `albumRoute`.  
- Incluye lógica para operaciones relacionadas con álbumes, como:
  - Obtener datos de álbumes.

### `"/api/auth"`
- Ruta manejada por `authRoute`.  
- Contiene lógica para la autenticación de usuarios, como:
  - Inicio de sesión.  
  - Registro.

---

## Inicio del Servidor

- El método `app.listen()` inicia el servidor y lo pone a la escucha de solicitudes entrantes en el puerto especificado.  
- Una vez que el servidor está en ejecución, se registra un mensaje en la consola indicando que el servidor está levantado y funcionando en el puerto especificado.

---
