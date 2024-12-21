"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["8128"],{9050:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>r});var t=JSON.parse('{"id":"console/tenants","title":"Tenants","description":"Concept de tenant","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/console/tenants.md","sourceDirName":"console","slug":"/console/tenants","permalink":"/docs-content/en/docs/console/tenants","draft":false,"unlisted":false,"editUrl":"https://github.com/aelttil/docs-content/docs/console/tenants.md","tags":[],"version":"current","frontMatter":{"title":"Tenants"},"sidebar":"docSidebar","previous":{"title":"Op\xe9rations planifi\xe9es et gestion des Incidents","permalink":"/docs-content/en/docs/console/status"},"next":{"title":"Getting Started","permalink":"/docs-content/en/docs/category/getting-started"}}'),i=s("5893"),a=s("65");let r={title:"Tenants"},o=void 0,c={},l=[{value:"Concept de tenant",id:"concept-de-tenant",level:2},{value:"Cr\xe9ation d&#39;un tenant",id:"cr\xe9ation-dun-tenant",level:2},{value:"Selection d&#39;un tenant",id:"selection-dun-tenant",level:2},{value:"Autorisation d&#39;acc\xe8s \xe0 un tenant : IP autoris\xe9es",id:"autorisation-dacc\xe8s-\xe0-un-tenant--ip-autoris\xe9es",level:2},{value:"Consommation de ressource au sein d&#39;un tenant",id:"consommation-de-ressource-au-sein-dun-tenant",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"concept-de-tenant",children:"Concept de tenant"}),"\n",(0,i.jsxs)(n.p,{children:["Le tenant est un ",(0,i.jsx)(n.strong,{children:"regroupement de ressources au sein d'une organisation"}),". Une ",(0,i.jsx)(n.a,{href:"/docs-content/en/docs/console/organisations",children:"Organisation"})," a au minimum un tenant (appel\xe9 ",(0,i.jsx)(n.strong,{children:"tenant par d\xe9faut"}),", pouvant \xeatre renomm\xe9). G\xe9n\xe9ralement, plusieurs tenants sont utilis\xe9s pour segmenter les responsabilit\xe9s ou les p\xe9rim\xe8tres techniques."]}),"\n",(0,i.jsx)(n.p,{children:"Par exemple :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Un tenant ",(0,i.jsx)(n.strong,{children:"Production"})]}),"\n",(0,i.jsxs)(n.li,{children:["Un tenant ",(0,i.jsx)(n.strong,{children:"Pr\xe9production"})]}),"\n",(0,i.jsxs)(n.li,{children:["Un tenant ",(0,i.jsx)(n.strong,{children:"Recette"})]}),"\n",(0,i.jsxs)(n.li,{children:["Un tenant ",(0,i.jsx)(n.strong,{children:"Qualification"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Mais il est aussi possible d'organiser les choses avec une ",(0,i.jsx)(n.strong,{children:"vue applicative"})," ou par ",(0,i.jsx)(n.strong,{children:"criticit\xe9"})," :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Un tenant ",(0,i.jsx)(n.strong,{children:"Application 1"})," ou ",(0,i.jsx)(n.strong,{children:"Criticit\xe9 1"})]}),"\n",(0,i.jsxs)(n.li,{children:["Un tenant ",(0,i.jsx)(n.strong,{children:"Application 2"})," ou ",(0,i.jsx)(n.strong,{children:"Criticit\xe9 2"})]}),"\n",(0,i.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Les ressources techniques command\xe9es sont affect\xe9es \xe0 un tenant pr\xe9cis et ne sont pas partag\xe9es avec les autres tenants. Par exemple, un cluster d'Hyperviseur et les r\xe9seaux L2 associ\xe9es ne sont disponibles que dans 1 tenant.\nConcernant les r\xe9seaux, il est possible de demander des r\xe9seaux ",(0,i.jsx)(n.strong,{children:"'cross tenant'"})," afin d'assurer la continuit\xe9 r\xe9seau entre les tenants."]}),"\n",(0,i.jsx)(n.p,{children:"Les permissions des utilisateurs sont \xe0 d\xe9finir dans chaque tenant. Ainsi chaque organisation doit bien r\xe9fl\xe9chir aux tenants souhait\xe9s. Ce point est g\xe9n\xe9ralement abord\xe9 en atelier initialisation, au moment de la cr\xe9ation de l'organisation."}),"\n",(0,i.jsx)(n.p,{children:"Il est possible de faire \xe9voluer l'architecture en ajoutant ou supprimant des tenants."}),"\n",(0,i.jsx)(n.p,{children:"Un tenant ne peut pas \xeatre vide. Il doit n\xe9cessairement \xeatre initialis\xe9 avec un minimum de ressource :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Une zone de disponibilit\xe9 (AZ, soit un datacenter physique),"}),"\n",(0,i.jsx)(n.li,{children:"Un cluster de calcul,"}),"\n",(0,i.jsx)(n.li,{children:"Un espace de stockage,"}),"\n",(0,i.jsx)(n.li,{children:"Un vlan r\xe9seau."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cr\xe9ation-dun-tenant",children:"Cr\xe9ation d'un tenant"}),"\n",(0,i.jsx)(n.p,{children:"La cr\xe9ation d'un tenant est r\xe9alis\xe9e par une demande de service indiquant :"}),"\n",(0,i.jsx)(n.p,{children:"Le nom de votre Organisation\nLe nom d'un contact avec son mail et n\xb0 de t\xe9l\xe9phone pour finaliser la configuration\nLe nom du tenant\nLa zone de disponibilit\xe9 ou \xe0 d\xe9faut le site physique souhait\xe9 pour le tenant"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:[(0,i.jsx)(n.strong,{children:"Nota"})," : La cr\xe9ation d'un tenant sera possible directement pour le commanditaire Q2 2024."]})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"R\xe9f\xe9rence de commande"}),(0,i.jsx)(n.th,{children:"Unit\xe9"}),(0,i.jsx)(n.th,{children:"SKU"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["TENANT - ",(0,i.jsx)(n.em,{children:"(REGION)"})," - Activation d'un tenant"]}),(0,i.jsx)(n.td,{children:"1 tenant"}),(0,i.jsxs)(n.td,{children:["csp:tenant",":v1"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["TENANT - ",(0,i.jsx)(n.em,{children:"(REGION)"})," - Activation d'une zone de disponibilit\xe9"]}),(0,i.jsx)(n.td,{children:"1 tenant"}),(0,i.jsxs)(n.td,{children:["csp:(region):iaas:az",":v1"]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"selection-dun-tenant",children:"Selection d'un tenant"}),"\n",(0,i.jsx)(n.p,{children:"La selection du tenant se fait depuis la page principale de la console Shiva :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(7916).Z+"",width:"3600",height:"2078"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:[(0,i.jsx)(n.strong,{children:"Nota :"})," Les ressources d'un tenant lui sont propres et ne sont pas m\xe9langeable avec d'autres tenants."]})}),"\n",(0,i.jsx)(n.h2,{id:"autorisation-dacc\xe8s-\xe0-un-tenant--ip-autoris\xe9es",children:"Autorisation d'acc\xe8s \xe0 un tenant : IP autoris\xe9es"}),"\n",(0,i.jsx)(n.p,{children:"L'acc\xe8s \xe0 la console de gestion cloud est strictement limit\xe9 aux adresses IP pr\xe9alablement autoris\xe9es, en conformit\xe9 avec les exigences de la qualification SecNumCloud. Cette restriction garantit un niveau de s\xe9curit\xe9 renforc\xe9 en ne permettant l'acc\xe8s qu'aux utilisateurs provenant de plages d'IP sp\xe9cifi\xe9es, minimisant ainsi les risques d'acc\xe8s non autoris\xe9s et prot\xe9geant l'infrastructure cloud selon les standards de s\xe9curit\xe9 les plus \xe9lev\xe9s."}),"\n",(0,i.jsx)(n.p,{children:"Il est d\xe9sormais possible d'afficher la liste des adresses IP publiques autoris\xe9es sur le tenant et d\u2019ajouter une nouvelle adresse IP publique \xe0 cette liste directement depuis l'onglet \"Administration > Acc\xe8s\"."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6238).Z+"",width:"3600",height:"2078"})}),"\n",(0,i.jsxs)(n.p,{children:["Pour cela, l\u2019utilisateur doit disposer du droit ",(0,i.jsx)(n.code,{children:"console_public_access_read"})," pour consulter les IPs autoris\xe9es, et du droit ",(0,i.jsx)(n.code,{children:"console_public_access_write"})," pour ajouter une adresse IP publique \xe0 la liste."]}),"\n",(0,i.jsx)(n.p,{children:"Il est alors possible d'ajouter une nouvelle IP:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3108).Z+"",width:"1616",height:"692"})}),"\n",(0,i.jsxs)(n.p,{children:["Note : ",(0,i.jsx)(n.em,{children:"La suppression d'un IP autoris\xe9e se fait par une demande de support dans la console Cloud Temple."})]}),"\n",(0,i.jsx)(n.h2,{id:"consommation-de-ressource-au-sein-dun-tenant",children:"Consommation de ressource au sein d'un tenant"}),"\n",(0,i.jsx)(n.p,{children:"Il est possible de visualiser les ressources cloud consomm\xe9es au sein d'un tenant, offrant ainsi une vue d\xe9taill\xe9e de l'utilisation des diff\xe9rents services d\xe9ploy\xe9s. Cette fonctionnalit\xe9 permet aux utilisateurs de suivre en temps r\xe9el la consommation de leurs ressources, d'identifier les services les plus sollicit\xe9s et d'optimiser leur utilisation en fonction des besoins."}),"\n",(0,i.jsx)(n.p,{children:'Dans le menu de la console, cliquez sur "Rapport de consommation" puis s\xe9lectionnez la p\xe9riode de temps souhait\xe9e. Vous pourrez ainsi visualiser en d\xe9tail la consommation des ressources cloud sur la p\xe9riode d\xe9finie, ce qui vous permettra d\u2019analyser l\u2019utilisation des services et d\u2019optimiser votre gestion en cons\xe9quence :'}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3346).Z+"",width:"3600",height:"2078"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6238:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_ip_access_management_01-8b2cb162b1a47c2424190d4e599096a6.png"},3108:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_ip_access_management_02-8f2aea9541acf2943a701daaf98fc451.png"},7916:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_tenant-83466151070c4e8dc24a58c890bf2a00.png"},3346:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/shiva_tenant_ressources_01-58a148ec41863003609b5146ad872b7b.png"},65:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var t=s(7294);let i={},a=t.createContext(i);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);