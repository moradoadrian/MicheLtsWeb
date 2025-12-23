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

## 📂 Estructura Detallada del Proyecto

A continuación se describe el propósito de los archivos y carpetas principales dentro de `src/`:

### `/src/components/`
Componentes de interfaz reutilizables (UI) que construyen las páginas.
-   **`Layout.astro`**: **Componente Maestro**. Define la estructura base HTML (head, body), carga las fuentes (Oswald/Montserrat), e incluye la barra de navegación (Header) y el pie de página (Footer). Todas las páginas deben usar este componente.
-   **`Hero.astro`**: Sección de bienvenida en la página de inicio. Contiene el título principal animado, imagen de fondo y botones de llamada a la acción (CTA).
-   **`Carousel.astro`**: Componente de carrusel interactivo para mostrar las promociones destacadas obtenidas de `promos.json`.
-   **`MenuGrid.astro`**: Componente que muestra una vista previa o selección destacada del menú en la página de inicio.
-   **`EventCard.astro`**: Tarjeta visual para mostrar la información de un evento individual (fecha, título, botón de reserva).
-   **`Footer.astro`**: (Si aplica) Componente modular para el pie de página.

### `/src/pages/`
Rutas del sitio web. Astro genera una URL por cada archivo `.astro` en esta carpeta.
-   **`index.astro`**: **Página de Inicio (Home)**. Orquesta los componentes principales: Hero, Carrusel, Eventos y la sección de Contacto/Mapa.
-   **`Menu.astro`**: **Página de Carta Digital**. Renderiza dinámicamente todo el menú desde `menu.json`. Incluye navegación "sticky" por categorías y animaciones con GSAP.

### `/src/content/`
Fuente de la verdad para los datos del sitio (JSON).
-   **`menu.json`**: Base de datos de productos. Define categorías (micheladas, cervezas, snacks), precios, variantes (500ml, 1L, Cubeta) y descripciones.
-   **`events.json`**: Lista de eventos próximos. Alimenta la sección de eventos en el Home.
-   **`promos.json`**: Datos para los banners promocionales del carrusel.

### `/src/styles/`
-   **`globals.css`**: Hoja de estilos global. Importa Tailwind, define variables CSS personalizadas (colores de marca, fuentes) y estilos base.

### Archivos de Configuración
-   **`tailwind.config.cjs`**: Personalización de Tailwind. Aquí se definen los colores corporativos (`brand`, `bg`) y la tipografía.
-   **`astro.config.mjs`**: Configuración del framework Astro.
-   **`package.json`**: Gestión de dependencias (incluyendo `gsap`, `astro`, `tailwindcss`) y scripts del proyecto.

## 📝 Personalización del Contenido

Puedes actualizar la información del sitio editando los archivos en la carpeta `src/content/`:

-   **Menú**: Edita `src/content/menu.json` para agregar o modificar platillos y bebidas.
-   **Eventos**: Edita `src/content/events.json` para actualizar la cartelera de eventos.
-   **Promociones**: Edita `src/content/promos.json` para cambiar los banners del carrusel.

---
Desarrollado con ❤️ para **MicheLtsWeb**.
