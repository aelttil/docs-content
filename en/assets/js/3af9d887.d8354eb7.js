"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["2544"],{5053:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>r,toc:()=>l,frontMatter:()=>a});var t=JSON.parse('{"id":"bastion/howto_bastion","title":"Tutorials","description":"These tutorials guide you through deploying and managing a Cloud Temple Bastion from the Shiva portal.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/bastion/howto_bastion.md","sourceDirName":"bastion","slug":"/bastion/howto_bastion","permalink":"/en/docs/bastion/howto_bastion","draft":false,"unlisted":false,"editUrl":"https://github.com/aelttil/docs-content/docs/bastion/howto_bastion.md","tags":[],"version":"current","frontMatter":{"title":"Tutorials"},"sidebar":"docSidebar","previous":{"title":"Quickstart","permalink":"/en/docs/bastion/bastion_quickstart"},"next":{"title":"IaaS","permalink":"/en/docs/category/iaas"}}'),o=i("5893"),s=i("65");let a={title:"Tutorials"},c=void 0,r={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Interface",id:"interface",level:2},{value:"Deploy an Appliance",id:"deploy-an-appliance",level:2},{value:"Open a Connection to a Device",id:"open-a-connection-to-a-device",level:2},{value:"Register a Device",id:"register-a-device",level:2},{value:"Connect to a Device",id:"connect-to-a-device",level:2},{value:"Modify a Device Configuration",id:"modify-a-device-configuration",level:2},{value:"Delete a Device Configuration",id:"delete-a-device-configuration",level:2}];function d(e){let n={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"These tutorials guide you through deploying and managing a Cloud Temple Bastion from the Shiva portal."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"You must subscribe to the Cloud Temple offer (Appliance Bastion subscription)."}),"\n",(0,o.jsx)(n.li,{children:"The devices to be managed must be accessible from the network where the Bastion Appliance is deployed."}),"\n",(0,o.jsx)(n.li,{children:"You must have permissions for the Bastion module."}),"\n",(0,o.jsx)(n.li,{children:"For an on-premise deployment of the Appliance, the corresponding network flows must be opened."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(n.p,{children:'Once logged into the Shiva web portal, navigate to the "Bastion" tab in the left menu.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(9333).Z+"",width:"3600",height:"2076"})}),"\n",(0,o.jsx)(n.p,{children:'The "Equipements" tab allows you to view the list of your devices. A device corresponds to a connection configuration via a Bastion Appliance. For each device, you can see its name, tags, description, the associated Appliance, the connection type (SSH or RDP), the host\'s IP, and the keyboard configuration.'}),"\n",(0,o.jsx)(n.p,{children:"You can filter the list of devices based on their tags, and a search engine is available to look up a session by name."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(113).Z+"",width:"3600",height:"2076"})}),"\n",(0,o.jsx)(n.p,{children:'The "Appliances" tab displays the list of your Bastion Appliances. For each Appliance, the name and description are provided.'}),"\n",(0,o.jsx)(n.p,{children:"A search engine is also available to find an Appliance by name."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(4055).Z+"",width:"605",height:"196"})}),"\n",(0,o.jsx)(n.h2,{id:"deploy-an-appliance",children:"Deploy an Appliance"}),"\n",(0,o.jsx)(n.p,{children:"Before deploying an Appliance, you need to request a subscription through a support ticket."}),"\n",(0,o.jsx)(n.h2,{id:"open-a-connection-to-a-device",children:"Open a Connection to a Device"}),"\n",(0,o.jsx)(n.p,{children:'In the "Appliances" tab, click the action bar of the Appliance you want to open. Then click the "Ouvrir" button.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(9447).Z+"",width:"1210",height:"415"})}),"\n",(0,o.jsx)(n.p,{children:"Next, provide the necessary connection details:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Select the protocol (SSH or RDP);"}),"\n",(0,o.jsx)(n.li,{children:"Enter the host's IP address;"}),"\n",(0,o.jsx)(n.li,{children:"Enter authentication credentials;"}),"\n",(0,o.jsx)(n.li,{children:"Configure the keyboard language."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'Click "Connecter" to open the Appliance. The console for the virtual machine to be managed will then open.'}),"\n",(0,o.jsx)(n.h2,{id:"register-a-device",children:"Register a Device"}),"\n",(0,o.jsx)(n.p,{children:"To regularly access a managed device, it's more convenient to create a device configuration, requiring only your username and password for each connection."}),"\n",(0,o.jsx)(n.p,{children:'To do this, navigate to the "Equipements" tab in the "Bastion" menu, then click the "Nouveau \xe9quipement" button.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(3134).Z+"",width:"3600",height:"2076"})}),"\n",(0,o.jsx)(n.p,{children:"Provide the necessary details for creating your device:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Device name;"}),"\n",(0,o.jsx)(n.li,{children:"Description;"}),"\n",(0,o.jsx)(n.li,{children:"Associated Appliance;"}),"\n",(0,o.jsx)(n.li,{children:"Protocol type (SSH or RDP);"}),"\n",(0,o.jsx)(n.li,{children:"Host IP address;"}),"\n",(0,o.jsx)(n.li,{children:"Keyboard language."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(9842).Z+"",width:"1752",height:"1202"})}),"\n",(0,o.jsx)(n.p,{children:"A notification confirming the creation of the device configuration will appear in the top-right corner of the page. The configuration will then be added to your list of devices."}),"\n",(0,o.jsx)(n.p,{children:'You can also create a new connection via the "Appliances" tab by clicking the action bar of the Appliance to which you want to associate a device configuration.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(5285).Z+"",width:"3600",height:"2076"})}),"\n",(0,o.jsx)(n.h2,{id:"connect-to-a-device",children:"Connect to a Device"}),"\n",(0,o.jsx)(n.p,{children:'Navigate to the "Equipements" tab in the "Bastion" menu. Click the action bar of the device you want to open, then click the "Ouvrir" button.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(5219).Z+"",width:"3600",height:"2076"})}),"\n",(0,o.jsx)(n.p,{children:"Each time you connect to the device, you only need to provide your authentication details."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(6087).Z+"",width:"1156",height:"639"})}),"\n",(0,o.jsx)(n.p,{children:"After entering your credentials, a notification confirming the session start will appear, and the console for your virtual machine will open."}),"\n",(0,o.jsx)(n.h2,{id:"modify-a-device-configuration",children:"Modify a Device Configuration"}),"\n",(0,o.jsx)(n.p,{children:'Navigate to the "Equipements" tab in the "Bastion" section. Click the action bar of the device you want to modify, then click the "Modifier" button.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(4070).Z+"",width:"3600",height:"2076"})}),"\n",(0,o.jsx)(n.p,{children:"You can then update the device name, description, associated Appliance, protocol type (SSH or RDP), host's IP address, or keyboard language."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(5741).Z+"",width:"1816",height:"1266"})}),"\n",(0,o.jsx)(n.h2,{id:"delete-a-device-configuration",children:"Delete a Device Configuration"}),"\n",(0,o.jsx)(n.p,{children:'Navigate to the "Equipements" tab in the "Bastion" section. Click the action bar of the device you want to delete, then click the "Supprimer" button.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:i(3733).Z+"",width:"3600",height:"2076"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4055:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/appliances-13f9094ae824ccb82e0fdc79542de1b0.png"},3134:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/creer_session-153e6a3a5e11dd9a1c26b9f6b3e1f401.png"},9842:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/creer_session2-9613f2ef582fb9ff68daecf0b3c7b89c.png"},5285:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/creer_session3-0cbfd035d5dd5a4e039b8dfe1d17e412.png"},4070:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/modifier_session-c03ea79c4780a6d7add076a7bb0b847d.png"},5741:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/modifier_session2-681ca2007bf1f9050d960b82af558406.png"},9447:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/ouvrir_appliance-fb2b28b614f7a03f80d16ae65c0b157d.png"},5219:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/ouvrir_session-46ece8c3f829e735f0319fca76631583.png"},6087:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/ouvrir_session2-bb71bcd74bcd1a5d86420adef2d8f60c.png"},9333:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/sessions-f2476ed58bdb0ce54ba65b8d10365c6e.png"},113:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/sessions2-df9a794cdb2e7261edf36ed0e50ba3bf.png"},3733:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/supprimer_session-9a7805b4c39f73e742157fdf0b2cd420.png"},65:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return a}});var t=i(7294);let o={},s=t.createContext(o);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);