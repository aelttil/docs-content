---
title: Organisations
---
L'organisation est liée à votre __compte commanditaire__ et au __contrat Cloud Temple associé__. Elle représente votre entité (société, département, équipe, ...) qui porte la relation contractuelle entre Cloud Temple et vous.

## Principe d'une organisation

L'organisation a quatre grands rôles : 

- Elle représente __l'entité contractuelle__ pour les aspects de suivi et de facturation,
- Elle définit __la configuration globale du mécanisme d'authentification__ : l'authentification peut être locale au niveau de la console Shiva ou distante via un service de fédération d'identité,
- Elle porte l'ensemble des __comptes utilisateurs__,
- Elle __fédère les tenants__ (Production, Préproduction, Dev, Application 1, Application 2, ...) que vous définissez pour les besoins de votre architecture Cloud.

Les rôles (droits/permissions) des utilisateurs sont configurables pour chaque tenant définit dans votre organisation. Par exemple un compte peut être autorisé à commander des ressources dans un tenant, mais pas dans un autre.

## Mécanismes d'authentification

La console Shiva permet au niveau de l'organisation __le paramétrage du mécanisme d'authentification__. Vous pouvez 
utiliser le référentiel local d'authentification de la console Shiva ou bien accoster votre organisation à l'un 
de vos référentiels d'authentification.  

Les référentiels externes suivants sont supportés :

- Référentiels compatibles __OpenID Connect__,
- Référentiels compatibles __SAML__,
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Pour aller plus loin  

- Exemple de [fédération d'identité avec Microsoft ADFS](iam/sso_adfs.md)
- Exemple de [fédération d'identité avec Microsoft EntraID (Azure Active Directory)](iam/sso_aad.md)
