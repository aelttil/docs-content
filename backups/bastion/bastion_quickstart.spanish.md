---
title: Inicio Rápido
---

Esta guía de inicio rápido le mostrará cómo solicitar la creación de una Appliance y cómo registrar una nueva sesión y conectarse a ella.


## Requisitos previos
1. Haber suscrito a la oferta Cloud Temple (suscripción Appliance Bastion).
2. Los equipos que se administrarán deben ser accesibles desde la red donde se despliega el Appliance Bastion.
3. Tener derechos sobre el módulo Bastion.
4. En el caso de un despliegue de la Appliance onpremise, los flujos correspondientes deben estar abiertos.

## Solicitar la creación de una Appliance
Antes de poder desplegar un Appliance, es necesario realizar una solicitud de suscripción a un Appliance a través de una solicitud al soporte.
El soporte está accesible en la consola de Shiva desde el ícono de boya en la barra superior derecha de la ventana.

![](images/shiva_support.png)


## Registrar un equipo

Para acceder regularmente a un equipo para administrar, es más adecuado crear una sesión, que únicamente le solicitará su nombre de usuario y contraseña en cada conexión.

Para ello, vaya a la pestaña "Equipos" del menú "Bastión", luego, haga clic en el botón "Nuevo equipo".

![](images/creer_session.png)


Luego proporcione la información necesaria para crear su equipo:

    - Nombre del equipo;
    - Descripción;
    - Appliance asociada;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Configuración del teclado.

![](images/creer_session2.png)


Una notificación indicándole la creación del equipo debería aparecer en la parte superior derecha de la página. La sesión se añade a continuación a la lista de sus equipos.

Para crear un nuevo equipo, también puede hacerlo a través de la pestaña "Appliances" haciendo clic en la barra de acciones del Appliance al que desea asociar un equipo.

![](images/creer_session3.png)

## Conectarse a un equipo
Diríjase a la pestaña "Equipos" dentro de la pestaña "Bastión". Haga clic en la barra de acciones del equipo que desea abrir, y luego haga clic en el botón "Abrir".

![](images/ouvrir_session.png)

Con cada conexión al equipo, solo necesita proporcionar su información de autenticación.

![](images/ouvrir_session2.png)

Después de introducir sus credenciales, aparecerá una notificación confirmando el inicio de la conexión a su equipo y se abrirá la consola hacia su máquina virtual.