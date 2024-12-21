"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["4267"],{6295:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>c,assets:()=>a,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"faq/issues","title":"Bugs connus","description":"----------","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/faq/issues.md","sourceDirName":"faq","slug":"/faq/issues","permalink":"/docs-content/en/docs/faq/issues","draft":false,"unlisted":false,"editUrl":"https://github.com/aelttil/docs-content/docs/faq/issues.md","tags":[],"version":"current","frontMatter":{"title":"Bugs connus"},"sidebar":"docSidebar","previous":{"title":"iam","permalink":"/docs-content/en/docs/faq/iam/"},"next":{"title":"Questions fr\xe9quentes concernant l\'offre PaaS Openshift","permalink":"/docs-content/en/docs/faq/paas/oshift"}}'),i=s("5893"),r=s("65");let o={title:"Bugs connus"},l=void 0,a={},d=[{value:"mars 2024 - Know Issue 1 : Lenteur de l&#39;API Shiva sur IaaS VMWARE - GET /datastores/",id:"mars-2024---know-issue-1--lenteur-de-lapi-shiva-sur-iaas-vmware---get-datastores",level:2},{value:"Contexte du Probl\xe8me",id:"contexte-du-probl\xe8me",level:3},{value:"Analyse",id:"analyse",level:3},{value:"Solution de Contournement",id:"solution-de-contournement",level:4},{value:"M\xe9thode Sugg\xe9r\xe9e",id:"m\xe9thode-sugg\xe9r\xe9e",level:4},{value:"Avenir de ces Endpoints",id:"avenir-de-ces-endpoints",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"mars-2024---know-issue-1--lenteur-de-lapi-shiva-sur-iaas-vmware---get-datastores",children:"mars 2024 - Know Issue 1 : Lenteur de l'API Shiva sur IaaS VMWARE - GET /datastores/"}),"\n",(0,i.jsxs)(n.p,{children:["Nous souhaitons partager des informations importantes concernant un probl\xe8me identifi\xe9 au sein de la Console Cloud Temple (Shiva), sp\xe9cifiquement li\xe9 \xe0 l'utilisation de deux endpoints API : ",(0,i.jsx)(n.strong,{children:"'GET /datastores/id/files'"})," et ",(0,i.jsx)(n.strong,{children:"'GET /datastores/files'"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Ces endpoints, essentiels pour naviguer dans les datastores, ont r\xe9v\xe9l\xe9 des limitations significatives lorsqu'ils sont employ\xe9s avec l'argument ",(0,i.jsx)(n.code,{children:"subFolders=true"}),", une fonction cens\xe9e faciliter l'acc\xe8s r\xe9cursif aux dossiers et fichiers."]}),"\n",(0,i.jsx)(n.h3,{id:"contexte-du-probl\xe8me",children:"Contexte du Probl\xe8me"}),"\n",(0,i.jsxs)(n.p,{children:["Lorsqu'activ\xe9, l'argument ",(0,i.jsx)(n.code,{children:"subFolders=true"})," devrait permettre aux utilisateurs de r\xe9cup\xe9rer efficacement les informations des sous-dossiers contenus dans un datastore sp\xe9cifique. Cependant, des probl\xe8mes de performance, incluant des d\xe9lais d'ex\xe9cution longs jusqu'\xe0 des timeouts, ont \xe9t\xe9 observ\xe9s."]}),"\n",(0,i.jsx)(n.h3,{id:"analyse",children:"Analyse"}),"\n",(0,i.jsx)(n.p,{children:"Apr\xe8s une enqu\xeate approfondie, il a \xe9t\xe9 d\xe9termin\xe9 que ce probl\xe8me est intrins\xe8quement li\xe9 \xe0 la mani\xe8re dont ces endpoints traitent les demandes, particuli\xe8rement dans le contexte de datastores de grande taille. Cette situation est reconnue comme un bug connu au sein de la plateforme VMware, ind\xe9pendant de notre volont\xe9."}),"\n",(0,i.jsx)(n.h4,{id:"solution-de-contournement",children:"Solution de Contournement"}),"\n",(0,i.jsxs)(n.p,{children:["Nous proposons une m\xe9thode alternative pour naviguer dans les structures de fichiers des datastores. Cette solution temporaire consiste \xe0 r\xe9pliquer le comportement de navigation des fichiers c\xf4t\xe9 client. Elle implique d'effectuer l'appel initial sans ",(0,i.jsx)(n.code,{children:"subFolders=true"})," et de sp\xe9cifier directement les chemins d'acc\xe8s, ajoutant des temps d'attente programm\xe9s entre les appels API pour limiter la charge sur l'API et pr\xe9venir d'\xe9ventuels probl\xe8mes de performance."]}),"\n",(0,i.jsx)(n.h4,{id:"m\xe9thode-sugg\xe9r\xe9e",children:"M\xe9thode Sugg\xe9r\xe9e"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Initialisation :"})," Commencez par une requ\xeate \xe0 l'endpoint sans ",(0,i.jsx)(n.code,{children:"subFolders=true"})," pour r\xe9cup\xe9rer une liste initiale de fichiers et dossiers."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Traitement r\xe9cursif :"})," Pour chaque \xe9l\xe9ment :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Si c'est un fichier, ajoutez-le \xe0 une liste de r\xe9sultats."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Si c'est un dossier, effectuez un appel r\xe9cursif en utilisant le chemin de ce dossier pour explorer son contenu."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Int\xe9gration des temps d'attente :"})," Ins\xe9rez des pauses entre les appels pour r\xe9duire la charge."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Aggr\xe9gation :"})," Compilez les r\xe9sultats dans une liste globale."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"avenir-de-ces-endpoints",children:"Avenir de ces Endpoints"}),"\n",(0,i.jsx)(n.p,{children:"Nous avons d\xe9pr\xe9ci\xe9 ces endpoints en version 1.91 de l'API car aucune solution p\xe9renne n'a \xe9t\xe9 trouv\xe9e :"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3530).Z+"",width:"1431",height:"260"})})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},3530:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/issue_1_001-6941b2b100b8bbfd01f1627f45ca8700.png"},65:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(7294);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);