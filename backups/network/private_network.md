---
title: Réseaux Privés
---

## Architecture Réseau Cloud Temple

L'offre __*Private Network*__ permet une connectivité réseau de niveau 2 privée entre vos services. La capacité d’échange de chaque zone de disponibilité est de plusieurs centaines de gigabits et nous ajoutons régulièrement de la capacité en fonction de nos besoins. Nous éclairons nous même notre réseau optique.

### La technologie VPLS
Le réseau global Cloud Temple utilise la technologie __[VPLS](https://fr.wikipedia.org/wiki/Virtual_Private_LAN_Service)__.
__VPLS__ est un VPN de couche 2 point-à-multipoint basé sur Ethernet. Il permet de connecter des sites géographiquement 
dispersés les uns aux autres à travers un réseau MPLS. Pour les clients, tous les sites semblent être dans le même 
LAN Ethernet, même si le trafic est transporté par le réseau Cloud Temple.

__VPLS__, dans son implémentation et sa configuration, a beaucoup en commun avec un VPN de couche 2. Dans VPLS, un paquet qui provient 
d'un réseau client est d'abord envoyé à un dispositif client (CE) (par exemple, un routeur ou un commutateur Ethernet).
Il est ensuite envoyé à un routeur de bord de fournisseur (PE) au sein du réseau du fournisseur de services. 
Le paquet traverse le réseau du fournisseur de services sur un chemin à commutation d'étiquettes MPLS (LSP). 
Il arrive au routeur PE de sortie, qui transfère ensuite le trafic vers le dispositif CE sur le site client de destination.
La différence réside dans le fait que, pour __VPLS__, les paquets peuvent traverser le réseau du fournisseur de 
services de manière point-à-multipoint, ce qui signifie qu'un paquet provenant d'un dispositif CE peut être 
diffusé à tous les routeurs PE participant à une instance de routage __VPLS__. 

Le circuit __VPLS__ d'un client peut être __étendu entre toutes les zones de disponibilité d'une région__.

Le protocole __VPLS__ est __totalement transparent__ pour les clients qui ne voient que les différents VLANs sur leurs zones de disponibilité.

### Le réseau dans l'offre de virtualisation VMware

Les réseaux virtuels (vlan) de l'offre de virtualisation VMware sont des réseaux de types __'DVPortgroup'__. Un __'dvPortGroup'__, 
ou __'Distributed Virtual Port Group'__, est un concept spécifique à VMware. Un dvPortGroup est une entité qui 
regroupe plusieurs ports virtuels (vPorts) dans un environnement de réseau virtuel distribué pour faciliter leur utilisation.

Localisée au sein d'un __[tenant](../console/tenants.md)__, ils peuvent être étendus entre les zones de disponibilités 
vous permettant ainsi de construire des architectures "actif / actif" avec quorum.

La bande passante maximale utilisable dépend principalement du modèle de lame utilisé (10Gbps convergés ou 25 Gbps convergés) et des capacités des machines virtuelles.

Il est possible d'attendre une bande passante de 10Gbps.

Les configurations disponibles sur la console Cloud Temple dans le cadre de l'offre de virtualisation VMware sont les suivantes :

- __Vlan tagging__
- __Trunk__
- __port mirror__

*__Nota__* : 

- *Le choix de l'adressage IP au sein de ces réseaux est __libre.__*
- *__SRV-IO__ n'est pas disponible dans l'offre réseau associée à la virtualisation VMware.*
- *__QinQ__ est supporté sur l'architecture Cloud Temple. QinQ, également connu sous le nom de "VLAN stacking" ou de 802.1ad, est 
un protocole réseau qui permet l'encapsulation de plusieurs étiquettes VLAN (Virtual Local Area Network) dans une seule trame Ethernet.*


## Réseaux privés régionaux

La commande des réseaux privés au sein d'une région se réalise directement dans la console Cloud Temple. 

### Au sein d'un tenant

La création d'un réseau virtuel se fait dans le menu __*Network*__ sur le bandeau vert à gauche de l'écran.

![](images/shiva_network_001.jpg)

Cliquer ensuite sur le bouton __*Nouveau réseau*__

Vous devez spécifier le nom de votre réseau qui sera affiché. Par défaut, l'ensemble de vos clusters accéderont à votre nouveau réseau.
Cependant, dans le sous menu __*Options Avancées*__, vous pouvez spécifier plus finement l'étendue de propagation au sein du tenant entre vos différents clusters.

![](images/shiva_network_002.jpg){:height="50%" width="50%"} 

L'ensemble des actions possibles sur vos réseaux se trouve dans le menu __*Actions*__ de chacun d'eux :

- L'activation du partage d'un réseau entre tenant d'une meme organisation.
- La désactivation du partage d'un réseau entre tenant d'une meme organisation.
- L'ajout d'un partage d'un réseau entre tenant d'une meme organisation.
- La suppression d'un partage d'un réseau entre tenant d'une meme organisation.
- La visualisation graphique de la propagation d'un réseau sur l'ensemble de vos clusters et de vos hyperviseurs au sein d'un tenant.
- La suppression d'une propagation au sein d'un tenant.
- La modification d'une propagation au sein d'un tenant.
- La suppression d'un réseau.

![](images/shiva_network_003.jpg)

__*Remarque :*__ *Il n'est pas possible de choisir l'ID de vlan 802.1q.*

| Référence                                 | Unité  | SKU                          | 
|-------------------------------------------|--------|------------------------------|
| RESEAU - Région FR1 - VLAN privé inter AZ | 1 vlan | csp:(region):network:vlan:v1 |

#### Visualisation de la propagation de vos réseaux

Vous pouvez facilement dans le menu __*Actions*__ visualiser pour un réseau sa propagation vers vos différents clusters au sein d'un même tenant. 
Choisissez l'option *"Visualiser la propagation"* :

![](images/shiva_network_004.jpg) 

#### Modification de la propagation

La modification d'une propagation au sein d'un tenant est réalisée par l'option *"Propager"* :
choisissez ensuite les clusters devant être intégrés à cette propagation.

![](images/shiva_network_005.jpg){:height="50%" width="50%"} 

__*Remarque :*__ *La modification de propagation est limitée à 20 réseaux par action.*

#### Suppression d'un réseau

La suppression d'un réseau au sein d'un tenant est réalisée par l'option *"Supprimer le réseau"* :

![](images/shiva_network_006.jpg){:height="50%" width="50%"}

### Partage de réseau entre tenants

Par défaut, __les réseaux sont uniquement disponibles au sein d'un tenant__. Vous pouvez choisir de __partager un réseau entre plusieurs tenants__ pour des raisons techniques ou des raisons de connectivité.
Il est ainsi possible de partager un réseau entre vos __[tenants](../console/tenants.md)__ au sein d'une même organisation.

Il suffit pour cela d'activer le partage comme ci-dessous.

![](images/shiva_network_vn_share_enabled.png)

Une fois l'activation du partage effectué, il vous suffit d'ajouter un partage comme ci-dessous.

![](images/shiva_network_vn_shared.png){:style="width:200px"}

Puis, sélectionner le tenant cible. Attention, la liste des tenants est dynamique. 
Elle dépend de votre organisation et de vos droits.

![](images/shiva_network_vn_shared_tenant.png)

Une fois le réseau partagé, il sera visible dans l'onglet 'Réseaux partagés' depuis votre second tenant.

![](images/shiva_network_vn_shared_with_me.png) 

## Connectivité privé externe

L'offre de réseau Cloud Temple permet aux clients de connecter leurs propres infrastructures IPSEC, MPLS ou Fibre à leurs tenants.

Cloud Temple propose à cet effet : 

- La possibilité d'héberger un équipement réseau en zone commune (non qualifiée Secnumcloud),
- Des ports de connectivité 1Gbps ou 10Gbps.

La création d'une connectivité externe est réalisée par une demande de service indiquant :

    Le nom de votre Organisation
    Le nom d'un contact avec son mail et n° de téléphone pour finaliser la configuration
    Le nom du tenant
    La zone de disponibilité ou à défaut le site physique souhaité pour cette connectivité
    Le nombre et pour chacun, le type de port de connectivité attendu (fibre, cuivre, 1Gbps, 10Gbps, ...)
    Le réseau de votre tenant devant accueillir cette connectivité
    Le nombre de 'U' eventuelle d'hébergement souhaité

## Circuits dédiés

Cloud Temple offre la possibilité de bénéficier d'une fibre dédiée entre deux infrastructures d'hébergement dédié (rack).

Ce service est typiquement utilisé lorsque vous souhaitez héberger 2 infrastructures non-cloud (par exemple deux IBM AS/400), dans deux racks distincts sur deux datacenters physiques distincts.
Vous pouvez souhaiter relier directement ces deux racks en privé sans passer par l'infrastructure backbone Cloud Temple et n'utiliser que le backbone de transmission optique.

Dans ce contexte, nous pouvons livrer une connectivité fibre optique entre vos deux racks. La livraison est systématiquement sur deux chemins optiques diversifiés.

Voici les différents types de livraison possibles :

- Ethernet fibre 1Gbps
- Ethernet fibre 10Gbps
- Fiber Channel 8Gbps
- Fiber Channel 16Gbps

La création d'une connectivité dédiée est réalisée par une demande de service indiquant :

    Le nom de votre Organisation
    Le nom d'un contact avec son mail et n° de téléphone pour finaliser la configuration
    Le nom du tenants
    Les identifiants des deux rack dédiés 
    La bande passante souhaitée
    Le réseau de votre tenant devant accueillir cette connectivité

Vous serez contacté par le support pour affiner votre demande.

| Référence                                                                                | Unité     | SKU                              | Engagement |
|------------------------------------------------------------------------------------------|-----------|----------------------------------|------------|
| RESEAU - Lien dédié inter AZ 1G ethernet (deux liens via deux chemins diversifiés)       | 1 forfait | csp:(region):network:epl:1g:v1   | 36 mois    |
| RESEAU - Lien dédié inter AZ 10G ethernet (deux liens via deux chemins diversifiés)      | 1 forfait | csp:(region):network:epl:10g:v1  | 36 mois    |
| RESEAU - Lien dédié inter AZ 8G fiber-channel (deux liens via deux chemins diversifiés)  | 1 forfait | csp:(region):network:fcpl:8g:v1  | 36 mois    |
| RESEAU - Lien dédié inter AZ 16G fiber-channel (deux liens via deux chemins diversifiés) | 1 forfait | csp:(region):network:fcpl:16g:v1 | 36 mois    |

## Aller plus loin

- [Déployer un firewall virtuel open source](quickstart_network.md#déployer-un-firewall-opensource-pfsense-)
