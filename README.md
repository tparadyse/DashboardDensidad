Este es un proyecto [Next.js](https://nextjs.org/) iniciando con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Comenzando

Primero, ejecutar el servidor de desarrollo:

```sh
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado de manera local.

## Practica 01

Esta práctica consiste en un dashboard con distintas ventanas de navegación (Home, About, Corporal) en la cual la mas significativa es `Corporal`, en la cual puedes calcular la composición corporal de un usuario a traves del llenado de un formulario.

### Ventanas Desplegables

- Ventana: `Home`
  En esta ventana se muestra los datos principales al ingresar al dashboard, el cual se encuentra en modo "**beta**", ya que aun no cuenta con información relevante.

  <!-- Otra forma de ajustar imagenes -> <img src="app/assets/home.png" alt="Home" width="500"/> -->

  ![Home](app/assets/home.png)

- Ventana: `About`
  En esta ventana se despliega información acerca de mi, con botones con acceso a mis redes y una foto de mi persona.

  ![About](app/assets/about.png)

- Ventana: `Corporal`
  Esta ventana muestra un formulario el cual le pide una serie de datos al usuario que al ser llenados devuelve una tabla la cual le indica al usuario su composición corporal junto con una gráfica de los porcentajes de grasa corporal.

  ![Corporal](app/assets/density.png)

### Componentes

- Componente: `Form`
  Dicho componente despliega un formulario con opciones de tipo "**number**", los cuales se usaran para calcular la composición corporal del usuario.

![Form](app/assets/form.png)

- Componente: `Menu`
  El componente menu es el encargado de redireccionar las distintas ventanas que el usuario puede navegar.

  ![Menu](app/assets/menu.png)

- Componente: `TableResults`
  Este componente muestra de manera visual en una tabla los resultados obtenidos al calcularse los distintos tipos de mediciones del usuario.

  ![Table Results](app/assets/table.png)

- Componente: `Charts`
  Este componente se encarga de mostrar de manera visual al usuario una gráfica de tipo "**pie**" el cual ayudara a mostrar de otra forma los resultados.

  ![Chart](app/assets/chart.png)

## Aprende Mas

Para obtener más información sobre Next.js y otros componentes, puede consultar los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - Obtenga más información sobre las funciones y la API de Next.js.
- [Learn Next.js](https://nextjs.org/learn) - Un tutorial interactivo de Next.js.

- [Learn Chart.js](https://www.chartjs.org/docs/latest/) - Introduccion basica a graficos con Chart.js

- [Create Your Colors](https://paletadecolores.online/) - Crea tu paleta de colores y has tu pagina mas creativa.

## Deploy

Vercel Link:
[https://dashboard-densidad.vercel.app/](https://dashboard-densidad.vercel.app/)

## Meta

Juan Diaz – [@tparadyse](https://www.instagram.com/tparadyse) – al19760726@ite.edu.mx

Distribuido bajo la licencia XYZ. Consulte `LICENCE` para obtener más información.

[https://github.com/tparadyse/](https://github.com/tparadyse/)
