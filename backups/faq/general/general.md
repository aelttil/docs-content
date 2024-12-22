
## Comment contacter le support ?

Cliquez sur la bouée dans la barre de navigation en haut de la page, puis sur __'Nouvelle demande'__. 

![](../../console/images/shiva_support.png) 

Des thématiques, une description et des captures d'écran vous seront demandées pour orienter et traiter au mieux votre demande.

![](../../console/images/shiva_support_02.png) 

Vous pouvez aussi nous contacter :

- via le formulaire ici : https://www.cloud-temple.com/contactez-nous/ 
- via l'adresse __contact@cloud-temple.com__

## Comment connaître les dernières mises à jour ?

Cliquez en bas à gauche du bandeau vert sur l'icône __'Nouveautés'__. Vous aurez le détail des modifications pour chaque version de la console Cloud Temple.

![](images/faq_news_001.jpg){:height="15%" width="15%"} 

## Comment trouver les activités des utilisateurs sur mon périmètre ?

Vous pouvez aller à la page __'Logs'__ dans la partie __'Administration'__ de la barre latérale verte à gauche de l'écran.
Sur cette page, vous pouvez obtenir les activités récentes et les activités archivées.

![](images/faq_logs_001.jpg){:height="50%" width="50%"} 

Les logs visibles correspondent __aux actions effectuées lors de la dernière heure__. Pour consulter des logs plus anciens, cliquez sur l'onglet __'Archivés'__.

Vous avez la possibilité d'exporter au format CSV vos journaux depuis l'interface web.

## Pourquoi je ne vois de résultat lors de ma recherche dans les archives ?
La console Cloud Temple pour permet de filtrer les journaux via la commande __'Filtres'__. Les filtres de recherche sont les suivants :

![](images/faq_logs_003.jpg){:height="30%" width="30%"} 

Vous pouvez préciser une date de départ pour le filtrage des journaux, l'état de la tache (en attente, en fonctionnement, échoué ou complété) et le type d'activité (écriture ou lecture).
La recherche s'applique sur __la description de l'activité__ et doit contenir des mots entiers. 

Pour rechercher sur le champ __'raison d'échec'__, il est nécessaire de filtrer les activités par le statut __'échoué'__. Par exemple, une recherche sur 'debian' avec le filtrage 'échoué' :

![](images/faq_logs_002.jpg){:height="70%" width="70%"} 

## Quelles versions de navigateurs sont supportées ?

Les versions suivantes des navigateurs internet sont supportées par la console Cloud Temple :

| Navigateur        | Version                |
|-------------------|------------------------|
| Chrome            | Supérieur ou égal à 79 |
| Firefox           | Supérieur ou égal à 72 |
| Internet Explorer | Supérieur ou égal à 10 |
| Edge              | Supérieur ou égal à 79 |

## Comment utiliser les APIs Shiva pour automatiser des tâches ?

La documentation __OpenAPI 3.0__ (Swagger) des APIs de Shiva est disponible directement dans l'application.

![](images/faq_api_001.png){:height="70%" width="70%"} 

L'accès aux APIs nécessite d'être authentifié. Vous trouverez dans la section [gestion des comptes de la console](../../console/accounts.md#les-clés-api) la méthodologie de création de vos clefs APIs et de vos jetons d'accès personnels ('PAT').

Une fois authentifié toute les opérations doivent avoir le header __'Authorization'__ avec le *bearer access token* obtenu lors de la phase d'authentification.

__*Note*__ : *l'url des APIs Shiva est récupérable depuis la doc API (Swagger).*

## Quel est le cycle de vie d'un endpoint API ?

Les informations d'évolution des endpoint de l'API est disponible dans les notes de mises à jour :

![](images/faq_api_002.jpg){:height="70%" width="70%"} 

Vous trouverez la liste des endpoints qui sont dépréciés activité par activité. 

Par ailleurs, les endpoints qui sont dépréciés apparaitrons de telle manière sur nos API : 
__~~this/is/an/endpoint~~__ ainsi qu'une date de suppression définitive en description.

## À quoi correspond le pictogramme devant le nom de mon tenant ?

Ce pictogramme :

![](images/snc.svg)

signifie que le tenant en question a été provisionné dans le cadre d'une souscription à une __offre SecNumCloud__. 

## Pourquoi la description de mon ticket ou de mon commentaire ne s'affiche pas correctement dans la console Cloud Temple ?

Seul le HTML sans script et du texte brut pourra être interprété normalement dans la description d'un ticket ou dans un commentaire. 
En effet, les scripts, XML, Json, etc. Sont bloqués pour des raisons de sécurité. 

Lorsque vous souhaitez communiquer ces formats de fichiers, il est conseillé de passer par des pièces jointes.

## Quelle est la durée de rétention des événements collectés dans la console Cloud Temple?

Conformément à la qualification Secnumcloud, le stockage des événements de la console Cloud Temple est d'une durée minimale de 6 mois. 
