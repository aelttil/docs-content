---
título: Copia de seguridad
---

## Servicio de copia de seguridad de máquinas virtuales
Cloud Temple propone __una arquitectura de respaldo cruzado nativa e intransferible__ (es obligatoria en la calificación secnumcloud francesa).

Los respaldos se almacenan en una zona de disponibilidad y en un centro de datos físico diferente al que aloja la máquina virtual.

Esto permite protegerse en caso de una falla mayor en el centro de datos de producción y restaurar en un centro de datos secundario (por ejemplo, incendio).

Esta solución incluye:

- El respaldo fuera de las instalaciones en caliente de todos los discos,
- La presentación y el arranque instantáneo de una máquina virtual desde la infraestructura de mass storage y la recarga en caliente en los SAN de producción,
- La restauración parcial de archivos desde el respaldo,
- Una retención limitada únicamente por la asignación de espacio de almacenamiento masivo.

Esta infraestructura de respaldo se basa en la solución *IBM Spectrum Protect Plus*, una solución de arquitectura sin agentes, 
fácil de usar y que permite la automatización de los procesos de respaldo, además de una optimización del espacio de mass storage.

Las velocidades de respaldos y restauraciones dependen de la tasa de cambio en los entornos.
La política de respaldo es configurable desde [la Consola Cloud Temple](../console/console.md) para cada máquina virtual.

*__Nota:__*

*__Algunas máquinas virtuales no son compatibles con esta tecnología de respaldo__ que utiliza los mecanismos de instantáneas del hipervisor.
Estas son típicamente las máquinas cuyas cargas de escritura en disco son constantes. No es posible para el hipervisor cerrar la instantánea lo que 
obliga la paralización de la máquina virtual para poder terminar la operación de cierre. Esta paralización puede durar varias horas y no es detenible.*

*La solución es entonces excluir el disco que está siendo objeto de escrituras permanentes y respaldar los datos por otro método.*

| Referencia                                               | Unidad | SKU                            |
| -------------------------------------------------------- | ------ | ------------------------------ |
| RESPALDO - Acceso al servicio IBM Spectrum Protect Plus  | 1 VM   | csp:(región):iaas:backup:vm:v1 |


### Crear una política de respaldo
Para agregar una nueva política de respaldo, es necesario hacer una solicitud al soporte. El soporte está disponible a través del ícono de salvavidas en la esquina superior derecha de la ventana.

La creación de una nueva política de respaldo se lleva a cabo mediante __una solicitud de servicio__ que indica:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El nombre de la política de respaldo
    Las características (x días, y semanas, z meses, ...)

![](../console/images/shiva_support.png)

### Asignar una política de respaldo a una máquina virtual
Cuando se asigna un SLA a una máquina virtual (VM), todos los discos asociados a esa VM heredan automáticamente el mismo SLA. Posteriormente, es posible ejecutar manualmente la copia de seguridad a través de la pestaña "Políticas de Respaldo". En ausencia de un lanzamiento manual, la copia de seguridad se ejecutará automáticamente de acuerdo con la programación configurada por el SLA.

SecNumCloud exige la asignación de una política de respaldo a una máquina virtual antes de su inicio. De lo contrario, recibirá la siguiente notificación:

![](images/shiva_vm_politiques_backup_assign_mandatory.png){:height="50%" width="50%"}

Haga clic en la pestaña __'Políticas de Respaldo'__ en el menú de su máquina virtual. Aquí puede visualizar la o las políticas de respaldos asignadas a la misma.

Para asignar una nueva política de respaldo a la máquina virtual, haga clic en el botón __'Agregar una política'__ y seleccione la política de respaldo deseada.

![](images/shiva_vm_politiques_backup.png)

### Asignar una política de respaldo a un disco virtual
Es también posible asignar un Acuerdo de Nivel de Servicio (SLA) directamente a un disco virtual específico de una máquina. En este caso, la máquina virtual no hereda este SLA aplicado individualmente al disco. Sin embargo, no es posible iniciar manualmente la ejecución de la copia de seguridad a nivel de discos, ya que esta funcionalidad no está soportada en Spectrum Protect Plus.

Por otro lado, es posible excluir ciertos discos de una o varias políticas de copia de seguridad (SLA) de la VM, lo que permite desasignar uno o varios SLA(s) sobre una base disco por disco. Este enfoque ofrece la flexibilidad de iniciar manualmente la ejecución de la copia de seguridad de un SLA sin afectar todos los discos de la máquina virtual, permitiendo así una gestión más precisa de las copias de seguridad.

Haga clic en la barra de acciones del disco al que desea asignar una política de copia de seguridad. Luego, haga clic en __'Políticas'__ y seleccione la política de copia de seguridad deseada.

![](images/shiva_vm_disques_virtuels_politiques.png)

_Nota_: La política a añadir debe ubicarse en una zona de disponibilidad diferente de la máquina virtual.


### Ejecutar una política de copia de seguridad
En el menú __'Políticas de respaldo'__ de su máquina virtual, haga clic en el botón __'Ejecutar'__ en la columna __'Acciones'__ de la política de respaldo que desea ejecutar.

![](images/shiva_vm_politiques_backup_execute.png)

Para ejecutar una política de respaldo, también puede comenzar desde la sección __'Respaldo'__ en el menú de su máquina virtual. Haga clic en el botón __'Ejecutar respaldo'__, y luego seleccione el respaldo que desea ejecutar de la lista desplegable.

![](images/shiva_vm_politiques_backup_execute2.png)

### Retirar una política de respaldo
En el menú __'Políticas de respaldo'__ de su máquina virtual, haga clic en el botón __'Retirar'__ en la columna __'Acciones'__ de la política de respaldo que desea eliminar.

![](images/shiva_vm_politiques_backup_retirer.png)

__Tenga en cuenta que no es posible eliminar la última SLA de una máquina virtual encendida:__

![](images/shiva_vm_politiques_backup_retirer_impossible.png)

### Eliminación de una política de respaldo: caso de una política de respaldo suspendida ("held")
Cuando el último recurso se desvincula de una política SLA, el sistema detecta automáticamente esta situación. En consecuencia, todos los trabajos relacionados con esta política SLA cambian automáticamente al estado "Suspendido" ("Sostenido"). Es importante notar que en este punto, no es posible eliminar directamente la política SLA debido a la existencia de trabajos dependientes. Para proceder con la eliminación de la política, se debe seguir una serie de pasos.

Se debe verificar que los trabajos afectados estén efectivamente en el estado "Suspendido". Una vez realizada esta verificación, se pueden eliminar estos trabajos. Sólo después de haber eliminado estos trabajos dependientes, la política SLA podrá ser borrada definitivamente del sistema.

Un caso particular merece una atención específica: la adición de un nuevo recurso a una política SLA cuyos trabajos dependientes no han sido eliminados. En esta situación, los identificadores de los trabajos se conservarán. Sin embargo, es crucial señalar que los trabajos en estado "Suspendido" no se reanudarán automáticamente. Será necesaria una intervención manual para reactivarlos y permitir su ejecución.

Nota: Para más detalles sobre esta situación, contacte al soporte de Cloud Temple.

La consola de Cloud Temple impide la asignación de una máquina virtual a una política suspendida:

![](images/shiva_backup_held_001.png){:height="50%" width="50%"}

Asimismo, no es posible iniciar una máquina virtual que esté asociada a una política de respaldo suspendida:

![](images/shiva_backup_held_002.png){:height="50%" width="50%"}

### Restaurar una copia de seguridad
La pestaña __'Copias de seguridad'__ en el menú de sus máquinas virtuales le permite acceder a la lista de copias de seguridad de la misma. 
Para restaurar una copia de seguridad, haga clic en el botón __'Restaurar'__ en la línea correspondiente a la copia de seguridad que desea restaurar.

![](images/shiva_vm_backup_restaurer.png)

1. **Modo producción**: El modo de producción permite la recuperación tras un incidente en el sitio local desde el almacenamiento principal o un sitio remoto de recuperación tras un incidente, reemplazando las imágenes de máquina originales con las imágenes de recuperación. Todas las configuraciones son transferidas en el marco de la recuperación, incluyendo los nombres y los identificadores, y todos los trabajos de copia de datos asociados a la máquina virtual continúan ejecutándose. En el marco de una restauración en modo producción, puede elegir reemplazar el almacenamiento en la máquina virtual por un disco virtual proveniente de una copia de seguridad de máquina virtual previa.

2. **Modo prueba**: El modo prueba crea máquinas virtuales temporales para el desarrollo, la prueba, la verificación de instantáneas y la verificación de recuperación tras un incidente según un programa reiterable, sin impactar en los entornos de producción. Las máquinas de prueba se ejecutan el tiempo que sea necesario para llevar a cabo la prueba y la verificación, luego son eliminadas. A través de la red aislada, puede establecer un entorno seguro para probar sus tareas sin interferir con las máquinas virtuales utilizadas para la producción. Las máquinas virtuales que son creadas en modo prueba poseen nombres e identificadores únicos para evitar cualquier conflicto en su entorno de producción.

3. **Modo clon**: El modo Clon crea copias de las máquinas virtuales para casos de uso que requieren copias permanentes o de ejecución prolongada para la exploración de datos o la duplicación de un entorno de prueba en una red aislada. Las máquinas virtuales creadas en modo clon poseen nombres e identificadores únicos para evitar cualquier conflicto en su entorno de producción. En modo clon, debe tener cuidado con el consumo de recursos, ya que el modo clon crea máquinas permanentes o a largo plazo.

**La restauración es por defecto en modo "PRUEBA" para preservar la producción** y usted puede elegir el nombre de la vm restaurada:

![](images/shiva_vm_backup_test.png){:height="80%" width="80%"}

Note que si las pruebas son satisfactorias, es posible cambiar una máquina virtual del modo prueba al modo producción:

![](images/shiva_vm_backup_2prod.png){:height="80%" width="80%"}


## Servicio de copia de seguridad por agente
Para las copias de seguridad de entornos complejos (servidores de archivos muy grandes, SAP, bases de datos...), Cloud Temple puede proporcionar en su tenant la solución IBM Storage Protect.
Basada en una arquitectura con agentes y una plataforma dedicada, Spectrum Protect ofrece mecanismos avanzados de copia de seguridad de datos incluyendo compresión, deduplicación en origen y cifrado.

Se encuentran disponibles agentes de copia de seguridad avanzados para las aplicaciones principales (como correo electrónico, los ERP...).

Para obtener más información sobre IBM Storage Protect, haga clic aquí: https://www.ibm.com//products/storage-protect


| Referencia                                                                                                              | Unidad       | SKU                                      |
| ---------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------------------- |
| COPIA DE SEGURIDAD - Servicio IBM Storage Protect - 1 appliance virtual                                                | 1 appliance  | csp:(region):backup:sp:service:access:v1 |
| COPIA DE SEGURIDAD - IBM Spectrum Protect - 1 Tio fuente respaldada incluyendo espacio de backup (para una política de 7j - 5s - 6m) | 1 Tio        | csp:(region):backup:sp:1tio:v1           |


## Externalización de copias de seguridad en cinta LTO
**Nota: El servicio ya no está comercializado desde el 1 de diciembre de 2023.**

Con el objetivo de asegurar al máximo sus datos de respaldo, Cloud Temple propone escribir y almacenar las copias de seguridad en cintas magnéticas LTO.
Los datos escritos en cinta están cifrados y son a prueba de falsificaciones.

Es apropiado reservar el número de lectores LTO (tecnología LTO8 o LTO9) según sus necesidades.

Cloud Temple recurre a su socio [__Iron Mountain__](https://www.ironmountain.com) para la externalización de las copias de seguridad en cinta (transporte, almacenamiento y gestión de las cintas),
con el fin de responder a las necesidades de protección de datos, recuperación después de desastres y archivo legal.

| Referencia                                                            | Unidad       | SKU        |
| --------------------------------------------------------------------- | ------------ | ---------- |
| RESPALDO - Reservación de un lector LTO                               | 1 lector     | DEPRECATED |
| RESPALDO - Cinta LTO para externalización de las copias de seguridad  | 1 cinta LTO  | DEPRECATED |
| RESPALDO - Servicio de externalización Iron Mountain de las cintas LTO| 1 paquete    | DEPRECATED |