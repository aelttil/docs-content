---
title: FAQ
---

### Quelle est la taille maximale de fichier pouvant être manipulé avec la console web ?

La limite en web est de 40Mo par fichier. Au delà, il faut utiliser un client natif S3 avec l'API. 

### Quel client S3 puis-je utiliser pour gérer mes fichiers ?
Les principaux clients S3 sont compatible. Minio, aws cli, WINSCP, ...

### L'offre S3 Cloud Temple utilise-t-elle la méthode 'PathStyle' ou 'UrlStyle' ?

De part les contraintes associées à la qualification SecNumCloud, à cet instant, l'offre est prévue pour utiliser la méthode '**PathStyle**'. Nous travaillons à ce que la méthode '**UrlStyle**' soit disponible S1 2025.

### Quel est le nombre maximum de buckets par tenant ?

Le nombre maximum de buckets pour 1 tenant est de 999.

### Comment ajouter le HASH d'un fichier lors de l'upload d'un objet? 

Globalement, le HASH des fichiers est supporté sur notre stockage objet via les metadatas. Certains clients permettent de calculer à la volée un HASH et de l'ajouter en metadata (minio-mc avec md5 par exemple), pour d'autre, il faut préciser la donnée en metadata directement.

1. Cas de l'ajout d'un HASH avec le client minio-mc : ce client supporte le calcul à la volée d'un hash MD5 et le stockage dans les metadatas


            ╰─➤  cat test.txt                       
            Ceci est un test 
            ╰─➤  md5 test.txt                       
            MD5 (test.txt) = 8b34b2754802a46e3475998dfcf76f83
            ╰─➤  mc cp -md5 test.txt CLR-PUB/CLR-PUB
            ...lesur/Downloads/test.txt: 18 B / 18 B  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  111 B/s 0s
            ╰─➤  mc stat CLR-PUB/CLR-PUB/test.txt
            Name      : test.txt
            Date      : 2024-06-08 10:21:31 CEST 
            Size      : 18 B   
            ETag      : 8b34b2754802a46e3475998dfcf76f83 
            Type      : file 
            Encryption: SSE-S3
            Metadata  :
                Content-Type: text/plain 

2. Exemple d'ajout un sha256 "manuellement" : pour ce faire on utilise les attributs S3 du fichier.

            ╰─➤  cat test.txt
            Ceci est un test
            ╰─➤  shasum -a 256 test.txt                            
            2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682  test.txt
            ╰─➤  mc cp -md5 test.txt CLR-PUB/CLR-PUB -attr "checksum-sha256=$(shasum -a 256 test.txt | cut -f1 -d' ')"
            ...lesur/Downloads/test.txt: 18 B / 18 B  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  141 B/s 0s
            ╰─➤  mc stat CLR-PUB/CLR-PUB/test.txt                                                                     
            Name      : test.txt
            Date      : 2024-06-08 10:41:17 CEST 
            Size      : 18 B   
            ETag      : 8b34b2754802a46e3475998dfcf76f83 
            Type      : file 
            Encryption: SSE-S3
            Metadata  :
                X-Amz-Meta-Checksum-Sha256: 2c5165a6a9af06b197b63b924d7ebaa0448bc6aebf8d2e8e3f58ff0597f12682 
                Content-Type              : text/plain 


### Comment est facturé l'offre S3 de Cloud Temple ?

Le prix est un prix mensuel, au Gio de stockage, facturé mensuellement. Cependant, la plateforme comptabilise l'usage à l'heure et réalise la facturation sur une base mensuelle de 720 heures.

Par exemple, si vous consommez dans le mois 30 Gio pendant 1h puis rien, puis quelques jours plus tard 30Gio pendants 2h, la facture mensuelle sera de *( Prix (1 x 30Gio) + 2 x Prix (30Gio) ) / 720* sur le mois considéré. La facturation est terme échue.
