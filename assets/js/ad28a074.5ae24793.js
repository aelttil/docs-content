"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([["9380"],{8658:function(e,s,r){r.r(s),r.d(s,{metadata:()=>t,contentTitle:()=>l,default:()=>p,assets:()=>a,toc:()=>u,frontMatter:()=>i});var t=JSON.parse('{"id":"faq/paas/oshift","title":"Questions fr\xe9quentes concernant l\'offre PaaS Openshift","description":"Le provider Terraform Cloud Temple couvre-t-il l\'offre Openshift ?","source":"@site/docs/faq/paas/oshift.md","sourceDirName":"faq/paas","slug":"/faq/paas/oshift","permalink":"/docs/faq/paas/oshift","draft":false,"unlisted":false,"editUrl":"https://github.com/aelttil/docs-content/docs/faq/paas/oshift.md","tags":[],"version":"current","frontMatter":{"title":"Questions fr\xe9quentes concernant l\'offre PaaS Openshift"},"sidebar":"docSidebar","previous":{"title":"Bugs connus","permalink":"/docs/faq/issues"},"next":{"title":"D\xe9ployer un firewall virtuel Fortigate","permalink":"/docs/network/install_guides/fortinet/forti"}}'),n=r("5893"),o=r("65");let i={title:"Questions fr\xe9quentes concernant l'offre PaaS Openshift"},l=void 0,a={},u=[{value:"Le provider Terraform Cloud Temple couvre-t-il l&#39;offre Openshift ?",id:"le-provider-terraform-cloud-temple-couvre-t-il-loffre-openshift-",level:2},{value:"Si les composants mat\xe9riels au niveau de la plateforme en tant que service (PaaS) deviennent obsol\xe8tes et qu&#39;une migration vers de nouvelles ressources de calcul est n\xe9cessaire, quelles sont les proc\xe9dures \xe0 suivre et qui est responsable de cette migration ?",id:"si-les-composants-mat\xe9riels-au-niveau-de-la-plateforme-en-tant-que-service-paas-deviennent-obsol\xe8tes-et-quune-migration-vers-de-nouvelles-ressources-de-calcul-est-n\xe9cessaire-quelles-sont-les-proc\xe9dures-\xe0-suivre-et-qui-est-responsable-de-cette-migration-",level:2},{value:"Quel est le nombre moyen de pods par n\u0153ud worker dans un cluster OpenShift ?",id:"quel-est-le-nombre-moyen-de-pods-par-n\u0153ud-worker-dans-un-cluster-openshift-",level:2},{value:"Est il possible d&#39;avoir un environnement de Test sur l&#39;offre PaaS Openshift Cloud Temple ?",id:"est-il-possible-davoir-un-environnement-de-test-sur-loffre-paas-openshift-cloud-temple-",level:2},{value:"Le Load Balancer int\xe9gr\xe9 \xe0 la plateforme PaaS Openshift peut il servir de WAF?",id:"le-load-balancer-int\xe9gr\xe9-\xe0-la-plateforme-paas-openshift-peut-il-servir-de-waf",level:2}];function d(e){let s={a:"a",h2:"h2",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"le-provider-terraform-cloud-temple-couvre-t-il-loffre-openshift-",children:"Le provider Terraform Cloud Temple couvre-t-il l'offre Openshift ?"}),"\n",(0,n.jsx)(s.p,{children:"Non, l'API d'OpenShift est ouverte, ce qui permet une grande flexibilit\xe9 et int\xe9gration avec divers outils et services. Il est recommand\xe9 d'utiliser le provider officiel d'OpenShift pour assurer une compatibilit\xe9 et un support optimal. En utilisant le provider Terraform officiel, vous pouvez automatiser et g\xe9rer efficacement les ressources OpenShift, y compris les clusters, les projets, les r\xf4les, les autorisations, etc."}),"\n",(0,n.jsx)(s.h2,{id:"si-les-composants-mat\xe9riels-au-niveau-de-la-plateforme-en-tant-que-service-paas-deviennent-obsol\xe8tes-et-quune-migration-vers-de-nouvelles-ressources-de-calcul-est-n\xe9cessaire-quelles-sont-les-proc\xe9dures-\xe0-suivre-et-qui-est-responsable-de-cette-migration-",children:"Si les composants mat\xe9riels au niveau de la plateforme en tant que service (PaaS) deviennent obsol\xe8tes et qu'une migration vers de nouvelles ressources de calcul est n\xe9cessaire, quelles sont les proc\xe9dures \xe0 suivre et qui est responsable de cette migration ?"}),"\n",(0,n.jsx)(s.p,{children:"La migration est prise en charge par Cloud Temple sans co\xfbt suppl\xe9mentaire pour le client et sans interruption de service (z\xe9ro temps d'arr\xeat)."}),"\n",(0,n.jsx)(s.h2,{id:"quel-est-le-nombre-moyen-de-pods-par-n\u0153ud-worker-dans-un-cluster-openshift-",children:"Quel est le nombre moyen de pods par n\u0153ud worker dans un cluster OpenShift ?"}),"\n",(0,n.jsx)(s.p,{children:"Globalement, vous pouvez faire un parall\xe8le avec le nombre de machines virtuelles et de CPU virtuels sur un hyperviseur. Le nombre optimal de pods par worker dans l'offre OpenShift est similaire \xe0 la mani\xe8re dont on d\xe9termine le nombre de machines virtuelles qu'un hyperviseur peut g\xe9rer en fonction du nombre de CPU virtuels disponibles. Il d\xe9pend aussi du type de n\u0153ud worker que vous avez d\xe9ploy\xe9."}),"\n",(0,n.jsxs)(s.p,{children:["Le nombre maximum de pods par node (worker) est souvent configur\xe9 \xe0 250, mais cela est \xe0 ",(0,n.jsx)(s.a,{href:"https://docs.openshift.com/container-platform/4.16/nodes/nodes/nodes-nodes-managing-max-pods.html",children:"ajuster en fonction des besoins sp\xe9cifiques de l'application et des ressources disponibles"}),". Le param\xe8tre ",(0,n.jsx)(s.strong,{children:"podsPerCore"})," peut \xeatre utilis\xe9 pour d\xe9finir le nombre de pods qu'un n\u0153ud peut ex\xe9cuter en fonction du nombre de c\u0153urs de processeur. Par exemple, si ",(0,n.jsx)(s.strong,{children:"podsPerCore"})," est fix\xe9 \xe0 10 et que le n\u0153ud a 4 c\u0153urs, alors le maximum de pods sera 40\u200B."]}),"\n",(0,n.jsxs)(s.p,{children:["Vous pouvez consulter ",(0,n.jsx)(s.a,{href:"https://docs.openshift.com/container-platform/4.16/scalability_and_performance/planning-your-environment-according-to-object-maximums.html",children:"ce guide RedHat pour avoir les maximums d'Openshift"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"est-il-possible-davoir-un-environnement-de-test-sur-loffre-paas-openshift-cloud-temple-",children:"Est il possible d'avoir un environnement de Test sur l'offre PaaS Openshift Cloud Temple ?"}),"\n",(0,n.jsxs)(s.p,{children:["Cloud Temple ne propose pas d'offre de test ou de laboratoire en libre acc\xe8s pour son offre PaaS OpenShift. Cependant, il est possible d'utiliser ",(0,n.jsx)(s.a,{href:"https://www.redhat.com/fr/technologies/cloud-computing/openshift/try-it",children:"les plateformes d\xe9di\xe9es de RedHat"})," \xe0 cette fin."]}),"\n",(0,n.jsx)(s.h2,{id:"le-load-balancer-int\xe9gr\xe9-\xe0-la-plateforme-paas-openshift-peut-il-servir-de-waf",children:"Le Load Balancer int\xe9gr\xe9 \xe0 la plateforme PaaS Openshift peut il servir de WAF?"}),"\n",(0,n.jsx)(s.p,{children:"Non, le load balancer int\xe9gr\xe9 \xe0 l'offre PaaS OpenShift n'est pas con\xe7u pour fonctionner comme un Web Application Firewall (WAF). Cependant, une offre de WAF en tant que service (WAF as a Service) est pr\xe9vue pour le second semestre 2025."})]})}function p(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},65:function(e,s,r){r.d(s,{Z:function(){return l},a:function(){return i}});var t=r(7294);let n={},o=t.createContext(n);function i(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);