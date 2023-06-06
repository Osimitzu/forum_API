# Forum API

Esta es una API para un foro creada con node, [express](https://expressjs.com/es/), sequelize y postgres.

## Funcionalidades

- [x] Registro de usuario
- [x] Login de usuario
- [x] Obtener todas las categorias
- [x] Obtener todas las publicaciones de una categoria
- [x] Obtener una publicacion con sus respuestas
- [x] Crear publicaciones de una categoria
- [x] Crear respuestas en una publicación
- [x] Solo un admin puede crear categorias
- [ ] Paginación de publicaciones y respuestas
- [x] Manejo de errores
- [x] Validacion de datos
- [x] Autenticación
- [x] Permisos
- [x] Envio de correo
- [x] Validar email
- [ ] Recuperar contraseña

## Retos

1. Un moderador y un administrador pueden cerrar una publicación.
   > Nadie mas puede realizar comentarios en esa publicación
2. Que un admin pueda aprobar las respuestas
