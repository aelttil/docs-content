---
title: Convenio de Servicio PaaS
---

**Tabla de contenidos**

- [1. Marco](#1-marco)
- [2. Acrónimos](#2-acrónimos)
- [3. Glosario](#3-glosario)
- [4. Objeto del convenio de servicio PaaS del Proveedor](#4-objeto-del-convenio-de-servicio-paas-del-proveedor)
- [5. Evolución del convenio de servicio PaaS](#5-evolución-del-convenio-de-servicio-paas)
- [6. Auditoría](#6-auditoría)
- [7. Descripción del servicio](#7-descripción-del-servicio)
- [8. Implementación del servicio](#8-implementación-del-servicio)
  - [8.1. Descripción de los componentes técnicos](#81-descripción-de-los-componentes-técnicos)
    - [8.1.1. Plataforma de servicio REDHAT OpenShift](#811-plataforma-de-servicio-redhat-openshift)
    - [8.1.2. Infraestructura de software de control de la plataforma Redhat Openshift](#812-infraestructura-de-software-de-control-de-la-plataforma-redhat-openshift)
    - [8.1.3. Infraestructura de respaldo asociada](#813-infraestructura-de-respaldo-asociada)
    - [8.1.4. Implementación de soluciones de recuperación de actividad o de continuidad de actividad](#814-implementación-de-soluciones-de-recuperación-de-actividad-o-de-continuidad-de-actividad)
- [10. Compromisos y niveles de servicios](#10-compromisos-y-niveles-de-servicios)
  - [10.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift](#101-compromisos-de-disponibilidad-de-la-plataforma-redhat-openshift)
- [12. Modelo de responsabilidades compartidas aplicable](#12-modelo-de-responsabilidades-compartidas-aplicable)
  - [12.1. Responsabilidad y Obligaciones del Proveedor](#121-responsabilidad-y-obligaciones-del-proveedor)
  - [12.2. Limitación de responsabilidad del Proveedor](#122-limitación-de-responsabilidad-del-proveedor)
  - [12.3. Limitación de acceso](#123-limitación-de-acceso)
- [13. Eliminación de los datos al final del contrato](#13-eliminación-de-los-datos-al-final-del-contrato)
- [14. Derecho aplicable](#14-derecho-aplicable)



## 1. Marco

|           |                        |
| --------- | ---------------------- |
| Referencia| CT.AM.JUR.ANX.PAAS 2.0 |
| Fecha     | 13 de marzo de 2024    |

## 2. Acrónimos
| Acrónimo    | Descripción                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| CAB         | Change Advisory Board – Comité consultivo sobre los cambios                                                   |
| CMDB        | Configuration Management Database – Base de datos de gestión de configuraciones                              |
| COPIL       | Comité de Dirección                                                                                          |
| COSTRAT     | Comité Estrategico                                                                                           |
| DB          | Database (base de datos)                                                                                     |
| DRP         | Disaster Recovery Plan (Plan de contingencia de recuperación de actividad)                                   |
| GTI         | Garantía de Tiempo de Intervención                                                                           |
| GTR         | Garantía de Tiempo de Resolución                                                                             |
| GTE         | Garantía de Tiempo de Escalado                                                                               |
| HYPERVISEUR | Sistema operativo que permite la ejecución de VM en una cuchilla de cálculo                                  |
| ITIL        | Information Technology Infrastructure Library - Buenas prácticas para la gestión de sistemas de información |
| IAAS        | Infrastructure as a Service                                                                                  |
| MCO         | Mantenimiento en condiciones operativas                                                                      |
| MOA         | Maestría de Obra                                                                                             |
| MOE         | Maestría de Ejecución                                                                                        |
| OS          | Operating system                                                                                             |
| PAQ         | Plan de Aseguramiento de la Calidad                                                                          |
| PAAS        | Platform as a Service                                                                                         |
| SDM         | Service Delivery Manager                                                                                     |
| RFC         | Request For Change – Solicitud de cambio                                                                     |
| RGPD        | Reglamento General de Protección de Datos (personales)                                                       |
| RPO         | Recovery Point Objective – Actualidad de los datos restaurados en caso de desastre                           |
| RTO         | Recovery Time Objective – Plazo de restablecimiento del servicio en caso de desastre                          |
| SLA         | Service Level Agreement – Acuerdo sobre los niveles de servicio                                               |
| UO          | Unidad de Obra                                                                                                |
| VABF        | Validación de Aptitud para el Buen Funcionamiento                                                            |
| VABE        | Validación de Aptitud para la Buena Explotabilidad                                                            |
| VM          | Virtual Machine (Máquina virtual)                                                                            |
| VSR         | Validación de Servicio Regular                                                                               |
| SNC         | SecNumCloud                                                                                                  |

## 3. Glosario
Las expresiones a continuación empleadas en el presente documento serán interpretadas conforme a las definiciones que se les atribuyen a continuación:

| Expresión                                          | Definición                                                                                                                                                                                                                                                                             |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Secure Temple"                                     | La denominación "Secure Temple" hace referencia al servicio de Infraestructura como Servicio IaaS, calificado SecNumCloud, ofrecido por la empresa Cloud Temple.                                                                                                                         |
| Región                                              | Una "región" en el contexto de la computación en la nube denota un conjunto geográficamente delimitado de zonas de disponibilidad en la nube, <br/>proporcionando servicios de red, cálculo y almacenamiento para optimizar la latencia, el rendimiento <br/>y la conformidad regulatoria local |
| Zona de Disponibilidad<br/>(AZ)<br/>(Availability zone) | Una sección específica e aislada de la infraestructura de computación en la nube, diseñada para asegurar la alta disponibilidad y la resiliencia de los servicios mediante una distribución geográfica de los recursos.                                                               |
| Tenant                                              | Una instancia aislada reservada para un usuario o grupo de usuarios, compartiendo una infraestructura común mientras mantiene la independencia y la seguridad de los datos y las aplicaciones.                                                                                        |

| Expresión               | Definición                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Incidente                | Un "incidente" denota cualquier evento imprevisto que interrumpe el funcionamiento normal de un sistema o compromete la seguridad de los datos y las infraestructuras.                                                                                                                                                                                                                                                                                   |
| Problema                 | Un "problema" es una causa fundamental de uno o varios incidentes, identificada o sospechada, que requiere análisis y resolución para prevenir su recurrencia.                                                                                                                                                                                                                                                                          |
| Cambio                   | Un "cambio" denota cualquier modificación realizada en el entorno de TI, con el objetivo de mejorar o corregir los sistemas, procesos o servicios.                                                                                                                                                                                                                                                                             |
| Cambio estándar          | Un "cambio estándar" es una modificación pre-aprobada, de bajo riesgo, repetitiva y que sigue un procedimiento establecido, en el entorno de TI.                                                                                                                                                                                                                                                                                 |
| Puesta en producción     | Acción(es) de administración para realizar el cambio cuando este ha sido aprobado <br/>(el cambio, en sentido ITIL, solo concierne la gestión del cambio y no su realización/concretización).                                                                                                                                                                                                                                      |
| Solicitud de servicio    | Solicitud de evolución que se somete a un procedimiento, cuya realización: <br/> i) no modifica la CMDB,<br/>ii) el modo operativo, los costos y los riesgos son conocidos y aceptados de antemano y no requieren de modalidades de retorno específicas<br/> iii) la realización está sujeta a un acuerdo de nivel de servicio e incluida en la retribución del contrato cuando se lleva a cabo en horas laborales y días hábiles. |
| Elemento de configuración | Un "elemento de configuración" es un componente identificable del sistema de información, como un software, un hardware o un documento,<br/> sujeto a gestión en el marco de la gestión de servicios de TI.                                                                                                                                                                                                                                       |
| Servicio                 | Un "servicio" es un medio para proporcionar valor a los CLIENTES facilitando los resultados deseados sin que tengan que gestionar <br/>los costos y riesgos específicos.                                                                                                                                                                                                                                                                |
| Evento                   | Un "evento" es cualquier ocurrencia detectable o identificable en un sistema informático o red, que pueda ser de importancia para la gestión de servicios de TI.                                                                                                                                                                                                                                                                           |
| Siniestro                | Un "siniestro" denota un evento dañoso imprevisto que acarrea pérdidas materiales, financieras o de datos para un CLIENTE.                                                                                                                                                                                                                                                                                                            |
| Convenio de servicio     | Este documento, establecido en el marco de un contrato específico o de las Condiciones Generales de Venta y Uso (CGVU), y esto, conforme a los requisitos del Referencial SecNumCloud.                                                                                                                                                                                                                                                   |
| Disponibilidad           | Capacidad para asegurar la disponibilidad y el mantenimiento de los rendimientos óptimos de un servicio, conforme a los criterios y compromisos definidos en los Acuerdos de Nivel de Servicio (SLA).                                                                                                                                                                                                                                                   |
| Supervisión              | Vigilancia de un Sistema de Información o de un Servicio, que implica la recolección de diversas datos tales como medidas y alarmas. <br/>Esta actividad se limita a la observación y seguimiento, sin intervenir directamente sobre los elementos vigilados, prerrogativa que pertenece a las operaciones de Administración.                                                                                                                       |

## 4. Objeto del convenio de servicio PaaS del Proveedor
La presente Convención de Servicios establece los términos y condiciones según los cuales el Proveedor se compromete a entregar al CLIENTE una infraestructura conforme a las especificaciones de la oferta "Platform as a Service – PaaS", debidamente cualificada SecNumCloud.

Objeto de la Convención de Servicios:

1. Especificar los requisitos de rendimiento esperados por el CLIENTE en términos de funcionalidad y fiabilidad de la infraestructura.
2. Enunciar las obligaciones del Proveedor para cumplir con los niveles de servicio acordados.
3. Identificar las normas reglamentarias aplicables específicamente a la infraestructura propuesta.
4. Asegurar una uniformidad e integridad en la evaluación de la calidad de los servicios prestados.
5. Garantizar la excelencia de los servicios proporcionados, evaluada mediante indicadores de rendimiento cuantitativos.

Se estipula que, en la hipótesis de que al Proveedor se le retire su calificación SecNumCloud, el presente Contrato podrá ser rescindido de pleno derecho, sin incurrir en penalizaciones, por el CLIENTE. En tal eventualidad, el Proveedor se compromete a informar al CLIENTE de esta descalificación enviando una notificación oficial, por medio de una carta certificada con solicitud de acuse de recibo.

Cabe señalar que una modificación o un ajuste de la calificación SecNumCloud no se interpretará como una revocación de la calificación inicial.

## 5. Evolución de la convención de servicio PaaS

Las modificaciones o adiciones realizadas al presente convenio de servicio surgen exclusivamente de las solicitudes formuladas por los órganos de gobernanza designados para ese fin. 
Estas propuestas de cambio serán examinadas dentro del comité estratégico, única instancia autorizada para determinar los aspectos que requieren una formalización escrita.

Se acuerda que toda evolución del convenio, después de su validación, que altere las condiciones financieras inicialmente establecidas, requerirá la creación y la firma de un anexo al contrato en vigor.

Los factores que pueden inducir una revisión de este convenio incluyen, sin limitarse a:

- La adaptación de la plataforma PaaS orquestada por el Proveedor.
- Los ajustes realizados a los servicios desplegados por el Proveedor.
- Las variaciones de los compromisos asumidos y las sanciones aplicables.
- Las reconfiguraciones organizacionales dentro del CLIENTE o del Proveedor.
- La expansión o la reducción del ámbito de aplicación de los servicios a los que el CLIENTE ha suscrito.

La gestión de las versiones y revisiones del convenio se registra en el preámbulo del documento para facilitar su seguimiento.

## 6. Auditoría 

El Proveedor se compromete a permitir al CLIENTE, o a cualquier auditor tercero designado por este último, consultar todos los documentos necesarios para la certificación del cumplimiento total de las obligaciones relacionadas con la conformidad con las disposiciones del artículo 28 del Reglamento General de Protección de Datos (RGPD), facilitando así la realización de auditorías.

**El Proveedor se compromete especialmente a mantener a disposición del CLIENTE la lista de todos los terceros que pueden acceder a los datos y a informarle sobre cualquier cambio de subcontratistas.**

Por la aceptación del presente convenio de servicio, el CLIENTE confiere su autorización explícita a:

1. __La Agencia Nacional de Seguridad de Sistemas de Información (ANSSI)__ así como a la entidad de calificación competente para llevar a cabo la verificación de la conformidad del Servicio y su Sistema de Información con los estándares definidos por el Marco SecNumCloud.
2. __Un proveedor de auditoría en seguridad de sistemas de información__, debidamente calificado y expresamente designado por el Proveedor, para realizar auditorías de seguridad sobre el Servicio proporcionado por el Proveedor.

## 7. Descripción del servicio
La oferta de servicios propuesta por el Proveedor se caracteriza por la disponibilidad de las siguientes prestaciones, las cuales se alinean con el principio de responsabilidad compartida detallado en las normas establecidas por el marco de referencia SecNumCloud:

- La provisión de una plataforma de gestión de contenedores Redhat Openshift dirigida por el Proveedor.

Se entiende que el Proveedor movilizará su pericia para realizar las Prestaciones según las mejores prácticas profesionales, conforme a sus Especificaciones y respetando las normas de su certificación ISO/IEC 27001 así como las directivas del Marco de Referencia SecNumCloud.

## 8. Implementación del servicio
Se especifica que todas las operaciones y todos los componentes físicos involucrados en la prestación del servicio cualificado, objeto de este acuerdo, están ubicados en la Unión Europea. Esto incluye especialmente el soporte, la supervisión operacional y la supervisión de seguridad (SOC).

### 8.1. Descripción de los componentes técnicos
Los servicios PaaS (Platform as a Service) abarcan la totalidad de los componentes y servicios requeridos para su funcionamiento óptimo en cumplimiento de la cualificación SecNumCloud.

A este respecto, su rendimiento y fiabilidad están intrínsecamente vinculados a los componentes técnicos y a los servicios de **la infraestructura IaaS** del Proveedor, como se especifica en el documento [Convenio de Servicio IaaS](../iaas/sla_iaas.md) del Proveedor.

#### 8.1.1. Plataforma de servicio REDHAT OpenShift
El servicio abarca la provisión dentro de una región, en 3 zonas de disponibilidad,

#### 8.1.2. Infraestructura de software para la gestión de la plataforma Redhat Openshift
El Proveedor proporciona al CLIENTE la consola de administración y la API necesaria para la explotación de sus entornos PaaS RedHat OpenShift.
También se compromete a mantenerlas en condiciones operativas óptimas y a asegurar su seguridad de manera continua.

En el marco específico del servicio proporcionado, el Proveedor pone a disposición del CLIENTE todas las interfaces y API de la plataforma RedHat OpenShift dentro del tenant seleccionado. Es responsabilidad del CLIENTE instaurar los dispositivos de seguridad apropiados, como los cortafuegos (firewalls), los cortafuegos de aplicaciones web (WAF), y otras medidas de protección, así como definir las reglas de filtrado asociadas para asegurar el acceso a su plataforma conforme a su política de seguridad.

El Proveedor alerta al Cliente sobre el hecho de que un uso anormal de su consola de administración, en particular en caso de sobrecarga de sus APIs de comando (hammering),
puede desencadenar medidas de seguridad automáticas que resulten en el bloqueo del acceso a las APIs de comando o a ciertos servicios del Proveedor. Cabe subrayar que esta situación no se considera una indisponibilidad del servicio sino una acción de protección de la Infraestructura del Proveedor;
por lo tanto, el Cliente no puede considerarla como una indisponibilidad para sus cálculos.

Además, el Proveedor indica al Cliente que las solicitudes perfectamente idénticas (duplicados) enviadas a sus APIs están limitadas a una por segundo (Throttling).
Si el Cliente envía solicitudes idénticas a una frecuencia mayor, su rechazo no debe ser interpretado como una indisponibilidad del servicio.

#### 8.1.3. Infraestructura de respaldo asociada
El Proveedor pone a disposición del CLIENTE una plataforma de respaldo integrada, dedicada y gestionada, destinada a la protección de los datos de sus entornos RedHat Openshift.
El Proveedor asegura el mantenimiento en condición operativa y en condición de seguridad de esta plataforma integrada de respaldo.
Independientemente del número de zonas de disponibilidad suscritas por el CLIENTE, el Proveedor garantiza que la plataforma de 
respaldo del CLIENTE estará ubicada fuera de la zona de disponibilidad de las cargas de trabajo salvaguardadas.

La prestación de respaldo se limita al respaldo de las máquinas virtuales y de las configuraciones de topología del entorno IaaS de los inquilinos SecNumCloud del CLIENTE. 
La elaboración y la aplicación de una política de respaldo adecuada por parte del CLIENTE depende de la suscripción a unidades de obra específicas.
Por lo tanto, corresponde al CLIENTE asegurarse de la disponibilidad de los recursos técnicos necesarios junto al Proveedor
para implementar su política de respaldo o ajustarla de acuerdo con los medios disponibles.

El Proveedor se compromete a notificar al CLIENTE en caso de limitaciones de capacidad y a proporcionar asesoramiento para la optimización de los recursos.
Las obligaciones del Proveedor se limitarán a la implementación de las necesidades expresadas por el CLIENTE en materia de política de respaldo, en el marco de los recursos suscritos.

#### 8.1.4. Implementación de soluciones para la recuperación de la actividad o la continuidad de la actividad

El Proveedor proporciona al CLIENTE el conjunto de soluciones técnicas necesarias para garantizar una distribución óptima de sus recursos 
a través de diversas zonas de disponibilidad. Es responsabilidad del CLIENTE gestionar eficazmente esta distribución de recursos, 
para lo cual tiene la posibilidad de explotar las herramientas del Proveedor disponibles para este uso.

En particular, las aplicaciones desplegadas en la plataforma RedHat OpenShift deben soportar los mecanismos de redundancia propuestos por el Proveedor para poder beneficiarse de las soluciones de recuperación de actividades o de continuidad de actividades asociadas.

## 10. Compromisos y niveles de servicios

El Proveedor se compromete a garantizar una vigilancia continua del rendimiento y la integridad de seguridad de sus 
plataformas y servicios, asegurando su funcionamiento óptimo.

La indisponibilidad de un servicio, sujeta a un indicador de rendimiento, se reconoce desde su identificación por el sistema de supervisión del Proveedor, 
o tras una notificación por un usuario del CLIENTE. El inicio de la indisponibilidad se fija en el momento más temprano entre estos dos eventos, 
para garantizar un conteo preciso y justo del tiempo de indisponibilidad.

El fin de la indisponibilidad se marca oficialmente con la restauración completa del servicio, confirmada ya sea por las herramientas de supervisión del Proveedor, 
o por una respuesta del usuario, asegurando así la reanudación efectiva de las operaciones y una medida fiel de la duración de la interrupción.

### 10.1. Compromisos de disponibilidad de la plataforma RedHat OpenShift
El Proveedor se compromete a mantener un nivel de disponibilidad y rendimiento de acuerdo con los estándares definidos para cada período especificado.
Los compromisos de nivel de servicio (Service Level Agreements, SLAs) se aplican siempre que el CLIENTE implemente sus sistemas a través de
al menos dos de las zonas de disponibilidad presentes en la región afectada.

Si el CLIENTE no cumple con estas condiciones, no podrá reclamar la aplicación de los SLAs en cuestión,
los cuales están específicamente identificados por un asterisco (*). El acceso a los SLAs se realiza a través de la interfaz CLIENTE. **Las mediciones se calculan mensualmente**:

- **SLA 1 (*) : IC-PAAS_SNC-01** – Disponibilidad de la plataforma RedHat OpenShift: tasa de disponibilidad garantizada del 99,9%, calculada sobre una base de 24 horas al día, 7 días a la semana.

_**Observaciones**_:

- *En respuesta a un ataque de denegación de servicio distribuido (DDoS), el Proveedor se reserva el derecho de ajustar su configuración de enrutamiento de Internet para
limitar el impacto de dicho ataque y proteger su infraestructura. En particular, si una dirección IP perteneciente al CLIENTE es objetivo, el Proveedor puede recurrir a la técnica de blackholing
a través de la comunidad BGP para bloquear todo el tráfico hacia la dirección IP afectada aguas arriba en sus proveedores, con el fin de proteger los recursos del CLIENTE así como los de otros clientes
y de la infraestructura del Proveedor. El Proveedor recomienda encarecidamente al CLIENTE adoptar medidas similares, como el uso de firewalls de aplicaciones web disponibles en el mercado, y configurar cuidadosamente sus grupos de seguridad a través de la API de comandos.*

- *El Proveedor insiste en la necesidad de que el CLIENTE minimice las aperturas de flujos, evitando en particular hacer accesibles los puertos
de administración **SSH** (puerto TCP 22) y **RDP** (puerto TCP 3389) desde toda la Internet (subred 0.0.0.0/0), así como protocolos internos tales como **SMB** (puerto TCP/UDP 445) o **NFS** (puerto TCP/UDP 2049).*

## 12. Modelo de responsabilidades compartidas aplicable

### 12.1. Responsabilidad y Obligaciones del Proveedor

El Proveedor se compromete a poner a disposición del CLIENTE interfaces de usuario en francés e inglés, facilitando así el acceso y la gestión de los servicios proporcionados.
El CLIENTE, por su parte, se compromete a respetar las restricciones legales y reglamentarias vigentes en relación con los datos que confía al Proveedor para su tratamiento.

En caso de transmisión de datos sujetos a requisitos legales específicos, el Proveedor colaborará con el CLIENTE para identificar e implementar
las medidas de seguridad necesarias, de acuerdo con las obligaciones del Proveedor y en el contexto de la prestación de servicios.

El Proveedor también se compromete a examinar y considerar las necesidades específicas relacionadas con los sectores de actividad del CLIENTE,
respetando las limitaciones de su responsabilidad, para garantizar un nivel de seguridad adecuado a la información procesada.

Si un proyecto puede impactar la seguridad del servicio ofrecido, el Proveedor se compromete a informar al CLIENTE de los impactos potenciales,
las medidas correctivas consideradas y los riesgos residuales, asegurando una total transparencia.

El Proveedor garantiza que no utilizará los datos del CLIENTE con fines de prueba sin un acuerdo previo y explícito del CLIENTE
y se compromete a anonimizar y proteger la confidencialidad de esos datos durante su tratamiento.

En caso de cambio de subcontratista para el alojamiento, el Proveedor informará al CLIENTE con antelación, asegurándose de que esta transición no afecte negativamente el servicio proporcionado.

A petición del CLIENTE, el Proveedor proporcionará acceso a su reglamento interno, su código de ética, las sanciones aplicables en caso de incumplimiento de su
política de seguridad, los eventos que le conciernen, los procedimientos relacionados con el servicio y los requisitos específicos de seguridad.

### 12.2. Limitación de responsabilidad del Proveedor
La estructura de responsabilidad compartida reduce eficazmente el alcance de la intervención del Proveedor a los aspectos relacionados con la provisión de una plataforma funcional RedHat OpenShift, que incluye:

- La gestión de la infraestructura IaaS que soporta la plataforma RedHat OpenShift y su aprovisionamiento,
- La gestión de los sistemas necesarios para el correcto funcionamiento de la plataforma,
- El mantenimiento en condiciones de seguridad,
- La actualización de la plataforma RedHat OpenShift,
- La copia de seguridad de los datos de configuración esenciales de esta plataforma, con la excepción de los datos y aplicaciones del CLIENTE, que son de su responsabilidad.

Esto excluye en particular, pero sin limitarse a:

- La actualización de los sistemas operativos y los programas instalados por el CLIENTE en sus entornos OpenShift en sus espacios de alquiler,
- La seguridad de los programas, software y aplicaciones instalados en el entorno OpenShift por el CLIENTE,
- La copia de seguridad de los datos a nivel aplicativo,
- La configuración de las políticas de copia de seguridad.

### 12.3. Limitación de acceso
En el marco de este convenio de servicio, al Proveedor le está estrictamente prohibido acceder a los tenantes pertenecientes al CLIENTE sin autorización previa. 
Es responsabilidad del CLIENTE proporcionar los accesos necesarios al personal del Proveedor, según las necesidades específicas del alojamiento y, 
en su caso, de los servicios profesionales de soporte, si esta opción ha sido elegida por el CLIENTE.

El CLIENTE reconoce que estos accesos se otorgan exclusivamente para las necesidades relacionadas con la prestación de servicios acordados, 
asegurando así una gestión segura y conforme a los términos del acuerdo.

El acceso remoto por parte de terceros implicados en la prestación del servicio del Proveedor está estrictamente prohibido. 
En el evento de que una necesidad técnica específica requiriese tal acceso, éste solo podría establecerse 
después de haber notificado claramente al CLIENTE, proporcionado una justificación detallada y obtenido su consentimiento escrito.

Esta medida garantiza el control y la seguridad de los datos del CLIENTE, asegurándose de que cualquier excepción a la regla está debidamente autorizada y documentada.

## 13. Eliminación de datos al final del contrato
Al término del contrato, ya sea por expiración o por rescisión por cualquier motivo, el Proveedor se compromete a llevar a cabo la eliminación segura de todos los datos del Cliente, incluyendo los datos técnicos. El Proveedor se asegurará de comunicar al CLIENTE un preaviso formal, respetando un plazo de veintiún (21) días calendario. Los datos del CLIENTE serán eliminados en un plazo máximo de treinta (30) días después de esta notificación.

Para certificar esta eliminación, el Proveedor entregará al Cliente un certificado que confirme el borrado de los datos.

## 14. Derecho aplicable
El derecho aplicable para el presente convenio de servicio es el derecho francés.