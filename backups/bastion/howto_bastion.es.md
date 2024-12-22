---
title: Tutoriales
---

Estos tutoriales le ayudan a implementar y administrar un Bastión Cloud Temple desde el portal Shiva. 


## Requisitos previos
1. Haber suscrito a la oferta Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben estar accesibles desde la red donde se despliega la Appliance Bastion.
3. Tener derechos sobre el módulo Bastion.
4. En el contexto de un despliegue de la Appliance on-premise, los flujos correspondientes deben estar abiertos.

## Interfaz


Una vez conectado al portal web Shiva, diríjase a la pestaña "Bastión" del menú de la izquierda.

![](images/sessions.png)

La pestaña "Equipos" le permite consultar la lista de sus equipos. Un equipo corresponde a una configuración de
conexión a través de una Appliance Bastión. Para cada equipo, se indica su nombre, sus etiquetas, su
descripción, la Appliance asociada, el tipo de conexión (SSH o RDP), la IP del host y finalmente la configuración del teclado.

Puede filtrar la lista de sus equipos según las etiquetas asignadas, y un motor de búsqueda permite buscar una sesión por su nombre.

![](images/sessions2.png)

La pestaña "Appliances" le muestra la lista de sus Appliances Bastión. Para cada Appliance, se especifican el nombre de la Appliance y su descripción.

Un motor de búsqueda está disponible para que pueda buscar una Appliance por su nombre.

![](images/appliances.png)

## Desplegar una Appliance
Antes de poder desplegar un Appliance, es necesario realizar una solicitud de suscripción a un Appliance a través de una solicitud al soporte.

## Abrir un flujo hacia un equipo
En la pestaña "Electrodomésticos", haga clic en la barra de acción del Electrodoméstico que desea abrir. Luego haga clic en el botón "Abrir".

![](images/ouvrir_appliance.png)

A continuación, proporcione la información necesaria para la conexión:

    - Elección del protocolo (SSH o RDP);
    - Dirección IP del host a administrar;
    - Información de credenciales;
    - Configuración del teclado.

Luego haga clic en "Conectar" para abrir el Electrodoméstico. Se abrirá entonces la consola de la máquina virtual a administrar.

## Registrar un equipo

Para acceder regularmente a un equipo que necesita administrar, es más apropiado crear una configuración del equipo, que solo requerirá su nombre de usuario y su contraseña en cada conexión.

Para ello, visite la pestaña "Equipos" del menú "Bastión", y luego, haga clic en el botón "Nuevo equipo".

![](images/creer_session.png)

Luego ingrese la información necesaria para crear su equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociada;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Idioma del teclado.

![](images/creer_session2.png)

Una notificación indicándole la creación de su configuración de equipo debería aparecer en la esquina superior derecha de la página. La configuración se añade a la lista de sus equipos.

Para crear una nueva conexión, también puede hacerlo a través de la pestaña "Appliances" haciendo clic en la barra de acción del Appliance al cual desea asociar una configuración de equipo.

![](images/creer_session3.png)

## Conectarse a un equipo
Diríjase a la pestaña "Equipos" dentro de la pestaña "Bastión". Haga clic en la barra de acciones del equipo que desee abrir, y luego haga clic en el botón "Abrir".

![](images/ouvrir_session.png)

En cada conexión al equipo, solo necesita proporcionar su información de autenticación.

![](images/ouvrir_session2.png)

Después de ingresar sus credenciales, aparecerá una notificación confirmando el inicio de la sesión y se abrirá la consola hacia su máquina virtual.

## Modificar una configuración de equipo
Diríjase a la pestaña "Equipos" en la sección "Bastión", haga clic en la barra de acción del equipo que desea modificar y haga clic en el botón "Editar".

![](images/modifier_session.png)

Luego puede cambiar el nombre del equipo, su descripción, el Appliance asociado, el protocolo (SSH o RDP), la dirección IP del host o el idioma del teclado.

![](images/modifier_session2.png)

## Eliminar una configuración de equipo

Diríjase a la pestaña "Equipos" de la sección "Bastión", haga clic en la barra de acción del equipo que desea eliminar, y haga clic en el botón "Eliminar".

![](images/supprimer_session.png)