# 🍺 MicheLtsWeb

¡Bienvenido a **MicheLtsWeb**! Este es un sitio web moderno y dinámico diseñado específicamente para bares, restaurantes o negocios de bebidas y snacks. Desarrollado con **Astro** y estilizado con **Tailwind CSS**, ofrece una experiencia de usuario rápida, fluida y totalmente responsiva.

## 🚀 Descripción

MicheLtsWeb sirve como la presencia digital para tu negocio, permitiendo mostrar de manera atractiva:
-   **Menú Digital**: Una vista clara de tus productos (bebidas, alimentos, mixes) con precios e imágenes.
-   **Promociones**: Un carrusel interactivo para destacar las ofertas del momento.
-   **Eventos**: Sección dedicada a anunciar próximos eventos, noches especiales o música en vivo.
-   **Información de Contacto**: Ubicación y enlaces a redes sociales.

## ✨ Características Principales

-   **Alto Rendimiento**: Gracias a la arquitectura de "Islas" de Astro, el sitio carga extremadamente rápido.
-   **Diseño Responsivo**: Se adapta perfectamente a dispositivos móviles, tablets y escritorio.
-   **Fácil Gestión de Contenido**: La información del menú, eventos y promociones se gestiona a través de archivos JSON simples, sin necesidad de bases de datos complejas.
-   **Estilos Modernos**: Interfaz visual atractiva construida con Tailwind CSS v4.

## 🛠️ Tecnologías Utilizadas

-   [Astro](https://astro.build/) - Framework web para sitios orientados a contenido.
-   [Tailwind CSS](https://tailwindcss.com/) - Framework de utilidades CSS para un diseño rápido y flexible.
-   [TypeScript](https://www.typescriptlang.org/) - Para un código más robusto y seguro.

## 📋 Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:
-   [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
-   [pnpm](https://pnpm.io/) (gestor de paquetes utilizado en este proyecto)

## 🔧 Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clonar el repositorio** (si aplica) o descargar los archivos.

2.  **Instalar dependencias**:
    Abre una terminal en la carpeta raíz del proyecto y ejecuta:
    ```bash
    pnpm install
    ```

3.  **Iniciar el servidor de desarrollo**:
    Para ver el sitio en funcionamiento en tu máquina local:
    ```bash
    pnpm dev
    ```
    El sitio estará disponible generalmente en `http://localhost:4321`.

4.  **Construir para producción**:
    Para generar los archivos estáticos listos para desplegar:
    ```bash
    pnpm build
    ```

## 📂 Estructura del Proyecto

```text
/
├── public/             # Archivos estáticos (imágenes, favicon)
├── src/
│   ├── components/     # Componentes reutilizables (Hero, Carousel, MenuGrid, etc.)
│   ├── content/        # Datos del sitio (JSONs para menú, eventos, promos)
│   ├── layouts/        # Plantillas de diseño base
│   ├── pages/          # Rutas y páginas del sitio
│   └── styles/         # Estilos globales CSS
├── astro.config.mjs    # Configuración de Astro
├── package.json        # Dependencias y scripts
└── tailwind.config.cjs # Configuración de Tailwind
```

## 📝 Personalización del Contenido

Puedes actualizar la información del sitio editando los archivos en la carpeta `src/content/`:

-   **Menú**: Edita `src/content/menu.json` para agregar o modificar platillos y bebidas.
-   **Eventos**: Edita `src/content/events.json` para actualizar la cartelera de eventos.
-   **Promociones**: Edita `src/content/promos.json` para cambiar los banners del carrusel.

---
Desarrollado con ❤️ para **MicheLtsWeb**.
