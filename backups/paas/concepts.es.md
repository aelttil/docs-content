---
title: Conceptos
---

## Objetivos

La plataforma __'PaaS'__ de Cloud Temple tiene como objetivo permitir a nuestros clientes operar sus programas de transformación digital con facilidad, sea cual sea la infraestructura subyacente.

Los servicios asociados a esta plataforma son los siguientes:

- Contenedorización en colaboración con __REDHAT__ a través de la plataforma __'[OpenShift](https://www.redhat.com/en/technologies/cloud-computing/openshift)'__,
- Almacenamiento de objetos transaccionales en colaboración con __DELL__ a través de la plataforma __'[ECS](https://www.dell.com/en-us/dt/storage/ecs/index.htm?hve=explore+ecs)'__,
- Cifrado en colaboración con __THALES__.

Estos servicios se abrirán gradualmente a la comercialización durante el primer trimestre de 2024.

## Plataforma de almacenamiento de objetos

### Generalidades

El almacenamiento de objetos se distingue por su robustez, seguridad reforzada y capacidad de evolución, ofreciendo un acceso constante a sus datos. Este sistema es ideal para archivar información en la nube, garantizando su disponibilidad desde cualquier ubicación.

Responde de manera eficiente a las necesidades de las empresas que requieren una gestión voluminosa y diversificada de archivos digitales.

Lanzado en 2006 por Amazon Web Services (AWS), __Simple Storage Service (S3)__ se ha convertido en el estándar de facto para el almacenamiento de objetos en el mundo de la nube.

El almacenamiento de objetos S3 se caracteriza por su __elasticidad__, ajustando automáticamente las capacidades de almacenamiento en función de las fluctuaciones del volumen de datos. Esta flexibilidad permite a los usuarios manipular archivos sin preocuparse de las restricciones de capacidad, optimizando así el proceso de archivo y asegurando un acceso rápido y eficaz a la información.

La __seguridad de los datos__ está garantizada por estrategias de protección de múltiples capas, incluyendo el uso de claves de acceso cifradas, el cifrado de los datos en tránsito y en reposo, así como la gestión estricta de los derechos de acceso.

Además, la integración fluida del almacenamiento de objetos S3 con otros servicios en la nube enriquece y facilita la experiencia de los desarrolladores gracias a un vasto ecosistema de herramientas y bibliotecas que facilitan la integración en las aplicaciones y flujos de trabajo existentes.

### Casos de uso

El almacenamiento de objetos Cloud Temple se presenta como una solución óptima para __el almacenamiento secundario o jerarquizado__, ofreciendo una alternativa económica para archivar __datos menos accedidos frecuentemente__, como las copias de seguridad de bases de datos o archivos de gran tamaño, desde un almacenamiento primario más costoso.

Para el desarrollo y despliegue de aplicaciones, el almacenamiento de objetos Cloud Temple facilita el __desarrollo de aplicaciones web, móviles y de nube de nueva generación__.

Como base para __la creación de un Data Lake__, el almacenamiento de objetos Cloud Temple permite a las empresas de todos los sectores maximizar el valor de sus datos. Integra servicios HDFS eficientes, ofreciendo capacidades de análisis avanzadas in situ para mejorar la toma de decisiones mientras se minimizan los riesgos y retrasos.

Basado en la solución __Dell ECS (Elastic Cloud Storage)__, el almacenamiento de objetos Cloud Temple se enriquece por alianzas estratégicas con varios editores, como __Databricks__ y __ChapsVision__, aumentando así el alcance de sus soluciones de almacenamiento de objetos.

En el campo del __Internet de las Cosas (IoT)__, destaca por su capacidad para gestionar un volumen ilimitado de objetos, sin restricciones en el tamaño de los objetos o metadatos, lo que lo convierte en la plataforma ideal para el almacenamiento de datos IoT.

El almacenamiento de objetos Cloud Temple también ofrece una solución segura para __el archivo y conservación a largo plazo de los datos__, satisfaciendo las necesidades de retención de las empresas.

Es particularmente adecuado para alojar __contenidos estáticos__, como imágenes, scripts y hojas de estilo CSS, optimizando el rendimiento de las aplicaciones web al descargar los servidores de aplicaciones y acelerar la descarga de contenidos a los usuarios finales.

Finalmente, como componente esencial de las __estrategias de backup y de recuperación de desastres__ (DRaaS), el almacenamiento de objetos Cloud Temple permite una copia de seguridad regular y confiable de datos críticos. Su estructura distribuida multi-sitio asegura la disponibilidad de datos en todo momento, reduciendo así las interrupciones de actividad y las posibles pérdidas de datos.

## Plataforma RedHat OpenShift

### Generalidades

__RedHat OpenShift__ es una plataforma de contenedorización de aplicaciones basada en __Kubernetes__, que automatiza el despliegue, la gestión y el escalado de aplicaciones en un entorno en la nube confiable.

Diseñada para desarrolladores y equipos de TI, ofrece un entorno de desarrollo, prueba y producción coherente y seguro para aplicaciones nativas de la nube y aplicaciones monolíticas tradicionales.

__RedHat OpenShift__ facilita el trabajo de los ingenieros DevOps integrando herramientas de desarrollo, pruebas automatizadas y procesos de despliegue continuo (CI/CD) para acelerar el ciclo de vida de desarrollo de aplicaciones. Admite una amplia gama de lenguajes de programación y frameworks, permitiendo a los desarrolladores trabajar con las tecnologías que conocen y valoran.

La plataforma proporciona una infraestructura de contenedores altamente disponible y segura, al utilizar las mejores prácticas de seguridad y ofrecer funcionalidades como autenticación integrada, autorización y control de acceso basado en roles. __RedHat OpenShift__ también permite una gestión fina de los recursos, asegurando que las aplicaciones tengan los recursos necesarios para operar de manera óptima.

Con __RedHat OpenShift__, las empresas pueden desplegar fácilmente sus aplicaciones en un entorno de nube híbrida, beneficiándose así de la flexibilidad de desplegar en el sitio o en la nube.

### Casos de uso

__RedHat OpenShift__ se utiliza en una variedad de casos de uso, debido a su flexibilidad, seguridad y extenso ecosistema. Aquí hay algunos de los principales casos de uso:

1. **Desarrollo de aplicaciones nativas de la nube:** OpenShift es ideal para desarrollar y desplegar aplicaciones diseñadas específicamente para la nube, utilizando arquitecturas de microservicios, contenedores y servicios gestionados. Esto permite a los desarrolladores concentrarse en la creación de características en lugar de en la gestión de la infraestructura.

2. **Modernización de aplicaciones existentes:** Las empresas utilizan OpenShift para modernizar sus aplicaciones monolíticas tradicionales, refactorizándolas en microservicios o contenedorizándolas para mejorar la escalabilidad, la resiliencia y la portabilidad.

3. **Integración y despliegue continuos (CI/CD):** OpenShift facilita la implementación de pipelines CI/CD, permitiendo la integración y el despliegue automáticos del código, reduciendo así los errores humanos y acelerando el ciclo de vida de desarrollo de las aplicaciones.

4. **Automatización de operaciones de TI:** Gracias a su integración estrecha con Kubernetes, OpenShift permite una gestión automatizada de los contenedores, incluyendo su despliegue, escalado y gestión del ciclo de vida, liberando a los operadores de TI de las tareas repetitivas.

5. **Desarrollo multi-cloud e híbrido:** OpenShift ofrece la flexibilidad de desplegar aplicaciones en entornos on-premise, públicos, privados o híbridos, permitiendo a las empresas elegir el enfoque más adecuado para sus necesidades sin quedar atrapadas en un único proveedor en la nube.

6. **Aplicaciones a gran escala y de alta disponibilidad:** OpenShift está diseñado para soportar aplicaciones que requieren alta disponibilidad, gran escala y alto rendimiento, gracias a su gestión eficiente de recursos y su capacidad de replicar aplicaciones en múltiples nodos.

7. **Desarrollo y despliegue de aplicaciones IoT:** OpenShift puede utilizarse para desarrollar y desplegar aplicaciones IoT, beneficiándose de su capacidad para gestionar un gran número de conexiones y datos en tiempo real.

8. **Big Data y aplicaciones analíticas:** Con su soporte para soluciones como Apache Spark en Kubernetes, OpenShift permite el procesamiento de grandes cantidades de datos y la ejecución de análisis complejos, facilitando así la toma de decisiones basada en datos.

9. **Entornos de desarrollo y prueba:** OpenShift ofrece entornos aislados y reproducibles para el desarrollo y prueba de aplicaciones, reduciendo los conflictos entre equipos y mejorando la calidad del código.

Estos casos de uso ilustran la versatilidad de OpenShift como plataforma que no solo acelera el desarrollo y despliegue de aplicaciones, sino que también apoya la transformación digital de empresas a través de diferentes sectores de actividad.
