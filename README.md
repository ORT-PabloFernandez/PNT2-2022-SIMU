# PROGRAMACION DE NUEVAS TECNOLOGIAS 2

## Instrucciones de resolución de examen 

Es tu primer día en [tecnoshare.com](http://tecnoshare.com) luego de un intenso entrenamiento de 10 semanas por fin tenes la oportunidad de mostrar lo que aprendiste, y tu potencial como desarrollador react.

Luego de abrir el correo encuentras un mail de tu Líder Técnico con tu primera asignación!! 💪

> Bienvenid@! estuvimos esperando por horas que llegares, tenemos varias tareas criticas y prioritarias en nuestro backlog. Por favor presta mucha atención a las instrucciones. No dudes en preguntarme cualquier cosa, aunque generalmente estoy muy ocupado resolviendo problemas heredados de las rotaciones de los desarrolladores.

> En el presente repositorío encontrarás un proyecto de nodejs que ya tiene codigo base del frontend con el que vamos a trabajar. Te aconsejo que sigas los siguientes pasos para armar tu entorno de trabajo.

> 1. Realizar un Fork del presente repositorio
> 2. Realizar un clone del presente repositorio
> 3. Instalar las dependencias
> 4. Solicitar el repo donde se encuentra el backend (antes de preguntar, revisa el chat, seguro esta ahí)
> 5. Luego de hacer clone del Backend. Ejecutar el servidor web de la api REST con el script de npm start-dev si queres trabajar con nodemon (tendrías que instalarlo) con start solo, tambien funciona.
>    El backend se conecta con una base de datos Mongodb en la cual se encuentra la base de datos **sample_mflix** con una collection llamada **movies**, ahí se encuentran aprox. 23.000 películas.
> 6. Proba el endpoint que ya se encuentra desarrollado: /api/movies debería retornar un json con 23.000 películas. Sin embargo te aconsejo que uses el paginado que tiene para probar (mira la definición del end-point). Sí por algun motivo no llegase a funcionar, solicita asistencia.
>    -GET /api/movies?pageSize=[pageSize]&page=[page]

> ### TUS TAREAS SON LAS SIGUIENTES POR ORDEN DE PRIORIDAD
>
> 1. Necesitamos conectar el frontend con el backend.
> 2. Necesitamos un componente de pagina, uno de peliculas y un componente de pelicula.
> 3. El componente de pelicula debe mostrar la pelicula con su respectivo **poster**, con el **title** debajo y la descripción **fullplot**
> 4. Si el tiempo te da implementa la paginación, sino no te preocupes que lo hacemos mas adelante.

> Desde ya muchas gracias por la colaboración! 😉 como te comente en la entrevista soy muy detallista en la prolijidad del codigo y la performance cada detalle cuenta, sin embargo si no estas seguro, es mejor que lo resuelvas como puedas y me dejes notas en el readme.md del repo, para que yo pueda probar.

## Intrucciones para la entrega

Si ya terminaste o son las 10:00 asegurate de seguir los siguientes pasos para la entrega:

1. Realizar un commit a tu repo con un mensaje con tu nombre completo
2. Realizar un push a tu repositorio
3. Realizar un pull request a mi repositorio
