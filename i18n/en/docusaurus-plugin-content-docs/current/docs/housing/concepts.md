---
title: Concepts
---

## Two options are available:

- __'U' physical hosting__ in shared bay and shared space,
- __dedicated rack hosting__ of at least 42 'U' in shared space.

The request for physical hosting is made by __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The type of hosting desired (shared 'U' or dedicated rack)
    The desired quantity
    The type of equipment and its characteristics (size, weight, energy consumption, heat output, ...)

The Cloud Temple support team will contact you to finalize the request.

## Shared Hosting

### Hosting of appliances (network, firewall, ...)
Shared hosting is done in a rack shared between different Cloud Temple clients. [Segmentation](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) is done by 'U' (rack unit). 
A rack unit measures 1.75 inches (or 44.45 mm) in height. Shared hosting racks have two separate power chains.

The maximum weight of the equipment for each 'U' unit is 25Kg. Beyond this, it is necessary to order the number of 'U' units that can support the total weight of your equipment.

For example, for a 34 Kg equipment, it is necessary to subscribe to 2 rack units.

For each rack unit, it is possible to request one or two type C13 electrical outlets depending on your needs.

Each electrical outlet is limited to 150W under 220v for each 'U'.

If you want your equipment to have a power of 1500W, on two power supplies, it is necessary to request.
1500 W / 150 W = 10 'U', or 5 'U' (or 750 W) per electrical chain.

Network connectivity must be subscribed in parallel by the type of expected port and desired bandwidth, here are the possible options per network port:

- Copper 100MBps/1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for Cloud Temple connectivity.

For these work units, cooling is necessarily done from the front of the rack to the back, and **the appliance takes its network connectivity from the front of the rack.**

__*Note:*__ *The minimum commitment is 12 months.*

| Reference                                          | Unit | SKU                                    | Commitment |
| -------------------------------------------------- | ----- | -------------------------------------- | ---------- |
| RACK HOSTING - 1 U Shared - 150W (1 C13)           | 1 U   | csp:(region):hosting:shared:basic:v1   | 12 months  |
| SHARED RACK HOSTING - 1 U - 300W (2 C13) | 1 U   | csp:(region):hosting:shared:premium:v1 | 12 months    |

### Server Hosting

The work units **'Servers'** are designed to adapt to the heat dissipation of servers and **provide network connectivity at the rear**, simplifying maintenance operations and thus optimizing the cooling of the rack. 

**They are mandatory for servers.**

| Reference                                                    | Unit | SKU                                        | Commitment |
| ------------------------------------------------------------ | ----- | ------------------------------------------ | ---------- |
| RACK HOSTING - 1 U Shared - Server - 400 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 months    |
| RACK HOSTING - 1 U Shared - Server - 800 W (2 C19) | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 months    |

## Dedicated Hosting
Dedicated rack hosting is carried out in a shared hosting area outside of secnumcloud. The dedicated hosting rack is a minimum size of 42 'U' or 42 rack units.
The depth is 1200 millimeters, of which 1000 millimeters are usable by the equipment. The width is 600 millimeters.

It comes with the necessary cooling, secure front and rear doors, and 3 Kw of power on 2 electrical chains of 16 amps each.

It is possible to request additional power increments by 2Kw. __The maximum weight of equipment that can be integrated into the dedicated rack is 1000kg__.

The rack is equipped with 'PDU' (Power Distribution Units) suitable for the subscribed power and monitored. There is one 'PDU' per electrical chain.

| Reference                                                    | Unit      | SKU                                        | Commitment |
| ------------------------------------------------------------ | ---------- | ------------------------------------------ | ---------- |
| BAY HOSTING - Dedicated 42U Rack including 3Kw of power      | 1 42U rack | csp:(region):hosting:dedicated:rack:v1     | 12 months  |
| POWER - Additional 2 Kw                                      | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1 | 12 months  |

### Network connectivity for physical hosting

Network connectivity must be subscribed in addition to physical hosting according to the expected port type and desired bandwidth. Here are the possible options per network port:

- Copper 1Gbps,
- Fiber 1Gbps/10Gbps via an SFP module provided for Cloud Temple side connectivity.

It is also possible to request connectivity in the meet me room area of the different data centers to receive your operator connectivity.
This connectivity is necessarily in optical fiber at rates of 1Gbps or 10GBps.
| Reference                                                              | Unit      | SKU                                    | Commitment |
| ---------------------------------------------------------------------- | --------- | -------------------------------------- | ---------- |
| NETWORK - 1 port - 1 Gbps - fiber or copper                            | 1 port    | csp:(region):hosting:shared:port1g:v1  | 36 months  |
| NETWORK - 1 port - 10 Gbps - fiber                                     | 1 port    | csp:(region):hosting:shared:port10g:v1 | 36 months  |
| NETWORK - Private link connection in meet me room of an AZ - 1 port 1Gbps  | 1 package | csp:(region):hosting:mmr:v1:1g         | 36 months  |
| NETWORK - Private link connection in meet me room of an AZ - 1 port 10Gbps | 1 package | csp:(region):hosting:mmr:v1:10g        | 36 months  |

### 'Hands & Eyes' Services
In addition to physical hosting and network connectivity services, it is possible to request professional support services for your physical hosting.

These are operated by data center technicians or by Cloud Temple engineers specializing in data centers.

Here are the main 'Hands & Eyes' work units available. They aim to address the following topics:

- Accompanying a previously identified external operator,
- Observing a status on a device (LED status, operating status, etc.),
- Taking photos of a previously identified client device,
- Pressing a switch,
- Restarting the equipment,
- Connecting a remote access terminal,
- Replacing a connector without changing the wiring.

| Reference                                                                               | Unit    | SKU                              | GTI        |
| --------------------------------------------------------------------------------------- | ------- | -------------------------------- | ---------- |
| Hand's & Eyes Datacenter - Business Hours (8am - 7pm; Monday to Friday)                 | 1 hour  | csp:(region):hosting:ho:std:v1   | 2 hours    |
| Hand's & Eyes Datacenter - Business Hours (8am - 7pm; Monday to Friday) - URGENT        | 1 hour  | csp:(region):hosting:ho:fast:v1  | 30 minutes |
| Hand's & Eyes Datacenter - Non-Business Hours (night, weekends and holidays)            | 1 hour  | csp:(region):hosting:hno:std:v1  | 2 days     |
| Hand's & Eyes Datacenter - Non-Business Hours (night, weekends and holidays) - URGENT   | 1 hour  | csp:(region):hosting:hno:fast:v1 | 2 hours    |

You can also benefit from a Cloud Temple datacenter engineer to handle the following topics:

- Racking (with suitable protection and lifting equipment),
- Cabling (according to the previously submitted cabling plan),
- Rewiring modification or relocation of existing equipment,
- Assistance with network connectivity.

| Reference                                                                    | Unit   | SKU                             | GTI      |
| ---------------------------------------------------------------------------- | ------ | ------------------------------- | -------- |
| Datacenter Engineer - Working hours (8am - 7pm; Monday to Friday)            | 1 act  | csp:(region):hosting:ho:std:v1  | 2 days   |
| Datacenter Engineer - Working hours (8am - 7pm; Monday to Friday) - URGENT   | 1 act  | csp:(region):hosting:ho:fast:v1 | 4 hours  |

__Note:__

- *All requests must go through the opening of an intervention file in the Cloud Temple console*,
- *In case of an urgent request, call the on-call service after opening the intervention file in the Cloud Temple console*,
- *Any hour started is due.*