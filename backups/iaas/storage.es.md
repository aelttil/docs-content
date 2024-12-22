---
title: Almacenamiento
---

## Generalidades sobre el almacenamiento
Cloud Temple ofrece varias clases de almacenamiento basadas en la tecnología [IBM FlashSystem](https://www.ibm.com/flashsystem/) 
y [IBM SVC](https://www.ibm.com/products/san-volume-controller).

La tecnología __IBM SVC__ permite entregar el nivel de rendimiento requerido para los ambientes de nuestros clientes gracias a la gran
cantidad de memoria caché incorporada en los controladores y a la posibilidad de distribuir todas las IOPS
de un servidor a través de varios SAN.

También se utiliza para permitir la replicación de sus LUNs de almacenamiento en modo de bloque entre
las zonas de disponibilidad o facilitar las intervenciones en los sistemas de almacenamiento.

## Almacenamiento en modo de bloque
### Generalidad
El almacenamiento es principalmente de tipo FLASH NVME dedicado a las cargas de trabajo profesionales.
Los discos son utilizados por las matrices de almacenamiento en [__'Distributed Raid 6'__](https://www.ibm.com/docs/en/flashsystem-5x00/8.6.x?topic=configurations-distributed-raid-array-properties).

La clase de almacenamiento __'Almacenamiento Masivo'__ ofrece discos mecánicos para las necesidades de archivado
en un contexto de eficiencia económica. Varios niveles de rendimiento están disponibles:

| Referencia                          | Unidad | SKU                                          | 
|------------------------------------|--------|----------------------------------------------|
| FLASH - Esencial - 500 IOPS/To     | 1 GiB  | csp:(región):iaas:storage:block:live:v1       |
| FLASH - Estándar - 1500 IOPS/To    | 1 GiB  | csp:(región):iaas:storage:block:medium:v1     | 
| FLASH - Premium - 3000 IOPS/To     | 1 GiB  | csp:(región):iaas:storage:block:premium:v1    |
| FLASH - Empresa - 7500 IOPS/To     | 1 GiB  | csp:(región):iaas:storage:block:enterprise:v1 |
| FLASH - Ultra - 15000 IOPS/To      | 1 GiB  | csp:(región):iaas:storage:block:ultra:v1      | 
| ALMACENAMIENTO MASIVO - Archivo    | 1 TiB  | csp:(región):iaas:storage:block:mass:v1       |

*__Nota__ :*

- *La disponibilidad del almacenamiento es del 99.99% medida mensualmente, periodo de mantenimiento incluido,*
- *No hay restricción o cuota en la lectura o escritura,*
- *No se factura por IOPS,*
- *No hay compromiso de rendimiento en la clase __'Almacenamiento Masivo'__,*
- *El tamaño mínimo de una LUN de almacenamiento es de 500GiB,*
- *Al utilizar un mecanismo de replicación de almacenamiento, el rendimiento debe ser idéntico en las dos zonas de disponibilidad,*
- *No se implementa ningún mecanismo de optimización "inteligente" como la compresión o deduplicación: cuando reservas 10TiB de almacenamiento, tienes físicamente 10TiB de almacenamiento útil implementado en las máquinas de IBM.*
- *Las LUNs de almacenamiento están dedicadas al entorno del cliente.*

### Uso en el marco de la oferta de cómputo vmware
En el contexto de la utilización del almacenamiento en modo bloque como datastore en la oferta de computación VMware de Cloud Temple, **debe tener en cuenta varias consideraciones importantes**:

1. **Archivo de intercambio (.VSWP) al iniciar las máquinas virtuales**: Cuando una máquina virtual inicia, crea un archivo .VSWP del tamaño de su memoria en el disco. Por lo tanto, para poder iniciar sus máquinas virtuales, debe tener siempre disponible en su datastore un espacio libre equivalente a la suma de los tamaños de memoria de sus máquinas virtuales. Por ejemplo, si su datastore dispone de 1 TiB de almacenamiento en bloque y desea iniciar 10 máquinas virtuales de 64 GiB de memoria cada una, serán necesarios 640 GiB de espacio en disco. Sin este espacio, el inicio de las máquinas estará limitado por la capacidad disponible para crear los archivos de intercambio.

2. **Espacio libre para las instantáneas de respaldo**: El servicio de respaldo utiliza capturas instantáneas (snapshots). Por ende, siempre debe haber suficiente espacio libre para permitir la creación de una captura instantánea durante el respaldo de una máquina virtual. El tamaño de la instantánea depende del volumen de escritura de la máquina virtual y del tiempo requerido para realizar el respaldo. Generalmente, se recomienda mantener al menos un 10 % de espacio libre para esta operación.

3. **Gestión de discos dinámicos**: Sea cauteloso con el uso de discos dinámicos. Si no controla su crecimiento, una falta de espacio físico puede resultar en un congelamiento (freeze) de la máquina virtual en el mejor de los casos, o en un fallo con corrupción de datos en el peor de los casos. Es crucial monitorear atentamente el espacio disponible en sus datastores cuando utiliza este tipo de disco.

Una gestión proactiva del espacio en disco es esencial para asegurar el correcto funcionamiento de sus máquinas virtuales y la confiabilidad de los respaldos. Asegúrese de disponer siempre del espacio necesario para los archivos de intercambio, las instantáneas y el crecimiento de los discos dinámicos.

## Almacenamiento en modo backup
El almacenamiento dedicado para la copia de seguridad de sus máquinas virtuales es auto-provisionado por la plataforma [IBM Spectrum Protect Plus](backup.md) dentro del límite de la cuota ordenada.

| Referencia               | Unidad | SKU                                      | 
|--------------------------|--------|------------------------------------------|
| MASS STORAGE - Archivado | 1 TiB  | csp:(región):iaas:storage:bloque:backup:v1 |

## Almacenamiento de objetos
El almacenamiento de objetos Cloud Temple se basa en la tecnología [DELL ECS](https://www.dell.com/en-us/dt/storage/ecs/).

Encontrará la descripción de este almacenamiento en la sección PaaS: [almacenamiento de objetos]().

## Replicación del almacenamiento en modo bloque

### Principios
Para permitir la implementación de sus planes de recuperación de actividades, cuando no es posible mantener la continuidad operativa con mecanismos aplicativos y la replicación de máquinas virtuales no es adecuada, Cloud Temple propone __mecanismos de replicación de almacenamiento en modo bloque entre las zonas de disponibilidad de una región__.

Estos mecanismos de replicación se aplican sobre los LUNs de almacenamiento de sus entornos, en complemento de las copias de seguridad.
La elección del uso de un mecanismo de replicación en un entorno __depende de varios factores incluyendo su criticidad, la pérdida de datos tolerada, así como la performance deseada__ para la aplicación.

Cloud Temple ofrece dos tipos de mecanismos desplegados en una configuración activo/pasiva:

- La replicación __asíncrona__ (o __'Global Mirror'__): *La función __'Global Mirror'__ provee un proceso de copia asíncrona.
Cuando un anfitrión escribe en el volumen primario, la confirmación de la finalización de la E/S se recibe antes de que la operación
de escritura se complete en la copia sobre el volumen secundario. Si se inicia una operación de conmutación por error, la aplicación
debe recuperar y aplicar todas las actualizaciones que no han sido confirmadas en el volumen secundario.
Si las operaciones de E/S en el volumen primario se pausan por un corto período de tiempo,
el volumen secundario puede convertirse en una correspondencia exacta del volumen primario. Esta función es comparable con un proceso
de copia de seguridad continua donde las últimas actualizaciones siempre quedan pendientes.
Cuando utiliza Global Mirror para fines de recuperación de desastres, debe considerar cómo desea manejar estas actualizaciones pendientes.*

- La replicación __síncrona__ (o __'Metro Mirror'__): *La función __'Metro Mirror'__ es un tipo de copia a distancia que crea una copia síncrona
de los datos de un volumen primario hacia un volumen secundario. Con copias síncronas, las aplicaciones anfitrionas escriben en el volumen primario, pero no reciben confirmación
de que la operación de escritura ha concluido hasta que los datos son escritos en el volumen secundario. Esto garantiza que ambos volúmenes cuentan con datos idénticos cuando
se completa la operación de copia. Después de que se completa la operación de copia inicial, la función Metro Mirror
mantiene de manera continua una copia completamente sincronizada de los datos fuente en el sitio objetivo. __Desde el 1° de enero de 2024, la función 'Metro Mirror' ya no se comercializa.__*

Entonces se define un sitio denominado "activo" o "principal" y un sitio "pasivo" o "en espera".
El plan de recuperación de actividades se activa en caso de desastre o como parte de una solicitud de prueba del PRA.
El sitio pasivo toma el control del sitio activo.

### Replicación asíncrona
Cuando sus cargas de trabajo requieren tiempos de reanudación de la actividad cortos y no es aceptable o adecuado utilizar mecanismos de replicación aplicativa o replicación de máquinas virtuales, es posible replicar una LUN de almacenamiento SAN entre dos zonas de disponibilidad de una misma región.

Esta oferta permite obtener un __RPO de 15Mn__ y un __RTO inferior a 4H__. Permite reiniciar mucho más rápidamente que la implementación de una restauración de respaldo.

En un volumen de almacenamiento en replicación asincrónica (__Global Mirror__), los controladores de virtualización SAN de las dos zonas de disponibilidad trabajan de concierto para realizar las operaciones de escritura en los dos sitios. El sitio maestro no espera la confirmación de escritura del sitio esclavo.

Los pasos de una operación de escritura son los siguientes:

1. Un hipervisor desea realizar __una operación de escritura en un volumen Global-Mirror__: envía su solicitud al controlador SAN de su zona de disponibilidad,
2. El controlador SAN local solicita al controlador SAN de la zona distante que realice la operación de escritura,
3. El controlador SAN local no espera la confirmación del SAN distante y realiza entonces la escritura localmente,
4. Proporciona __confirmación__ al hipervisor que emitió la solicitud,
5. __Los hipervisores del sitio distante no acceden directamente a la LUN Global Mirror__: Es necesario un pedido de servicio.


| SLA       | Descripción                                                                                                                                        |   
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO 15mn  | En caso de desastre en el centro de datos principal, la cantidad máxima de datos perdidos corresponde a los últimos 15 minutos de escritura          |
| RTO < 4H  | En caso de desastre en el centro de datos principal, la reanudación de la actividad está garantizada en menos de 4 horas según la complejidad de los entornos. |

En caso de activación del PRA, el equipo de Cloud Temple realiza una operación de presentación de la LUN __'Global Mirror'__ a los hipervisores distantes para que puedan acceder a los datos. La implementación de esta solución requiere, por lo tanto, haber reservado en el sitio 'standby' los recursos de cómputo y RAM para reanudar la actividad en caso de desastre.

El uso de esta tecnología también requiere duplicar el espacio de disco: es necesario tener exactamente el mismo espacio en el sitio distante que en el sitio local.

El uso de este mecanismo puede afectar el rendimiento de la aplicación en un 10%. __Solo las clases de almacenamiento de 500 Iops/To, 1500 Iops/To y 3000 Iops/TO son compatibles.__


| Referencia                          | Unidad | SKU                                               |  
|-------------------------------------|--------|---------------------------------------------------|
| ALMACENAMIENTO - Replicación Global SAN | 1 TiB | csp:(region):iaas:storage:licence:globalmirror:v1 |

*__Nota__*:

- *Dado que la oferta es asincrónica, es posible que en caso de desastre algunas operaciones de disco no se hayan escrito en el sitio distante. Por lo tanto, puede haber un riesgo en la coherencia de los datos, a mitigar en el análisis de riesgos del plan de recuperación ante desastres.*
- *La replicación del almacenamiento en modo bloque se hace de manera oculta para las máquinas virtuales y aplicaciones,*
- *Por lo tanto, es importante priorizar los escenarios de replicación aplicativa o posiblemente de replicación de máquina virtual,*
- *El cálculo y la memoria, en el sitio de recuperación, pueden reducirse para optimizar costos si una situación degradada es aceptable para el negocio durante la acción del plan de recuperación ante desastres.*

### Replicación sincrónica

__Desde el 1° de enero de 2024, el mecanismo de replicación síncrona ya no se comercializa__

En el caso de aplicaciones con altísima criticidad, que no toleran ninguna pérdida de datos, se recomienda adoptar 
un sistema de replicación síncrona (o metro-replicación) SAN entre las dos zonas de disponibilidad.
Este plan permite obtener un RPO nulo (de tipo 'última escritura en disco').

En un volumen de almacenamiento en metro-replicación, los controladores de virtualización SAN trabajan conjuntamente para llevar a cabo las operaciones de escritura en ambos sitios simultáneamente.

Las etapas de una operación de escritura son las siguientes:

1.	Un hipervisor desea realizar una operación de escritura en un volumen Metro-Mirror: envía su solicitud al controlador SAN de su sitio.
2.	El controlador SAN local solicita al controlador SAN del sitio remoto que realice la operación de escritura.
3.	Cuando la escritura se ha realizado, el controlador SAN remoto da su confirmación.
4.	El controlador SAN local realiza entonces la escritura localmente y da su confirmación al hipervisor que emitió la solicitud.
5.	Los hipervisores del sitio remoto no acceden directamente a la LUN Metro Mirror.

![](images/schemas/replication_metro.png)

| SLA                            | Descripción                                                                                                                                                         |   
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO = última escritura en disco| En caso de desastre en el centro de datos principal, la cantidad máxima de datos perdidos es la de la última escritura en disco, es decir, un RPO cercano a cero.    |
| RTO < 4H                       | En caso de desastre en el centro de datos principal, la recuperación de actividad está garantizada en menos de 4 horas según la complejidad de los entornos.         |

En caso de activación del plan de recuperación ante desastres, el equipo de Cloud Temple realiza una operación de presentación de la LUN metro-mirror a los hipervisores remotos para que puedan acceder a los datos.

La implementación de esta solución requiere, por lo tanto, haber reservado en el sitio en espera recursos de computo y de RAM para retomar la actividad en caso de desastre.
El uso de esta tecnología también requiere duplicar el espacio de disco: es necesario tener el mismo espacio en el sitio remoto que en el sitio local.

Se debe tener en cuenta que el uso de este mecanismo puede afectar el rendimiento de la aplicación en hasta un 30 %. __Solo la clase de almacenamiento de 500 Iops/To es compatible__.


| Referencia                                             | Unidad | SKU                                                     |  
|--------------------------------------------------------|--------|---------------------------------------------------------|
| ALMACENAMIENTO - Metro Replicación SAN inter-datacenter| 1 TiB  | csp:(region):iaas:storage:licence:metromirror:v1        |

*__Nota__* : 

- *La replicación del almacenamiento en modo bloque se realiza de forma transparente para las máquinas virtuales y las aplicaciones,*
- *Por ello, es importante priorizar los escenarios de replicación a nivel de aplicación o, eventualmente, de replicación de máquina virtual,*
- *El cálculo y la memoria en el sitio de recuperación pueden reducirse para optimizar los costos
si una situación degradada es aceptable para el negocio durante la ejecución del plan de recuperación ante desastres.*

## Replicación asincrónica de tus máquinas virtuales en entorno VMware

La replicación asíncrona de sus máquinas virtuales es un mecanismo que consiste en empujar a nivel del hipervisor fuente las operaciones de escritura en el sitio en espera a intervalos de tiempo regulares.

Después de una copia inicial en caliente de todo el almacenamiento activo en el sitio de espera, solo las escrituras se empujan a intervalos regulares en el sitio en suspensión.
Este intervalo depende del volumen de escritura (de cada hora a cada 24 horas).

La replicación de las máquinas virtuales se basa en el mecanismo de instantáneas de hipervisor. Como tal, 
esta solución tiene las mismas desventajas, en particular la sensibilidad al volumen de escrituras de la máquina virtual, 
el proceso de instantánea siendo un mecanismo recursivo para la finalización de la instantánea.

El ejemplo típico de máquina que no soporta el mecanismo de replicación de máquinas virtuales es un 
servidor FTP que recibe flujos en tiempo real de cámaras de vigilancia. __La máquina pasa su tiempo escribiendo y no será
capaz de cerrar una instantánea sin pausar el sistema operativo durante un período de tiempo significativo
(varias decenas de minutos)__. Si el hipervisor no logra cerrar la instantánea, es exactamente lo que hará, 
sin posibilidad de intervenir a menos que se corrompa la máquina virtual.

![](images/schemas/replication_vsphere.png)


| SLA             | Descripción                                                                                                                                               |   
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| RPO de 1H a 24H | En caso de desastre en el centro de datos principal, la cantidad máxima de datos perdidos es la de la última empuje de escrituras en el sitio de espera. |
| RTO  < 15mn     | Operación de arranque de la máquina virtual detenida en el sitio remoto                                                                                  |


En caso de necesidad, o en caso de fallo en una máquina del sitio principal, la máquina espejo en el sitio de espera se activa. 
La recuperación de actividad requiere haber reservado en el sitio de espera computación y RAM en espera. Es 
necesario tener el mismo espacio de almacenamiento en el sitio pasivo que en el sitio activo.


| Referencia                         | Unidad | SKU                                             |  
|-----------------------------------|-------|-------------------------------------------------|
| PRA - Replicación VMware inter-AZ | 1 vm  | csp:(region):iaas:vmware:licence:replication:v1 |

*__Nota__ : El cálculo del RPO mínimo debe ser definido en función del índice de cambio en la máquina virtual.*