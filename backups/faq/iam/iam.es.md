## ¿Cuáles son los permisos disponibles para las cuentas de usuario de la consola Shiva?

Aquí está la lista de [permisos disponibles](../../console/permissions.md#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation).

## ¿Cómo agregar un permiso?

Aquí está el [procedimiento de asignación de permisos para un usuario](../../console/accounts.md#affectation-des-permissions-à-un-utilisateur).

## ¿Por qué no puedo agregar un permiso?

Para agregar un permiso, necesitas tener el permiso __'iam_write'__ y también el __permiso que deseas agregar__.

## ¿Cómo añadir un usuario?

*__Nota__ : Para añadir un usuario, necesitas tener el permiso __'iam_write'__.*

Aquí está el procedimiento [para añadir un nuevo usuario](../../console/accounts.md#création-dun-compte-utilisateur-dans-votre-organisation).

## ¿Cómo auditar los accesos/permisos de usuarios?

Ve a la página de usuarios y haz clic en el botón __'Exportar csv'__:

![](images/faq_003.jpg)

## ¿Cómo eliminar un usuario?

En el menú __'Administración'__ en la barra verde a la izquierda de la pantalla, en el submenú __'usuario'__, haz clic en el icono __'Acción'__ del usuario objetivo y elige __'Eliminar'__.

![](images/faq_001.jpg)

*__nota__ :*
- *Para añadir un usuario, necesitas tener el permiso __'iam_write'__.*
- *Si se trata de un usuario federado, __asegúrate de que el usuario también haya sido eliminado del repositorio de identidad__.*

## ¿Cómo restablecer su contraseña?
Es posible restablecer su contraseña desde la página de inicio de sesión de la consola Shiva haciendo clic en __'¿Contraseña olvidada?'__.

![](images/faq_002.jpg){:height="30%" width="30%"}

## ¿Por qué algunos usuarios están en gris?
Los usuarios en gris son aquellos que no han validado su cuenta. Cuando se creó la cuenta, el usuario recibió un correo de verificación.

![](../../console/images/shiva_onboard_001.png){:height="50%" width="50%"}

Una vez finalizada la verificación, el usuario podrá iniciar sesión en la consola.

La cuenta está en gris hasta que la verificación se completa.

## ¿Qué es un Personal Access Token (PAT)?

La generación de una clave de API, también llamada __Personal Access Token (PAT)__, es una forma segura de conectarse a las API de Shiva sin pasar por una interfaz gráfica.

Puedes encontrar toda la información sobre [las claves API aquí](../../console/accounts.md#les-clés-api).

## ¿Qué es el MFA y es obligatorio?
El MFA (autenticación multifactor) es un concepto de verificación de la identidad de un usuario en dos pasos, llamado __autenticación de dos factores__.

El usuario debe proporcionar dos pruebas de identidad distintas. En el caso de la consola Shiva, la autenticación de dos factores es obligatoria y requiere ingresar un código de uso único después de que el usuario ha ingresado la contraseña de su cuenta.

## ¿Qué es el captcha? ¿Por qué puede bloquear la conexión a la aplicación?
El __'Captcha'__ es una medida de seguridad que protege tu cuenta del spam y previene cualquier intento de descifrar la contraseña.

El __'Captcha'__ presenta una prueba simple destinada a verificar que se trata de un ser humano y no de un robot que intenta acceder a la cuenta.

La consola Cloud Temple utiliza un Captcha tipo v3. El tipo v3 es una prueba invisible que establece un índice de confianza basado en las interacciones del usuario.

La consola Cloud Temple se basa en esta puntuación de índice de confianza para permitir o no al usuario iniciar sesión.

Si tienes dificultades con la prueba __'Captcha'__ para iniciar sesión en la consola Shiva, por favor contacta al soporte del usuario.
