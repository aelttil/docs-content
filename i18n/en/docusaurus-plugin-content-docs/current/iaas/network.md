---
title: Réseaux
---

## Produit Private Network

L'offre réseau __Cloud Temple__ est décrite dans la section [Réseaux](../network/private_network.md).

## Offre de firewalling virtuel

Au 1° janvier 2024, Cloud Temple propose à son catalogue d'unité d'œuvre deux technologies de firewall : __Stormshield__ et __Fortinet__.

La mise à disposition d'un cluster de firewall se fait par demande de support technique directement dans la console Cloud Temple. Les clusters sont livrés avec une technologie UTM (antivirus, prévention d'intrusion et filtrage web).

La mise à disposition d'un cluster de firewall est réalisée par une demande de service indiquant :

    Le nom de votre Organisation
    Le nom d'un contact avec son mail et n° de téléphone pour finaliser la configuration
    Le nom du tenant
    les zones de disponibilité pour chacun des noeuds
    Le bloc IPv4 attribué à utiliser si le cluster doit avoir accès à internet
    La SKU souhaitée (le modèle de firewall)
    
Le cluster de firewall est livré préconfiguré par les équipes support Cloud Temple.

### Offre Stormshield

L'offre de firewall virtuel __Stormshield EVA__ est disponible sur l'infrastructure Cloud Temple. Par défaut, l'offre est composée de deux nœuds Actif / Passif, avec la possibilité d'avoir 1 nœud par zone de disponibilité.
L'offre __Stormshield EVA__ dispose du visa de confiance de l'__ANSSI__.

| Référence                                                                                        | Unité     | SKU                          | 
|--------------------------------------------------------------------------------------------------|-----------|------------------------------|
| FIREWALL UTM - STORMSHIELD virtuel EVA1 - 1 Vcpu - 2Go RAM - 50 SSLVPN Users Max - 100 Tunnels   | 1 Cluster | csp:(region):licence:fw:eva1 |
| FIREWALL UTM - STORMSHIELD virtuel EVA2 - 2 Vcpu - 3Go RAM - 512 SSLVPN Users Max - 150 Tunnels  | 1 Cluster | csp:(region):licence:fw:eva2 |
| FIREWALL UTM - STORMSHIELD virtuel EVA3 - 4 Vcpu - 6Go RAM - 512 SSLVPN Users Max - 200 Tunnels  | 1 Cluster | csp:(region):licence:fw:eva3 |
| FIREWALL UTM - STORMSHIELD virtuel EVA4 - 4 Vcpu - 8Go RAM - 1024 SSLVPN Users Max - 250 Tunnels | 1 Cluster | csp:(region):licence:fw:eva4 |


### Offre Fortinet

L'offre de firewall virtuel __Fortigate VM__ est disponible sur l'infrastructure Cloud Temple. Par défaut, l'offre est composé de deux nœuds 'actif / Passif', avec la possibilité d'avoir 1 nœud par zone de disponibilité.

| Référence                                          | Unité     | SKU                          | 
|----------------------------------------------------|-----------|------------------------------|
| FIREWALL UTM - Fortigate Virtuel VM02V - sans vdom | 1 Cluster | csp:(region):licence:fw:ftg2 |
| FIREWALL UTM - Fortigate Virtuel VM04V - sans vdom | 1 Cluster | csp:(region):licence:fw:ftg4 |
| FIREWALL UTM - Fortigate Virtuel VM08V - sans vdom | 1 Cluster | csp:(region):licence:fw:ftg8 |

### Exemple de performance

Nous donnons ici une indication de la performance accessible avec l'offre de virtualisation VMware, sans activation SRV-IO, 
en utilisant une lame de calcul de type __'standard:v2'__, disposant de 2 processeurs à 2.4Ghz de type Intel Silver 4314 ou équivalent.

Une appliance virtuelle __Fortigate VM16__, dotée de 128Go de ram et de 16 vCPU, peut atteindre le débit de __9 Gbits__ entre 2 zones de disponibilité avec un MSS de 1350 et 100 connections simultanées en parallèles.

*__Attention__* : 

*La latence garantie entre les zones de disponibilité étant inférieure à 4 millisecondes, la performance __ne peut pas être atteinte avec une unique session TCP__.*
*Le débit maximum accessible sur une connection TCP est régie par la loi suivante :*

__DEBIT MAX = TCP WINDOWS SIZE / RTT__, où le RTT est le temps de réponse ping / 1000.

*Vous devez donc __multiplexer vos transferts en TCP__ ou bien __utiliser un protocole non connecté comme UDP__ pour atteindre la performance maximale.*

## Micro segmentation

Au 1° janvier 2024, l'offre de micro segmentation des machines virtuelles n'est pas ouverte à la commercialisation.
