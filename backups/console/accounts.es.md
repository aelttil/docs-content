---
title: Cuentas de acceso a la consola Shiva
---

Las cuentas de acceso a la consola Shiva se crean por la cuenta maestra del patrocinador mediante invitación (independientemente del repositorio de autenticación).
Las credenciales son globales a su [Organización](organisations.md).

*__Nota:__ [La federación de identidades se gestiona a nivel de la organización](organisations.md#mecanismes-dauthentification)*

## Creación de una cuenta de usuario en su organización
La creación de una cuenta de usuario en su organización se realiza por invitación. Para invitar a un usuario a una [Organización](organisations.md), diríjase al menú __'Administración'__ a la izquierda de su pantalla en la barra verde y luego al submenú __'Usuarios'__. 

Haga clic en el botón __'Nuevo Usuario'__ desde la página de usuarios.

![](images/shiva_onboard_003.png)

Luego indique la dirección de correo electrónico del usuario.

![](images/shiva_onboard_004.png){:height="50%" width="50%"}

El usuario recibirá entonces un correo electrónico de verificación.

![](images/shiva_onboard_001.png)

Una vez completada la verificación, el usuario podrá iniciar sesión en la consola.

## Asignación de permisos a un usuario
La gestión de los derechos de los usuarios se realiza desde la página de usuario.

![](images/shiva_onboard_003.png)

Por defecto, un usuario no tiene ningún derecho. Por lo tanto, es necesario que el administrador que hizo la invitación le otorgue los derechos necesarios para su actividad. Basta con hacer clic en el menú __'Acciones'__ del usuario y seleccionar la opción __'Modificar'__.

Entonces aparece el menú de activación de derechos:

![](images/shiva_onboard_005.png){:height="50%" width="50%"}  

La configuración de los permisos debe realizarse para cada [Tenant](tenants.md) de la [Organización](organisations.md).

La lista de permisos y su definición está accesible [aquí](permissions.md).

## Cambiar el idioma de un usuario
El cambio de idioma de un usuario debe realizarse en su __'Perfil'__, situado en la parte superior derecha de la pantalla, dentro de los __'Configuración del usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada inquilino [Tenant](tenants.md).

## Suscripción a notificaciones temáticas

La gestión de suscripciones permite recibir correos electrónicos relacionados con las temáticas activadas que serán enviados automáticamente cuando ocurren eventos correspondientes.

Es accesible en el perfil de usuario, en la pestaña "Mis suscripciones":

![](images/shiva_profil_007.png)

Por ejemplo, en caso de un incidente, se generarán notificaciones por correo electrónico específicas para esta temática.

La lista de temáticas disponibles puede evolucionar y enriquecerse progresivamente para adaptarse a las necesidades y a los cambios en nuestro entorno operacional.