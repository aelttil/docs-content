---
title: Conectividad a Internet
---

Cloud Temple ofrece a sus clientes bloques de __direcciones IP públicas__ de al menos 8 IPv4 o 64 IPv6, declaradas ante RIPE, para permitir su conectividad a Internet.

## Asignación de una direccionamiento de internet público Agregado por el Proveedor (PA)
En este contexto, usted está utilizando direcciones IP públicas asignadas a Cloud Temple, que le son alquiladas para sus usos.

La creación de una conectividad a internet y la asignación de las direcciones IP públicas asociadas se realiza mediante __una solicitud de servicio__ que indica:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El tamaño de la subred deseada (mínimo /29 en IPv4 y /64 en IPv6)
    Si no se han proporcionado anteriormente, la información RIPE (contacto administrativo en particular) será solicitada por el soporte

La entrega del acceso a internet se realiza a través del protocolo BGP4 en respuesta a la solicitud de soporte, que proporcionará la siguiente información:

- *prefijo público*
- *prefijo de interconexión*
- *any-cast gateway*
- *Subnet IP*
- *AS local*
- *AS de Cloud Temple*
- *keepalive timers y hold-time timer*
- *las direcciones de los route servers asociados a su tenant*.

El uso del protocolo BGP4 garantiza un enrutamiento eficaz de sus flujos de Internet hacia la pasarela activa de su arquitectura, particularmente en escenarios de despliegue multi-zonas de disponibilidad, como es el caso de clústeres de firewalls distribuidos entre dos zonas de disponibilidad.

## Bloques IPv4 

### Oferta de direcciones IPv4 en versión 1
__*Esta oferta ha dejado de comercializarse desde el 2 de mayo de 2024*__

La entrega de las IPv4 se realiza __dentro del límite de las existencias disponibles__ para nuestros clientes, con un bloque mínimo de 8 IPv4 (/29 o 255.255.255.248).

Es posible visualizar los bloques de direcciones que se le han asignado en el menú __*'IPs públicas'*__ del menú Redes en la banda verde a la izquierda.

| Referencia                              | Unidad | SKU                           |
| --------------------------------------- | ------ | ----------------------------- |
| Red - Rango IPv4 Públicas dedicadas    | 8 IPv4 | csp:(región):network:ipv4:v1 |

### Oferta de dirección IPv4 en versión 2
La entrega de una IPv4 se realiza dentro de __los límites de las existencias disponibles__ para nuestros clientes, por dirección IP.

Es posible visualizar los bloques de direcciones que se le han asignado en el menú __*'IPs públicas'*__ del menú Redes en la franja verde a la izquierda.

| Referencia                     | Unidad | SKU                          |
| ----------------------------- | ------ | ---------------------------- |
| Red - IPv4 Pública dedicada | 1 IPv4 | csp:(region):network:ipv4:v2 |

## Bloques IPv6

__Al 1 de mayo de 2024, la oferta de direcciones IP Públicas IPv6 aún no está disponible para su comercialización.__

La comercialización está prevista para el segundo semestre de 2024.

| Referencia                            | Unidad   | SKU                        |
| ------------------------------------- | -------- | -------------------------- |
| Red - Gama IPv6 Pública dedicada      | 64 IPv6  | csp:(region):network:ipv6:v1 |

## Direcciones IP públicas Provider Independant (PI)
Si dispone de su propia dirección Provider Independent, tiene la posibilidad de anunciarla dentro del Autonomous System de Cloud Temple. Esto le permite continuar utilizando sus propias direcciones IP dentro de la infraestructura de Cloud Temple y facilitar sus migraciones.

Para hacer esto, realice __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    El bloque de dirección IP PI que posee y que desea anunciar
    Si aún no se han proporcionado, la información asociada RIPE será solicitada por el soporte

No hay una facturación específica para los clientes que utilizan direcciones Provider Independent.

## Gestión de sus conectividades a Internet
La gestión de la conectividad se realiza mediante el menú **'Red'** > **'Internet'**. Este menú centraliza la gestión de las direcciones IP, ofreciendo dos categorías distintas:

1. **Direcciones IP Públicas**: son utilizadas para exponer sus servicios en Internet, facilitando así los intercambios de datos entrantes y salientes.
2. **Direcciones IP de Interconexión**: estas direcciones permiten que sus puertas de enlace dirijan el tráfico hacia la red específica de Cloud Temple, asegurando una conexión segura y eficaz.

Las direcciones IP públicas permiten el acceso a Internet, mientras que las direcciones IP de interconexión utilizadas con el protocolo BGP4 aseguran conexiones seguras entre redes. Estas últimas facilitan intercambios fiables y protegidos entre su tenant y la red Cloud Temple. El uso conjunto de estas direcciones mejora la gestión del tráfico y aumenta la seguridad y el rendimiento de la red.

Aquí está la interfaz principal para la gestión de las direcciones IP:

![](images/shiva_inet_001.png)

La pestaña de inicio corresponde a su ASN interno dedicado a su tenant. Indica en particular la información importante para la configuración de su conectividad BGP.

### Direcciones IP públicas
Es posible ver y comentar los bloques y direcciones IP asociados a su tenant a través del IPAM integrado en la consola Cloud Temple:

![](images/shiva_inet_002.png)

La solicitud de direcciones IP públicas se realiza a través del botón **'Solicitar IPs públicas'** :

![](images/shiva_inet_003.png){:height="70%" width="70%"}

La reserva y asignación de una dirección IP se hacen a través del botón **'Reservar una dirección'** :

![](images/shiva_inet_004.png){:height="70%" width="70%"}

La modificación o eliminación de la reserva a través de los botones **'Acciones'** :

![](images/shiva_inet_005.png){:height="30%" width="30%"}

Eliminar una reserva significa que el recurso se vuelve disponible para otro uso, pero permanece asignado y facturado al cliente.

En algunas líneas, el botón **'Acción'** no está disponible, lo que indica que las direcciones IP están reservadas y por lo tanto no disponibles para uso.

### Direcciones IP de interconexión
De la misma manera, pueden ver y comentar los bloques de direcciones IP de interconexión. Pueden visualizar los subredes de interconexiones con la red Cloud Temple y su uso:

![](images/shiva_inet_008.png)

Pueden fácilmente modificar, al igual que para las direcciones públicas, su uso en la gestión IPAM integrada:

![](images/shiva_inet_007.png){:height="70%" width="70%"}

### Reserva de anchura de banda de internet
El ancho de banda de Internet se puede reservar en incrementos de 100 Mbps. La capacidad máxima disponible para una puerta de enlace es de 10 Gbps, potencialmente limitada por las características técnicas de su puerta de enlace.

La facturación se realiza en el percentil 95 durante el periodo de facturación, que suele ser un mes. Por lo tanto, ocasionalmente puede disfrutar de un aumento más allá de su capacidad reservada.

| Referencia                                    | Unidad    | SKU                                      |
| --------------------------------------------- | --------- | ---------------------------------------- |
| Red - Ancho de banda de Internet reservado    | 100 Mbps | csp:(region):network:trafic:internet:v1 |

__*Nota:*__
*No hay __facturación volumétrica__ de tipo __'tarifas de salida'. Solo paga por la reserva de ancho de banda.__*

## Anti-DDoS

Un ataque de denegación de servicio distribuido (DDoS) tiene como objetivo degradar o dejar fuera de línea un servicio sobrecargándolo con tráfico ilegítimo.

La protección Anti-DDoS de Cloud Temple os protege contra los actores maliciosos y __está activa sin costo adicional contra los ataques volumétricos__: el filtrado se lleva a cabo previamente por nuestros socios de telecomunicaciones.

## Ir más allá
- [Desplegar un firewall virtual](quickstart_network.md#desplegar-un-firewall-opensource-pfsense-)