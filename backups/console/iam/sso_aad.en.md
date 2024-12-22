---
title: Example of identity federation with Microsoft EntraID
---

Here is an example configuration of the authentication repository for a Cloud Temple organization with **Microsoft EntraID** (Azure Active Directory).

Configuring your Microsoft repository at the Cloud Temple organization level makes it easier for your users to authenticate to the Shiva console. This avoids the proliferation of authentication factors and reduces the attack surface.

If your users are authenticated to their Microsoft account, authentication to the Shiva console services will be seamless.

Here are the different steps to perform this configuration:


## Step 1: Configuration of SSO on the Microsoft Azure side

### Registering a new Azure application (Azure portal)

To create the **app registration**, go to the Microsoft Azure portal, then to Microsoft EntraID, and click on **"ADD > App Registration"**.

On the "Register an application" page, please provide the following information:

- **Name**: Enter "**SHIVA**"
- **Supported account types**: **Accounts in this organizational directory only** (**<Your Azure Tenant>** only - Single tenant)
- **Redirect URL**: Do not configure it at first. The URL will be provided by Cloud Temple support and will need to be added to this field later.

![](images/sso_entra_001.png)

The **Application (client) ID** and **Directory (tenant) ID** are the information to provide in the support request to the Cloud Temple team to activate Microsoft EntraID authentication at your organization level.

![](images/sso_entra_002.png)

### Defining a secret
In the "Certificates & secrets" tab, create a new secret.

*Note: The secret expiration date cannot exceed 24 months, including with a custom expiration date.*

![](images/sso_aad_004.png)

The generated secret must be provided in the support request:

![](images/sso_aad_005.png)


### Defining the EntraID token

The EntraID token is required for the authentication configuration.

In the **"Token Configuration"** menu, click on **"Add optional claim"**. You will need to select "ID" as the token type and check "email".

![](images/sso_aad_006.png)

The Azure interface will ask you if you want to add a permission that will allow you to read a user's email (Microsoft Graph email), check the box and validate.

![](images/sso_aad_007.png)

Then, go to **"API permissions"** and click on **"Grant admin consent for Cloud Temple"**.

![](images/sso_aad_008.png)

### Additional security configurations (optional but recommended)

By default, Microsoft EntraID as configured will allow any user in your Azure tenant to connect to your Cloud Temple organization. It is possible to restrict access at the **"App Registration"** level to only allow a list of users or groups to connect to your Cloud Temple organization.

Here is the procedure to follow:

#### Accessing additional "App Registration" settings
##### Option 1
Go to the **Overview** tab and click on the application name (the link following "Managed application").

![](images/sso_aad_009.png)

##### Option 2
Go to **Enterprise applications** and search using the name of the previously created application.

![](images/sso_aad_010.png)

#### Restricting authentication to assigned users of the application

Specify here the requirement for user assignment to the application to allow authentication:

![](images/sso_aad_011.png)

#### Assigning users and groups to the application
Only users and groups assigned to the application will be able to connect to your Cloud Temple organization via the app registration.

![](images/sso_aad_012.png)

Finally, you just have to apply the assignment by clicking on **"Assign"**.

![](images/sso_aad_013.png)

From now on, users assigned to the application will be able to connect to your Cloud Temple organization via the created application.

## Step 2: Request the configuration of your organization's Single Sign-On (SSO)

This part of the configuration is done at the organization level by the Cloud Temple team.

To do this, submit a support request in the console indicating your desire to configure Microsoft EntraID SSO.

Please provide the following information in the support request:

    Your organization's name
    The name of a contact person with their email and phone number to finalize the configuration
    Application ID (unique identifier associated with the previously created application)
    Directory ID (corresponding to the Azure AD identifier of the Azure tenant)
    Secret (Secret associated with the previously created application)

Once the configuration is done on the Shiva console side, the indicated contact will be informed.

## Step 3: Finalize the configuration

On the home page of the App Registration, in the **Overview** tab, click on **"Add a Redirect URL"**.

![](images/sso_aad_014.png)

Then, go to **"Add a platform"** and add a Web platform.

![](images/sso_aad_015.png)

Simply enter the "Redirect URL" provided by the Product Applications team.

![](images/sso_aad_016.png)

You should get the following result once the "Redirect URL" is added.

![](images/sso_aad_017.png)

The configuration of the "Redirect URL" may take a few minutes to be effective. Once all the steps are completed, you can authenticate to your Cloud Temple organization via your SSO.

![](images/sso_aad_018.png)
