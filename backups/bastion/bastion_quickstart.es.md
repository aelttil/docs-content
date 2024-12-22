---
title: Guía de inicio rápido
---

Esta guía de inicio rápido le muestra cómo solicitar la creación de un Appliance y cómo registrar una nueva sesión y conectarse a ella.


## Requisitos previos

1. Haber suscrito al servicio Cloud Temple (suscripción Appliance Bastion).
2. Los equipos a administrar deben ser accesibles desde la red donde se implementa el Appliance Bastion.
3. Tener los permisos en el módulo Bastion.
4. En el caso de una implementación del Appliance onpremise, los flujos correspondientes deben estar abiertos.


## Solicitar la creación de un Appliance
Antes de poder implementar un Appliance, es necesario solicitar la suscripción a través de una solicitud de soporte.
El soporte se accede desde la consola Shiva a través del ícono de una boya en la parte superior derecha de la ventana.

![](images/shiva_support.png)


## Registrar una sesión

Para acceder regularmente a un equipo a administrar, es más adecuado crear una sesión, que solo requerirá su nombre de usuario y contraseña en cada conexión.

Para ello, vaya a la pestaña "Sesiones" en el menú "Bastion" y haga clic en el botón "Nueva sesión".

![](images/creer_session.png)


A continuación, complete la información necesaria para crear su sesión:

    - Nombre de la sesión;
    - Descripción;
    - Appliance asociado;
    - Tipo de protocolo (SSH o RDP);
    - Dirección IP del host;
    - Configuración del teclado.

![](images/creer_session2.png)


Debería aparecer una notificación confirmando la creación de la sesión en la parte superior derecha de la página. Luego, la sesión se agregará a su lista de sesiones.

También puede crear una nueva sesión yendo a la pestaña "Appliance" y haciendo clic en la barra de acciones del Appliance al que desea asociar una sesión.

![](images/creer_session3.png)

## Conectarse a una sesión

Vaya a la pestaña "Sesiones" en la pestaña "Bastion". Haga clic en la barra de acciones de la sesión que desea abrir y haga clic en el botón "Abrir".

![](images/ouvrir_session.png)

En cada conexión a la sesión, solo necesita ingresar su información de autenticación.

![](images/ouvrir_session2.png)

Después de ingresar sus credenciales, aparecerá una notificación confirmando el inicio de la sesión y la terminal de su máquina virtual se abrirá.
