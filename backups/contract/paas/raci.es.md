---
title: Matriz de responsabilidad PaaS
---

Aquí está el modelo RACI que define la distribución de responsabilidades entre el cliente y Cloud Temple para el uso de las plataformas PaaS de Cloud Temple.

## Definición de los diferentes roles

Recordamos aquí los distintos roles del RACI:

| Rol         | Descripción                                                                           |
| ------------ | ------------------------------------------------------------------------------------- |
| (R) Realiza  | __R__ealiza el proceso                                                              |
| (A) Aprueba | __A__prueba la realización del proceso                                              |
| (C) Consulta | __C__onsultado durante el proceso                                                    |
| (I) Informado  | __I__nformado de los resultados del proceso (a través de las herramientas, el portal o la mensajería) |


## Configuración inicial
| Actividad                                                            | Rol del Cliente | Rol de Cloud Temple |
| -------------------------------------------------------------------- | --------------- | ------------------- |
| Definir la arquitectura global de la plataforma OpenShift            | C               | AR                  |
| Dimensionar la plataforma OpenShift (número de nodos, recursos)      | C               | AR                  |
| Instalar y configurar la plataforma OpenShift                        | I               | AR                  |
| Configurar la red básica de la plataforma OpenShift                  | I               | AR                  |
| Implementar la gestión de identidades y accesos para OpenShift       | C               | AR                  |
| Definir la estrategia de escalado y de alta disponibilidad           | C               | AR                  |

## Gestión de proyectos y aplicaciones
| Actividad                                          | Rol del Cliente | Rol de Cloud Temple    |
| -------------------------------------------------- | --------------- | ---------------------- |
| Crear y gestionar los proyectos OpenShift          | AR              | C                      |
| Desplegar y gestionar las aplicaciones en OpenShift| AR              | C                      |
| Configurar los pipelines CI/CD                     | AR              | C                      |
| Gestionar las imágenes de contenedores y registros | AR              | C                      |

## Mantenimiento y actualizaciones
| Actividad                                         | Rol del Cliente | Rol de Cloud Temple |
| -------------------------------------------------- | --------------- | ------------------- |
| Actualizar la plataforma OpenShift                 | I               | RA                  |
| Aplicar las actualizaciones de seguridad a OpenShift | I           | RA                  |
| Actualizar las aplicaciones desplegadas            | RA              | I                   |
| Administrar las actualizaciones de imágenes de contenedores | RA          | I                   |

## Monitorización y rendimiento
| Actividad                                            | Rol Cliente | Rol Cloud Temple  |
| ---------------------------------------------------- | ----------- | ----------------- |
| Supervisar el rendimiento de la plataforma OpenShift | I           | RA                |
| Supervisar el rendimiento de las aplicaciones        | RA          | I                 |
| Gestionar las alertas relacionadas con la plataforma | I           | RA                |
| Gestionar las alertas relacionadas con las aplicaciones | RA       | I                 |

## Seguridad
| Actividad                                                          | Rol Cliente | Rol Cloud Temple   |
| ------------------------------------------------------------------ | ----------- | ------------------ |
| Gestionar la seguridad de la plataforma OpenShift                  | I           | RA                 |
| Configurar y gestionar las políticas de seguridad de los pods      | RA          | C                  |
| Gestionar los certificados SSL/TLS para la plataforma              | I           | RA                 |
| Gestionar los certificados SSL/TLS para las aplicaciones           | RA          | C                  |
| Implementar y gestionar el control de acceso basado en roles (RBAC) | C           | RA                 |

## Copia de seguridad y recuperación después de desastres

| Actividad                                                              | Rol del Cliente | Rol de Cloud Temple |
| ---------------------------------------------------------------------- | --------------- | ------------------- |
| Definir la estrategia de respaldo para la plataforma OpenShift          | C               | RA                  |
| Implementar y gestionar las copias de seguridad de la plataforma        | I               | RA                  |
| Definir la estrategia de respaldo para las aplicaciones                 | RA              | C                   |
| Implementar y gestionar las copias de seguridad de las aplicaciones     | RA              | I                   |
| Probar los procedimientos de recuperación tras desastres para la plataforma | I           | RA                  |
| Probar los procedimientos de recuperación tras desastres para las aplicaciones | RA      | C                   |

## Soporte y resolución de problemas

| Actividad                                                         | Rol del Cliente | Rol de Cloud Temple |
| ----------------------------------------------------------------- | --------------- | ------------------- |
| Proporcionar soporte de nivel 1 para la plataforma OpenShift      | I               | RA                  |
| Proporcionar soporte de nivel 2 y 3 para la plataforma OpenShift | I               | RA                  |
| Resolver los problemas relacionados con la plataforma            | I               | RA                  |
| Resolver los problemas relacionados con las aplicaciones         | RA              | C                   |

## Gestión de la capacidad y evolución
| Actividad                                                | Rol del Cliente | Rol de Cloud Temple   |
| -------------------------------------------------------- | --------------- | --------------------- |
| Supervisar el uso de los recursos de la plataforma       | I               | RA                    |
| Planificar la evolución de las capacidades de la plataforma | C           | RA                    |
| Implementar los cambios de capacidad                     | I               | RA                    |
| Administrar la evolución de las aplicaciones y sus recursos | RA          | C                     |

## Documentación y conformidad
| Actividad                                                      | Rol del Cliente | Rol de Cloud Temple |
| -------------------------------------------------------------- | --------------- | ------------------- |
| Mantener la documentación de la plataforma OpenShift           | I               | RA                  |
| Mantener la documentación de las aplicaciones                  | RA              | I                   |
| Asegurar la conformidad de la plataforma con las normas de seguridad | I           | RA                  |
| Asegurar la conformidad de las aplicaciones con las normas de seguridad | RA          | C                   |
| Realizar auditorías de la plataforma                           | I               | RA                  |
| Realizar auditorías de las aplicaciones                        | RA              | C                   |