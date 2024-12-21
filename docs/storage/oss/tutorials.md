---
title: Tutoriels
---

## Utiliser MINIO

Vous pouvez utiliser le client minio par exemple :

https://min.io/docs/minio/linux/reference/minio-mc.html

Par exemple : 
```
    mc alias set <alias_name> https://reks2ee2b1.s3.fr1.cloud-temple.com <access_key> <secret_key>
```
Pousser un fichier : 
```
    mc cp test.txt <alias_name>/<bucket_name>
```
Récupérer un fichier :
```
    mc ls <alias_name>/<bucket_name>
```
#### Cloud Berry Explorer

vous pouvez aussi utiliser [Cloud Berry Explorer](https://www.msp360.com/explorer/).

1. Connectez vous en utilisant votre endpoint et votre clef :

![](images/S3_cloudberry_001.png)

2. Une fois connecté, saisissez le nom du bucket dans la barre de navigation:

![](images/S3_cloudberry_002.png)

3. Vous pourrez alors utiliser le bucket normalement : 

![](images/S3_cloudberry_003.png)

## Utiliser WINSCP 6.3.x

Vous pouvez utiliser [Winscp](https://winscp.net/eng/download.php) :

1. Connectez vous en utilisant votre endpoint, votre clef d'accès et votre clef secrete :

![](images/S3_winscp_001.png)

2. Une fois connecté, utilisez WINSCP normalement comme un site FTP ou SCP :

![](images/S3_winscp_002.png)
