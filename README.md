# Sistema de Gestión de Empleados

![Licencia](https://img.shields.io/badge/Licencia-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.0.0-blue)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-purple)

## Descripción

El **Sistema de Gestión de Empleados** es una aplicación web desarrollada en React que permite a las organizaciones gestionar eficientemente la información de sus empleados. Ofrece funcionalidades como:

- Listado de empleados
- Agregar nuevos empleados
- Editar información de empleados existentes
- Eliminar empleados

## Características

- **Interfaz Intuitiva**: Diseño limpio y fácil de usar.
- **Gestión Completa**: Permite crear, leer, actualizar y eliminar registros de empleados.
- **Componentes Reutilizables**: Uso de componentes de React para una mejor mantenibilidad.
- **Estilizado con Bootstrap**: Diseño responsivo y moderno utilizando Bootstrap.

## Tecnologías Utilizadas

- [React](https://es.reactjs.org/) - Biblioteca principal para la construcción de la interfaz de usuario.
- [Bootstrap](https://getbootstrap.com/) - Framework CSS para el diseño responsivo y estilizado.
- [Axios](https://axios-http.com/) - Cliente HTTP para realizar solicitudes a la API backend.
- [React Router DOM](https://reactrouter.com/web/guides/quick-start) - Para la navegación entre componentes.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/VictorMarimon/Proyecto-Sistema-Empleados-React.git
   cd Proyecto-Sistema-Empleados-React
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

   o si usas yarn:

   ```bash
   yarn install
   ```

## Uso

1. **Iniciar la aplicación**:

   ```bash
   npm start
   ```

   o con yarn:

   ```bash
   yarn start
   ```

2. **Acceder a la aplicación**:

   Abre tu navegador y navega a `http://localhost:3000` para interactuar con la aplicación.

## Estructura del Proyecto

```
Proyecto-Sistema-Empleados-React/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── empleados/
│   │   ├── AgregarEmpleados.js
│   │   ├── EditarEmpleados.js
│   │   └── ListadoEmpleados.js
│   ├── plantilla/
│   │   └── Navegacion.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

- **`public/`**: Contiene el archivo HTML principal y otros activos públicos.
- **`src/`**: Contiene el código fuente de la aplicación.
  - **`components/`**: Incluye los componentes de React utilizados en la aplicación.
  - **`App.js`**: Componente principal de la aplicación.
  - **`index.js`**: Punto de entrada de la aplicación.

## Contribución

Si deseas contribuir al proyecto:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agregar nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre una Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para preguntas o soporte, puedes contactarme a través de [3reehuy@gmail.com](3reehuy@gmail.com).

---