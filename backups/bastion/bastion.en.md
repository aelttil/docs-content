---
title: Overview
---

## What is Bastion Cloud Temple?

Bastion Cloud Temple is a managed service that provides secure RDP or SSH connectivity from the Cloud Temple console to your physical and virtual infrastructures, whether they are located on the trusted cloud, a public cloud, or on-premise. The Bastion solution allows you to administer your equipment without exposing it to the internet.

![](images/bastion.svg)

## Advantages
| Advantage          |                                                                      Description                                                                       |
|-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
| Centralized Management |                                      Bastion Cloud Temple is accessible directly from the Shiva portal.                                      |
| Security | Equipment managed via the Bastion is not exposed to the internet, protecting it from port scanning by malicious users. |
| Infrastructure as Code | APIs allow for fully "as Code" management of Bastion Cloud Temple (session creation, connection, modification, and deletion). |

## References (SKU)
| Reference |  Unit  |           SKU           |  
|--------------|:---------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std | 

## Concepts
### The Bastion Appliance

The Bastion Appliance is a virtual machine deployed in proximity to your equipment. This Appliance allows for secure and direct communication from the Shiva platform to the equipment to be administered, which is located in the same virtual network.

The traffic is encrypted and encapsulated in a VPN tunnel. The solution does not require opening a flow from the internet to your infrastructure. The Appliance just needs access to the public IP of the Shiva Bastion module on port 443.

An Appliance can be used to quickly connect to a device. Each time a connection is made, the desired protocol, machine's IP address, and your credentials must be specified. To avoid filling in this information every time, it is possible to create sessions associated with regularly administered equipment.

### Sessions

A session is a connection configuration to a device via a Bastion. It involves defining a device to administer and the Appliance to use for transmitting the flow, making it easier to connect to that device.

This solution is suitable for regular connections to an administered device. The essential information is retained, and only your credentials are required for connections.
