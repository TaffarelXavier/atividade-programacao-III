//tealium universal tag - utag.245 ut4.0.201911252014, Copyright 2019 Tealium.com Inc. All Rights Reserved.
window.Krux||((Krux=function(){Krux.q.push(arguments)}).q=[]);try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
u.ev={"view":1};u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:245");utag.DB(b);var c,d,e,f;u.data={"confid":"J2lZajxx"};utag.DB("send:245:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
utag.DB("send:245:MAPPINGS");utag.DB(u.data);if(!u.data.confid){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
(function(){var k=document.createElement('script');k.type='text/javascript';k.async=true;k.src=(location.protocol==="https:"?"https:":"http:")+"//cdn.krxd.net/controltag/"+u.data.confid+".js";var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(k,s);}());utag.DB("send:245:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("245","globo.g1"));}catch(error){utag.DB(error);}
