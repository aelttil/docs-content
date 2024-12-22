---
title: Presentación
---

## Características generales

La oferta __IaaS (Infraestructura Como Servicio)__ de Cloud Temple fue concebida inicialmente para proporcionar facilidades de recuperación de actividad y de continuidad de actividad al mundo de la industria, la banca y los seguros.
Sus características técnicas, en particular los aspectos de redes, la convierten en una plataforma diseñada para cargas de trabajo que requieren una disponibilidad máxima.

La plataforma Cloud Temple está totalmente automatizada y se basa en los siguientes socios tecnológicos:

- El cálculo se basa en las tecnologías __CISCO UCS__,
- El almacenamiento se basa en las tecnologías __IBM Spectrum Virtualize__ y __IBM FlashSystem__ para el almacenamiento en bloque, __DELL ECS__ para el almacenamiento de objetos,
- La red se basa en las tecnologías __JUNIPER__.

La plataforma es de tipo __'VersaStack'__, alianza tecnológica entre Cisco e IBM, y permite integrar fácilmente las matrices de compatibilidad de los principales editoriales.

Aunque está completamente automatizada a través de sus APIs y su proveedor de Terraform, la plataforma Cloud Temple ofrece sin embargo un enfoque singular:

- Las blades de cálculo son dedicadas al [tenant](../console/tenants.md) de [la organización](../console/organisations.md) del comitente y no se comparten entre los clientes.
- Los volúmenes de almacenamiento son dedicados al [tenant](../console/tenants.md) de [la organización](../console/organisations.md) del comitente y no se comparten entre los clientes.
- Las pilas de software (virtualización, copia de seguridad, equilibrio de carga, cortafuegos, ...) también son dedicadas y no se comparten.

La plataforma Cloud Temple permite así una __predictibilidad máxima del comportamiento de la infraestructura__ (el comitente es maestro de las tasas de virtualización y de la presión en Iops sobre el almacenamiento) así como una __predictibilidad fuerte de la facturación__, todos los UOs siendo en pago a consumo mes a mes.

Esta infraestructura está calificada SecNumCloud por [la ANSSI](https://www.ssi.gouv.fr/) que así garantiza una gestión de manera industrial con un muy alto nivel de automatización y seguridad.

La oferta IaaS comprende los siguientes elementos:

    - Recursos de cálculo (CPU, RAM) dedicados y bajo demanda;
    - Recursos de almacenamiento bajo demanda (varias clases de almacenamiento disponibles);
    - Recursos de red (acceso a Internet, Red privada);
    - Copias de seguridad cruzadas con retención configurable (externalización posible como opción);
    - Replicación asincrónica a nivel de almacenamiento o de las máquinas virtuales;

Todos sus recursos _IaaS_ son controlables desde la [Console Shiva](../console/console.md).
También es posible adoptar un enfoque de *"Infraestructura como Código"* para gestionar sus recursos en la nube, gracias a las APIs y al proveedor de Terraform que Cloud Temple pone a su disposición.


## Ventajas
| Ventaja              | Descripción                                                                                                                                    |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Confianza Digital    | Alojamiento de datos en Francia y conformidad RGPD.                                                                                            |
| Seguridad            | Plataforma altamente segura, calificada __SecNumCloud__, __HDS__ (Alojamiento de los Datos de Salud), __ISO 27001__ e __ISAE 3402 tipo II__.   |
| Alta disponibilidad  | Tasa de disponibilidad de la plataforma del 99,99%, medida mensualmente, incluyendo los periodos de mantenimiento.                             |
| Resiliencia          | Implementación de planes de continuidad o de recuperación de actividad según las necesidades.                                                   |
| Automatización       | Plataforma totalmente automatizada pensada para integrarse en un programa de transformación digital                                            |
| Bajo demanda         | Recursos disponibles bajo demanda                                                                                                              |


## Plataformas de compras

¿Es un actor del Servicio Público y desea solicitar los servicios de Cloud Temple?

Nuestra oferta está disponible a través de la plataforma de compras públicas [UGAP](https://cloudtour.capgemini.fr/partenaires/cloud-temple) así como el mercado [CAIH](https://www.caih-sante.org) para el mundo médico.

[Más información](https://www.cloud-temple.com/cloud-souverain-disponible-via-lugap/)


