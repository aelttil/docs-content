---
title: Presentación de la consola
---

La consola Cloud Temple __'Shiva'__ es __la plataforma de gestión cloud__ (Cloud Management Platform) integrada de __Cloud Temple__.

La consola Cloud Temple Shiva le permite gestionar recursos en la nube como servidores virtuales, almacenamiento, redes y servicios aplicativos.
Es una interfaz de gestión centralizada que le permite diseñar y operar su infraestructura en la nube.

La consola Cloud Temple Shiva permite especialmente a sus equipos:

- __La gestión de sus productos y servicios__ Cloud Temple,
- __La vigilancia y el informe__ del funcionamiento de sus recursos en la nube,
- __La automatización y la orquestación__: Shiva, gracias a su API, permite automatizar tareas repetitivas y orquestar flujos de trabajo complejos para desplegar, gestionar y escalar sus recursos en la nube,
- __La seguridad y la conformidad__: Shiva habilita el control de identidad y el filtrado de accesos para asegurar la conformidad regulativa y el respeto a sus políticas de seguridad,
- __Integración de los marcos de adopción de la Cloud__ (Cloud Adoption Framework): a través de sus funciones de hibridación, puede asegurar una continuidad de funcionamiento con proveedores de nube de terceros (Microsoft Azure y Amazon AWS) desde una única interfaz, facilitando la integración y gestión de sus entornos aplicativos multi-nube.
- __El acceso y seguimiento de los expedientes de asistencia técnica__: Una asistencia técnica dedicada también está disponible. Esto incluye el soporte al cliente para la resolución de problemas técnicos así como la asistencia en la configuración inicial.
- __La posibilidad de subscribirse a servicios profesionales__: para gestionar eficientemente sus entornos Cloud, sus equipos pueden beneficiarse de la asistencia de nuestros ingenieros para asesoramiento, ayuda en la implementación de arquitectura o capacitación.

## Prerrequisitos
- Haber suscrito a una oferta de Cloud Temple. Para suscribirse simplemente, puede [contactarnos](https://www.cloud-temple.com/contactez-nous/) o por correo electrónico a la dirección __contact@cloud-temple.com__.
- Tener acceso a la consola Shiva
- Tener su IPv4 pública declarada en la zona de confianza de Cloud Temple (el acceso a la consola Shiva está limitado a las direcciones de confianza identificadas)

## Conexión a su tenant de Cloud Temple
Shiva es accesible a través de la URL a continuación:

    https://shiva.cloud-temple.com
    O bien desde la URL directa que se le ha comunicado por correo electrónico.

La primera página le permite seleccionar [la organización](organisations.md) en la cual su usuario ha sido creado.
Una vez la empresa informada, por favor haga clic en __'Conectarse'__.

![](images/shiva_login.png)

Después será redirigido a una página que le solicitará autenticarse.
Una vez conectado, llegará a esta página.

![](images/shiva_home.png)

## Gestión del idioma
La consola está disponible en __francés__, __inglés__. Puede cambiar el idioma de funcionamiento gracias al ícono __idioma__ situado en la parte superior derecha de la pantalla.

El cambio de idioma de un usuario se debe realizar en su __'Perfil'__, en la parte superior derecha de la pantalla, dentro de los __'Parámetros de usuario'__.

![](images/shiva_profil_006.png)

La configuración se realiza para cada inquilino [Tenant](tenants.md).

## Acceso al soporte técnico
En cualquier momento, puede contactar __al equipo de soporte de Cloud Temple__ a través de __el icono 'boya'__ ubicado en la parte superior derecha de la pantalla.

![](images/shiva_support.png)

Será guiado a lo largo de todo el proceso de solicitud de soporte.

El primer paso es la identificación del tipo de solicitud de soporte:

- Solicitar un consejo sobre el uso de un producto (fuera de incidentes),
- Solicitar asistencia relacionada con su cuenta de cliente,
- Declarar un incidente o solicitar soporte técnico.
- Solicitar la asistencia de un servicio profesional (disponibilidad de un ingeniero de Cloud Temple para una problemática).

![](images/shiva_support_01.png){:height="50%" width="50%"}

Luego tiene la posibilidad de proporcionar detalles e incluir archivos (imágenes o registros, por ejemplo).

![](images/shiva_support_02.png)

Una vez realizada su solicitud, es posible encontrar sus solicitudes a través de __el icono 'boya'__ ubicado en la parte superior derecha de la pantalla:

![](images/shiva_support_03.png)

## Acceso a las funcionalidades del usuario a través de la interfaz web
Todo el conjunto de funcionalidades accesibles por su usuario (según sus permisos) está ubicado en el lado izquierdo de la pantalla, en la barra verde.
Las funcionalidades están agrupadas por módulo. Esto incluye principalmente:

- El __inventario__ de sus recursos,
- El __seguimiento de las operaciones__,
- El __control de los recursos IaaS__ (Cálculo, almacenamiento, red, ...)
- El __control de los recursos OpenIaaS__ (Cálculo, almacenamiento, red, ...)
- El acceso a los __servicios anexos__ (Bastión, monitoreo, ...)
- La __administración de su organización__ (Gestión de inquilinos, derechos, ...)

La activación de un módulo para un usuario depende de los permisos del usuario. Por ejemplo, el módulo __'Pedido'__ no estará disponible si el usuario no tiene el derecho __'PEDIDO'__.

Aquí hay una presentación de los diferentes módulos disponibles. Nuevos módulos enriquecen regularmente la consola:

![](images/shiva_onboard_007.png){:height="20%" width="20%"}

- __Tablero de Control__: permite tener rápidamente una visión general del __total de los recursos de cálculo y almacenamiento__, las estadísticas de __respaldo__ y un __resumen de los casos de soporte__,
- __Inventario__: permite tener una visión del conjunto de sus recursos del tipo __'máquinas virtuales'__. Si se utilizan __etiquetas__, permite tener una visión por __etiqueta__ (por ejemplo, visión por área de negocio, visión por aplicación, ...),
- __Infogestión__: da acceso al seguimiento de sus __solicitudes de soporte__ y a la __metrología de los servicios__,
- __IaaS__: permite el __control de las infraestructuras IaaS VMware__ (Máquinas virtuales, clústeres, hipervisores, replicaciones, respaldo, ...),
- __OpenIaaS__: permite el __control de los recursos de Xen Orchestra__ (Máquinas virtuales, respaldo, ...),
- __OpenShift__: permite el control de su **arquitectura PaaS RedHat Openshift** y la administración de sus contenedores sobre las 3 zonas de disponibilidad de la plataforma.
- __Bastión__: Permite desplegar y controlar los appliances de bastión SSH/RDP en sus redes,
- __Red__: permite el control de las __redes de nivel 2 y 3__, las __IP públicas__ y sus __circuitos de telecomunicaciones__,
- __Colocación__: Ofrece la vista sobre los equipos situados en zona de __colocación compartida o dedicada__,
- __Pedido__: Permite realizar pedidos de recursos y seguimiento de los despliegues,
- __Administración__: Agrupa las funciones de administración de los usuarios e inquilinos, así como el acceso al registro global.

## Acceso a las funcionalidades de usuario a través de la API
El acceso a todas las funcionalidades de la consola Shiva es posible a través de la API Shiva. Pueden obtenerse los detalles de los verbos y las configuraciones a través de __'Perfil'__ y __'APIs'__:

![](images/shiva_onboard_008.png)

## Proveedor Terraform


Cloud Temple pone a su disposición un proveedor de Terraform para gestionar *"as code"* su plataforma Cloud. Está disponible aquí:

https://registry.terraform.io/providers/Cloud-Temple/cloudtemple/latest

## Para ir más lejos
Le invitamos ahora a comprender el funcionamiento:

- De una organización: [Mi organización](organisations.md)
- De las cuentas de usuarios: [Mis cuentas](accounts.md)
- De los tenants asociados a esta organización: [Mis Tenants](tenants.md)