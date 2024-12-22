## What are the necessary flows for the operation of the appliance?

Several flows are necessary for the proper operation of the Bastion appliance.

### Bastion gateway
| Source | Destination                       | Protocol |
| ------ | --------------------------------- | -------- |
| Bastion appliance client | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242 |

### RDP administration flow
| Source | Destination           | Protocol |
| ------ | --------------------- | -------- |
| Bastion appliance client | Instances to be administered | TCP/3389 |

### SSH administration flow
| Source | Destination           | Protocol |
| ------ | --------------------- | -------- |
| Bastion appliance client | Instances to be administered | TCP/22 |
