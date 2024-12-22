---
title: Redhat Openshift
---

La oferta RedHat Openshift de Cloud Temple se basa en una arquitectura compuesta por Openshift y Openshift Data Foundation, distribuida en 3 zonas de disponibilidad en la región FR1-PARÍS.


## Presentación de RedHat Openshift
**Red Hat OpenShift** es una plataforma de contenedores para empresas que automatiza la implementación, administración y escalamiento de aplicaciones contenerizadas. Es una plataforma construida alrededor de Docker, un sistema de contenedores que permite empaquetar una aplicación y sus dependencias en un contenedor virtual, y de Kubernetes, un sistema de orquestación de contenedores, que administra la ejecución y coordinación de los contenedores en un clúster de servidores.

### Principales funciones de Red Hat OpenShift :
- **Despliegue y gestión automatizados:** OpenShift simplifica el proceso de despliegue de aplicaciones automatizando rutinas de gestión como el escalado, la salud y la duración de los contenedores. Proporciona un entorno integrado para el desarrollo, prueba y producción de aplicaciones.

- **Soporte de múltiples lenguajes y servicios:** La plataforma soporta una amplia variedad de lenguajes de programación (como Java, Node.js, Python, Ruby y PHP) y ofrece servicios integrados como mensajería, caching y bases de datos, lo que permite a los desarrolladores enfocarse en el código en lugar de en la infraestructura.

- **Integración continua (CI) y despliegue continuo (CD):** OpenShift integra herramientas de CI/CD que automatizan el canal de desarrollo de software, desde el commit inicial hasta el despliegue en producción, promoviendo así las prácticas DevOps.

- **Gestión de operaciones:** OpenShift proporciona herramientas para la monitorización, gestión de rendimiento y diagnóstico de aplicaciones e infraestructuras, ayudando a los operadores a mantener la salud y rendimiento de los sistemas.

- **Seguridad reforzada:** La plataforma está diseñada con seguridad integrada, ofreciendo controles de acceso basados en roles, separación de tareas y gestión automática de secretos para proteger las aplicaciones y los datos.

### Ventajas de Red Hat OpenShift:
- **Flexibilidad:** Los desarrolladores pueden trabajar con las herramientas, lenguajes y marcos de trabajo de su elección.
- **Eficiencia operativa:** OpenShift optimiza el uso de recursos, reduce el tiempo de comercialización y mejora la productividad de los desarrolladores.
- **Escalabilidad:** La plataforma gestiona automáticamente el escalado de las aplicaciones para responder a las variaciones de demanda.
- **Seguridad y cumplimiento:** Con sus políticas de seguridad integradas, OpenShift ayuda a mantener los estándares de seguridad y cumplimiento.

Red Hat OpenShift es una solución completa para el desarrollo, despliegue y gestión de aplicaciones contenerizadas, ofreciendo una plataforma robusta, segura y flexible para las empresas que adoptan enfoques modernos del desarrollo de software.

### RedHat Openshift Data Foundation
Red Hat OpenShift Data Foundation (ODF) es una solución integrada de almacenamiento y gestión de datos diseñada para funcionar de forma transparente con el ecosistema OpenShift. Ofrece una infraestructura de datos persistente, segura y altamente disponible para aplicaciones en contenedores, apoyando así los entornos de desarrollo modernos enfocados en contenedores y microservicios. ODF está diseñado para simplificar y automatizar la gestión de datos en entornos de nube híbrida y multinube, proporcionando una base sólida para aplicaciones empresariales críticas.

#### Funcionalidades Clave de OpenShift Data Foundation:
- **Almacenamiento Persistente:** ODF proporciona una capa de almacenamiento persistente para contenedores, fundamental para aplicaciones empresariales como bases de datos, sistemas de gestión de contenido y aplicaciones que requieren un estado persistente.

- **Multicloud e Híbrido:** Diseñado para el entorno híbrido y multicloud, ODF permite una experiencia de gestión de datos coherente a través de diferentes entornos de nube, facilitando la movilidad de aplicaciones y datos.

- **Automatización y Orquestación:** La integración profunda con Kubernetes y OpenShift permite que ODF automatice el aprovisionamiento, el escalado y la gestión del ciclo de vida del almacenamiento de acuerdo con las necesidades de las aplicaciones.

- **Alta Disponibilidad y Resiliencia:** ODF utiliza la replicación y la toma de instantáneas de datos para asegurar la alta disponibilidad y la durabilidad de los datos, esenciales para la continuidad de las operaciones empresariales.

- **Seguridad de los Datos:** La solución integra características de seguridad avanzadas, como el cifrado de datos en reposo y en tránsito, así como políticas de seguridad y cumplimiento personalizables.

#### Ventajas de OpenShift Data Foundation:

- **Flexibilidad Operacional:** ODF permite a las empresas gestionar sus datos de manera eficiente en entornos distribuidos, ofreciendo la flexibilidad necesaria para cumplir con los requerimientos cambiantes de las aplicaciones modernas.

- **Simplificación de la Gestión de Datos:** Automatizando muchas tareas de gestión de datos, ODF reduce la complejidad y libera recursos de IT para que se centren en iniciativas de mayor valor agregado.

- **Optimización de Costos:** La capacidad de ODF para adaptarse dinámicamente a las necesidades de almacenamiento ayuda a optimizar los costos al evitar el sobreaprovisionamiento y al utilizar los recursos disponibles de manera más eficiente.

- **Mejora del Rendimiento:** ODF está diseñado para proporcionar un alto rendimiento para las aplicaciones empresariales, con capacidades de optimización para diferentes tipos de carga de trabajo.

Red Hat OpenShift Data Foundation es una solución avanzada de almacenamiento de datos que mejora la eficiencia, la resiliencia y la seguridad de las aplicaciones empresariales implementadas en OpenShift. Al ofrecer un almacenamiento persistente, automatizado y seguro, ODF juega un rol crucial en el empoderamiento de las empresas para aprovechar completamente el potencial de las tecnologías de contenedores y la nube híbrida.

## Arquitectura general de la plataforma

### Generalidades
La plataforma Red Hat OpenShift de Cloud Temple está diseñada como una oferta regional, desplegada nativamente en **tres zonas de disponibilidad distintas** dentro de una misma región de Cloud Temple. Esta arquitectura tri-zonal incrementa significativamente la disponibilidad y la resiliencia de los datos.

La plataforma se compone de un plan de control y de nodos de trabajo, todos gestionados por la infraestructura de Cloud Temple. El plan de control se distribuye equitativamente entre las tres zonas de disponibilidad, asegurando una gestión centralizada y segura. Los nodos de trabajo, por su parte, están representados por servidores blade, dispuestos de tal manera que cada zona de disponibilidad contenga uno.

Para los nodos de trabajo, se disponen de varios tipos de servidores blade, permitiendo así una adaptación flexible a diversas necesidades operativas:

| Unidades de obra Redhat Openshift 4 with Data Foundations - On Demand - 1 mes                                               | Unidad                  | SKU                                   |
| :-------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------------------------------ |
| OPENSHIFT - Plan de control - 3 nodos - Región FR1                                                                          | 1 plan dedicado         | csp:fr1:paas:oshift:plan:payg:v1      |
| OPENSHIFT - NODOS DE TRABAJO - TINY - 3 x ( 10 núcleos / 20 hilos - 64 GB de ram - 512 GB FLASH 1500 iops)                  | 3 nodos de trabajo dedicados | csp:fr1:paas:oshift:wkr:tiny:payg:v1  |
| OPENSHIFT - NODOS DE TRABAJO - SMALL - 3 x ( 20 núcleos / 40 hilos - 128 GB de ram - 512 GB FLASH 1500 iops)               | 3 nodos de trabajo dedicados | csp:fr1:paas:oshift:wkr:small:payg:v1 |
| OPENSHIFT - NODOS DE TRABAJO - STANDARD - 3 x ( 32 núcleos / 64 hilos - 384 GB de ram - 512 GB FLASH 1500 iops)            | 3 nodos de trabajo dedicados | csp:fr1:paas:oshift:wkr:std:payg:v1   |
| OPENSHIFT - NODOS DE TRABAJO - ADVANCED - 3 x ( 48 núcleos / 96 hilos - 768 GB de ram - 512 GB FLASH 1500 iops)             | 3 nodos de trabajo dedicados | csp:fr1:paas:oshift:wkr:adv:payg:v1   |
| OPENSHIFT - NODOS DE TRABAJO - PERF - 3 x ( 56 núcleos / 112 hilos - 1.5 TB de ram - 512 GB FLASH 1500 iops)                | 3 nodos de trabajo dedicados | csp:fr1:paas:oshift:wkr:perf:payg:v1  |
| OPENSHIFT - NODOS DE TRABAJO - GPU - 3 x ( 32 núcleos / 64 hilos - 512 GB de ram - 512 GB FLASH 1500 iops - 2xNVIDIA L40S 48GB) | 3 nodos de trabajo dedicados + GPUs | csp:fr1:paas:oshift:wkr:gpu:payg:v1   |

Los productos Red Hat OpenShift de Cloud Temple están disponibles en pago por uso o con reserva de 12 meses.

**Notas**:

1. *El mantenimiento operacional y de seguridad del plan de control es responsabilidad de Cloud Temple como parte de un servicio PaaS.*

2. *A partir del 15 de junio de 2024, la versión 1 de la plataforma estará limitada programáticamente a un plan de control de 30 nodos de trabajo (independientemente del tipo de nodo) y a un almacenamiento persistente global de 50 TiB. Si estos límites son restrictivos para su proyecto, por favor contacte con el soporte.*

3. *Cada nodo de trabajo viene con 512 GB de almacenamiento flash Block, lo que suma 1.5 TiB para cada unidad de obra (1 nodo de trabajo por AZ).*

4. *La oferta PaaS Openshift incluye de forma nativa el acceso a las 3 zonas de disponibilidad, sin necesidad de suscribirse adicionalmente.*

5. *Es posible añadir más almacenamiento block al cluster Openshift más adelante.*

6. *Los nodos se despliegan de manera equilibrada entre las 3 zonas de disponibilidad (1 nodo por zona). No es posible desequilibrar un cluster asignando un mayor número de nodos a una sola zona.*

### Oferta RedHat desplegada en el marco de la plataforma Openshift Cloud Temple
La plataforma es una Redhat Openshift 4 basada en [RedHat Openshift Platform Plus](https://www.redhat.com/en/technologies/cloud-computing/openshift/platform-plus) e incluye [OpenShift DataFoundation Essential](https://www.redhat.com/en/resources/add-capabilities-enterprise-deployments-datasheet).

![](images/oshift_offert.jpg)

## Desplegar una plataforma Redhat Openshift dentro de su tenant

### Asignación de derechos de acceso
Es imprescindible que el administrador del [tenant](../console/tenants.md) otorgue el derecho de gestión de la plataforma Openshift al usuario administrador de Openshift para poder acceder a ella:

![](images/oshift_rights.png){:height="70%" width="70%"}

### Acceso al entorno Openshift dentro de un tenant
Después de asignar los permisos, el módulo '__Openshift__' aparece en el menú de la consola Cloud Temple :

![](images/oshift_menu_001.png)

Entonces verá aparecer los clústeres de Openshift que están desplegados dentro de su inquilino.

Haga clic en el clúster que desea administrar. Accederá al entorno de administración del clúster:

![](images/oshift_menu_002.png)

Después de la autenticación, puede administrar su clúster:

![](images/oshift_menu_003.png)

## Estrategia de respaldo para su plataforma PaaS Openshift
La copia de seguridad y la restauración de la plataforma PaaS Openshift son responsabilidad de Cloud Temple por la parte de **ETCD** como parte de la gestión de la plataforma. **La copia de seguridad y restauración para la parte de despliegue y datos aplicativos es responsabilidad del Mandante**.

RedHat Openshift Platform Plus incluye la **API de Protección de Datos de Openshift (OADP)** y ofrece de forma nativa **Velero**. Aquí encontrará la documentación completa sobre el tema (en inglés): [Backing up and restoring your OpenShift Container Platform cluster](https://docs.redhat.com/fr/documentation/openshift_container_platform/4.8/html/backup_and_restore/index). *(1)*

Cloud Temple ofrece como opción para sus clientes el servicio **Veeam Kasten K10** (Veeam [**Kasten K10**](https://www.veeam.com/fr/kubernetes-native-backup-and-restore.html)), una plataforma especializada en la gestión de datos para entornos Kubernetes. Diseñada para satisfacer las necesidades de protección de datos, proporciona características robustas para la copia de seguridad, restauración, migración y recuperación ante desastres. Kasten K10 se integra de manera nativa con los entornos Kubernetes, ya sean gestionados en clústeres en la nube o in situ, y puede adaptarse a diferentes casos de uso, incluyendo la migración de clústeres entre diferentes distribuciones de Kubernetes como Kubernetes Vanilla, VMware Tanzu, Red Hat Kubernetes Engine y Red Hat OpenShift.

Uno de los casos de uso principales de Kasten K10 es **la migración de clústeres entre diferentes plataformas Kubernetes**. Ya sea para pasar a una infraestructura más robusta o para consolidar los entornos existentes, Kasten K10 ofrece herramientas sencillas y eficientes para gestionar estas migraciones:

 - **Copia de seguridad y protección de datos**: al migrar un clúster Kubernetes Vanilla o VMware Tanzu a Red Hat Kubernetes Engine u OpenShift, el primer paso es respaldar los datos de las aplicaciones y sus estados. Kasten K10 se integra fácilmente con las API de Kubernetes para identificar las aplicaciones, sus dependencias, así como los volúmenes de datos asociados. Esto incluye la copia de seguridad de los volúmenes persistentes (Persistent Volumes - PV), las bases de datos, las configuraciones y los secretos. Kasten K10 es compatible con una amplia variedad de proveedores de almacenamiento (S3, Google Cloud Storage, Azure Blob Storage, etc.), lo que permite crear instantáneas de las aplicaciones a migrar. Estos respaldos se almacenan de forma segura, con opciones de cifrado y control de acceso granulares, asegurando la seguridad de los datos durante todo el proceso.

 - **Portabilidad y migración**: la migración entre distribuciones de Kubernetes como Vanilla o Tanzu y soluciones de Red Hat como OpenShift o Kubernetes Engine puede ser compleja debido a las diferencias de arquitecturas y configuraciones específicas de cada plataforma. Kasten K10 simplifica este proceso al proporcionar una capa de abstracción para la portabilidad de las aplicaciones. Durante la migración, Kasten K10 replica las configuraciones y los datos de un clúster de origen a un clúster de destino, considerando las especificidades de cada entorno. Por ejemplo, objetos de Kubernetes como ConfigMaps, Secrets, PV, así como los CRDs (Custom Resource Definitions) pueden ser migrados teniendo en cuenta las restricciones propias de cada distribución de Kubernetes, ya sea un clúster de Red Hat OpenShift o Kubernetes Engine. El proceso es automatizado, lo que reduce significativamente el riesgo de errores manuales. Además, Kasten K10 permite una migración gradual o completa, según las necesidades, y ofrece visibilidad en tiempo real sobre el estado de la migración, facilitando así la gestión y el monitoreo de la transición.

 - **Compatibilidad multicloud y multidistribución**: Kasten K10 está diseñado para funcionar en entornos híbridos y multicloud, lo que lo hace una herramienta ideal para las organizaciones que buscan migrar aplicaciones de clústeres Tanzu o Vanilla a entornos Red Hat en la nube (Cloud Temple, Amazon EKS, Azure AKS, Google GKE) o en infraestructuras in situ. Esto garantiza una flexibilidad máxima y permite a los equipos de DevOps elegir el mejor ambiente según las necesidades comerciales o las estrategias de modernización de infraestructuras.

 - **Gestión simplificada y automatización**: Kasten K10 ofrece una interfaz de usuario intuitiva que permite a los administradores gestionar fácilmente las operaciones de migración y copia de seguridad sin requerir un conocimiento profundo de cada plataforma Kubernetes. Además, está equipado con características de automatización que permiten definir políticas de migración y copia de seguridad recurrentes, integrándose con los pipelines CI/CD para operaciones continuas. Los usuarios pueden programar migraciones o restauraciones basándose en ventanas de mantenimiento, realizar pruebas de validación tras la migración y automatizar los procesos de conmutación por error en caso de problemas en el clúster de origen.

 - **Seguridad y cumplimiento**: en el contexto de migraciones hacia entornos críticos como Red Hat OpenShift o Kubernetes Engine, la seguridad de los datos y el cumplimiento de las normas (ISO, SOC, GDPR, etc.) son aspectos esenciales. Kasten K10 asegura el cifrado de datos en tránsito y en reposo, además de ofrecer opciones de auditoría y trazabilidad de las operaciones de copia de seguridad y restauración. Estas capacidades son esenciales para garantizar la seguridad de los datos migrados, ya sean en entornos de producción o pruebas. Kasten K10 es una solución imprescindible para las empresas que desean migrar de forma eficiente y segura clústeres Kubernetes Vanilla o VMware Tanzu a Red Hat Kubernetes Engine u OpenShift.

La facturación se realiza por el número de worker node.

| Unidades de obra Redhat Openshift 4 with Data Foundations - Solución de copia de seguridad para Worker Node | Unidad     | SKU                         |
| :-------------------------------------------------------------------------------------------------------- | :---------- | :-------------------------- |
| VEEAM - KASTEN K10 - Protección de datos y movilidad de aplicaciones Kubernetes                          | 3 workers | csp:fr1:paas:kasten:3wkr:v1 |
   
**Nota**: *Cuidado, el volumen de disco necesario para el buen funcionamiento de su copia de seguridad debe ser previsto en el ambiente de recepción de su copia de seguridad, generalmente en almacenamiento S3. No está incluido en las unidades de obra de Openshift o Kasten.*

**(1)** _OADP no está instalado de forma nativa en el clúster. Solo Kasten está habilitado para la gestión de migraciones, copias de seguridad y restauración_

## Derechos y Permisos
Aquí están los permisos principales implementados:

|       Grupo       |          API          |                                                                                       Permisos de Recursos                                                                                       |
|--------------------|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Core        |        ("")/Apps      | ConfigMaps, Endpoints, PersistentVolumeClaims, Pods, ReplicationControllers, Secrets, Services, DaemonSets, Deployments, ReplicaSets, StatefulSets, Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar |
|        Core        |          ("")         |                                                                                         Crear Secretos                                                                                          |
|config.kio.kasten.io|        Perfiles       |                                                                        Obtener, Listar, Ver, Crear, Actualizar, Aplicar parche, Eliminar                                                                         |
|config.kio.kasten.io|   Presets de Política, |                                           TransformSets, Vinculaciones de Esquema, Contextos de Seguridad de Almacenamiento, Vinculaciones de Contextos de Seguridad de Almacenamiento Obtener, Listar                                           |
|config.kio.kasten.io|          Todas        |                                                                                   (*) Todas las recursos Obtener, Listar                                                                                   |
|       Batch        |     CronJobs,         |                                                                       Trabajos Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                                       |
|    Autoscaling     |EscaladoresPodHorizontales|                                                                         Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                                          |
|     Networking     |       Ingresses,      |                                                                 Políticas de Red Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                                  |
|       Policy       | PresupuestosInterrupciónPod|                                                                         Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                                          |
|       Route        |      (OpenShift)      |                                                                    Rutas Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                                    |
|       Build        |      (OpenShift)      |                                              Configuraciones de Construcción, Construcciones, Registros de Construcción Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                              |
|       Image        |      (OpenShift)      |                                                Flujos de Imágenes, Etiquetas de Flujos de Imágenes Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                 |
|        Apps        |      (OpenShift)      |                                                                Configuraciones de Despliegue Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                                |
|      Template      |      (OpenShift)      |                                                       Plantillas, Instancias de Plantilla Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                       |
|   Authorization    |         Roles,        |                                                                   Vinculaciones de Rol Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                                   |
|        RBAC        |         Roles,        |                                                                   Vinculaciones de Rol Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                                   |
|      Project       |      (OpenShift)      |                                                                               Proyectos Obtener, Eliminar, Actualizar, Aplicar parche                                                                               |
|     Operators      |    Suscripciones,     |                                    Versiones de Servicio de Clúster, Orígenes de Catálogo, Planes de Instalación, Grupos de Operadores Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                    |
|    Cert-Manager    |     Certificados,     |                                        Solicitudes de Certificados, Emisores, Emisores de Clúster Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                         |
|      Logging       |      (OpenShift)      |                                            Encaminadores de Log de Clúster, Registración de Clúster Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                             |
|      Storage       |   InstantáneasVolumen  |                                                                       Obtener, Listar, Ver, Crear, Actualizar, Aplicar parche, Eliminar                                                                        |
|        Ceph        |         (Rook)        |                                Clústeres Ceph, Piscinas Bloque Ceph, Sistemas Archivo Ceph, Tiendas Objeto Ceph Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                |
|       NooBaa       |   Almacenes Respaldo,  |                                                    Clases de Cubo, Cuentas NooBaa Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                     |
|    CubetaObjeto    |ReclamacionesCubetaObjeto,|                                                                Cubetas de Objeto Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                                 |
|        OCS         |      (OpenShift)      |                                                  Clústeres de Almacenamiento, Consumidores de Almacenamiento Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                  |
|       Local        |     Almacenamiento    |                                               Volúmenes Locales, Descubrimientos de Volumen Local Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                               |
|        CSI         |       Complementos    |                                                Nodos CSIAddons, Cercas de Red Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                                |
|      Metrics       |         Pods,         |                                                                                           Nodos Obtener                                                                                            |
|      Security      |RevisionesPolíticaSeguridadPod|                                                                                              Crear                                                                                              |
|       Custom       |     Recursos          |                                       Diversos recursos personalizados relacionados con Kasten K10, Keycloak, etc. Crear, Obtener, Listar, Ver, Actualizar, Aplicar parche, Eliminar                                       |

## Limitaciones actuales de la oferta Redhat Openshift en entorno SecNumCloud


Aquí hay algunas limitaciones inducidas por la certificación SecNumCloud:

### Plan de control dedicado
Las cargas de trabajo no pueden ser ejecutadas en el plano de control debido a las restricciones inherentes a la gestión de recursos y a la seguridad de la plataforma OpenShift en SecNumCloud.

### Prohibición de desplegar imágenes con privilegios elevados (sin raíz)
Para cumplir con los requisitos de seguridad del repositorio SecNumCloud, es obligatorio utilizar contenedores sin privilegios (rootless).

Este enfoque refuerza la seguridad global impidiendo cualquier acceso privilegiado a los contenedores. Las aplicaciones que requieran contenedores con privilegios deberán ser modificadas, ya que no se permitirá su despliegue.

Esta restricción se extiende también a los Helm Charts y los operadores que usen imágenes no rootless, haciendo su despliegue imposible dentro de la infraestructura.

### Restricciones sobre los derechos de los ClusterRole
En el marco de nuestra oferta OpenShift, implementamos una gestión rigurosa de los derechos de acceso en el nivel del clúster, de acuerdo con los requisitos de SecNumCloud.

Este enfoque implica una limitación de los ClusterRoles para nuestros clientes, restringiendo así ciertos aspectos de la gestión global del clúster. Aunque esta medida inicialmente puede parecer restrictiva, su objetivo es fortalecer la seguridad y la estabilidad de la infraestructura.

Somos conscientes de que esto puede generar desafíos técnicos, en particular en la configuración de parámetros avanzados, y posiblemente implicaciones relacionadas con la adaptación de sus aplicaciones o con la adquisición de herramientas complementarias.

Nuestro equipo de soporte está disponible para guiarlos y asesorarlos sobre este tema.

### El contexto SCC no se puede modificar en el entorno SecNumCloud
Las **Security Context Constraints (SCC)** están sometidas a estrictas restricciones y no pueden modificarse por los usuarios. Esta limitación tiene repercusiones significativas en la implementación y la ejecución de los contenedores.

En la práctica, esto significa que los parámetros de ejecución de los contenedores, como los privilegios de acceso al sistema o las capacidades de Linux, están predefinidos y no son personalizables.

Esta medida, motivada por requisitos de seguridad, busca prevenir cualquier acceso no autorizado a los recursos críticos del clúster. Por consiguiente, las aplicaciones que requieren contextos de seguridad específicos, incluyendo aquellas que necesitan acceso privilegiado, pueden enfrentar obstáculos durante la implementación.

Desde un punto de vista técnico, esto puede implicar una revisión en la arquitectura de las aplicaciones y una adaptación de los procesos de implementación para cumplir con las SCC predefinidas. Operacionalmente, esta restricción puede disminuir la flexibilidad de las implementaciones y aumentar la complejidad en la gestión de ciertas aplicaciones dentro del entorno de OpenShift, en particular aquellas que utilizan **Helm Charts** o **operadores** que no cumplen con las SCC vigentes.

### Limitaciones de los **Helm charts** que crean **Custom Resource Definitions (CRDs)**
Para cumplir con la calificación SecNumCloud, una restricción importante concierne el uso de las Custom Resource Definitions (CRDs) y los controladores personalizados. Esta medida, relacionada con los derechos sobre el clúster, tiene como objetivo prevenir el despliegue de recursos personalizados potencialmente inestables o no autorizados.

Esta limitación se aplica también a los operadores y los Helm Charts, con un impacto directo sobre los derechos RBAC, ya que los CRDs permiten extender la API de Kubernetes. Por lo tanto, los operadores y Helm Charts deben pasar por una cadena de certificación con nuestros servicios para garantizar su conformidad y seguridad.

Las CRDs personalizadas, en particular aquellas que responden a necesidades de negocios específicas, pueden ser rechazadas en la infraestructura debido a los riesgos que presentan para la estabilidad y la seguridad de la plataforma. Esta política, diseñada para proteger la integridad y la fiabilidad del clúster, solo autoriza las CRDs provenientes de operadores o de Helm Charts oficialmente certificados.

Nuestro equipo de soporte está disponible para guiarlos y aconsejarlos sobre las mejores prácticas a adoptar en este marco.

### No hay soporte de IPs Dinámicas para los runners
La plataforma OpenShift SecNumCloud requiere que los runners estén configurados con direcciones IP fijas. Esta exigencia está motivada por la necesidad de autorizar las IPs que gestionan nuestra consola Cloud Temple, necesaria para la herramienta de gestión de acceso a las API. Las direcciones IP autorizadas también se utilizan para acceder a la API de OpenShift así como a las interfaces de administración de OpenShift y de Shiva.

Por lo tanto, el uso de direcciones IP dinámicas no está soportado para estos componentes, imponiendo la configuración de IPs fijas para garantizar la seguridad y el acceso a las API.

## Balanceadores de carga
El entorno SecNumCloud Openshift ofrece opciones de Equilibrio de Carga (Load Balancing) en distintos niveles para garantizar una gestión segura y eficaz del tráfico. La API del Equilibrio de Carga es accesible através de los puertos 6443 y 443, con un control de seguridad asegurado por una lista blanca gestionada por la consola Cloud Temple. Esta API utiliza una dirección IP pública conectada a nuestro backbone, pero no está accesible por defecto, lo que refuerza así la seguridad de los accesos.

Para el Equilibrio de Carga privado, el entorno utiliza Ingress (nginx) como solución por defecto, lo que permite gestionar el tráfico interno de forma eficaz. Además, se dispone de soporte TCP a través de la infraestructura IaaS de Cloud Temple, ofreciendo así una flexibilidad adicional para las aplicaciones que requieren un equilibrio de carga a este nivel.

En cuanto al Equilibrio de Carga público, el soporte de nivel 4 se asegura a través de Ingress, aunque actualmente existen algunas limitaciones con el comando "expose". Esto significa que el sistema es capaz de manejar conexiones TCP y UDP de manera fiable mientras continúa evolucionando para ofrecer una mayor compatibilidad y flexibilidad.

## Próximas características
Las próximas características que se incorporarán en el entorno de SecNumCloud incluyen varias mejoras: se aplicará un certificado personalizado a nivel del espacio de nombres, y KubeVirt se integrará para una mejor gestión de las máquinas virtuales.

En lo que respecta a las conexiones TCP, se dispondrá de un rango de puertos predeterminado (de 30000 a 32767).

La consola de Cloud Temple se utilizará para la administración de los nodos, con actualizaciones previstas para la interfaz de OpenShift. La adición de nodos se facilitará por medio del comando 'Order', mientras que su retiro se realizará a través de un ticket ante los servicios profesionales.

La interconexión de flujos privados PaaS hacia la infraestructura IaaS de Cloud Temple también será posible, mejorando la gestión de los flujos salientes de OpenShift.

Está programada la integración de OpenShift IAM con la consola de Cloud Temple, así como la implementación de Hapee (HAProxy) frente al Load Balancer público. Por último, el soporte para GPU estará disponible en OpenShift a través del Operador de IA de OpenShift y watsonx.ai, permitiendo aplicaciones de inteligencia artificial en la plataforma.