---
title: Conceptos
---

## Regiones

La infraestructura de Cloud Temple está diseñada para permitir la continuidad del negocio de sus aplicaciones y plataformas. 
Dentro de una región, se beneficia de una continuidad de red de nivel 2.

Así, es posible definir una arquitectura técnica en la región de París, utilizando 3 sitios físicos para permitir la implementación de una plataforma de alta disponibilidad con quórum.

En enero de 2024, la plataforma IaaS de Cloud Temple cuenta con las siguientes regiones:

- Región FR1 (París)

### Región FR1

La región FR1 se basa en tres sitios físicos en la región de París. 

![](images/iaas_az_001.png){height="50%" width="50%"}

Cada sitio está a más de 30km en línea recta de los otros. En promedio, se calcula una distancia óptica de 80Km entre cada sitio. La latencia garantizada entre los sitios es menor a 4 ms.

### Extensiones regionales

La apertura de nuevas regiones está principalmente asociada a oportunidades de mercado. En enero de 2024, se está considerando la apertura de una región en el sur de Europa y de una región en el norte de Europa.

## Zonas de disponibilidad 

Cada sitio físico dentro de una región tiene una o más salas privadas para nuestras infraestructuras. Estas habitaciones son de uso exclusivo de Cloud Temple.

__Cada sala física corresponde a una zona de disponibilidad (AZ / Availability Zone)__ y es totalmente autónoma en términos de electricidad, refrigeración, cálculo, almacenamiento y red.
La elección de una zona de disponibilidad implica por lo tanto la elección de un sitio físico y de una región.

Durante el despliegue inicial de su [organización](../console/organisations.md),
usted elige el número de zonas de disponibilidad que desea (entre 1 y 3) para cada uno de sus [inquilinos](../console/tenants.md).

La consola Shiva automáticamente propone zonas de disponibilidad en sitios físicos distintos para distribuir su infraestructura en el máximo número de sitios físicos.

*__Nota: Si desea una configuración específica para un contexto específico (varias AZ en el mismo sitio físico), deberá solicitarlo a través de soporte.__*


| Referencia de pedido                                       | Unidad          | SKU                        |  
|------------------------------------------------------------|-----------------|----------------------------|
| TENANT - *(REGION)* - Activación de una zona de disponibilidad | 1 AZ por inquilino | csp:*(REGION)*:iaas:az:v1 |


## Máquinas virtuales
Una máquina virtual es un entorno virtualizado que opera en una máquina física. 
Tiene su propio sistema operativo (SO) y cuenta con las mismas características que una máquina física: CPU, RAM, disco duro y tarjeta de red, GPU, Bios,...
Dentro de la oferta IaaS, se aloja en recursos de cálculo y almacenamiento dedicados. 
Tiene la posibilidad de crear máquinas virtuales "from scratch" o de desplegarlas a partir de `Templates` disponibles en un catálogo público proporcionado por Cloud Temple. 

![](images/shiva_vm_home.png)
