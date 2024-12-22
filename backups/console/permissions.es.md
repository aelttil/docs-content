---
title: Permisos de usuarios
---

La consola Shiva permite una gestión detallada de los derechos de los usuarios de una organización, con una segregación por tenant.
Inicialmente, es la cuenta principal del patrocinador la que permite la configuración inicial de las cuentas y de los permisos asociados.
Posteriormente, el derecho __'iam_write'__ permite que una cuenta administre los permisos de los demás usuarios.

## Permisos disponibles para los usuarios de su organización
Las siguientes permisiones son configurables para cada [usuario](accounts.md#affectation-des-permissions-à-un-utilisateur) y para cada [inquilino](tenants.md#selection-dun-tenant) de su organización.

- Las permisiones de tipo __'read'__ están asociadas a la consulta sin posibilidad de configuración
- Las permisiones de tipo __'write'__ están asociadas a la modificación de configuración.
- __Son permisiones, no roles.__ Como tal, es necesario tener permiso READ y WRITE para modificar una configuración.

__VERSIÓN : 20241007__

| Nombre de la permisión                          | Descripción de la permisión                                                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| activity_read                                   | Consulta de los registros logs y actividades                                                                                  |
| activity_write                                  | Gestión de los registros logs y actividades                                                                                   |
| backup_iaas_opensource_read                     | Gestión de recursos de tipo backup - Oferta OpenIaaS - consulta                                                               |
| backup_iaas_opensource_write                    | Gestión de recursos de tipo backup - Oferta OpenIaaS - modificación                                                           |
| backup_iaas_spp_read                            | Gestión de recursos de tipo backup - Oferta Vmware - consulta                                                                 |
| backup_iaas_spp_write                           | Gestión de recursos de tipo backup - Oferta Vmware - modificación                                                             |
| bastion_read                                    | Consulta de recursos de tipo bastión                                                                                          |
| bastion_write                                   | Gestión de recursos (aparatos, sesiones, ...) de tipo Bastión                                                                 |
| bastion_console_access                          | Autorización de acceso a la consola (ssh/rdp) de un recurso protegido por un aparato Bastión                                 |
| compute_iaas_opensource_console_access          | Oferta OpenIaaS - Apertura de la consola de una máquina virtual                                                               |
| compute_iaas_opensource_infrastructure_read     | Oferta OpenIaaS - Consulta de datos avanzados de los recursos Xen Orchestra                                                  |
| compute_iaas_opensource_infrastructure_write    | Oferta OpenIaaS - Gestión avanzada de los recursos Xen Orchestra                                                              |
| compute_iaas_opensource_read                    | Oferta OpenIaaS - Consulta de recursos de tipo Máquinas Virtuales                                                             |
| compute_iaas_opensource_management              | Oferta OpenIaaS - Gestión de recursos de tipo Máquinas Virtuales                                                              |
| compute_iaas_opensource_virtual_machine_power   | Oferta OpenIaaS - Gestión de la alimentación de una máquina virtual                                                           |
| compute_iaas_vmware_console_access              | Oferta Vmware - Apertura de la consola de una máquina virtual                                                                 |
| compute_iaas_vmware_infrastructure_read         | Oferta Vmware - Consulta de datos avanzados de los recursos VMware (reglas afinidad/anti-afinidad, configuración DRS, etc.)  |
| compute_iaas_vmware_infrastructure_write        | Oferta Vmware - Gestión avanzada de los recursos VMware                                                                       |
| compute_iaas_vmware_read                        | Oferta Vmware - Consulta de recursos de tipo Máquinas Virtuales                                                               |
| compute_iaas_vmware_management                  | Oferta Vmware - Gestión de recursos de tipo Máquinas Virtuales                                                                |
| compute_iaas_vmware_virtual_machine_power       | Oferta Vmware - Gestión de la alimentación de una máquina virtual                                                             |
| console_public_access_read                      | Consulta de las IPs autorizadas para acceder a la consola                                                                     |
| console_public_access_write                     | Añadir IPs autorizadas para acceder a la consola                                                                              |
| compute_virtual_machine_power                   | Gestión de la alimentación de una máquina virtual                                                                             |
| documentation_read                              | Consulta de recursos de documentación en confluence                                                                           |
| housing_read                                    | Consulta de recursos de tipo colocation                                                                                       |
| iam_offline_access                              | Creación y supresión de Token de Acceso Personal (PAT)                                                                        |
| iam_read                                        | Consulta de los derechos de usuarios                                                                                          |
| iam_write                                       | Gestión de los derechos de usuarios                                                                                           |
| intervention_read                               | Consulta de los cambios y puestas en producción previstas en la plataforma                                                    |
| inventory_read                                  | Consulta de recursos de tipo Inventario                                                                                       |
| inventory_write                                 | Gestión de recursos de tipo Inventario                                                                                        |
| monitoring_read                                 | Consulta del monitoreo                                                                                                        |
| monitoring_write                                | Gestión del monitoreo                                                                                                         |
| metric_read                                     | Consulta de datos de salud sobre las máquinas virtuales y host                                                                |
| network_read                                    | Consulta de los recursos de red                                                                                                |
| network_write                                   | Gestión de los recursos de red                                                                                                 |
| order_read                                      | Consulta de los pedidos de infraestructuras                                                                                    |
| order_write                                     | Creación de pedido de infraestructura                                                                                         |
| object-storage_iam_management                   | Permite gestionar cuentas de almacenamiento en el producto S3                                                                 |
| object-storage_read                             | Permite ver los buckets y las configuraciones de los buckets                                                                  |
| object-storage_write                            | Permite editar los buckets y las configuraciones de los buckets                                                               |
| openshift_management                            | Permite conectar en las plataformas Openshift (limitado al inquilino)                                                         |
| Owner                                           | El usuario tiene derechos de administración de un inquilino                                                                   |
| support_management                              | Consulta de todos los tickets de soporte del inquilino                                                                         |
| support_read                                    | Consulta de sus tickets de soporte del inquilino                                                                               |
| support_write                                   | Creación de un ticket de soporte para el inquilino                                                                             |
| tag_read                                        | Consulta de tags, excepto los tags RTMS                                                                                        |
| tag_write                                       | Gestión de tags, excepto los tags RTMS                                                                                         |
| ticket_comment_read                             | Consulta de comentarios                                                                                                       |
| ticket_comment_write                            | Gestión de comentarios                                                                                                        |
| ticket_read                                     | Consulta de tickets                                                                                                           |
| ticket_write                                    | Gestión de tickets                                                                                                            |

**Notas** :

- *No hay límite en cuanto al número de owners (propietarios) que pueden ser definidos en el inquilino. Sin embargo, la interfaz de gestión (IHM) emite una advertencia cuando hay más de 3 owners, con el fin de incentivar a limitar el número de propietarios por razones de seguridad y gestión óptima de accesos.*
- *Cuando se añade un nuevo propietario (owner), la actualización de sus permisos puede necesitar un tiempo de hasta 60 minutos. Este tiempo de propagación es normal y asegura que los derechos de acceso sean correctamente aplicados a todos los servicios y recursos asociados.*
- *Para retirar un propietario (owner) del inquilino, el usuario debe presentar una solicitud al soporte. Este procedimiento garantiza que los cambios en los derechos de acceso se realicen de manera segura y conforme a las mejores prácticas de gestión de accesos.*

## Permisiones obsoletas

Los siguientes permisos ya no están disponibles:

| Nombre del permiso                               | Fecha       | Descripción del permiso                                                                                         |
| ------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| backup_read (**DEPRECATED**)                     | 07/10/2024 | Consulta de recursos de tipo respaldo                                                                           |
| backup_write (**DEPRECATED**)                    | 07/10/2024 | Gestión de recursos de tipo respaldo - modificación                                                             |
| compute_console_access (**DEPRECATED**)          | 07/10/2024 | Apertura de la consola de una máquina virtual                                                                   |
| compute_infrastructure_read (**DEPRECATED**)     | 07/10/2024 | Consulta de datos avanzados de recursos VMware (reglas de afinidad/anti-afinidad, configuración de DRS, etc.)    |
| compute_infrastructure_write (**DEPRECATED**)    | 07/10/2024 | Gestión avanzada de los recursos VMware                                                                         |
| compute_read (**DEPRECATED**)                    | 07/10/2024 | Consulta de recursos de tipo Máquinas Virtuales                                                                 |
| compute_management (**DEPRECATED**)              | 07/10/2024 | Gestión de los recursos de tipo Máquinas Virtuales                                                              |
| compute_virtual_machine_power (**DEPRECATED**)   | 07/10/2024 | Gestión de la alimentación de una máquina virtual                                                               |
| iam_manage_permissions (**DEPRECATED**)          | 07/10/2024 | Gestión de nuevos derechos para uno mismo                                                                       |