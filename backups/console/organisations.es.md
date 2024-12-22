---
title: Organizaciones
---
La organización está vinculada a su __cuenta de patrocinador__ y al __contrato Cloud Temple asociado__. Representa a su entidad (compañía, departamento, equipo, ...) que lleva la relación contractual entre Cloud Temple y usted.

## Principio de una organización

La organización tiene cuatro roles principales:

- Representa la __entidad contractual__ para temas de seguimiento y facturación.
- Define la __configuración global del mecanismo de autenticación__: la autenticación puede ser local en el nivel de la consola Shiva o remota a través de un servicio de federación de identidad.
- Es responsable de todas las __cuentas de usuario__.
- __Agrupa a los inquilinos__ (Producción, Preproducción, Dev, Aplicación 1, Aplicación 2, ...) que usted define para las necesidades de su arquitectura en la nube.

Los roles (derechos/permisos) de los usuarios se pueden configurar para cada inquilino definido en su organización. Por ejemplo, una cuenta puede tener autorización para solicitar recursos en un inquilino pero no en otro.

## Mecanismos de autenticación

La consola Shiva permite __configurar el mecanismo de autenticación__ a nivel de la organización. Puede utilizar el repositorio local de autenticación de la consola Shiva o vincular su organización a uno de sus repositorios de autenticación.

Los siguientes repositorios externos son compatibles:

- Repositorios compatibles con __OpenID Connect__.
- Repositorios compatibles con __SAML__.
- __Microsoft ADFS__.
- __Microsoft EntraID__ (Microsoft Azure Active Directory).
- Amazon AWS Cognito.
- Okta.
- Auth0.
- KeyCloak.

## Para ir más allá

- Ejemplo de [federación de identidad con Microsoft ADFS](iam/sso_adfs.md)
- Ejemplo de [federación de identidad con Microsoft EntraID (Azure Active Directory)](iam/sso_aad.md)
