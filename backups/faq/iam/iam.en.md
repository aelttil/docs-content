## What are the available permissions for Shiva console user accounts?
Here is the list of [available permissions](../../console/permissions.md#permissions-disponibles-pour-les-utilisateurs-de-votre-organisation).

## How to add a permission?
Here is the [process to assign a permission to a user](../../console/accounts.md#affectation-des-permissions-à-un-utilisateur)

## Why am I unable to add a permission?
To add a permission, you need to have the __'iam_write'__ permission, as well as the __permission you wish to add__.

## How to add a user?
*__Note__: To add a user, you must have the __'iam_write'__ right.*
Here is the process for [adding a new user](../../console/accounts.md#création-dun-compte-utilisateur-dans-votre-organisation)

## How to audit user access/permissions?
Go to the users page and click on the __'Export csv'__ button:
![](images/faq_003.jpg)

## How to delete a user?

From the __'Administration'__ menu on the green panel to the left of the screen, in the sub-menu __'user'__, click on the __'Action'__ icon of the target user and choose __'Delete'__.
![](images/faq_001.jpg)

*__note__ :*
- *To add a user, you must have the __'iam_write'__ right.*
- *If it is a federated user, __ensure that the user has also been deleted from the identity repository__.*

## How to reset the password?
It is possible to reset your password from the Shiva console login page by clicking on __'Forgot password?'__.
![](images/faq_002.jpg){:height="30%" width="30%"}

## Why are some users grayed out?
Grayed-out users are those who have not validated their account. When creating the account, the user received a verification email.
![](../../console/images/shiva_onboard_001.png){:height="50%" width="50%"}

Once verification is completed, the user can log on to the console.
The account is grayed out until verification has been finalized.

## What is a Personal Access Token (PAT)?
Generating an API key, also called a __Personal Access Token (PAT)__, 
is a secure way to connect to Shiva APIs without going through a graphical interface.
You will find all the information about [API keys here](../../console/accounts.md#les-clés-api)
    
## What is MFA and is it mandatory?  
MFA (multi-factor authentication) is a concept of verifying a user's identity in two steps, called __two-factor authentication__.
The user must provide two distinct proofs of identity. In the case of the Shiva console, two-factor authentication is mandatory and requires entering a one-time code once the user has entered the account password.

## What is captcha? Why can it block access to the application?
The __'Captcha'__ is a security measure designed to protect your account from spam and prevent any attempt to decrypt the password.
The __'Captcha'__ submits a simple test to verify that it is indeed a human and not a robot that is trying to access the account.
The Cloud Temple console uses a type v3 Captcha. The v3 type is an invisible test that establishes a trust index based on user interactions.
The Cloud Temple console is based on this trust index score to authorize or not allow the user to connect.
If you are having difficulty with the __'Captcha'__ test to connect to the Shiva console, please contact user support.
