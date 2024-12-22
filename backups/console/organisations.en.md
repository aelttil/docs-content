---
title: Organizations
---
The organization is linked to your __sponsor account__ and the associated __Cloud Temple contract__. It represents your entity (company, department, team, ...) that carries the contractual relationship between Cloud Temple and you.

## Organization principle

The organization has four main roles:

- It represents the __contractual entity__ for tracking and billing purposes.
- It defines the __global configuration of the authentication mechanism__: authentication can be local at the Shiva console level or remote via an identity federation service.
- It encompasses all __user accounts__.
- It __brings together tenants__ (Production, Pre-production, Dev, Application 1, Application 2, ...) that you define for your Cloud architecture needs.

User roles (rights/permissions) can be configured for each tenant defined in your organization. For example, an account may be authorized to order resources in one tenant but not in another.

## Authentication mechanisms

The Shiva console allows __authentication mechanism configuration__ at the organization level. You can use the local authentication repository of the Shiva console or link your organization to one of your authentication repositories.

The following external repositories are supported:

- __OpenID Connect__ compatible repositories
- __SAML__ compatible repositories
- __Microsoft ADFS__
- __Microsoft EntraID__ (Microsoft Azure Active Directory)
- Amazon AWS Cognito
- Okta
- Auth0
- KeyCloak

## Further reading

- Example of [identity federation with Microsoft ADFS](iam/sso_adfs.md)
- Example of [identity federation with Microsoft EntraID (Azure Active Directory)](iam/sso_aad.md)
