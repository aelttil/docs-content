---
title: Matriz de responsabilidad IaaS
---

Aquí está el modelo RACI que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de las infraestructuras IaaS de Cloud Temple.

## Definición de los distintos roles

Recordamos aquí los diferentes roles del RACI:

| Rol            | Descripción                                                                            |
|----------------|----------------------------------------------------------------------------------------|
| (R) Realiza    | __R__ealiza el proceso                                                                 |
| (A) Aprueba    | __A__prueba la realización del proceso                                                 |
| (C) Consulta   | __C__onsultado durante el proceso                                                      |
| (I) Informado  | __I__nformado de los resultados del proceso (a través de las herramientas, el portal o la mensajería) |

## Definición de su necesidad
| Actividad                                                                                       | Rol Cliente | Rol Cloud Temple |
|------------------------------------------------------------------------------------------------|-------------|-------------------|
| Definir la arquitectura global de su plataforma Cloud Temple                                   | __RA__      | __CI__            | 
| Definir el número de inquilinos y el número de zonas de disponibilidad para cada inquilino     | __RA__      | __CI__            | 
| Definir su estrategia global de recuperación o continuidad de actividad                        | __RA__      | __CI__            | 
| Dimensionar adecuadamente su plataforma Cloud Temple (cálculo, almacenamiento, red, backup,...)| __RA__      | __CI__            | 
| Suscribir a los servicios con la información necesaria                                         | __RA__      | __I__             | 

## Implementación inicial de sus inquilinos Cloud Temple

| Actividad                                                                                                    | Rol Cliente | Rol Cloud Temple  |
|--------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar la implementación de los **centros de datos físicos**                                               |             | __RA__            | 
| Asegurar la implementación de infraestructuras **cómputo**                                                   | __I__       | __RA__            | 
| Asegurar la implementación de infraestructuras **almacenamiento**                                            | __I__       | __RA__            | 
| Asegurar la implementación de la conectividad al **red backbone(1)**                                         | __I__       | __RA__            | 
| Adquirir y mantener las licencias de software esenciales para el funcionamiento de la plataforma Cloud Temple |             | __RA__            | 
| Implementar la configuración básica de sus inquilinos Cloud Temple                                           | __CI__      | __RA__            | 
| Implementar la configuración inicial para el servicio de respaldo                                            | __CI__      | __RA__            |
| *Si están suscritos:* implementar la configuración de red inicial para los servicios de Internet y Firewall  | __CI__      | __RA__            |
| Ofrecer la asistencia requerida para la toma de control de sus entornos Cloud Temple                         | __I__       | __RA__            | 
| Realizar los ajustes finales de configuración del servicio tras su entrega                                   | __RA__      | __C__             | 
| Configurar un repositorio de autenticación externo para la consola Cloud Temple                              | __RA__      | __C__             | 
| Crear los usuarios de cada inquilino en la consola Cloud Temple y asignar los derechos                       | __RA__      |                   | 
| Validar la conformidad de la plataforma entregada con el estándar SecNumCloud                                | __I__       | __RA__            |
| Validar la conformidad de la plataforma entregada con las especificaciones requeridas                        | __RA__      | __CI__            |

*(1) La red backbone constituye la infraestructura central de Cloud Temple, ofreciendo una columna vertebral sobre la cual se basan las redes de clientes específicos, las cuales son integradas y soportadas por esta infraestructura principal.*

## Integrar su sistema de información en sus ambientes Cloud Temple

| Actividad                                                                                                                    | Rol del Cliente | Rol de Cloud Temple |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------- |
| Crear, instalar, actualizar sus máquinas virtuales                                                                           | __RA__          |                     |
| Instalar y configurar los softwares y middlewares en sus máquinas virtuales                                                  | __RA__          |                     |
| Comprar y poseer las licencias y los derechos de uso para <br/>los sistemas operativos de sus máquinas virtuales            | __RA__          |                     |
| Configurar la red para cada una de sus máquinas virtuales                                                                    | __RA__          |                     |
| Asegurarse de que cada máquina virtual esté asociada con un plan de respaldo coherente                                       | __RA__          | __C__              |
| Asegurarse de que cada máquina virtual esté asociada con un plan <br/>de recuperación de actividades o de continuidad coherente | __RA__       | __C__              |
| Implementar una estrategia de protección antivirus en sus máquinas virtuales                                                 | __RA__          |                     |
| Implementar una solución de metrología y monitoreo en sus máquinas virtuales                                                 | __RA__          |                     |
| Definir la política de etiquetado de sus máquinas virtuales                                                                 | __RA__          |                     |

## Operaciones recurrentes
### Gestión de accesos e identidades
| Actividad                                                                                                                         | Rol Cliente | Rol Cloud Temple |
|-----------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar la accesibilidad del servicio Consola Cloud Temple y de la API asociada                                                  |             | __RA__           |
| Asegurar la accesibilidad del sistema de información desplegado en sus máquinas virtuales                                        | __RA__      |                  |
| Gestionar las habilitaciones físicas y lógicas de los equipos Cloud Temple a las infraestructuras SecNumCloud.                   |             | __RA__           |
| Administrar los accesos y la política de seguridad asociada relacionados con la interfaz de la consola Cloud Temple y su API      | __RA__      |                  |
| Administrar los accesos y la política de seguridad asociada al sistema de información<br/> alojado dentro de sus inquilinos Cloud Temple | __RA__      |                  |

### mantenimiento de la operatividad y de la seguridad en condición

Las actividades orientadas a mantener en condición operacional y segura las infraestructuras y servicios
ofrecidos por Cloud Temple, en el marco de su oferta IaaS, se realizan con el objetivo de cumplir con la calificación SecNumCloud.

| Actividad                                                                                                          | Rol Cliente | Rol Cloud Temple   |
|-------------------------------------------------------------------------------------------------------------------|-------------|--------------------|
| Asegurar el mantenimiento en condición operacional de las infraestructuras **datacenters físicos**                 | __I__       | __RA__             | 
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **datacenters físicos**                | __I__       | __RA__             | 
| Asegurar el mantenimiento en condición operacional de las infraestructuras **cálculo**                             | __I__       | __RA__             | 
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **cálculo (2)**                        | __RA__      | __CI__             | 
| Asegurar el mantenimiento en condición operacional de las infraestructuras **almacenamiento**                      | __I__       | __RA__             | 
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **almacenamiento**                     | __I__       | __RA__             | 
| Asegurar el mantenimiento en condición operacional de las infraestructuras **redes backbone**                      | __I__       | __RA__             | 
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras **redes backbone**                     | __I__       | __RA__             |
| Asegurar el mantenimiento en condición operacional de las máquinas virtuales desplegadas en los tenants client **(3)** | __RA__      |                    |
| Asegurar el mantenimiento en condición de seguridad de las máquinas virtuales desplegadas en los tenants client **(3)**    | __RA__      |                    |
| Asegurar el mantenimiento en condición operacional de los middlewares desplegados en los tenants client            | __RA__      |                    |
| Asegurar el mantenimiento en condición de seguridad de los middlewares desplegados en los tenants client           | __RA__      |                    |

*(2) Cloud Temple proporciona regularmente las versiones más recientes del sistema operativo para sus hipervisores. 
Sin embargo, dado que Cloud Temple no está informado de las especificidades de sus entornos de producción ni de los requisitos 
relacionados con sus cargas de trabajo, __la decisión de proceder con la actualización del sistema operativo de sus hipervisores, 
conllevando así un reinicio, recae sobre usted__. Esta operación puede ser realizada a través de la consola de Cloud Temple o mediante la API.
Se encuentran disponibles servicios profesionales si desea que Cloud Temple se encargue de ciertas operaciones.*

*(3) Cloud Temple ofrece paquetes de licencias para cortafuegos (Fortinet, Stormshield) y balanceadores de carga (HAProxy), y 
trabaja en colaboración con sus equipos para la configuración inicial durante la fase de implementación. No obstante, 
la responsabilidad del mantenimiento en condición operacional y seguro recae en usted durante la fase de operación 
habitual. Se encuentran disponibles servicios profesionales si desea que Cloud Temple se encargue de ciertas operaciones.*

### Gestión de cambios, incidentes, problemas y capacidades


| Actividad                                                                                                            | Rol Cliente | Rol Cloud Temple |
|----------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Gestionar los incidentes en las infraestructuras **datacenters físicos**                                             | __I__       | __RA__           |
| Gestionar los problemas en las infraestructuras **datacenters físicos**                                              |             | __RA__           |
| Gestionar las capacidades en las infraestructuras **datacenters físicos**                                            |             | __RA__           |
| Gestionar los incidentes en las infraestructuras **cálculo**                                                         | __I__       | __RA__           |
| Gestionar los problemas en las infraestructuras **cálculo**                                                         |             | __RA__           |
| Gestionar las capacidades en las infraestructuras **cálculo**                                                       | __RA__      | __CI__           |
| Gestionar los incidentes en las infraestructuras **almacenamiento**                                                  | __I__       | __RA__           |
| Gestionar los problemas en las infraestructuras **almacenamiento**                                                  |             | __RA__           |
| Gestionar las capacidades en las infraestructuras **almacenamiento**                                                | __RA__      | __CI__           |
| Gestionar los incidentes en las infraestructuras **red backbone**                                                    | __I__       | __RA__           |
| Gestionar los problemas en las infraestructuras **red backbone**                                                     |             | __RA__           |
| Gestionar las capacidades en las infraestructuras **red backbone**                                                  |             | __RA__           |
| Implementar una nueva máquina virtual o crear un nuevo entorno aplicativo dentro de un tenant del cliente           | __RA__      |                  |
| Modificar la configuración de las máquinas virtuales desplegadas                                                    | __RA__      |                  |
| Eliminar una máquina virtual desplegada                                                                             | __RA__      |                  |
| Tomar la decisión de añadir, modificar o retirar recursos en la plataforma Cloud Temple                              | __RA__      | __CI__           |
| Ejecutar la decisión de modificación de recursos en la plataforma Cloud Temple                                       | __I__       | __RA__           |
| Aplicar las etiquetas a las máquinas virtuales conforme a la política definida                                      | __RA__      |                  |

### Gestión del rendimiento
| Actividad                                                                                                                                              | Rol Cliente | Rol Cloud Temple   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar la vigilancia del buen funcionamiento y de la fiabilidad de todos los equipos implicados en la prestación del servicio calificado SecNumCloud | __I__       | __RA__            |
| Asegurar el seguimiento del rendimiento de los recursos físicos de cálculo, almacenamiento y red puestos a disposición de sus tenants __(4)__          | __RI__      | __A__             |
| Supervisar el rendimiento de las máquinas virtuales que soportan sus entornos                                                                         | __RA__      | __I__             |

*(4) La plataforma Cloud Temple adopta una filosofía centrada en __la provisión de infraestructuras dedicadas__ para las necesidades de __cálculo__ (con blades físicos), de __almacenamiento__ (a través de LUNs dedicadas en los SANs) 
y de __red__ (incluyendo cortafuegos y balanceadores de carga). Estos recursos dedicados se ponen a disposición del cliente, cuyo uso 
y la carga resultante dependen directamente del uso que hace de ellos. Incumbe, por tanto, al cliente implementar y gestionar los sistemas de supervisión 
y de metrología necesarios para asegurar el seguimiento del funcionamiento óptimo de su sistema de información.*

### Gestión de la copia de seguridad y de la recuperación de actividad sobre la copia de seguridad integrada
| Actividad                                                                                                                                 | Rol Cliente | Rol Cloud Temple    |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Asegurar el mantenimiento en condición operacional en las infraestructuras de **respaldo** integradas a la plataforma Cloud Temple **(5)** |             | __RA__              |
| Asegurar el mantenimiento en condición de seguridad de las infraestructuras de **respaldo** integradas a la plataforma Cloud Temple       | __I__       | __RA__              |
| Administrar los incidentes en las infraestructuras **respaldo** integradas a la plataforma Cloud Temple                                    | __I__       | __RA__              |
| Administrar los problemas en las infraestructuras **respaldo** integradas a la plataforma Cloud Temple                                     |             | __RA__              |
| Administrar las capacidades en las infraestructuras **respaldo** integradas a la plataforma Cloud Temple                                   | __AI__      | __RC__              |
| Asegurar el mantenimiento en condición operacional sobre la solución de respaldo elegida dentro de sus tenants por el cliente **(6)**      | __RA__      |                     |
| Asegurar el mantenimiento en condición de seguridad sobre la solución de respaldo elegida dentro de sus tenants por el cliente             | __RA__      |                     |
| Administrar los incidentes sobre la solución de respaldo elegida dentro de sus tenants por el cliente                                      | __RA__      |                     |
| Administrar los problemas sobre la solución de respaldo elegida dentro de sus tenants por el cliente                                       | __RA__      |                     |
| Administrar las capacidades sobre la solución de respaldo elegida dentro de sus tenants por el cliente                                     | __RA__      | __CI__              |
| Administrar el ciclo de vidas de las políticas de respaldo                                                                                 | __RA__      |                     |
| Asegurarse de que las políticas de respaldo sean coherentes con el ciclo de vida de los datos                                              | __RA__      |                     |
| Asegurarse de que los planes de continuidad de actividad o de recuperación de actividad sean coherentes con el ciclo de vida de los datos  | __RA__      |                     |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de respaldo                                                          | __RA__      |                     |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia<br/> de recuperación de actividad o de continuidad de actividad      | __RA__      | __CI__              |

*(5) A partir del 1 de enero de 2024, la solución de respaldo integrada en la plataforma Cloud Temple es IBM Spectrum Protect Plus. 
Esta solución está completamente automatizada y puede ser administrada a través de la consola Cloud Temple o la API de Cloud Temple.*

### Gestión del respaldo y de la recuperación de actividad para plataformas de terceros dentro de un tenant de cliente
| Actividad                                                                                                                                   | Rol Cliente | Rol Cloud Temple |
|---------------------------------------------------------------------------------------------------------------------------------------------|-------------|------------------|
| Asegurar el mantenimiento en condiciones operativas de la solución de respaldo elegida dentro de sus tenants por el cliente **(6)**          | __RA__      |                  |
| Asegurar el mantenimiento en condición de seguridad de la solución de respaldo elegida dentro de sus tenants por el cliente                 | __RA__      |                  |
| Gestionar los incidentes en la solución de respaldo elegida dentro de sus tenants por el cliente                                            | __RA__      |                  |
| Gestionar los problemas en la solución de respaldo elegida dentro de sus tenants por el cliente                                             | __RA__      |                  |
| Gestionar las capacidades en la solución de respaldo elegida dentro de sus tenants por el cliente                                           | __RA__      | __CI__           |
| Gestionar el ciclo de vida de las políticas de respaldo                                                                                     | __RA__      |                  |
| Asegurarse de que las políticas de respaldo sean coherentes con el ciclo de vida de los datos                                               | __RA__      |                  |
| Asegurarse de que los planes de continuidad de negocio o de recuperación de actividad sean coherentes con el ciclo de vida de los datos     | __RA__      |                  |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia de respaldo                                                           | __RA__      |                  |
| Realizar pruebas periódicas para evaluar la eficacia de la estrategia<br/> de recuperación de actividad o de continuidad de negocio         | __RA__      | __CI__           |

*(6) Esto concierne a cualquier solución de respaldo adicional establecida en los entornos del cliente y gestionada por él mismo.
Cloud Temple ofrece servicios profesionales para aquellos que deseen delegar ciertas operaciones a Cloud Temple.*

### Gestión de la documentación y del contrato
| Actividad                                                                                                                                          | Rol Cliente | Rol Cloud Temple  |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------|
| Asegurar la gestión comercial y contractual del cliente, incluyendo la elaboración de presupuestos, el procesamiento de pedidos y la gestión de la facturación | __I__       | __RA__            |
| Asegurar el seguimiento contractual del servicio, incluyendo la validación de presupuestos, el seguimiento de entregas y el monitoreo de la facturación         | __RA__      | __I__             |
| Asegurar el mantenimiento y la disponibilidad del inventario de recursos proporcionados por Cloud Temple relativos a la oferta SecNumCloud                      | __I__       | __RA__            |
| Asegurar el mantenimiento y la puesta a disposición de la documentación técnica relativa a la oferta SecNumCloud                                            | __I__       | __RA__            |
| Asegurar el seguimiento del ciclo de vida de las máquinas virtuales desplegadas en sus entornos Cloud Temple<br/> a través de su CMDB (Base de Datos de Gestión de Configuración) | __RA__      |                   |
| Mantener actualizada la política de acceso a la interfaz de la consola Cloud Temple o a la API Cloud Temple                                            | __RA__      |                   |

### Gestión de los registros
| Actividad                                                                                                                 | Rol del Cliente | Rol de Cloud Temple   |
|---------------------------------------------------------------------------------------------------------------------------|-----------------|-----------------------|
| Conservar y disponer los registros de la plataforma IaaS de Cloud Temple **(7)**                                          |                 | __RA__                |
| Conservar y disponer los registros del sistema de información<br/> alojado dentro de sus inquilinos de Cloud Temple       | __RA__          |                       |

*(7) A partir del primero de enero de 2024, la duración de retención de los registros de la plataforma será de un año.*

## Conectividad a la red del cliente (mpls, fibra dedicada, ipsec, ...)

| Actividad                                                                                                | Rol Cliente | Rol Cloud Temple    |
|----------------------------------------------------------------------------------------------------------|-------------|---------------------|
| Suscribirse a una conectividad de red del operador para acceder a un datacenter físico de Cloud Temple (8) | __RA__      | __CI__              |
| Gestionar el plan de direccionamiento IP                                                                  | __RA__      | __I__               |
| Gestionar los incidentes en los enlaces de red de los operadores de clientes                              | __RA__      |                     |
| Gestionar los problemas en los enlaces de red de los operadores de clientes                               | __RA__      | __CI__              |
| Gestionar las capacidades en los enlaces de red de los operadores de clientes                             | __RA__      | __CI__              |

*(8) Cloud Temple asume la responsabilidad de la red en cuanto a su infraestructura central, sus puntos de recolección y 
los puntos de interconexión del datacenter, garantizando así la conectividad entre estos puntos y su red central.
En la oferta de alojamiento en bahía física, Cloud Temple asume la responsabilidad a partir del equipo ubicado en la parte superior del bastidor, comúnmente llamado "top of rack".*

## Reversibilidad

| Actividad                                                                                                                                                                                        | Rol del Cliente | Rol de Cloud Temple |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|---------------------|
| Planificar el proyecto de reversibilidad y elegir las infraestructuras objetivos                                                                                                                 | __RA__          | __I__               |
| Implementar las operaciones de transición, ya sea que impliquen una extracción manual, el uso de API <br/>o cualquier otro método de terceros compatible con la plataforma Cloud Temple. | __RA__          | __I__               |
| Transferir los datos mientras se controla las repercusiones de la migración en la calidad del servicio proporcionado <br/>por el sistema de información del cliente.                             | __RA__          |                     | 
| Proceder al desmantelamiento de las configuraciones del Cloud Privado y de las opciones asociadas al cliente, <br/>tras la terminación del contrato.                                            | __I__           | __RA__              |
| Realizar el borrado seguro de los datos en los soportes de almacenamiento y proporcionar un certificado                                                                                        | __I__           | __RA__              |