## Quali sono i flussi necessari per il funzionamento dell'appliance?

Diversi flussi sono necessari per il corretto funzionamento dell'appliance Bastion.

### Il gateway bastion
| Sorgente | Destinazione | Protocollo |
| --- | --- |-----------|
|Appliance bastion client|91.223.207.71 (botg.shiva.cloud-temple.com)| UDP/4242  |

### Flusso di amministrazione RDP
| Sorgente | Destinazione                 | Protocollo |
| --- |-----------------------------|-----------|
|Appliance bastion client| Le istanze da amministrare | TCP/3389  |

### Flusso di amministrazione SSH
| Sorgente | Destinazione                 | Protocollo |
| --- |-----------------------------|-----------|
|Appliance bastion client| Le istanze da amministrare | TCP/22    |
