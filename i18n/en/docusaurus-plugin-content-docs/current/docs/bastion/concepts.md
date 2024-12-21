---
title: Concepts
---
## What is the Cloud Temple Bastion?

The Cloud Temple Bastion is a managed service that provides you with secure RDP or SSH connectivity from the Cloud Temple console to your physical and virtual infrastructures, whether they are located on the trusted Cloud, on a public Cloud, or on-premise. The Bastion solution allows you to administer your equipment without exposing them to the Internet.

![](images/bastion.svg)

## The Benefits
| Benefit                |                                                                              Description                                                                               |   
|------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Centralized Management | The Cloud Temple Bastion can be accessed directly from the Shiva portal. |
| Security               | Devices managed via the Bastion are not exposed to the Internet, protecting them from port scanning by malicious users. |
| Infrastructure as Code | APIs allow for managing the entire Cloud Temple Bastion "as Code" (session creation, connection, modification, and deletion). |

## References (SKU)
| Reference                          |   Unit   |           SKU           |
|------------------------------------|:---------:|:-----------------------:|
| ADMINISTRATION - Bastion SSH & RDP | 1 Session | cmp:bastion:session:std | 

### The Bastion Appliance
The Bastion Appliance is a virtual machine deployed in proximity to your equipment. This Appliance allows for a secure and direct flow from the Shiva platform to the devices to be managed, which are located in the same virtual network.

The flow is encrypted and encapsulated in a VPN tunnel. The solution does not require opening a flow from the Internet to your infrastructures. It is sufficient for the Appliance to have access to the public IP of the Shiva Bastion module on port 443.

An Appliance can be used to make a quick connection to a device. With each connection, the desired protocol, the IP address of the machine, and your credentials must be specified. To avoid filling in this information with each connection, it is possible to create sessions associated with devices to be managed regularly.

### The Sessions

A session is a connection configuration to a device via a Bastion. It involves defining a device to administer and the Appliance to use for routing the flow, thus allowing for faster connection to this device.

This solution is suitable in the case of a regular connection to a device to be administered. Essential information is retained, only your credentials are required at the time of connection.