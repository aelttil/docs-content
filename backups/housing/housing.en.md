---
title: Physical Hosting
---

Cloud Temple offers its clients the opportunity to benefit from physical hosting on an availability zone.

The hosting is necessarily outside the secnumcloud zone. The space dedicated to client physical hosting is shared among all clients.

There are two possible options:

- __'U'-based physical hosting__ in shared bay and shared space,
- __dedicated hosting by the rack__ with a minimum of 42 'U' in shared space.

The physical hosting request is made by __a service request__ indicating:

    The name of your Organization
    The name of a contact with their email and phone number to finalize the configuration
    The name of the tenant
    The desired type of hosting (shared by 'U' or dedicated by the rack)
    The desired quantity
    The type of equipment and its characteristics (size, weight, energy consumption, thermal output, ...)

The Cloud Temple support team will contact you to finalize the request.

## Shared Hosting
### Hosting of Appliances (Network, Firewall, ...)
Shared hosting takes place in a rack that is shared amongst different Cloud Temple clients. [La segmentation](https://fr.wikipedia.org/wiki/Unit%C3%A9_de_rack) is done in 'U' (rack unit).
A rack unit measures 1.75 inches (or 44.45 mm) in height. Shared hosting racks have two separate electrical chains.

The maximum weight of equipment for each 'U' unit is 25Kg. Beyond that, it is necessary to order the number of 'U's that can support the total weight of your equipment.

For instance, for equipment weighing 34 Kg, it is necessary to subscribe to 2 rack units.

It is possible for each rack unit to request the benefit of one or two type C13 electrical outlets, depending on your needs.

Each electrical outlet is limited to 150W at 220v for each 'U'.

If you wish for your equipment to benefit from a power of 1500W, across two power supplies, it is necessary to request 

1500 W / 150 W = 10 'U', which amounts to 5 'U' (or 750 W) per electrical chain.

Network connectivity needs to be subscribed to separately by the type of desired port and required bandwidth. Here are the possible options for each network port:

- Copper 100MBps/1Gbps,
- Fiber 1Gbps/10Gbps through an SFP module provided for connectivity on Cloud Temple's side.

For these work units, cooling is necessarily done from the front face of the rack to the rear face, and **the appliance takes its network connectivity from the front face of the bay.**

__*Note:*__ *The minimum commitment is 12 months.*

| Reference                                             | Unit | SKU                                    | Commitment |
| ----------------------------------------------------- | ---- | -------------------------------------- | ---------- |
| BAY HOSTING - 1 U Shared - 150W (1 C13)               | 1 U  | csp:(region):hosting:shared:basic:v1   | 12 months  |
| BAY HOSTING - 1 U Shared - 300W (2 C13)               | 1 U  | csp:(region):hosting:shared:premium:v1 | 12 months  |

### Server Hosting
Work Units for **'Servers'** are designed to accommodate server thermal dissipation and **provide rear network connectivity**, simplifying maintenance operations and thus optimizing bay cooling.

**They are mandatory for servers.**

| Reference                                                    | Unit | SKU                                        | Commitment |
| ------------------------------------------------------------ | ---- | ------------------------------------------ | ---------- |
| BAY HOSTING - 1 U Shared - Server - 400 W (2 C19)            | 2 U   | csp:(region):hosting:shared:srv:basic:v1   | 12 months    |
| BAY HOSTING - 1 U Shared - Server - 800 W (2 C19)            | 2 U   | csp:(region):hosting:shared:srv:premium:v1 | 12 months    |


## Dedicated Hosting
Dedicated rack hosting is provided in a shared hosting area outside the secnumcloud. The dedicated hosting rack has a minimum dimension of 42 'U' or 42 rack units.
The depth is 1200 millimeters, with 1000 millimeters usable by the equipment. The width is 600 millimeters.

It is delivered with the necessary cooling, secure front and rear doors, and 3 Kw of power across two 16-amp electrical chains.

It is possible to request additional power tiers of 2Kw each. **The maximum mass of equipment that can be integrated into the dedicated rack is 1000kg**.

The bay is equipped with 'PDU' (Power Distribution Units) appropriate to the subscribed power and monitored. There is one 'PDU' per electrical chain.

| Reference                                                    | Unit       | SKU                                          | Commitment |
| ------------------------------------------------------------ | ---------- | -------------------------------------------- | ---------- |
| HOSTING IN BAY - Dedicated 42 U Rack including 3Kw of power | 1 rack 42U | csp:(region):hosting:dedicated:rack:v1       | 12 months  |
| POWER - Additional 2 Kw                                      | 2 Kw       | csp:(region):hosting:dedicated:rack:2kw:v1   | 12 months  |

### Network Connectivity for Physical Hosting

Network connectivity must be subscribed in addition to physical hosting by the type of expected port and desired bandwidth. Here are the possible options for each network port:

- 1Gbps Copper,
- 1Gbps/10Gbps Fiber via an SFP module provided for Cloud Temple side connectivity.

It is also possible to request connectivity in the meet me room area of the various data centers to receive your carrier connectivity.
This connectivity must necessarily be in optical fiber with bandwidths of 1Gbps or 10Gbps.

| Reference                                                              | Unit       | SKU                                      | Commitment |
| ---------------------------------------------------------------------- | ---------- | ---------------------------------------- | ---------- |
| NETWORK - 1 port - 1 Gbps - fiber or copper                           | 1 port     | csp:(region):hosting:shared:port1g:v1   | 36 months  |
| NETWORK - 1 port - 10 Gbps - fiber                                    | 1 port     | csp:(region):hosting:shared:port10g:v1  | 36 months  |
| NETWORK - Private link connection in meet me room of an AZ - 1 port 1Gbps | 1 package | csp:(region):hosting:mmr:v1:1g          | 36 months  |
| NETWORK - Private link connection in meet me room of an AZ - 1 port 10Gbps | 1 package | csp:(region):hosting:mmr:v1:10g         | 36 months  |

### 'Hands & Eyes' Services
In addition to physical hosting and network connectivity services, professional assistance services for your physical hosting can be requested.

These are operated by data center technicians or Cloud Temple engineers specialized in data center operations.

Here are the main 'Hands & Eyes' work units available, aiming to address the following issues:

- Accompanying a previously identified external contractor,
- Checking status on equipment (LED status, operating state, etc.),
- Taking photos of a pre-identified client equipment,
- Pressing a contactor,
- Rebooting the equipment,
- Connecting a terminal for remote control access,
- Replacing connectivity without any wiring changes.

| Reference                                                                             | Unit    | SKU                              | GTI       |
| ------------------------------------------------------------------------------------- | ------- | -------------------------------- | --------- |
| Hand's & Eyes datacenter - Business hours (8am - 7pm; Monday to Friday)               | 1 hour  | csp:(region):hosting:ho:std:v1   | 2 hours   |
| Hand's & Eyes datacenter - Business hours (8am - 7pm; Monday to Friday) - URGENT      | 1 hour  | csp:(region):hosting:ho:fast:v1  | 30 minutes|
| Hand's & Eyes datacenter - Non-business hours (night, weekend, and holidays)         | 1 hour  | csp:(region):hosting:hno:std:v1  | 2 days    |
| Hand's & Eyes datacenter - Non-business hours (night, weekend, and holidays) - URGENT | 1 hour  | csp:(region):hosting:hno:fast:v1 | 2 hours   |

You can also benefit from a Cloud Temple data center engineer to address the following issues:

- Racking (with the appropriate protection and lifting equipment),
- Cabling (according to the previously provided cabling plan),
- Altering wiring or moving existing equipment,
- Assistance with operator network connectivity.

| Reference                                                                   | Unit   | SKU                             | GTI     |
| --------------------------------------------------------------------------- | ------ | ------------------------------- | ------- |
| Datacenter Engineer - Business hours (8am - 7pm; Monday to Friday)          | 1 act  | csp:(region):hosting:ho:std:v1  | 2 days  |
| Datacenter Engineer - Business hours (8am - 7pm; Monday to Friday) - URGENT | 1 act  | csp:(region):hosting:ho:fast:v1 | 4 hours |

__Note:__

- *All requests must go through the opening of a support ticket in the Cloud Temple console*,
- *In case of an urgent request, call the on-duty service after opening the support ticket in the Cloud Temple console*,
- *Every started hour must be paid for.*