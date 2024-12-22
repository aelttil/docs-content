---
title: Redes
---

## Producto de Red Privada

La oferta de red __Cloud Temple__ se describe en la sección [Redes](../network/private_network.md).

## Oferta de firewall virtual

A partir del 1° de enero de 2024, Cloud Temple ofrece en su catálogo de unidades de obra dos tecnologías de firewall: __Stormshield__ y __Fortinet__.

La disposición de un cluster de firewall se realiza a pedido del soporte técnico directamente en la consola Cloud Temple. Los clusters se entregan con la tecnología UTM (antivirus, prevención de intrusión y filtrado web).

La provisión de un cluster de firewall se realiza mediante una solicitud de servicio que indica:

    El nombre de su organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del inquilino
    las zonas de disponibilidad para cada nodo
    El bloque IPv4 asignado a usar si el cluster necesita acceso a internet
    El SKU deseado (el modelo de firewall)

El clúster de firewall se entrega preconfigurado por los equipos de soporte de Cloud Temple.

### Oferta Stormshield

La oferta de firewall virtual __Stormshield EVA__ está disponible en la infraestructura Cloud Temple. Por defecto, la oferta se compone de dos nodos Activo / Pasivo, con la posibilidad de tener 1 nodo por zona de disponibilidad.
La oferta __Stormshield EVA__ tiene la visa de confianza de __ANSSI__.

| Referencia                                                                                         | Unidad   | SKU                          |
|----------------------------------------------------------------------------------------------------|----------|------------------------------|
| FIREWALL UTM - STORMSHIELD virtual EVA1 - 1 Vcpu - 2Go RAM - 50 usuarios SSLVPN máx. - 100 túneles | 1 Clúster | csp:(region):licence:fw:eva1 |
| FIREWALL UTM - STORMSHIELD virtual EVA2 - 2 Vcpu - 3Go RAM - 512 usuarios SSLVPN máx. - 150 túneles | 1 Clúster | csp:(region):licence:fw:eva2 |
| FIREWALL UTM - STORMSHIELD virtual EVA3 - 4 Vcpu - 6Go RAM - 512 usuarios SSLVPN máx. - 200 túneles | 1 Clúster | csp:(region):licence:fw:eva3 |
| FIREWALL UTM - STORMSHIELD virtual EVA4 - 4 Vcpu - 8Go RAM - 1024 usuarios SSLVPN máx. - 250 túneles | 1 Clúster | csp:(region):licence:fw:eva4 |

### Oferta Fortinet

La oferta de firewall virtual __Fortigate VM__ está disponible en la infraestructura Cloud Temple. Por defecto, la oferta está compuesta por dos nodos 'activo / Pasivo', con la posibilidad de tener 1 nodo por zona de disponibilidad.

| Referencia                                       | Unidad   | SKU                          |
|--------------------------------------------------|----------|------------------------------|
| FIREWALL UTM - Fortigate Virtual VM02V - sin vdom | 1 Clúster | csp:(region):licence:fw:ftg2 |
| FIREWALL UTM - Fortigate Virtual VM04V - sin vdom | 1 Clúster | csp:(region):licence:fw:ftg4 |
| FIREWALL UTM - Fortigate Virtual VM08V - sin vdom | 1 Clúster | csp:(region):licence:fw:ftg8 |

### Ejemplo de rendimiento

Aquí proporcionamos una indicación del rendimiento alcanzable con la oferta de virtualización VMware, sin la activación de SRV-IO,
utilizando una cuchilla de cálculo de tipo __'standard:v2'__, que tiene 2 procesadores a 2.4Ghz del tipo Intel Silver 4314 o equivalente.

Una appliance virtual __Fortigate VM16__, equipada con 128GB de ram y 16 vCPU, puede alcanzar una capacidad de __9 Gbits__ entre 2 zonas de disponibilidad con un MSS de 1350 y 100 conexiones simultáneas en paralelo.

*__Atención__* : 

*La latencia garantizada entre las zonas de disponibilidad es inferior a 4 milisegundos, por lo que el rendimiento __no se puede alcanzar con una única sesión TCP__.*
*El ancho de banda máximo accesible en una conexión TCP está gobernado por la siguiente ley:*

__MAX BANDWIDTH = TCP WINDOWS SIZE / RTT__, donde el RTT es el tiempo de respuesta ping / 1000.

*Por lo tanto, debe __multiplexar sus transferencias en TCP__ o __utilizar un protocolo sin conexión como UDP__ para alcanzar el rendimiento máximo.*

## Micro-segmentación 

A partir del 1° de enero de 2024, la oferta de microsegmentación de las máquinas virtuales no está abierta a la comercialización.
