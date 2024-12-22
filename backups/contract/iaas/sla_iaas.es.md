---
título: Convenio de Servicio IaaS
---

![Logo Cloud Temple](images/ct.png)

# 1. **CONVENIO DE SERVICIOS IaaS**
| **Destinatarios :**                  | **CLIENTE**                                     |
| :----------------------------------- | :---------------------------------------------- |
| **Referencia del documento**         | CT.AM.JUR.ANX - 20240403_v2.0.docx_Jour JJ AAAA |
| **Sus interlocutores**               | *Nombre* *Apellido*                             |
|                                      | Gestor de Cuentas                               |
|                                      | e-mail : *nombre.apellido*@cloud-temple.com     |
| **Fecha de la última actualización** | 03/04/2024                                      |
| **Fecha de validación contractual**  | Día DD AAAA                                     |


----------------------------------------------------------------------------------

| **Versión** | **Fecha**   | **Acción**                               | **Autor**        |
| ----------- | ---------- | ---------------------------------------- | --------------- |
| v0.1        | 07/06/2022 | Redacción inicial                        | Lorena ALCALDE  |
| v0.2        | 14/09/2022 | Enriquecimiento                          | Lorena ALCALDE  |
| v1.0        | 30/12/2022 | Integración de Indicadores               | Lorena ALCALDE  |
| v1.1        | 23/01/2023 | Modificación del pie de página           | Lorena ALCALDE  |
| v1.2        | 22/05/2023 | Enriquecimiento                          | Lorena ALCALDE  |
| v1.3        | 29/06/2023 | Enriquecimiento                          | Lorena ALCALDE  |
| v1.4        | 06/11/2023 | Modificación de Capital y Enriquecimiento| Lorena ALCALDE  |
| v1.5        | 30/11/2023 | Enriquecimiento                          | Lorena ALCALDE  |
| v1.6        | 21/03/2024 | Enriquecimiento                          | Lorena ALCALDE  |
| v2.0        | 29/03/2024 | Ajustes de conformidad SNC               | Nicolas ABRIOUX |
| v2.0        | 03/04/2024 | Publicación                              | Lorena ALCALDE  |


----------------------------------------------------------------------------------

# 2. **ÍNDICE DE CONTENIDOS**
- [1. **CONVENIO DE SERVICIOS IaaS**](#1-convenio-de-servicios-iaas)
- [2. **ÍNDICE DE CONTENIDOS**](#2-índice-de-contenidos)
- [3. Preliminar y Glosario](#3-preliminar-y-glosario)
  - [3.1. Preliminar](#31-preliminar)
  - [3.2. Glosario](#32-glosario)
- [4. Acrónimos](#4-acrónimos)
- [5. Objeto del presente Contrato de servicio](#5-objeto-del-presente-contrato-de-servicio)
- [6. Auditoría](#6-auditoría)
- [7. Descripción del Servicio](#7-descripción-del-servicio)
  - [7.1. Modelo de responsabilidad compartida](#71-modelo-de-responsabilidad-compartida)
  - [7.2. Presentación detallada del ámbito del Servicio](#72-presentación-detallada-del-ámbito-del-servicio)
    - [7.2.1. Infraestructuras Datacenters](#721-infraestructuras-datacenters)
    - [7.2.2. Infraestructura de software para la gestión del Servicio](#722-infraestructura-de-software-para-la-gestión-del-servicio)
    - [7.2.3. Infraestructuras de cálculo](#723-infraestructuras-de-cálculo)
    - [7.2.4. Infraestructura de almacenamiento](#724-infraestructura-de-almacenamiento)
    - [7.2.5. Infraestructura de red global](#725-infraestructura-de-red-global)
    - [7.2.6. Infraestructura de respaldo](#726-infraestructura-de-respaldo)
    - [7.2.7. Implementación de soluciones de recuperación de actividad o de continuidad de actividad](#727-implementación-de-soluciones-de-recuperación-de-actividad-o-de-continuidad-de-actividad)
  - [7.3. Limitaciones de los servicios en el modelo IaaS calificado](#73-limitaciones-de-los-servicios-en-el-modelo-iaas-calificado)
    - [7.3.1. Servicios gestionados en RUN](#731-servicios-gestionados-en-run)
    - [7.3.2. Configuración de respaldo](#732-configuración-de-respaldo)
    - [7.3.3. Configuración de la copia de seguridad](#733-configuración-de-la-copia-de-seguridad)
  - [7.4. Implementación del servicio](#74-implementación-del-servicio)
    - [7.4.1. Requisitos técnicos](#741-requisitos-técnicos)
  - [7.5. Localización del servicio en Francia](#75-localización-del-servicio-en-francia)
    - [7.5.1. Localización de los Datacenters que alojan el Servicio](#751-localización-de-los-datacenters-que-alojan-el-servicio)
    - [7.5.2. Localización de las agencias Cloud Temple que operan el servicio](#752-localización-de-las-agencias-cloud-temple-que-operan-el-servicio)
  - [7.6. Soporte](#76-soporte)
    - [7.6.1. Naturaleza del soporte que acompaña el servicio](#761-naturaleza-del-soporte-que-acompaña-el-servicio)
    - [7.6.2. Solicitud del servicio de soporte técnico](#762-solicitud-del-servicio-de-soporte-técnico)
    - [7.6.3. Proceso de gestión de Incidentes](#763-proceso-de-gestión-de-incidentes)
    - [7.6.4. Proceso de priorización de tratamientos](#764-proceso-de-priorización-de-tratamientos)
    - [7.6.5. Idioma y localización del servicio de soporte](#765-idioma-y-localización-del-servicio-de-soporte)
- [8. Compromisos y niveles de servicios](#8-compromisos-y-niveles-de-servicios)
  - [8.1. Compromisos de disponibilidad de la infraestructura](#81-compromisos-de-disponibilidad-de-la-infraestructura)
  - [8.2. Compromiso de disponibilidad de la interfaz del CONTRATANTE](#82-compromiso-de-disponibilidad-de-la-interfaz-del-contratante)
  - [8.3. Compromiso de disponibilidad del soporte](#83-compromiso-de-disponibilidad-del-soporte)
  - [8.4. Compromiso de disponibilidad del almacenamiento objeto S3](#84-compromiso-de-disponibilidad-del-almacenamiento-objeto-s3)
  - [8.5. Precisión relativa al compromiso de respaldo](#85-precisión-relativa-al-compromiso-de-respaldo)
- [9. Organización de la relación contractual](#9-organización-de-la-relación-contractual)
  - [9.1. Responsabilidades del Proveedor](#91-responsabilidades-del-proveedor)
  - [9.2. Limitación de responsabilidades del Proveedor](#92-limitación-de-responsabilidades-del-proveedor)
  - [9.3. Limitación de acceso](#93-limitación-de-acceso)
  - [9.4. Responsabilidades de terceros participando en la prestación del servicio Secure Temple](#94-responsabilidades-de-terceros-participando-en-la-prestación-del-servicio-secure-temple)
  - [9.5. Responsabilidades y obligaciones del PATROCINADOR](#95-responsabilidades-y-obligaciones-del-patrocinador)
  - [9.6. Derechos del CLIENTE](#96-derechos-del-cliente)
  - [9.7. Eliminación de los datos al finalizar el Contrato](#97-eliminación-de-los-datos-al-finalizar-el-contrato)
- [10. Ciclo de vida del presente Convenio de servicio](#10-ciclo-de-vida-del-presente-convenio-de-servicio)
  - [10.1. Entrada en vigor del Convenio de Servicio](#101-entrada-en-vigor-del-convenio-de-servicio)
  - [10.2. Evoluciones de la Convención de servicio](#102-evoluciones-de-la-convención-de-servicio)
    - [10.2.1. Evoluciones desencadenadas por el PROMOTOR](#1021-evoluciones-desencadenadas-por-el-promotor)
    - [10.2.2. Evoluciones iniciadas por el Proveedor](#1022-evoluciones-iniciadas-por-el-proveedor)
  - [10.3. Reversibilidad](#103-reversibilidad)
- [11. Disponibilidad, continuidad y restauración del servicio](#11-disponibilidad-continuidad-y-restauración-del-servicio)
  - [11.1. Gestión de Incidencias e Interrupciones](#111-gestión-de-incidencias-e-interrupciones)
    - [11.1.1. Incidentes](#1111-incidentes)
      - [11.1.1.1. Tipos de Incidentes tratados en el marco de este Convenio de Servicio](#11111-tipos-de-incidentes-tratados-en-el-marco-de-este-convenio-de-servicio)
      - [11.1.1.2. Tratamiento de incidentes](#11112-tratamiento-de-incidentes)
      - [11.1.1.3. Nivel de notificación de los Incidentes de seguridad](#11113-nivel-de-notificación-de-los-incidentes-de-seguridad)
  - [11.2. Mantenimiento del Servicio](#112-mantenimiento-del-servicio)
    - [11.2.1. Naturaleza del mantenimiento](#1121-naturaleza-del-mantenimiento)
    - [11.2.2. Accesos remotos de Cloud Temple al ámbito del COMANDITARIO](#1122-accesos-remotos-de-cloud-temple-al-ámbito-del-comanditario)
    - [11.2.3. Accesos remotos de terceros involucrados en la provisión del servicio en el ámbito del COMITENTE](#1123-accesos-remotos-de-terceros-involucrados-en-la-provisión-del-servicio-en-el-ámbito-del-comitente)
- [12. Procedimiento de borrado de datos al final del Contrato](#12-procedimiento-de-borrado-de-datos-al-final-del-contrato)
- [13. Derecho aplicable](#13-derecho-aplicable)
  - [13.1. De manera general](#131-de-manera-general)
  - [13.2. Respeto de la ley y de las regulaciones aplicables](#132-respeto-de-la-ley-y-de-las-regulaciones-aplicables)
  - [13.3. RGPD](#133-rgpd)
  - [13.4. Protección frente al derecho extracomunitario](#134-protección-frente-al-derecho-extracomunitario)
- [14. FIRMAS](#14-firmas)

----------------------------------------------------------------------------------

# 3. Preliminar y Glosario
## 3.1. Preliminar
El presente documento formaliza el Convenio de servicio asociado al servicio IaaS calificado SecNumCloud con el nombre de « *Templo Seguro* ».

"El presente convenio de servicio complementa y es complementario a las condiciones generales de venta y uso del Proveedor. Se entiende que los documentos contractuales se interpretan de manera coherente entre ellos. En caso de contradicción o divergencia entre los términos de los documentos contractuales, los documentos prevalecerán unos sobre otros en el siguiente orden:

1. Condiciones Generales de Venta y Uso (CGVU)
2. Convenio de Servicio SecNumCloud IaaS
3. Convenio de Servicio SecNumCloud PaaS
4. Convenio específico particular
5. Plan de Aseguramiento de Seguridad (PAS)
6. Condiciones Particulares de Uso (CPU)

## 3.2. Glosario

En la presente Convención de servicio, el **PATROCINADOR**, el **Proveedor** y las **Partes** están identificados en el Contrato al cual está anexa la presente Convención de servicio.

Las expresiones a continuación empleadas en la presente Convención de servicio serán interpretadas conforme a las definiciones que se les atribuyen a continuación:

-   **Cambio:** Cualquier adición, modificación o eliminación que tenga un impacto en el Servicio, que haya sido autorizado, planificado o gestionado.

-   **Cambio estándar :** Cambio que sigue un procedimiento, cuyas modalidades de implementación y los impactos (incluyendo financieros) son conocidos y aceptados de antemano por las Partes. Luego es integrado al catálogo de cambios estándar, y puede según los casos tener un GTI y un GTR. 

-   **Contrato:** designa el contrato suscrito por el PATROCINADOR con el Proveedor para permitir al PATROCINADOR beneficiarse del Servicio, y al cual está anexa la presente Convención de servicio.

-   ***Convención de servicio:** Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Utilización (CGVU), y esto, de conformidad con los requisitos del Referencial SecNumCloud.

-   **Solicitud de servicio :** solicitud del PATROCINADOR hacia el Proveedor en el marco del Servicio, cubriendo las operaciones no realizables por el PATROCINADOR desde la interfaz PATROCINADOR y las solicitudes de soporte en el marco del Servicio. Las solicitudes de servicio están limitadas a aquellas previstas en el título del Contrato o de la presente Convención de servicio.

-   **Disponibilidad :** Capacidad de asegurar la disponibilidad y el mantenimiento de las prestaciones óptimas del Servicio, de acuerdo con los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).

-   **Datos técnicos** : comprende el conjunto de datos manipulados para entregar el Servicio, notablemente cuya identidad de los beneficiarios y de los administradores de la infraestructura técnica, registros de la infraestructura técnica, configuración de los accesos, directorio, certificados...

-   **Evento :** Un "evento" es toda ocurrencia detectable o identificable que pueda tener importancia para la gestión del Servicio.

-   **Hipervisor :** sistema operativo que permite la ejecución de máquinas virtuales en una unidad de cálculo.

-   **Incidente :** Cualquier evento imprevisto que interrumpe el funcionamiento normal del Servicio o compromete la seguridad de los datos.

-   **Incidente de seguridad :** Cualquier evento en el ámbito del Servicio:

    -   De naturaleza intencionadamente maliciosa;
    -   De naturaleza accidental que comprometa la integridad, la confidencialidad o la trazabilidad del Servicio o de los datos del PATROCINADOR;
    -   Que afecte a las medidas de seguridad existentes.
    Las afectaciones a la Disponibilidad de origen no malicioso no se consideran como un Incidente de seguridad (avería de hardware, bug, mal funcionamiento, desastre natural...).

-   **Interfaz PATROCINADOR :** Interface de administración del Servicio puesta a disposición del PATROCINADOR por el Proveedor, agrupando una consola de administración web y una API.

-   **Puesta en producción :** acción(es) de administración de realización del Cambio cuando este es aprobado (el cambio, en el sentido ITIL, refiriéndose solo a la gestión del cambio y no su realización/concretización).

-   **Problema** : causa de uno o varios Incidentes recurrentes, causa de un Incidente potencial (situación de riesgo).

-   **Región :** designa un conjunto geográficamente delimitado de zonas de disponibilidad en la nube, proporcionando servicios de red, de cálculo y de almacenamiento para optimizar la latencia, el rendimiento y la conformidad regulatoria local.

-   **Servicio :** designa el servicio IaaS calificado SecNumCloud « Secure Temple », entregado al PATROCINADOR por el Proveedor desde infraestructuras técnicas mantenidas por el Proveedor, tal como se describe en la sección « Descripción del Servicio » de la presente Convención de servicio.

-   **Secure Temple** : designa el servicio IaaS calificado SecNumCloud, propuesto por la empresa Cloud Temple, tal como está definido en la certificación consultable en el sitio de la ANSSI y proporcionada en anexo de la presente Convención de servicio.

-   **Sinistro :** designa un evento grave de origen natural o humano, accidental o intencional, que provoca pérdidas y daños importantes a la Parte damnificada.

-   **Supervisión :** Vigilancia de un Sistema de Información o de un Servicio, implicando la recolección de diversos datos como mediciones y alarmas. Esta actividad se limita a la observación y seguimiento, sin intervenir directamente sobre los elementos vigilados, una prerrogativa que pertenece a las operaciones de Administración.

-   **Tenant :** Una instancia aislada reservada a un usuario o grupo de usuarios, compartiendo una infraestructura común manteniendo la independencia y la seguridad de los datos y aplicaciones.

-   **Zona de Disponibilidad (AZ) (Zona de disponibilidad) :** Una sección específica y aislada de la infraestructura de computación en la nube, diseñada para asegurar la alta disponibilidad y la resiliencia de los servicios mediante una distribución geográfica de recursos.

# 4. Acrónimos

  | **Acrónimo** | **Definición**                                                                                         |
  | ------------ | :------------------------------------------------------------------------------------------------------ |
  | **CAB**      | Change Advisory Board -- Comité consultivo sobre cambios                                               |
  | **CMDB**     | Configuration Management Database -- Base de datos de gestión de configuraciones                       |
  | **COPIL**    | Comité de dirección                                                                                   |
  | **COSTRAT**  | Comité estratégico                                                                                     |
  | **COPROJ**   | Comité de Proyecto                                                                                     |
  | **DB**       | Database (base de datos)                                                                               |
  | **DRP**      | Disaster Recovery Plan -- Plan de recuperación de desastres                                            |
  | **GTE**      | Garantía de Tiempo de Escalada                                                                         |
  | **GTI**      | Garantía de Tiempo de Intervención                                                                     |
  | **GTR**      | Garantía de Tiempo de Resolución                                                                       |
  | **ITIL**     | Information Technology Infrastructure Library -- Mejores prácticas para la gestión de los sistemas de información |
  | **IaaS**     | Infrastructure as a Service -- Infraestructura como Servicio                                           |
  | **MCO**      | Mantenimiento en condición operacional                                                                 |
  | **MOA**      | Maestría de Obra Pública                                                                               |
  | **MOE**      | Maestría de Obra Ejecutora                                                                             |
  | **MSP**      | Proveedor de Servicios Gestionados                                                                     |
  | **OS**       | Operating System -- Sistema operativo                                                                  |
  | **PAQ**      | Plan de Aseguramiento de Calidad                                                                       |
  | **PaaS**     | Platform as a Service -- Plataforma como Servicio                                                      |
  | **PAS**      | Plan de Aseguramiento de Seguridad                                                                      |
  | **PASSI**    | Proveedor de Servicios de Auditoría de Seguridad de los Sistemas de Información                       |
  | **RFC**      | Request For Change -- Solicitud de cambio                                                              |
  | **RGPD**     | Reglamento General de Protección de Datos                                                              |
  | **RPO**      | Recovery Point Objective -- Objetivo del Punto de Recuperación de datos en caso de desastre            |
  | **RTO**      | Recovery Time Objective -- Objetivo del Tiempo de Recuperación del servicio en caso de desastre         |
  | **SDM**      | Service Delivery Manager -- Gerente de Entrega de Servicios                                            |
  | **SLA**      | Service Level Agreement -- Acuerdo sobre los Niveles de Servicio                                       |
  | **SNC**      | SecNumCloud                                                                                           |
  | **SOC**      | Centro de Operaciones de Seguridad                                                                     |
  | **TMA**      | Mantenimiento de Tercera de Aplicaciones                                                               |
  | **UO**       | Unidad de Obra                                                                                        |
  | **VABE**     | Validación de Aptitud para la Buena Explotabilidad                                                     |
  | **VABF**     | Validación de Aptitud para el Buen Funcionamiento                                                      |
  | **VM**       | Virtual Machine -- Máquina virtual                                                                     |
  | **VSR**      | Validación de Servicio Regular                                                                         |

# 5. Objeto del presente Contrato de servicio
El presente Convenio de servicio establece los términos y condiciones según los cuales el Proveedor se compromete a entregar el Servicio al
COMITENTE. Su objeto es:

-   Especificar las expectativas de rendimiento que el COMITENTE tiene en términos de funcionalidad y fiabilidad del Servicio;

-   Declarar las obligaciones del Proveedor para cumplir con los niveles de servicio acordados;

-   Identificar las normas reglamentarias aplicables específicamente al Servicio entregado;

-   Asegurar la uniformidad e integridad en la evaluación de la calidad del Servicio;

-   Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en el caso de que al Proveedor se le retire su calificación de SecNumCloud, el Contrato podrá ser rescindido de
pleno derecho, sin incurrir en penalizaciones, por el COMITENTE. En tal eventualidad, el Proveedor se compromete a informar al COMITENTE
de dicha descalificación enviando una notificación oficial, mediante una carta certificada con solicitud de acuse de recibo.

Cabe señalar que una modificación o un ajuste de la calificación de SecNumCloud no se interpretará como una revocación de
la calificación inicial.

# 6. Auditoría


El Proveedor se compromete a permitir al MANDANTE, o a cualquier auditor tercero y no competidor del Proveedor que este último hubiere designado, consultar todos los documentos necesarios para constatar el pleno respeto de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

Por la aceptación del presente Convenio de servicio, el MANDANTE confiere su autorización explícita a:

1. La Agencia Nacional de la Seguridad de los Sistemas de Información (ANSSI) así como a la entidad de calificación competente para emprender la verificación de la conformidad del Servicio y de su sistema de información al estándar SecNumCloud.
2. Un prestador de auditoría de la seguridad de los sistemas de información, debidamente calificado PASSI y expresamente designado por el Proveedor, para llevar a cabo auditorías de seguridad sobre el Servicio.

# 7. Descripción del Servicio
## 7.1. Modelo de responsabilidad compartida
El Servicio propuesto por el Proveedor se caracteriza por proporcionar las siguientes prestaciones, las cuales se alinean con el
principio de responsabilidad compartida presentado en el marco de referencia SecNumCloud:

-   La provisión de recursos de cómputo;

-   La disponibilidad de espacios de almacenamiento;

-   El acceso a servicios de conectividad de red e internet;

-   La oferta de un servicio de respaldo dedicado a las máquinas virtuales.

El modelo de responsabilidades compartidas aplicado entre el Proveedor y el COMITENTE en el marco del Servicio se presenta en §7.1.

Se entiende que el Proveedor movilizará su experiencia para realizar las Prestaciones según las mejores prácticas profesionales y
de acuerdo con los requerimientos del marco de referencia SecNumCloud.

El Servicio está cualificado SecNumCloud (ver certificado en Anexo).

## 7.2. Presentación detallada del ámbito del Servicio


| Computación              | Recurso de cálculo del Tenant PATROCINADOR                                                                             |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| Almacenamiento           | Datos de producción del Tenant PATROCINADOR                                                                            |
| Almacenamiento objeto S3 | puesta a disposición de una infraestructura de almacenamiento objeto soberano multi AZ y compatible con las API S3 estándar. |
| Respaldo                 | Módulo suscripción al almacenamiento masivo adecuado                                                                   |
| Infraestructura de red   | Recurso de red del Tenant PATROCINADOR                                                                                 |
| Consola PATROCINADOR     | El servicio que permite al PATROCINADOR acceder a su servicio IaaS y administrarlo a través de la interfaz Shiva       |
| Soporte                  | El servicio de soporte acompañando los servicios anteriores y únicamente esos (*)                                      |

_(*) Dentro de los límites del ámbito del Servicio calificado SNC y de las responsabilidades del Proveedor en la materia_

### 7.2.1. Infraestructuras Datacenters

El Servicio abarca la puesta a disposición, para cada Zona de disponibilidad, de las prestaciones calificadas a continuación:

-   Sitio datacenter ubicado en Francia para la Región FR, conforme con las últimas normas tecnológicas, con un nivel de resiliencia equivalente o superior al nivel Tier 3 del Uptime Institute;
-   Puesta a disposición de salas técnicas dentro de datacenters dedicados a acoger los equipos técnicos indispensables para la producción del servicio, incluyendo cálculo, almacenamiento, red, cableado y otros componentes necesarios;
-   Suministro eléctrico asegurado, sostenido por dos circuitos eléctricos distintos, garantizando una continuidad de servicio;
-   Provisión de servicios de climatización, ajustados para respetar las normas y recomendaciones de los fabricantes de equipos, a fin de mantener un entorno óptimo para los dispositivos técnicos;
-   Supervisión continua y metrología detallada, permitiendo un seguimiento preciso y una gestión proactiva de las prestaciones y de la seguridad del servicio proporcionado.

El Proveedor asegura la puesta a disposición de servicios avanzados de detección y extinción de incendios, diseñados para identificar y
neutralizar de manera eficiente cualquier inicio de fuego en las instalaciones. Estos sistemas son esenciales para garantizar la seguridad de los equipos
y de los datos. Incluyen detectores de humo de alta precisión y dispositivos de extinción que pueden actuar rápidamente
sin dañar el equipamiento informático. Este servicio es crucial para prevenir los riesgos de incendio, minimizar los daños potenciales y
asegurar la continuidad de las operaciones.

El CONTRATANTE está informado de que todos los procedimientos y medidas de seguridad implementados, incluyendo las pruebas anuales de conmutación en
los generadores eléctricos, son esenciales para garantizar la continuidad y la integridad de los servicios proporcionados. Estas prácticas están diseñadas para
minimizar los riesgos de fallo y asegurar una reactividad óptima en caso de Incidente. Al aceptar estas condiciones, el cliente reconoce
la importancia de estas medidas y se compromete a cooperar plenamente para facilitar su implementación. El CONTRATANTE también está animado a
tomar conocimiento de las recomendaciones de seguridad proporcionadas e integrarlas en su propia estrategia de gestión de riesgos.

### 7.2.2. Infraestructura de software para la gestión del Servicio
El Proveedor suministra al COMISIONADO la consola de administración y la API necesarias para la utilización del Servicio. También se compromete a mantener dicha consola de administración y la API en condiciones operativas óptimas y a asegurar su seguridad de manera continua.
Esta consola de administración y la API se designan de manera colectiva bajo el término "interfaz COMISIONADO".

El Proveedor alerta al COMISIONADO sobre el hecho de que un uso anormal de la interfaz COMISIONADO, especialmente en caso de sobrecarga de sus APIs de comando (hammering), puede desencadenar medidas de seguridad automáticas que resultan en el bloqueo del acceso a las APIs de comando o al Servicio. Es importante destacar que esta situación no constituye una indisponibilidad del Servicio sino una acción de protección del Servicio y la infraestructura del Proveedor; en consecuencia, el COMISIONADO no puede considerarla como una indisponibilidad en sus cálculos.

Además, el Proveedor informa al COMISIONADO que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling). Si el COMISIONADO envía solicitudes idénticas con una frecuencia superior, su rechazo no podrá ser interpretado como una indisponibilidad del Servicio.

### 7.2.3. Infraestructuras de cálculo
El Servicio incluye la provisión, en las zonas de disponibilidad suscritas por el PATROCINADOR, de los equipos necesarios para
la ejecución de las cargas de trabajo en forma de máquinas virtuales.

Esto comprende:

- La provisión de los chasis técnicos necesarios para el buen funcionamiento de las láminas de cálculo;
- La provisión de las láminas de cálculo en las cantidades especificadas por el PATROCINADOR y distribuidas según las zonas de disponibilidad de su elección. Cabe señalar que estas láminas de cálculo son exclusivamente dedicadas al PATROCINADOR;
- La puesta a disposición de sistemas operativos de tipo hipervisores, así como la garantía del mantenimiento en condición operacional y de seguridad de la infraestructura de software necesaria para la gestión de estos sistemas operativos. Es importante destacar que, aunque el Proveedor es responsable del mantenimiento operacional y de la seguridad global del Servicio, no posee conocimientos específicos acerca de los entornos de producción del PATROCINADOR ni de los requisitos relacionados con sus cargas de trabajo. Por lo tanto, la responsabilidad de decidir sobre la actualización de los sistemas operativos de las láminas de cálculo hipervisores, una acción que podría requerir un reinicio, recae completamente en el PATROCINADOR. Esta operación puede ser realizada a través de la Interfaz del PATROCINADOR.

La elección del modelo de lámina de cálculo, seleccionado de entre el catálogo ofrecido por el Proveedor, es responsabilidad del
PATROCINADOR.

### 7.2.4. Infraestructura de almacenamiento

El servicio incluye la provisión al COMISIONARIO de una infraestructura de almacenamiento compartido de tipo SAN (Storage Area Network), que ofrece varios niveles de rendimiento. Este servicio comprende:

- La implementación y el mantenimiento en condiciones operativas y de seguridad de la red SAN dedicada;
- La instalación y gestión de las cabinas de almacenamiento compartidas entre los clientes, incluyendo su mantenimiento en condiciones operativas y de seguridad, su supervisión y su metrología;
- El establecimiento de sistemas automatizados para la asignación de las LUNs (Logical Unit Numbers) de almacenamiento dedicados al uso del COMISIONARIO, conforme a los volúmenes suscritos por el COMISIONARIO.

### 7.2.5. Infraestructura de red global
El Proveedor despliega en el ámbito del Servicio, una red global que facilita al COMITENTE la accesibilidad de sus sistemas alojados. Este servicio comprende:

-   La provisión, el mantenimiento en condición operativa y en condición de seguridad de todas las conexiones en fibras ópticas interconectando las diferentes Zonas de disponibilidad;

-   La provisión, el mantenimiento en condición operativa y en condición de seguridad de los equipos técnicos necesarios para el buen funcionamiento de la red y para el aislamiento de los distintos clientes.

La interconexión de la red del Inquilino COMITENTE, a Internet o a redes privadas, y los equipos de red, enlaces operadores y otros componentes técnicos que realizan esta interconexión, no forman parte del ámbito del Servicio. Esta interconexión de red se implementa de acuerdo con las disposiciones previstas en el Contrato.

### 7.2.6. Infraestructura de respaldo
El Proveedor pone a disposición del COMITENTE un servicio de respaldo integrado, dedicado y gestionado, destinado a la protección de sus
máquinas virtuales. El Proveedor asegura el mantenimiento en condiciones operacionales y en condiciones de seguridad de este servicio de respaldo.
El Proveedor garantiza que las copias de seguridad del COMITENTE estarán ubicadas fuera de la Zona de disponibilidad de las cargas de trabajo
respaldadas, siempre y cuando el COMITENTE haya suscrito a las Unidades de obra adecuadas.

Esta prestación de respaldo se limita al respaldo de las máquinas virtuales y de las configuraciones de topología del entorno IaaS
de los Tenants del COMITENTE en el marco del Servicio. La elaboración y la aplicación de una política de respaldo adecuada por parte del
COMITENTE dependen de la suscripción a unidades de obra específicas. Por lo tanto, corresponde al COMITENTE asegurarse de la
disponibilidad de los recursos técnicos necesarios junto al Proveedor para implementar su política de respaldo o
ajustar esta última en función de los medios disponibles.

El Proveedor se compromete a notificar al COMITENTE en caso de restricciones de capacidad y a proporcionar una asistencia de asesoramiento para
la optimización de los recursos. Las obligaciones del Proveedor se limitarán a la implementación de las necesidades expresadas por el COMITENTE
en materia de política de respaldo, dentro del marco de los recursos suscritos.

### 7.2.7. Implementación de soluciones de recuperación de actividad o de continuidad de actividad
El Proveedor suministra al COMITENTE el conjunto de soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos a través de diversas Zonas de disponibilidad. Incumbe al COMITENTE la responsabilidad de gestionar eficazmente esta distribución de recursos, para la cual tiene la posibilidad de explotar las herramientas del Proveedor disponibles para este uso.

## 7.3. Limitaciones de los servicios en el modelo IaaS calificado
### 7.3.1. Servicios gestionados en RUN
Es importante señalar que están excluidos del Servicio:

- El alojamiento de componentes físicos del PATROCINADOR;

- La interconexión de red del Tenant del PATROCINADOR, a Internet o a redes privadas, incluyendo los enlaces de operador;

- Cualquier servicio de tipo gestionado, o TMA;

- Cualquier asistencia sobre las máquinas virtuales a nivel del sistema operativo y superior en la pila de responsabilidades IaaS, incluso si se trata de simple supervisión.

Sin embargo, no se descarta que el PATROCINADOR recurra a tales servicios a través de la oferta MSP del Proveedor para intervenir en modo de servicios gestionados en sus Tenants. Estos servicios entonces no estarán regulados por el presente Convenio de servicio y sus compromisos/cláusulas bipartitas.

### 7.3.2. Configuración de respaldo
Por defecto, el Proveedor proporciona la implementación de los recursos de IaaS al CONTRATANTE reservando recursos y configurando las implementaciones para utilizar las Zonas de Disponibilidad. Es responsabilidad del CONTRATANTE seleccionar las Zonas de Disponibilidad a través de la interfaz del CONTRATANTE.

### 7.3.3. Configuración de la copia de seguridad
El servicio de copia de seguridad se limita a la copia de seguridad de las máquinas virtuales y las configuraciones de topología que representan el entorno de IaaS de los Tenants del COMITENTE dentro del marco del servicio.

La prestación del servicio de copia de seguridad y la implementación de la política de copias de seguridad del COMITENTE están sujetas a la suscripción de espacio de almacenamiento en el almacenamiento masivo necesario para asegurar el servicio. Por lo tanto, es responsabilidad del COMITENTE suscribir con el Proveedor los medios técnicos necesarios para asegurar la política de copias de seguridad en su ámbito informático, o ajustar la política de copias de seguridad a los medios implementados. El Proveedor se compromete a informar al COMITENTE en caso de límite de capacidad técnica.

El Proveedor pondrá en marcha los medios técnicos y humanos necesarios para la copia de seguridad del sistema alojado, dentro del límite de los recursos suscritos por el COMITENTE.

Por otro lado, en el caso de los ámbitos no asumidos por el Proveedor, corresponde al COMITENTE definir su propia estrategia de copia de seguridad y configurar él mismo las copias de seguridad de las VM o realizar una Solicitud de servicio al Proveedor para que la configuración de las copias de seguridad para los servidores físicos sea implementada, si el COMITENTE dispone de un contrato de servicio gestionado que permite al Proveedor actuar a través de la interfaz COMITENTE, que es la consola de administración que se pone a disposición en el marco de este Convenio de servicio y que dispone de funcionalidades para configurar las copias de seguridad.

Además, este servicio solo tendrá por compromiso traducir mediante la configuración a través de la interfaz COMITENTE, la configuración especificada claramente por el COMITENTE.

Por razones de flexibilidad de la oferta del Proveedor, el COMITENTE tiene la opción de asociar una política de no-copia a algunas de sus VM. En este caso, es responsabilidad del COMITENTE asumir esta elección. El Proveedor no realizará copias de seguridad de las VM asociadas a la política "no backup". El Proveedor alerta al COMITENTE que optar por la política "no backup" o por realizar copias de seguridad manuales expone al COMITENTE a una pérdida de datos definitiva en caso de un incidente en las capas bajas o en las capas sujeto a su responsabilidad en el modelo de IaaS. En tal caso, será imposible responsabilizar al Proveedor de restaurar los datos ya que no habrá nada que restaurar. El Proveedor recomienda siempre realizar copias de seguridad de las VM.

En cuanto a cualquier tema relacionado con el sistema operativo instalado en una máquina virtual y cualquier software o programa ejecutado "encima" del sistema operativo, es responsabilidad del COMITENTE realizar las operaciones de administración y supervisión dentro de la Unión Europea si desea garantizar que toda la verticalidad de las capas del SI sean operadas y gestionadas desde la Unión Europea. Las operaciones de administración fuera del ámbito de responsabilidad del Proveedor en el marco de este Convenio de servicio están indicadas en la sección "Modelo de Responsabilidades Compartidas" de este Convenio de Servicio.

## 7.4. Implementación del servicio
### 7.4.1. Requisitos técnicos

Para la implementación del Servicio, el COMITENTE reconoce que deberá:

-   Operar con una virtualización de tipo VMware en las versiones soportadas por el editor y proporcionadas por el Proveedor en el contexto del Servicio;

-   Recurrir al Proveedor para el uso de la herramienta de respaldo;

-   Declarar IPs fijas desde las cuales el Proveedor le autorizará a acceder a la interfaz del COMITENTE (Filtrado por lista blanca). Las modificaciones de esta lista de IPs deberán realizarse a través de Solicitudes de servicio (lista no administrable desde la interfaz de administración del Servicio).

## 7.5. Localización del servicio en Francia
Se especifica que ninguna de las operaciones y ninguno de los componentes físicos implicados en la provisión del Servicio, del cual el presente Contrato de servicio es objeto, está ubicado fuera de la Unión Europea.

Esto incluye especialmente el soporte, la supervisión operacional y la supervisión de seguridad (SOC) de la infraestructura técnica que entrega el Servicio. De hecho, todo el almacenamiento, todas las tareas de administración, supervisión y todos los tratamientos se realizan en Francia.

### 7.5.1. Localización de los Datacenters que alojan el Servicio
La totalidad de las operaciones de producción (incluyendo el almacenamiento y el procesamiento de datos) y componentes técnicos que prestan el Servicio se encuentran en los Centros de Datos ubicados en Francia, a falta de operaciones de los colaboradores y de las agencias del Proveedor.

### 7.5.2. Localización de las agencias Cloud Temple que operan el servicio
Los colaboradores de Cloud Temple que intervienen en el ámbito del Servicio operan desde las agencias de Cloud Temple, todas ubicadas exclusivamente en Francia. Estas agencias están situadas en Francia, en Tours, Lyon, Caen y París La Défense.

El COMITENTE es informado de la posibilidad de que los empleados de Cloud Temple trabajen a distancia. No obstante, el Proveedor garantiza el mismo nivel de seguridad en lo que respecta a los accesos remotos, especialmente en lo referente a los accesos VPN. Estos accesos a distancia se implementan de acuerdo con los requisitos del marco SecNumCloud.

## 7.6. Soporte
### 7.6.1. Naturaleza del soporte que acompaña el servicio
El Proveedor ofrece un servicio de soporte técnico destinado a asistir al CONTRATANTE en la gestión, solución de problemas y optimización de sus recursos desplegados. Este servicio abarca una amplia gama de actividades, desde la ayuda con la configuración inicial de los servicios hasta el soporte técnico avanzado para resolver problemas específicos.

A continuación, se presenta una descripción de las características y funcionalidades del servicio de soporte:

-   Asistencia en la implementación inicial del uso del Servicio;
-   Asistencia en la resolución de incidentes;
-   Asistencia en la resolución de problemas;
-   Seguimiento y asesoramiento sobre la optimización de la base técnica.

En el marco del servicio de soporte, el Proveedor no se hace responsable en lugar del CONTRATANTE en el uso del Servicio. El CONTRATANTE permanece completamente a cargo de la configuración, la operación de sus VM y sus Tenant, y de la gestión de todos los elementos (datos y aplicaciones incluidos) que ha almacenado o instalado en las infraestructuras del Proveedor. El servicio de soporte técnico se proporciona de acuerdo con las Condiciones Generales de Venta y Uso, siendo el Proveedor responsable de una obligación de medios.

El CONTRATANTE se compromete a utilizar el servicio de soporte técnico de manera razonable, absteniéndose especialmente de solicitar servicios no suscritos con el Proveedor y de involucrar a los equipos del Proveedor con sus propios clientes o terceros no incluidos en el Contrato. El Proveedor se reserva el derecho de rechazar cualquier solicitud de servicio que no cumpla con estos criterios.

El nivel de compromiso del soporte está sujeto a la suscripción de las unidades de obra de soporte asociadas.

### 7.6.2. Solicitud del servicio de soporte técnico
El soporte técnico está accesible a través de un sistema de tickets mediante la consola COMMANDITAIRE y está disponible durante las horas normales de oficina excepto los días festivos (8h - 18h; Lunes -- Viernes; calendario y horarios franceses). Para las emergencias que ocurran fuera del horario de trabajo, especialmente los incidentes que afecten significativamente la producción, el servicio de guardia puede ser contactado a través de un número comunicado al COMMANDITAIRE al iniciar el Servicio.

Para cada solicitud o Incidente, es imperativo generar un ticket con el soporte del Prestatario. La inicialización de este ticket, que incluye toda la información necesaria, es esencial y marca el comienzo de la evaluación de los compromisos del Prestatario.

Tan pronto como el Prestatario recibe una solicitud o una notificación de Incidente, ya sea a través de la consola de gestión o después de una llamada telefónica, se crea automáticamente un ticket. Al declarar un Incidente, es esencial que el COMMANDITAIRE proporcione al prestatario tantos detalles como sea posible sobre el problema encontrado. Este procedimiento es crucial para permitir una evaluación adecuada de la situación, su priorización y un diagnóstico eficaz.

El Cliente entonces recibe una confirmación por correo electrónico, que indica la creación del ticket y su número único. El COMMANDITAIRE puede consultar el estado y el historial de sus solicitudes y declaraciones de Incidentes directamente desde la consola de gestión.

### 7.6.3. Proceso de gestión de Incidentes
Durante la notificación de un Incidente, el equipo de soporte técnico del Proveedor inicia una investigación para identificar la causa del problema y establecer un diagnóstico. El Cliente debe colaborar activamente con el Proveedor proporcionando toda la información necesaria y realizando las pruebas requeridas. El Proveedor puede acceder al Servicio del Cliente para diagnosticar el Incidente.

Si se considera que los Servicios del Proveedor son funcionales y que el Incidente no es atribuible a él, se informará al Cliente. A petición del Cliente, el Proveedor puede ofrecer Servicios Profesionales para identificar el origen del problema, facturable según acuerdo previo en tramos de 30 minutos.

En el caso de que el Incidente sea responsabilidad del Proveedor o de uno de sus subcontratistas, este completa el diagnóstico y se esfuerza por restaurar el Servicio sin costos adicionales. El diagnóstico se basa en los intercambios entre las Partes y los datos del Proveedor, siendo estos elementos considerados como evidencia por acuerdo de las Partes.

### 7.6.4. Proceso de priorización de tratamientos

La determinación del nivel de prioridad de un caso se basa en un análisis matricial que evalúa el impacto del Incidente y su grado de
criticidad:

- Los niveles de impacto se definen de la siguiente manera:

| Nivel de impacto | Descripción                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Impacto I1       | El o los servicios del Proveedor están interrumpidos                                                                    |
| Impacto I2       | El o los servicios del Proveedor están degradados                                                                       |
| Impacto I3       | El o los servicios del Proveedor son actualmente estables, pero muestran signos de una potencial declinación a largo plazo |

- Los niveles de Criticidad se definen de la siguiente manera:

| Nivel de criticidad | Descripción                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------------- |
| Criticidad C1       | El o los servicios del Proveedor se están degradando a una velocidad preocupante                        |
| Criticidad C2       | El o los servicios del Proveedor se deterioran progresivamente con el tiempo                            |
| Criticidad C3       | El o los servicios del Proveedor presentan uno o varios inconvenientes sin consecuencias significativas |

- Basándose en un análisis profundo de la situación, tomando en cuenta los elementos determinantes para el Impacto y la Criticidad, se asigna una prioridad al ticket de acuerdo con la siguiente matriz de decisión:

| Nivel de impacto <br/> \ Nivel de criticidad | Impacto I1       | Impacto I2       | Impacto I3       |
| -------------------------------------------  | ---------------- | ---------------- | ---------------- |
| Criticidad C1                                | Prioridad **P1** | Prioridad **P2** | Prioridad **P3** |
| Criticidad C2                                | Prioridad **P2** | Prioridad **P3** | Prioridad **P4** |
| Criticidad C3                                | Prioridad **P3** | Prioridad **P4** | Prioridad **P5** |

Los compromisos de nivel de servicio correspondientes a cada nivel de prioridad se detallan en el capítulo siguiente.

### 7.6.5. Idioma y localización del servicio de soporte
El soporte es proporcionado por el Proveedor al PATROCINADOR al menos en idioma francés. El soporte también puede ser proporcionado en inglés.

Las operaciones del servicio de soporte del Proveedor para la oferta de servicio de infraestructura calificada SecNumCloud se encuentran en la Unión Europea.

# 8. Compromisos y niveles de servicios
El Proveedor se compromete a garantizar una vigilancia continua del rendimiento y la integridad segura de su infraestructura técnica que proporciona el Servicio, asegurando su funcionamiento óptimo.

La indisponibilidad de un servicio, sujeto a un indicador de rendimiento, se reconoce tan pronto como es identificada por el sistema de supervisión del Proveedor, o tras una notificación por parte de un usuario del COMANDITARIO. El comienzo de la indisponibilidad se establece en el momento más temprano entre estos dos eventos, con el fin de garantizar un conteo preciso y justo del tiempo de indisponibilidad.

El final de la indisponibilidad se marca oficialmente con la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Proveedor o por un feedback de los usuarios, asegurando así la reanudación efectiva de las operaciones y una medición fiel de la duración de la interrupción.

## 8.1. Compromisos de disponibilidad de la infraestructura
El Proveedor se compromete a mantener un nivel de disponibilidad y rendimiento conforme con los estándares definidos para cada período especificado. Los compromisos de nivel de servicio (Acuerdos de Nivel de Servicio, SLAs) se aplican bajo la condición de que el CONTRATANTE implemente sus sistemas a través de al menos dos de las Zonas de disponibilidad presentes en la Región concerniente.

En ausencia del respeto de estas condiciones por parte del CONTRATANTE, este no podrá reclamar la aplicación de los SLAs concernientes, los cuales están específicamente identificados por un asterisco (\*). El acceso a los SLAs se realiza a través de la interfaz del CONTRATANTE. Las medidas se entienden calculadas mensualmente:

- **SLA 1 (\*) : IC-INFRA_SNC-01** – Disponibilidad de la potencia de cómputo (Compute): tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24/7.
- **SLA 2 (\*) : IC-INFRA_SNC-02** – Disponibilidad del almacenamiento: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24/7.
- **SLA 3     : IC-INFRA_SNC-03** – Fiabilidad de la copia de seguridad: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24/7.
- **SLA 4 (\*) : IC-INFRA_SNC-04** – Disponibilidad de la infraestructura de red: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24/7.
- **SLA 5     : IC-INFRA_SNC-05** – Acceso a Internet: tasa de disponibilidad garantizada del 99,99%, calculada sobre una base 24/7.

_**Observaciones**_ : 

- *En respuesta a un ataque por denegación de servicio distribuido (DDoS), el Proveedor se reserva el derecho de ajustar su configuración de enrutamiento de internet para limitar el impacto de dicho ataque y proteger su infraestructura. En particular, si una dirección IP perteneciente al CONTRATANTE es el objetivo, el Proveedor puede recurrir a la técnica de blackholing a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP afectada en sus proveedores, con el fin de proteger los recursos del CONTRATANTE, así como los de otros CONTRATANTES y la infraestructura del Proveedor. El Proveedor anima encarecidamente al CONTRATANTE a adoptar medidas similares, tales como el uso de software de firewalls de aplicaciones web disponibles en el mercado, y a configurar cuidadosamente sus grupos de seguridad a través de la API de comando.*

- *El Proveedor insiste en la necesidad de que el CONTRATANTE minimice las aperturas de tráfico, evitando en particular que los puertos de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) sean accesibles desde toda Internet (subred 0.0.0.0/0), así como los protocolos internos tales como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 8.2. Compromiso de disponibilidad de la interfaz del CONTRATANTE
- SLA 6: IC-INFRA_SNC-06 -- Acceso a la consola de administración del Servicio: disponibilidad garantizada del 97%, asegurada de forma continua, las 24 horas, los 7 días de la semana.
- SLA 7: IC-INFRA_SNC-07 -- Acceso a las APIs de gestión del Servicio: una disponibilidad del 99.9%, calculada sobre una base de 24 horas al día, 7 días a la semana.

## 8.3. Compromiso de disponibilidad del soporte
- **SLA 8      : IC-INFRA_SNC-08** – Estos son los compromisos de rendimiento del soporte técnico del Proveedor para los incidentes, excluidas las mantenciones programadas:

| Prioridad         | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| ----------------- | ----------------------------------------- | ---------------------- |
| Prioridad **P1**  | 30mn                                      | 95%                    |
| Prioridad **P2**  | 2h                                        | 90%                    |
| Prioridad **P3**  | 4h                                        | 90%                    |
| Prioridad **P4**  | 24h                                       | 85%                    |
| Prioridad **P5**  | 48h                                       | 85%                    |

- **SLA 9      : IC-INFRA_SNC-09** – Estos son los compromisos de rendimiento del soporte técnico del Proveedor para las solicitudes de servicio:

|                      | Garantía de tiempo de intervención (GTI) | Objetivo de rendimiento |
| -------------------- | ----------------------------------------- | ---------------------- |
| Solicitud de servicio| 4h                                        | 90%                    |

*Nota*:

- *El plazo para la Garantía de Tiempo de Intervención (GTI) se calcula a partir de la diferencia entre el momento en que el MANDANTE abre el ticket y la primera intervención del soporte del Proveedor.*
- *La investigación de incidentes que afectan a los MANDANTES no incluirá intervención remota en los servidores hospedados del MANDANTE. Esta asistencia se limitará a la explicación de las métricas disponibles relativas al entorno del MANDANTE, con el fin de facilitar la comprensión de los incidentes o problemas de rendimiento encontrados. A partir de los resultados de este análisis, se podrán sugerir recomendaciones.*

## 8.4. Compromiso de disponibilidad del almacenamiento objeto S3
- **SLA 10      : IC-INFRA_SNC-10** – Aquí están los compromisos de disponibilidad para el almacenamiento de objetos S3:

| Indicador        | Compromiso                                          | Objetivo de Disponibilidad |
| ----------------- | --------------------------------------------------- | -------------------------- |
| IC-INFRA-SNC-10.1 | Durabilidad del almacenamiento de un objeto en una región | 99.9999999% / año          |
| IC-INFRA-SNC-10.2 | Disponibilidad de la API de Almacenamiento de Objetos S3   | 99.99%                     |
| IC-INFRA-SNC-10.3 | Latencia máxima de acceso a un objeto en una región | 150 ms                     |

Notas:

- El Servicio de Almacenamiento de Objetos está específicamente diseñado para el almacenamiento de objetos y debe ser utilizado con este único propósito, **excluyendo de manera categórica su uso en modo bloque**. Recurrir al modo bloque mediante métodos alternativos, incluyendo por ejemplo el uso de *"FUSE" en un entorno Linux*, constituye una infracción a los términos de uso establecidos. Ningún incidente, mal funcionamiento o daño resultante de este uso no conforme será cubierto por los Acuerdos de Nivel de Servicio (SLA) definidos en este contrato de servicios.
- La garantía de durabilidad está condicionada a un uso de los servicios conforme a las mejores prácticas y estándares actuales, y excluye explícitamente cualquier modificación de los datos, ya sea intencionada o accidental, resultante de acciones emprendidas por el PROMOTOR.

## 8.5. Precisión relativa al compromiso de respaldo
La estrategia de respaldo implementada para el PATROCINADOR, está condicionada por la suscripción a las unidades de obra adecuadas.

El Proveedor se compromete en la disposición de una solución de respaldo que permitirá al PATROCINADOR aplicar las políticas de respaldos deseadas.

Se precisa que el ámbito de responsabilidad del Proveedor se limita a la disposición de un servicio de respaldo y es deber del PATROCINADOR supervisar, a través de la interfaz del PATROCINADOR, la correcta ejecución de las políticas asociadas.

Se precisa que la gestión de las capacidades de almacenamiento del espacio dedicado a los respaldos, queda a cargo y responsabilidad del PATROCINADOR. El Proveedor dispone la tasa de uso a través de la consola.

*Ejemplo: No respaldo de una máquina virtual:*

*Es responsabilidad del PATROCINADOR verificar/supervisar la correcta ejecución de las políticas de respaldos; en caso de que el PATROCINADOR constate que una máquina virtual no está respaldada, deberá verificar la causa, y el PATROCINADOR podrá solicitar el Soporte del Proveedor según el nivel de soporte contratado para ser asistido.*

**El SLA 8: IC-INFRA_SNC-08 y SLA 9**, serán exclusivamente aplicables en caso de un Incidente del servicio de respaldo.

# 9. Organización de la relación contractual
## 9.1. Responsabilidades del Proveedor
El Proveedor se compromete a:

- informar a su COMITENTE de manera adecuada (por ejemplo, en caso de límite de capacidad de recursos técnicos que entregan el Servicio).

- informar formalmente al COMITENTE y dentro de un plazo de un mes, de todo cambio jurídico, organizacional o técnico que pueda tener un impacto en la conformidad del Servicio con los requisitos de protección contra las leyes extraeuropeas (19.6 del referencial SNC v3.2).

- proporcionar al COMITENTE interfaces y interfaces de servicio que estén en idioma francés como mínimo.

- estudiar y tomar en cuenta los requisitos sectoriales específicos relacionados con los tipos de información confiados por el COMITENTE en el marco de la implementación del servicio y dentro del límite de las responsabilidades del Proveedor.

- no divulgar ninguna información relacionada con el servicio a terceros, salvo autorización formal y por escrito del COMITENTE.

- poner a disposición toda la información necesaria para la realización de auditorías de conformidad de acuerdo con las disposiciones del artículo 28 del RGPD.

- rendir cuentas ante el COMITENTE, mediante este Convenio de servicio, de cualquier Incidente de seguridad que afecte al Servicio o al uso que hace el COMITENTE del Servicio (incluyendo los datos del COMITENTE).

- autorizar a un proveedor de auditoría de la seguridad de los sistemas de información (PASSI) cualificado, mandatado por el Proveedor, para auditar el servicio así como su sistema de información, en conformidad con el plan de control del SecNumCloud del Proveedor. Además, el Proveedor se compromete a proporcionar toda la información necesaria para llevar a cabo las auditorías de conformidad con las disposiciones del artículo 28 del RGPD, realizadas por el comitente o un tercero mandatado.

- proporcionar, como subcontratista, de acuerdo con el artículo 28 del Reglamento General de Protección de Datos (RGPD), asistencia y consejos al COMITENTE alertándolo tan pronto como una instrucción emitida por este sea susceptible de constituir una violación de las normas de protección de datos.

- notificar por escrito, cuando un proyecto impacta o es susceptible de impactar el nivel de seguridad del Servicio, al COMITENTE sobre los posibles impactos, las medidas de mitigación implementadas, así como de los riesgos residuales que le conciernen.

- documentar e implementar todos los procedimientos necesarios para cumplir con los requisitos legales, reglamentarios y contractuales aplicables al servicio, así como con las necesidades de seguridad específicas del COMITENTE, definidas por este último y previstas en el Contrato. A petición del COMITENTE, el módulo de Documentación de la interfaz COMITENTE permitirá un intercambio seguro de estos documentos.

- proporcionar, a solicitud del COMITENTE, los elementos de evaluación de riesgos relacionados con la sumisión de los datos del COMITENTE al derecho de un estado no miembro de la Unión Europea.

A petición formal y escrita del COMITENTE, el Proveedor se compromete a:

1. Hacer accesible al COMITENTE el reglamento interno y la carta ética del Proveedor;

2. Hacer accesible al COMITENTE las sanciones aplicables en caso de infracción a la política de seguridad;

3. Proporcionar al COMITENTE todos los eventos que le conciernen en los elementos de registro del Servicio;

4. Al final del Contrato, el Proveedor se compromete a eliminar los datos y Datos técnicos relativos al COMITENTE, conforme a la "procedimiento de borrado de datos al finalizar el Contrato" descrito en este Convenio de servicio.

5. Asegurar un borrado seguro de la totalidad de los datos del COMITENTE por sobrescritura completa de cualquier soporte que haya alojado sus datos en el marco del Servicio.

6. Proporcionar la lista completa de terceros autorizados para acceder a las infraestructuras que albergan los datos.

El Proveedor mantendrá actualizada y pondrá a disposición del COMITENTE la lista exhaustiva de terceros autorizados para acceder a las infraestructuras que albergan los datos, informando a éste de cualquier cambio respecto a los subcontratistas. El Proveedor y todas sus filiales se comprometen a respetar los valores fundamentales de la Unión Europea, es decir, la dignidad humana, la libertad, la democracia, la igualdad, el estado de derecho, así como el respeto de los Derechos Humanos. El servicio prestado por el Proveedor es conforme a la legislación vigente en materia de derechos fundamentales y a los valores de la Unión Europea relacionados con el respeto de la dignidad humana, la libertad, la igualdad, la democracia y el Estado de derecho.

## 9.2. Limitación de responsabilidades del Proveedor
Teniendo en cuenta todas las definiciones y condiciones mencionadas en el presente Convenio de servicio, las responsabilidades del Proveedor quedan limitadas de la siguiente manera:

1. El modelo de responsabilidad compartida, descrito en la sección "Modelo de responsabilidades compartidas" del presente Convenio de servicio, limita de hecho la implicación del Proveedor en las capas de funcionamiento que van "por encima" de la provisión de recursos de cálculo, red, almacenamiento y respaldo. Esto excluye en particular, sin limitarse a:

    -   La gestión de lo que está instalado en las máquinas virtuales (SO, middlewares, aplicaciones, etc.);

    -   La actualización de los SO y otros softwares instalados por el COMITENTE en sus máquinas en sus Tenant;

    -   La seguridad de los programas, softwares y aplicaciones instalados en las máquinas virtuales;

    -   La actualización de las máquinas virtuales;
  
    -   El respaldo de los datos a nivel aplicativo.

2.  El Proveedor no puede asumir compromisos de respaldo de los Tenant del COMITENTE sin que el COMITENTE haya previamente suscrito a las unidades de obra adecuadas.

3.  El Proveedor no puede reclamar la propiedad de los datos transmitidos y generados por el COMITENTE. De hecho, estos pertenecen a la propiedad del COMITENTE.

4.  El Proveedor subraya que no puede, en ningún caso, explotar los datos transmitidos y generados por el COMITENTE sin la previa validación de éste.
   
5.  El Proveedor declina toda responsabilidad sobre los componentes físicamente alojados y gestionados por el Proveedor, pero siendo propiedad directa del COMITENTE o de un tercero con el que el COMITENTE ha contratado. El alojamiento de componentes físicos de los clientes no forma parte del Servicio y está de hecho fuera del alcance del presente Convenio de servicio. Corresponde al COMITENTE evaluar el nivel de adherencia o dependencia que introducen estos componentes con respecto al Servicio IaaS calificado SecNumCloud.

## 9.3. Limitación de acceso
Como parte del Servicio, al Proveedor se le prohíbe expresamente acceder a los Tenants que pertenecen al COMITENTE sin autorización previa. Es responsabilidad del COMITENTE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas del alojamiento y, si corresponde, de los servicios 
profesionales de soporte, si esta opción ha sido elegida por el COMITENTE.

El COMITENTE reconoce que estos accesos se otorgan exclusivamente para necesidades relacionadas con la prestación de servicios acordados, asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por terceros implicados en la prestación del servicio del Proveedor está estrictamente prohibido. En el caso de que una necesidad técnica específica requiriese tal acceso, este solo podría establecerse después de haber notificado claramente al COMITENTE, proporcionado una justificación detallada y obtenido su acuerdo
escrito.

Esta medida garantiza el control y la seguridad de los datos del COMITENTE, asegurándose de que cualquier excepción a la normativa esté debidamente autorizada y documentada.

## 9.4. Responsabilidades de terceros participando en la prestación del servicio Secure Temple
El Proveedor controla la lista de terceros socios que participan en la prestación del Servicio. Estos terceros son los editores, prestadores (del Proveedor) y otros proveedores que participan en la prestación del Servicio. El Proveedor aplica las siguientes medidas a estos terceros:

-   El Proveedor exige de los terceros que participan en la implementación del servicio, en su contribución al Servicio, un nivel de seguridad al menos equivalente al que se compromete a mantener en su propia política de seguridad aplicable al servicio Templo Seguro;

-   El Proveedor formaliza, con cada tercero que participa en la implementación del servicio, cláusulas de auditoría que permiten a una entidad de calificación verificar que estos terceros cumplen con los requisitos legales y con los requisitos de la SNC, permitiendo al Proveedor respetar sus compromisos en el presente Convenio de servicio.

-   El Proveedor implementa un procedimiento que permite controlar regularmente las medidas establecidas por los terceros que participan en la implementación del servicio para cumplir con los requisitos al Proveedor de respetar sus compromisos en el presente Convenio de servicio.

-   El Proveedor implementa un procedimiento de seguimiento de los cambios realizados por los terceros que participan en la implementación del servicio y que puedan afectar el nivel de seguridad del sistema de información del servicio.

## 9.5. Responsabilidades y obligaciones del PATROCINADOR
Recordatorio, el Proveedor ofrece al CLIENTE una plataforma para la ejecución de máquinas virtuales; la configuración de estas está a cargo del CLIENTE. Cada máquina virtual no puede funcionar sin una política de respaldo asociada. El Proveedor define políticas de respaldo automáticas a través de sus interfaces. Sin embargo, es responsabilidad del CLIENTE activar estas políticas de respaldo y por lo tanto activar las máquinas virtuales.

El CLIENTE autoriza a la ANSSI y al organismo de calificación SNC a auditar el Servicio y la infraestructura técnica que proporciona el Servicio.

## 9.6. Derechos del CLIENTE
En cualquier momento durante la relación contractual, el PATROCINADOR puede presentar una reclamación relacionada con el servicio calificado ante la ANSSI.

En cualquier momento, el PATROCINADOR puede solicitar al Proveedor que le proporcione acceso a su reglamento interno y su código ético.

## 9.7. Eliminación de los datos al finalizar el Contrato
Al término del contrato, ya sea que llegue a su vencimiento o sea rescindido por cualquier motivo, el Proveedor se compromete a realizar la eliminación segura de la totalidad de los datos del COMISIONISTA, incluyendo los datos técnicos. El Proveedor asegurará de comunicar al COMISIONISTA un preaviso formal, respetando un periodo de veintiuno (21) días calendarios. Los datos del COMISIONISTA serán entonces eliminados en un plazo máximo de treinta (30) días tras este aviso.

Para certificar esta eliminación, el Proveedor entregará al COMISIONISTA un certificado confirmando el borrado de los datos.

# 10. Ciclo de vida del presente Convenio de servicio
## 10.1. Entrada en vigor del Convenio de Servicio
La presente Convención de servicio entra en vigor el día de su firma por parte del COMITENTE.

La recolección, el manejo, el almacenamiento y el procesamiento de datos realizados en el marco de la pre-venta, la implementación, la paralización del Servicio, se llevan a cabo con respeto a la legislación vigente.

## 10.2. Evoluciones de la Convención de servicio
Las modificaciones o adiciones a este Acuerdo de servicio resultan exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados para tal fin. Estas propuestas de cambio serán examinadas por las Partes, autorizadas para determinar los aspectos que requieren una formalización por escrito.

Se acuerda que cualquier evolución del Acuerdo de servicio, tras la validación, que altere las condiciones financieras inicialmente establecidas, requerirá la redacción y firma de un anexo al Contrato en curso.

Los factores que pueden inducir una revisión de este Acuerdo de servicio incluyen, sin limitarse a:

-   La evolución de la infraestructura técnica que entrega el Servicio IaaS;
-   Los ajustes realizados a los servicios desplegados por el Proveedor para proporcionar el Servicio;
-   Las variaciones de los compromisos adquiridos y las sanciones aplicables;
-   Las reconfiguraciones organizativas dentro del PROMOTOR o del Proveedor;
-   La expansión o reducción del alcance del Servicio.

La gestión de versiones y revisiones del Acuerdo de servicio está registrada en el preámbulo del documento para facilitar su seguimiento.

### 10.2.1. Evoluciones desencadenadas por el PROMOTOR
Las evoluciones de la Convención de Servicio pueden tener origen, especialmente, en:

-   Una evolución de la infraestructura gestionada por el Proveedor;

-   Una modificación de los servicios implementados por el Proveedor;

-   Una modificación de los compromisos de niveles de servicio por parte del Proveedor.

### 10.2.2. Evoluciones iniciadas por el Proveedor

Cualquier cambio en el Acuerdo de servicio está sujeto a la aceptación del PATROCINADOR. Se entiende que cualquier modificación o complemento
validados que cambien los elementos financieros del Contrato, podrían implicar la firma de un acuerdo adicional al mismo.

## 10.3. Reversibilidad
Además, Cloud Temple se compromete a permitir una revisión del presente Contrato de servicio (que prevé, entre otros, su resolución) sin penalización
para el PATROCINADOR en caso de pérdida de la calificación SecNumCloud.

Los Servicios no incluyen una obligación de reversibilidad (es decir, la ayuda al Cliente para que pueda migrar su sistema a otro Proveedor) con la excepción de la disposición al PATROCINADOR por parte del Proveedor de la interfaz PATROCINADOR que permite al PATROCINADOR realizar copias de seguridad y recuperar sus datos, incluidos especialmente los datos de configuración de su sistema de información mediante una de las modalidades técnicas siguientes a elección del PATROCINADOR: la disposición de archivos en uno o varios formatos documentados y utilizables fuera del servicio proporcionado por el Proveedor o bien a través de la implementación de interfaces técnicas que permitan el acceso a los datos según un esquema documentado y utilizable (API).

El PATROCINADOR, único dueño de su sistema, debe esforzarse en facilitar esta operación en cuanto sea necesario (lo que implica, en particular, que establezca una documentación rigurosa a este efecto) y la elaboración de planes de reversibilidad. En el caso de que el PATROCINADOR necesite un servicio adicional, el
Proveedor puede proponer una misión de consultoría al respecto en el marco de un contrato específico a negociar.

# 11. Disponibilidad, continuidad y restauración del servicio
## 11.1. Gestión de Incidencias e Interrupciones
### 11.1.1. Incidentes
#### 11.1.1.1. Tipos de Incidentes tratados en el marco de este Convenio de Servicio
-   Desastres

-   Averías y fallos

-   Incidentes de seguridad:

    -   Afectando la disponibilidad del servicio

    -   Afectando la confidencialidad del servicio

    -   Afectando la integridad del servicio

#### 11.1.1.2. Tratamiento de incidentes

-   Plazos

-   Acciones posteriores

-   Archivar los documentos detallando los incidentes de seguridad.

-   Notificación de violación de datos personales (en línea) : <https://notifications.cnil.fr/notifications/index>

#### 11.1.1.3. Nivel de notificación de los Incidentes de seguridad
El PATROCINADOR tiene la responsabilidad de elegir los niveles de gravedad de los Incidentes de seguridad de los cuales desea ser informado, por ejemplo a través de su formalización en un PAS aplicable al Servicio.

Por defecto, el PATROCINADOR es informado:

- De los incidentes de seguridad con impacto (impactos I1 e I2 según la escala de impacto definida en el proceso de priorización de tratamientos de la presente Convención de servicio);

- De las violaciones de datos de carácter personal para las cuales el PATROCINADOR es responsable del tratamiento;

- De las violaciones de datos de carácter personal para las cuales el Proveedor es responsable del tratamiento y que contienen datos personales del PATROCINADOR.

## 11.2. Mantenimiento del Servicio
### 11.2.1. Naturaleza del mantenimiento
La mantenimiento proporcionado consiste en la implementación:

-   Del plan de mantenimiento en condiciones operativas del Servicio para asegurar buenos indicadores de disponibilidad como se compromete el Proveedor anteriormente;

-   Del plan de Continuidad de Actividad / Recuperación ante Desastres (PCA/PRA) si es suscrito por el COMANDITARIO, activado de acuerdo a los posibles incidentes que pudieran ocurrir.

### 11.2.2. Accesos remotos de Cloud Temple al ámbito del COMANDITARIO
El Proveedor se abstiene, en el marco de la presente Convención de servicio, de acceder a los Tenants y al espacio de la interfaz del
COMITENTE.

Corresponderá al COMITENTE proporcionar los accesos necesarios al personal del Proveedor. El COMITENTE reconoce que los accesos serán utilizados en el marco del alojamiento y, en última instancia, de la gestión de la información (si es suscrito por el COMITENTE).

### 11.2.3. Accesos remotos de terceros involucrados en la provisión del servicio en el ámbito del COMITENTE
Ningún acceso remoto de un tercero que participe en la prestación del Servicio está permitido.

Si una necesidad técnica hiciera este caso de figura necesario, entonces este tipo de acceso solo se realizaría después de notificar al PATROCINADOR con justificación y obtener su consentimiento por escrito.

# 12. Procedimiento de borrado de datos al final del Contrato
Al finalizar el Contrato, ya sea porque este haya llegado a su término o por cualquier otra causa, el Proveedor garantizará la eliminación segura de la totalidad de los datos procesados en el marco del Servicio, incluyendo los Datos técnicos del COMITENTE. El Proveedor dará un preaviso formal respetando un plazo de veintiún días (21) calendarios. Los datos del COMITENTE serán eliminados en un plazo máximo de treinta (30) días tras la notificación. El Proveedor proporciona un certificado de eliminación de datos al COMITENTE.

# 13. Derecho aplicable
## 13.1. De manera general
La ley aplicable y sujeta al presente Convenio de servicio es la ley francesa.

## 13.2. Respeto de la ley y de las regulaciones aplicables

El Proveedor se compromete en los siguientes puntos:

-   La identificación de las restricciones legales y reguladoras aplicables en el contexto del Servicio;

-   El cumplimiento de las restricciones legales y reguladoras aplicables a los datos confiados al Prestador;

-   El cumplimiento de la Ley de informática y libertades y del RGPD;

-   La implementación de medios de protección de datos personales;

-   La implementación de un proceso de vigilancia legal y regulatoria;

-   Disponer y mantener relaciones apropiadas o una vigilancia con las autoridades sectoriales en relación con la naturaleza de los datos procesados en el contexto de los Servicios. Esto incluye, en particular, la ANSSI, el CERT-FR y la CNIL.

## 13.3. RGPD

Actuando como subcontratista en el sentido del artículo 28 del Reglamento General de Protección de Datos (RGPD), el Proveedor se compromete a:

- Asegurar la transparencia y la trazabilidad;

- Designar un DPO encargado de definir e implementar las medidas de protección de datos personales;

- Brindar asistencia y asesoramiento al PATROCINADOR al alertarlo si una instrucción de este último constituye una violación de las reglas de protección de datos personales si el Proveedor tiene los medios para identificarlo;

- Una garantía de seguridad sobre los datos procesados (debido a la calificación SecNumCloud).

## 13.4. Protección frente al derecho extracomunitario

En caso de recurrir el Proveedor, en el marco del Servicio, al servicio de una sociedad tercera - incluyendo un subcontratista - que posea su sede estatutaria, administración central o establecimiento principal dentro de un Estado no miembro de la Unión Europea o perteneciente o estando controlada por una sociedad tercera domiciliada fuera de la Unión Europea, el Proveedor se compromete a que dicha sociedad tercera no dispondrá de ningún acceso a los datos operados por el servicio 'Secure Temple'.

Como recordatorio, los datos referidos son aquellos que son confiados al Proveedor por el COMANDITARIO así como todas las Datos técnicos incluyendo información sobre los COMANDITARIOS.

Para las necesidades del presente artículo, la noción de control se entiende como la mencionada en el II del artículo L233-3 del código de comercio.

# 14. FIRMAS
Hecho en ___________________, el
_________________________________

Por parte de Cloud Temple, el PRESTADOR

Por parte de ___________________, el PATROCINADOR