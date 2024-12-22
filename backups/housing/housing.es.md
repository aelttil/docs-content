---
title: Alojamiento físico
---

Cloud Temple ofrece a sus clientes la posibilidad de beneficiarse de un alojamiento físico en una zona de disponibilidad.

El alojamiento es necesariamente fuera de la zona secnumcloud. El espacio dedicado al alojamiento físico del cliente es compartido entre todos los clientes.

Dos opciones son posibles:

- __alojamiento físico por 'U'__ en bahía compartida y espacio compartido,
- __alojamiento dedicado por rack__ de un mínimo de 42 'U' en espacio compartido.

La solicitud de alojamiento físico se realiza mediante __una solicitud de servicio__ indicando:

    El nombre de su Organización
    El nombre de un contacto con su correo electrónico y número de teléfono para finalizar la configuración
    El nombre del inquilino
    El tipo de alojamiento deseado (compartido por 'U' o dedicado por rack)
    La cantidad deseada
    El tipo de equipo y sus características (tamaño, peso, consumo energético, disipación térmica, ...)

El equipo de soporte de Cloud Temple se pondrá en contacto con usted para finalizar la solicitud.

## Alojamiento compartido
### Alojamiento de appliances (red, firewall, ...)
El alojamiento compartido se lleva a cabo en un rack compartido entre diferentes clientes de Cloud Temple. [La segmentación](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) se realiza por 'U' (unidad de rack).
Una unidad de rack mide 1,75 pulgadas (o sea, 44,45 mm) de alto. Los racks de alojamiento compartidos disponen de dos cadenas eléctricas distintas.

La masa máxima de los equipos para cada unidad de 'U' es de 25Kg. Más allá, es necesario ordenar el número de 'U' que permita soportar la masa total de su equipo.

Por ejemplo, para un equipo de 34 Kg, es necesario contratar 2 unidades de rack.

Es posible para cada unidad de rack solicitar contar con uno o dos enchufes eléctricos tipo C13 en función de sus necesidades.

Cada enchufe eléctrico está limitado a 150W bajo 220v para cada 'U'.

Si desea para su equipo beneficiarse de una potencia de 1500W, sobre dos alimentaciones, es necesario solicitar

1500 W / 150 W = 10 'U', o sea, 5 'U' (o 750 W) por cadena eléctrica.

La conectividad de red debe contratarse en paralelo por tipo de puerto esperado y ancho de banda deseado, aquí están las opciones posibles por puerto de red:

- Cobre 100MBps/1Gbps,
- Fibra 1Gbps/10Gbps a través de un módulo SFP suministrado para la conectividad del lado de Cloud Temple.

Para estas unidades de obra, la refrigeración se realiza necesariamente desde el frente del bastidor, hacia la parte trasera, y **el appliance toma su conectividad de red en frente del bastidor.**

__*Nota:*__ *el compromiso mínimo es de 12 meses.*

| Referencia                                          | Unidad | SKU                                    | Compromiso  |
| -------------------------------------------------- | ------ | -------------------------------------- | ----------- |
| ALOJAMIENTO EN BASTIDOR - 1 U Compartido - 150W (1 C13) | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 meses    |
| ALOJAMIENTO EN BASTIDOR - 1 U Compartido - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 meses    |

### Alojamiento de servidores
Las unidades de obra **'Servidores'** están diseñadas para adaptarse a la disipación térmica de los servidores y **proporcionan conectividad de red en la parte trasera**, simplificando las operaciones de mantenimiento y optimizando así la refrigeración del rack.

**Son obligatorias para los servidores.**

| Referencia                                                     | Unidad | SKU                                         | Compromiso |
| ------------------------------------------------------------- | ------ | ------------------------------------------- | ---------- |
| ALOJAMIENTO EN RACK - 1 U Compartido - Servidor - 400 W (2 C19) | 2 U    | csp:(region):hosting:shared:srv:basic:v1    | 12 meses   |
| ALOJAMIENTO EN RACK - 1 U Compartido - Servidor - 800 W (2 C19) | 2 U    | csp:(region):hosting:shared:srv:premium:v1  | 12 meses   |


## Alojamiento dedicado

El alojamiento en rack dedicado se realiza en zona de alojamiento compartido fuera de secnumcloud. El rack de alojamiento dedicado tiene una dimensión de un mínimo de 42 'U' o 42 unidades de rack.
La profundidad es de 1200 milímetros, de los cuales 1000 milímetros son utilizables por los equipos. La anchura es de 600 milímetros.

Se entrega con el sistema de refrigeración necesario, puertas de seguridad delanteras y traseras y 3 Kw de energía en 2 cadenas eléctricas de 16 amperios cada una.

Es posible solicitar incrementos de energía adicionales por 2Kw. __La masa máxima de los equipos integrables en el rack dedicado es de 1000kg__.

La bahía está equipada con 'PDU' (unidad de distribución de energía) adecuados a la potencia suscrita y monitorizados. Hay un 'PDU' por cadena eléctrica.

| Referencia                                                    | Unidad     | SKU                                        | Compromiso  |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ----------- |
| ALOJAMIENTO EN BAHÍA - Rack 42 U Dedicado incluyendo 3Kw de energía | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1     | 12 meses    |
| ENERGÍA - 2 Kw complementario                                | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 meses    |

### Conectividad de red para el alojamiento físico
La conectividad de red debe suscribirse adicionalmente al alojamiento físico por tipo de puerto esperado y ancho de banda deseado. Aquí están las opciones posibles por puerto de red:

- Cobre 1Gbps,
- Fibra 1Gbps/10Gbps a través de un módulo SFP suministrado para la conectividad del lado de Cloud Temple.

También es posible solicitar una conectividad en el área de la meet me room de los distintos centros de datos para recibir su conectividad de operador. Esta conectividad necesariamente debe ser de fibra óptica con velocidades de 1Gbps o 10Gbps.

| Referencia                                                                | Unidad     | SKU                                    | Compromiso    |
| ------------------------------------------------------------------------ | ---------- | -------------------------------------- | ------------- |
| RED - 1 puerto - 1 Gbps - fibra o cobre                                  | 1 puerto   | csp:(region):hosting:shared:port1g:v1  | 36 meses      |
| RED - 1 puerto - 10 Gbps - fibra                                         | 1 puerto   | csp:(region):hosting:shared:port10g:v1 | 36 meses      |
| RED - Conexión de enlace privado en meet me room de una AZ - 1 puerto 1Gbps  | 1 paquete  | csp:(region):hosting:mmr:v1:1g         | 36 meses      |
| RED - Conexión de enlace privado en meet me room de una AZ - 1 puerto 10Gbps | 1 paquete  | csp:(region):hosting:mmr:v1:10g        | 36 meses      |

### Servicios 'Hands & Eyes'
Además de los servicios de alojamiento físico y de conectividad de red, es posible solicitar servicios profesionales de asistencia para su hospedaje físico.

Son operados por los técnicos del datacenter o por los ingenieros de Cloud Temple especializados en datacenter.

Aquí están las principales unidades de obra 'Manos y Ojos' disponibles. Están diseñadas para tratar los siguientes temas:

- Acompañamiento de un interventor externo previamente identificado,
- Verificar el estado de un equipo (estado de los LED, funcionamiento, ...),
- Tomar fotografías de un equipo cliente previamente identificado,
- Pulsar un interruptor,
- Reiniciar el equipo,
- Conectar un terminal de acceso para el control a distancia,
- Reemplazar una conectividad sin modificación del cableado.

| Referencia                                                                                       | Unidad  | SKU                                | GTI         |
| ------------------------------------------------------------------------------------------------ | ------- | ---------------------------------- | ----------- |
| Manos y Ojos datacenter - Horas laborables (8h - 19h; Lunes a viernes)                           | 1 hora  | csp:(region):hosting:ho:std:v1     | 2 horas     |
| Manos y Ojos datacenter - Horas laborables (8h - 19h; Lunes a viernes) - URGENTE                 | 1 hora  | csp:(region):hosting:ho:fast:v1    | 30 minutos  |
| Manos y Ojos datacenter - Horas no laborables (noche, fin de semana y festivos)                  | 1 hora  | csp:(region):hosting:hno:std:v1    | 2 días      |
| Manos y Ojos datacenter - Horas no laborables (noche, fin de semana y festivos) - URGENTE        | 1 hora  | csp:(region):hosting:hno:fast:v1   | 2 horas     |

También puede beneficiarse de un ingeniero de datacenter Cloud Temple para tratar los siguientes temas:

- Rackage (con el equipo de protección y elevación adecuado),
- Cableado (de acuerdo con el plan de cableado previamente proporcionado),
- Modificación del cableado o traslado de un equipo existente,
- Asistencia con la conectividad de red del operador.

| Referencia                                                                      | Unidad  | SKU                               | GTI       |
| --------------------------------------------------------------------------------| ------- | --------------------------------- | --------- |
| Ingeniero Datacenter - Horas laborables (8h - 19h; Lunes a viernes)             | 1 acto  | csp:(region):hosting:ho:std:v1    | 2 días    |
| Ingeniero Datacenter - Horas laborables (8h - 19h; Lunes a viernes) - URGENTE   | 1 acto  | csp:(region):hosting:ho:fast:v1   | 4 horas   |

__Nota:__

- *Cualquier solicitud debe realizarse a través de la apertura de un expediente de intervención en la consola de Cloud Temple*,
- *En caso de solicitud urgente, llamar al servicio de guardia después de abrir el expediente en la consola de Cloud Temple*,
- *Cualquier hora comenzada se debe.*