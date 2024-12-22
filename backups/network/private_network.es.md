---
title: Redes Privadas
---

## Arquitectura de Red Cloud Temple
La oferta __*Red Privada*__ proporciona conectividad de red privada de nivel 2 entre sus servicios. La capacidad de intercambio de cada zona de disponibilidad es de varios cientos de gigabits y agregamos regularmente capacidad según nuestras necesidades. Encendemos nuestra propia red óptica.

### La tecnología VPLS
La red global Cloud Temple utiliza la tecnología __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ es una VPN de capa 2 punto a multipunto basada en Ethernet. Permite conectar sitios geográficamente 
dispersos entre sí a través de una red MPLS. Para los clientes, todos los sitios parecen estar en la misma 
LAN Ethernet, aunque el tráfico sea transportado por la red Cloud Temple.

__VPLS__, en su implementación y configuración, tiene mucho en común con una VPN de capa 2. En VPLS, un paquete que proviene 
de una red cliente es primero enviado a un dispositivo cliente (CE) (por ejemplo, un router o un switch Ethernet).
Luego es enviado a un router de borde del proveedor (PE) dentro de la red del proveedor de servicios. 
El paquete atraviesa la red del proveedor de servicios en un camino de conmutación de etiquetas MPLS (LSP). 
Llega al router PE de salida, que luego transmite el tráfico hacia el dispositivo CE en el sitio cliente de destino.
La diferencia es que, para __VPLS__, los paquetes pueden atravesar la red del proveedor de 
servicios de manera punto a multipunto, lo que significa que un paquete que viene de un dispositivo CE puede ser 
difundido a todos los routers PE que participan en una instancia de direccionamiento __VPLS__. 

El circuito __VPLS__ de un cliente puede ser __extendido entre todas las zonas de disponibilidad de una región__.

El protocolo __VPLS__ es __totalmente transparente__ para los clientes que solo ven los diferentes VLANs en sus zonas de disponibilidad.

### La red en la oferta de virtualización VMware
Las redes virtuales (vlan) de la oferta de virtualización VMware son redes de tipos __'DVPortgroup'__. Un __'dvPortGroup'__, 
o __'Distributed Virtual Port Group'__, es un concepto específico de VMware. Un dvPortGroup es una entidad que 
agrupa varios puertos virtuales (vPorts) en un entorno de red virtual distribuido para facilitar su uso.

Localizado dentro de un __[tenant](../console/tenants.md)__, se pueden extender entre las zonas de disponibilidad 
permitiéndole así construir arquitecturas "activo / activo" con quórum.

El ancho de banda máximo utilizable depende principalmente del modelo de blade utilizado (10Gbps convergentes o 25 Gbps convergentes) y de las capacidades de las máquinas virtuales.

Es posible alcanzar un ancho de banda de 10Gbps.

Las configuraciones disponibles en la consola Cloud Temple dentro de la oferta de virtualización VMware son las siguientes:

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Nota__* :

- *La elección de la dirección IP dentro de estas redes es __libre.__*
- *__SRV-IO__ no está disponible en la oferta de red asociada con la virtualización VMware.*
- *__QinQ__ es soportado en la arquitectura Cloud Temple. QinQ, también conocido como "VLAN stacking" o 802.1ad, es 
un protocolo de red que permite la encapsulación de múltiples etiquetas VLAN (Virtual Local Area Network) en un solo fotograma Ethernet.*


## Redes privadas regionales
La ordenación de las redes privadas dentro de una región se realiza directamente en la consola Cloud Temple.

### Dentro de un inquilino
La creación de una red virtual se realiza en el menú __*Network*__ en la banda verde a la izquierda de la pantalla.

![](images/shiva_network_001.jpg)

Haga clic en el botón __*Nuevo red*__

Debe especificar el nombre de su red que se mostrará. Por defecto, todos sus clústeres tendrán acceso a su nueva red.
Sin embargo, en el submenú __*Opciones Avanzadas*__, puede especificar con más detalle el alcance de la propagación dentro del tenant entre sus diferentes clústeres.

![](images/shiva_network_002.jpg){:height="50%" width="50%"} 

El conjunto de acciones posibles en sus redes se encuentra en el menú __*Actions*__ de cada una de ellas:

- La activación del compartimiento de una red entre tenants de una misma organización.
- La desactivación del compartimiento de una red entre tenants de una misma organización.
- La adición de un compartimiento de una red entre tenants de una misma organización.
- La eliminación de un compartimiento de una red entre tenants de una misma organización.
- La visualización gráfica de la propagación de una red en todos sus clústeres y su hipervisores dentro de un tenant.
- La eliminación de una propagación dentro de un tenant.
- La modificación de una propagación dentro de un tenant.
- La eliminación de una red.

![](images/shiva_network_003.jpg)

__*Nota:*__ *No es posible elegir el ID de vlan 802.1q.*

| Referencia                                 | Unidad | SKU                          | 
|--------------------------------------------|--------|------------------------------|
| RED - Región FR1 - VLAN privado inter AZ   | 1 vlan | csp:(region):network:vlan:v1 |

#### Visualización de la propagación de sus redes
Puede visualizar fácilmente en el menú __*Acciones*__ la propagación de una red hacia sus diferentes clústeres dentro del mismo inquilino.
Seleccione la opción *"Visualizar la propagación"*:

![](images/shiva_network_004.jpg) 

#### Modificación de la propagación
La modificación de una propagación dentro de un inquilino se realiza mediante la opción *"Propagar"*:
elija a continuación los clústeres que deben ser integrados en esta propagación.

![](images/shiva_network_005.jpg){:height="50%" width="50%"} 

__*Nota:*__ *La modificación de la propagación está limitada a 20 redes por acción.*

#### Eliminación de una red

La eliminación de una red dentro de un tenant se lleva a cabo mediante la opción *"Eliminar la red"*:

![](images/shiva_network_006.jpg){:height="50%" width="50%"}

### Compartir la red entre tenants
De manera predeterminada, __las redes solo están disponibles dentro de un inquilino__. Puede optar por __compartir una red entre varios inquilinos__ por razones técnicas o de conectividad.
Es posible compartir una red entre sus __[inquilinos](../console/tenants.md)__ dentro de una misma organización.

Para ello, simplemente active el compartimiento como se muestra a continuación.

![](images/shiva_network_vn_share_enabled.png)

Una vez que haya activado el compartimiento, simplemente puede agregar un compartimiento como se indica a continuación.

![](images/shiva_network_vn_shared.png){:style="width:200px"}

Luego, seleccione el inquilino objetivo. Tenga en cuenta que la lista de inquilinos es dinámica. 
Depende de su organización y de sus derechos.

![](images/shiva_network_vn_shared_tenant.png)

Una vez que la red esté compartida, será visible en la pestaña 'Redes compartidas' desde su segundo inquilino.

![](images/shiva_network_vn_shared_with_me.png)

## Conectividad privada externa
La oferta de red de Cloud Temple permite a los clientes conectar sus propias infraestructuras IPSEC, MPLS o Fibra a sus inquilinos.

Para ello, Cloud Temple ofrece:

- La posibilidad de alojar un equipo de red en zona común (no calificada Secnumcloud),
- Puertos de conectividad de 1Gbps o 10Gbps.

La creación de una conectividad externa se realiza mediante una solicitud de servicio que indica:

    El nombre de su Organización
    El nombre de un contacto con su correo y número de teléfono para finalizar la configuración
    El nombre del inquilino
    La zona de disponibilidad o, en su defecto, el sitio físico deseado para esta conectividad
    El número y para cada uno, el tipo de puerto de conectividad esperado (fibra, cobre, 1Gbps, 10Gbps, ...)
    La red de su inquilino que recibirá esta conectividad
    El número de 'U' eventual de alojamiento deseado

## Circuitos dedicados
Cloud Temple ofrece la posibilidad de beneficiarse de una fibra dedicada entre dos infraestructuras de alojamiento dedicado (rack).

Este servicio es típicamente utilizado cuando se desea hospedar 2 infraestructuras no nube (por ejemplo, dos IBM AS/400), en dos racks distintos en dos centros de datos físicos distintos.
Es posible que desee enlazar directamente estos dos racks de forma privada sin pasar por la infraestructura backbone de Cloud Temple y solo utilizar el backbone de transmisión óptica.

En este contexto, podemos suministrar una conectividad de fibra óptica entre sus dos racks. La entrega se realiza siempre por dos caminos ópticos diversificados.

A continuación, se presentan los diferentes tipos de entrega posibles:

- Ethernet fibra 1Gbps
- Ethernet fibra 10Gbps
- Canal de fibra 8Gbps
- Canal de fibra 16Gbps

La creación de una conectividad dedicada se realiza mediante una solicitud de servicio que indica:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del tenant
    Los identificadores de los dos racks dedicados
    El ancho de banda deseado
    La red de su tenant que recibirá esta conectividad

Será contactado por el soporte técnico para detallar su solicitud.

| Referencia                                                                               | Unidad     | SKU                              | Compromiso |
|------------------------------------------------------------------------------------------|------------|----------------------------------|------------|
| RED - Enlace dedicado inter AZ 1G ethernet (dos enlaces a través de dos caminos diversificados)| 1 paquete | csp:(region):network:epl:1g:v1   | 36 meses   |
| RED - Enlace dedicado inter AZ 10G ethernet (dos enlaces a través de dos caminos diversificados)| 1 paquete | csp:(region):network:epl:10g:v1  | 36 meses   |
| RED - Enlace dedicado inter AZ 8G canal de fibra (dos enlaces a través de dos caminos diversificados)| 1 paquete | csp:(region):network:fcpl:8g:v1  | 36 meses   |
| RED - Enlace dedicado inter AZ 16G canal de fibra (dos enlaces a través de dos caminos diversificados)| 1 paquete | csp:(region):network:fcpl:16g:v1 | 36 meses   |

## Ir más allá
- [Desplegar un firewall virtual de código abierto](quickstart_network.md#desplegar-un-firewall-de-código-abierto-pfsense-)