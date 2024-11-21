## Quels sont les flux nécessaires au fonctionnement de l'Appliance ? 

Plusieurs flux sont nécessaires pour le bon fonctionnement de l'Appliance Bastion.

### La passerelle bastion
| Source                   | Destination                                 | Protocole |
|--------------------------|---------------------------------------------|-----------|
| Appliance bastion client | 91.223.207.71 (botg.shiva.cloud-temple.com) | UDP/4242  |

### Flux d'administration RDP

| Source                   | Destination                 | Protocole |
|--------------------------|-----------------------------|-----------|
| Appliance bastion client | Les instances à administrer | TCP/3389  |

### Flux d'administration SSH

| Source                   | Destination                 | Protocole |
|--------------------------|-----------------------------|-----------|
| Appliance bastion client | Les instances à administrer | TCP/22    |
