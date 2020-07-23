# leandro-lagos-tarea-2

Tarea2:
Crear un proyecto en React que maneje el estado con redux saga y que muestre un formulario para crear usuarios, un listado para mostrarlos y editarlos. Esto proyecto debe conectarse a una API creada con Node, GraphQL y una base de datos con Mysql. Generar un README con las especificaciones del funcionamiento del proyecto.



# AMBIENTE

* Node v10.x
* React v16.x


# INSTALACION

ubicarse en ./frondend-app

ejecutar comando:
> npm i


# CONEXION CON BACKEND

Se utilizó lo desarrollado en la **Tarea 1** (seguir pasos de: https://github.com/leandrojlagostissie/leandro-lagos-tarea-1)

El backend posee un endpoint "/graphql/users" para utilizar en esta tarea.

Configuracion de conexion en /src/enviroment.json.


# EJECUTAR

Ejecutar comando 

>npm run start

La App correrá en el puerto 3006 (se habilitó el cors en la comunicación con el backend)

La app desplegará la lista de usuarios cargados en la tarea 1

La app permite Crear o Modificar usuarios. validando la data y que no se repitan

La data de usuarios se manejan en un store de Redux (src/redux-store) y las solicitudes al backend parten en los middlewares de la modificacion del state
