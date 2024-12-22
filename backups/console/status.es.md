---
title: Operaciones planificadas y gestión de incidentes
---

Como cualquier plataforma de infraestructura en la nube, la plataforma Cloud Temple se somete a trabajos y mantenimiento de hardware y software de forma regular.

### Gestión de las notificaciones
Con el objetivo de informar rápidamente a los usuarios en caso de un nuevo incidente, se ha implementado un sistema de notificaciones por correo electrónico. Desde su perfil de usuario, una pestaña titulada __'*Mis suscripciones*'__ permite a los usuarios suscribirse a las notificaciones para los dos tipos de incidentes. De esta manera, recibirán un correo electrónico en un plazo muy corto tras la declaración o la resolución de un incidente.

__Manténgase informado en tiempo real en caso de un incidente global__: Le recomendamos encarecidamente que se suscriba a las notificaciones de incidentes. Al suscribirse a este servicio, será informado directamente de cualquier perturbación o incidente que afecte a nuestra plataforma, así como de la actualización de su resolución. Esto garantiza que, incluso fuera de sus verificaciones regulares, recibirá alertas inmediatas, permitiéndole planificar en consecuencia y minimizar los impactos potenciales sobre sus actividades. Regístrese ahora para las notificaciones de incidentes para asegurarse de estar siempre al tanto de la comunicación para una experiencia de usuario más fluida posible, incluso durante un periodo de interrupción.

__Acceso en todo momento__: En caso de que la consola se vuelva inaccesible, nuestro sitio público de estado, https://status.cloud-temple.com, sigue disponible para proporcionar actualizaciones en tiempo real sobre la situación, garantizando una transparencia total a lo largo de la resolución del incidente.

![](images/shiva_incident_005.png)

El asunto del correo electrónico indicará el tipo de incidente y, en caso de un incidente relacionado con un perímetro, el nombre del perímetro afectado. La notificación también contendrá un enlace para acceder directamente a los detalles del incidente:

![](images/shiva_incident_006.png)

## Acceso a las operaciones e incidentes en curso
El icono de seguimiento de operaciones permite visualizar las operaciones planificadas en la infraestructura Cloud Temple, así como los incidentes abiertos en el tenant. Este icono es accesible en la barra de iconos en la parte superior izquierda de la pantalla y tiene la forma de un icono __'Herramientas'__

![](images/shiva_intervention_menu01.png){:style="width:300px"}

Este icono tiene como objetivo proporcionar visibilidad sobre las intervenciones planificadas, en curso y finalizadas y/o los incidentes en el tenant.

Cuando hay intervenciones y/o incidentes en curso, aparece un número en el icono.

Al hacer clic en visualización rápida, encontrará las intervenciones en curso. También es posible hacer clic en __‘Todas las intervenciones’__ o __‘Todos los incidentes e informes del tenant’__ para mostrar más detalles.

![](images/shiva_intervention_menu03.png)

## Seguimiento de las intervenciones planificadas
La página Intervenciones está compuesta por dos pestañas. La primera pestaña permite visualizar las intervenciones previstas para los próximos 30 días y las intervenciones en curso.

![](images/shiva_intervention_menu04.png)

Las intervenciones terminadas, por su parte, se pueden ver en la segunda pestaña ‘Terminado’

![](images/shiva_intervention_menu05.png)

El acceso a esta información requiere que el perfil del usuario tenga el permiso '**intervention_read**'.

## Gestión de incidentes
Dos tipos de incidentes deben diferenciarse: los incidentes globales, que afectan al sistema en su totalidad, y los incidentes específicos a un ámbito cliente, que impactan únicamente en los recursos o servicios asociados a un cliente particular.

### Incidentes globales
La recuperación de la información relativa a incidentes globales no requiere ningún permiso particular. Una barra roja se muestra desde la conexión a la consola para advertir de la presencia de un incidente global en curso de resolución. El usuario tiene la posibilidad de ocultar esta barra temporalmente durante su sesión, pero ésta reaparecerá en cada nueva conexión o durante una actualización de la página, mientras el incidente siga sin resolverse.

![](images/shiva_incident_001.png)

El botón __'Más información'__ redirige hacia la página de estado pública https://status.cloud-temple.com de seguimiento de incidentes, permitiendo acceder a información adicional sobre el incidente en curso:

![](images/shiva_incident_002.png)

Es posible obtener los informes de incidentes globales. El acceso a estos informes requiere el permiso específico '**incident_management**'.

Aquí hay un ejemplo de la pestaña que muestra estos informes:

![](images/shiva_incident_003.png)

### Incidentes en un ámbito comanditario
La visibilidad de los incidentes específicos a un ámbito de cliente requiere el permiso **incident_read**. Estos incidentes están representados por un ícono dedicado, acompañado por una insignia roja que indica el número de incidentes en curso.

El icono es clickeable, permitiendo listar los tickets asociados a los incidentes. Cada ticket incluye un enlace hacia los detalles del incidente, ofreciendo la posibilidad de seguir el progreso de su resolución:

![](images/shiva_incident_004.png)

Para consultar los detalles de un incidente, es necesario ser el autor del ticket de incidente o tener el permiso **support_management**.