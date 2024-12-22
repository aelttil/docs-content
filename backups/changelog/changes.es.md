---
title: Seguimiento de cambios
---

## Versión 241206.1.44.0
- **COMPUTE** : Adición de detalles sobre el funcionamiento de Extra Config en la oferta IaaS de VMware.

## Versión 241126.1.43.0
- Detalles adicionales sobre la documentación relacionada con los incidentes para resaltar la página de estado de los incidentos.

## Versión 241031.1.42.0
- Modificación de las capturas de pantalla después de la renovación de la IHM "Consola".
- Modificación de los nombres de algunas pestañas, menús, botones de acciones después de la renovación de la IHM "Consola".

## Versión 241001.1.41.0
- Aclaraciones adicionales sobre las limitaciones de Openshift en el entorno SecNumCloud.
- Documentación inicial sobre la oferta OpenIaaS:
  - **IAM** - Actualización del nombre de los permisos para preparar la MEP OpenIaaS.
  - **NETWORK** - Actualización de la documentación de instalación de fortinet para soportar los nuevos permisos.
  - **CONSOLE / API** - Actualización de la gestión de las actividades.
  - **ESTADO** : Aclaraciones sobre la gestión de incidentes y notificaciones.
  - **COMPUTE** : Aclaración de que 16GB de RAM de los hipervisores están dedicados al hipervisor y no pueden ser utilizados por el cliente.
  - **OPENSHIFT** : Corrección de typos; adición de aclaraciones.

## Versión 240924.1.40.0
- Corrección de un error en la documentación de respaldo sobre el estado "held"
- Adición de precisiones sobre los SLA para el backup de máquinas virtuales y discos.
- Adición de la posibilidad de dar acceso a la consola Shiva para una nueva IP
- Modificación de la tabla de permisos; adición de los derechos asociados a Owner. iam_permission_manager pasa a ser obsoleto
- Nuevo permiso llamado "bastion_console_access" que ahora será necesario para conectarse a un appliance (en SSH/RDP).
- Visualización del consumo de recursos en un tenant
- Correcciones de errores de escritura en el almacenamiento de bloque
- Adición de precisiones sobre la parte S3
- Incorporación de Veeam Kasten K10 para la migración y el respaldo de OpenShift
- Adición de la lista de permisos disponibles de OpenShift
- Adición de permisos y limitaciones de OpenShift
- Corrección del procedimiento de instalación de pfSense
- Inclusión de la orden de una AZ en el menú de órdenes
- Inclusión de la orden de un cluster de almacenamiento
- Modificación de la documentación sobre el ordenamiento de la red

## Versión 240709.1.39.1

- Añadido de la guía de instalación de un firewall Fortinet en la infraestructura Cloud Temple

## Versión 240705.1.38.2
- Agregación del RACI PaaS en la parte contractual

## Versión 240701.1.38.1
- Añadido de un FAQ sobre la oferta PaaS Openshift.

## Versión 240627.1.37.5
- Sección Paas Openshift: Añadimos detalles sobre la versión implementada y sobre los límites de software actuales.
- Sección Paas Openshift : Añadido un párrafo sobre la copia de seguridad de la plataforma Openshift.

## Versión 240625.1.37.4
- Sección Almacenamiento / Bloque: Añadida información adicional sobre el funcionamiento de los datastores en la oferta IaaS de VMware.
- Sección Computación / Oferta vmware: Ahora es posible modificar las propiedades de tipo vAPP de una máquina virtual en las propiedades avanzadas de la misma.
- Sección Respaldo: Cambio en el comportamiento del respaldo para las políticas de respaldo suspendidas ("held"); a partir de ahora, ya no es posible iniciar una máquina con una política de respaldo suspendida. Se añade una pregunta en la FAQ sobre este tema.
- Sección Respaldo: La política de restauración por defecto es ahora **TEST** para limitar los riesgos en la producción; 
- Sección Respaldo: Ahora es posible cambiar el nombre de la máquina virtual restaurada.

## Versión 240608.1.37.3

- Agregar la opción de cambiar el tipo de controlador de disco en una máquina virtual de la oferta IAAS-Vmware.
- Precisión sobre el límite de 20 redes por acción de propagación.
- Indicación de la duración del almacenamiento de eventos en la consola SHIVA (FAQ/General): 6 meses.

## Versión 240514.1.37.2

- Correcciones al DPA

## Versión 240514.1.37.1
- Adición de un párrafo sobre la descripción de los tratamientos al DPA.
- Añadido WINSCP como cliente compatible con S3.

## Versión 240514.1.37.0

- Añadido del documento "Datos de Carácter Personal" (DPA)

## Versión 240430.1.36.4
- Corrección de información sobre la oferta de cálculo vmware y el almacenamiento.

## versión 240430.1.36.3

- La oferta de [Cálculo v2](../iaas/compute.md/#offre-de-calcul-v2) ya no se comercializa y es reemplazada por la oferta de [Cálculo v3](../iaas/compute.md/#offre-de-calcul-v3).
- Se añade la descripción de [la suscripción a los canales de notificación temática](../console/accounts.md#abonnement-aux-notifications-thématiques).
- Se añade la [gestión de los accesos de red a sus buckets S3](../paas/s3.md#limitations-des-accès-à-vos-bucket-s3) y enriquecimiento de la [faq](../paas/s3.md#faq).
- La oferta IPV4 v1 ya no se comercializa y es reemplazada por la oferta IPV4 v2.
- Se añade la descripción de la [gestión de los accesos a internet](../network/internet.md#gestion-de-vos-connectivités-internet) desde la consola de Cloud Temple.
- Se añade la descripción del uso de direcciones *Proveedor Independiente*.
- Se añaden las unidades de trabajo de RedHat Openshift.
- Se añaden las unidades de trabajo de [alojamiento de tipo 'servidor'](../housing/housing.md).
- Se añade el seguimiento de [las operaciones planificadas e incidentes](../console/status.md) en la consola de Cloud Temple.
- Actualización de los [permisos](../console/permissions.md).