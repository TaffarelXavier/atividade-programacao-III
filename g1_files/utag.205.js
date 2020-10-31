//tealium universal tag - utag.205 ut4.0.202004031836, Copyright 2020 Tealium.com Inc. All Rights Reserved.
window.GoogleAnalyticsObject=""||"ga";window[window.GoogleAnalyticsObject]=window[window.GoogleAnalyticsObject]||function(){(window[window.GoogleAnalyticsObject].q=window[window.GoogleAnalyticsObject].q||[]).push(arguments);};try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState==='complete'||this.readyState==='loaded')&&!b.hFlag){b.hFlag=1;o.cb();}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb();}};}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={'view':1,'link':1};u.o=window[window.GoogleAnalyticsObject];u.required={};u.created=false;u.all=function(e,o,v,a,b,c){for(var i=0;i<u.data.account.length;i++){var t=(u.data.name[i]?u.data.name[i]+".":"");if(o==="event"){u.o(t+e,o,v,a,b,c)}else if(v!==undefined){u.o(t+e,o,v)}else{u.o(t+e,o);}}};u.setHitData=function(g,a,b,f){var obj=u.data[a];for(var d in utag.loader.GV(obj)){if(b&&d.indexOf("enh_"+b+"-")!==0&&d.indexOf("enh_all-")!==0){continue;}
var idx=d.split("-")[1],val=obj[d];if(u.typeOf(val)!=="array"){g[idx]=val;}else{g[idx]=val[f];}}};u.addEvent=function(v){if(typeof v.eventCategory=="undefined"||typeof v.eventAction=="undefined"){utag.DB("GA event Category or Action is not set");return;}
if(isNaN(parseInt(v.eventValue))){utag.DB("GA event Value is not a number");v.eventValue=null;}else{v.eventValue=parseInt(v.eventValue)||null;}
u.data.ga_events.push(v);};u.addproduct=function(event_type,len,imp){var g={},i,j,k=[];if(imp===true){k=(u.data.enh_impression_id.length?u.data.enh_impression_id:u.data.enh_impression_name);for(i=0;i<k.length;i++){g={};g.id=(u.data.enh_impression_id[i]?u.data.enh_impression_id[i]:"");g.name=(u.data.enh_impression_name[i]?u.data.enh_impression_name[i]:"");g.brand=(u.data.enh_impression_brand[i]?u.data.enh_impression_brand[i]:"");g.variant=(u.data.enh_impression_variant[i]?u.data.enh_impression_variant[i]:"");g.category=(u.data.enh_impression_category[i]?u.data.enh_impression_category[i]:"");g.list=(u.data.enh_impression_list[i]?u.data.enh_impression_list[i]:"");g.price=(u.data.enh_impression_price[i]?u.data.enh_impression_price[i]:"");g.position=(u.data.enh_impression_position[i]?u.data.enh_impression_position[i]:"");u.setHitData(g,"enhecom_events",event_type,i);u.all('ec:addImpression',g);}}else{for(i=0;i<len;i++){g={};if(u.data.autofill_params==="true"){for(j=0;j<u.data.product_id.length;j++){u.data.product_name[j]=u.data.product_name[j]||u.data.product_id[j];u.data.product_unit_price[j]=u.data.product_unit_price[j]||"1.00";u.data.product_quantity[j]=u.data.product_quantity[j]||"1";}}
g.id=u.data.product_id[i];g.name=(u.data.product_name[i]?u.data.product_name[i]:"");g.brand=(u.data.product_brand[i]?u.data.product_brand[i]:"");g.variant=(u.data.product_variant[i]?u.data.product_variant[i]:"");g.category=(u.data.product_category[i]?u.data.product_category[i]:"");g.price=(u.data.product_unit_price[i]?u.data.product_unit_price[i]:"");g.quantity=(u.data.product_quantity[i]?u.data.product_quantity[i]:"");g.coupon=(u.data.product_discount[i]?u.data.product_discount[i]:"");g.position=(u.data.product_position[i]?u.data.product_position[i]:"");u.setHitData(g,"enhecom_events",event_type,i);u.all('ec:addProduct',g);}}};u.addpromo=function(action,event){var f,g;for(f=0;f<u.data.enh_promo_id.length;f++){g={};g.id=u.data.enh_promo_id[f];g.name=(u.data.enh_promo_name[f]?u.data.enh_promo_name[f]:u.data.enh_promo_id[f]);g.creative=(u.data.enh_promo_creative[f]?u.data.enh_promo_creative[f]:"");g.position=(u.data.enh_promo_position[f]?u.data.enh_promo_position[f]:"");u.all('ec:addPromo',g);}
if(action==="promo_click"&&event==="link"){u.all('ec:setAction',u.data.enh_action);if(u.data.autosend_events==="true"){u.all('send','event','Internal Promotions','click',(g.name?g.name:g.id),{'hitCallback':u.data.enh_event_cb});}}};u.createTracker=function(){var i,tn,start;if(u.typeOf(u.data.account)==="string"){u.data.account=u.data.account.replace(/\s/g,"").split(",");}
if(u.typeOf(u.data.name)==="string"&&u.data.name!==""){u.data.name=u.data.name.replace(/\s/g,"").split(",");}
if(!u.data.name||u.data.name.length!==u.data.account.length){start=u.data.name.length!==u.data.account.length?u.data.name.length:0;tn=utag.tagsettings.gua.trackernames;u.data.name=u.data.name||[];for(i=start;i<u.data.account.length;i++){u.data.name.push("tealium_"+(i+tn));}
utag.tagsettings.gua.trackernames=tn+i;}};u.initTracker=function(){var c,f;if(!u.created){u.created=true;for(f=0;f<u.data.account.length;f++){c={};if(u.data.siteSpeedSampleRate){c.siteSpeedSampleRate=parseInt(u.data.siteSpeedSampleRate);}
if(u.data.sampleRate){c.sampleRate=parseFloat(u.data.sampleRate);}
c.cookieDomain=u.data.cookieDomain;if(u.data.cookieExpires||u.data.cookieExpires==="0"){c.cookieExpires=parseInt(u.data.cookieExpires);}
if(u.data.legacyCookieDomain){c.legacyCookieDomain=u.data.legacyCookieDomain;}
if(u.data.legacyHistoryImport==="false"||u.data.legacyHistoryImport===false){c.legacyHistoryImport=u.data.legacyHistoryImport;}
c.allowLinker=u.data.allowLinker;if(typeof u.data.name[f]!=="undefined"&&u.data.name[f]!==""){c.name=u.data.name[f];}
if(u.data.clientId){c.clientId=u.data.clientId;}
if(u.data.useAmpClientId==="true"||u.data.useAmpClientId===true){c.useAmpClientId=u.data.useAmpClientId;}
u.o("create",u.data.account[f],c);}
if(u.data.global_event_cb){u.all('set','hitCallback',u.data.global_event_cb);}
if(u.data.optimizely==="true"){window.optimizely=window.optimizely||[];window.optimizely.push(['activateUniversalAnalytics']);}}};u.setGlobalProperties=function(data,reset,custom_property){var map={"uid":{"name":"&uid","type":"exists","reset":true},"page":{"name":"page","type":"exists","reset":true},"title":{"name":"title","type":"exists","reset":true},"location":{"name":"location","type":"exists","reset":false},"campaignId":{"name":"campaignId","type":"exists","reset":true},"campaignName":{"name":"campaignName","type":"exists","reset":true},"campaignSource":{"name":"campaignSource","type":"exists","reset":true},"campaignMedium":{"name":"campaignMedium","type":"exists","reset":true},"campaignContent":{"name":"campaignContent","type":"exists","reset":true},"campaignKeyword":{"name":"campaignKeyword","type":"exists","reset":true},"dataSource":{"name":"dataSource","type":"exists","reset":true}},prop;if(custom_property&&reset){u.all("set",custom_property,"");}
for(prop in utag.loader.GV(map)){if(reset&&map[prop].reset){u.all("set",map[prop].name,"");}else{if(map[prop].type==="bool"){if(data[prop]==true||data[prop]==="true"){u.all("set",map[prop].name,true);}}
else if(map[prop].type==="exists"){if(data[prop]){u.all("set",map[prop].name,data[prop]);}}}}};window.utag.tagsettings=window.utag.tagsettings||{};window.utag.tagsettings.gua=window.utag.tagsettings.gua||{};window.utag.tagsettings.gua.trackernames=window.utag.tagsettings.gua.trackernames||0;u.map={"domain_ga_portal":"cookieDomain,legacyCookieDomain","metrics_user_code":"uid","ambient":"dimension1","classe":"dimension2","has_video":"pageview-dimension8","vta_logada":"dimension10","vte_logado":"dimension11","isAdBlockerDetected":"pageview-dimension12","appWrapperName":"pageview-dimension13","appWrapperVersion":"pageview-dimension14","ga_nome_afiliadas":"dimension20","data_publicacao":"dimension4","tipo_pagina":"dimension5","page_name":"dimension16","versao_experimento":"dimension17","last_referrer":"dimension23","data_atualizacao":"dimension24","dia_publicacao":"dimension25","editoria":"dimension26","nome_experimento":"dimension27","video_position":"dimension28","has_top_photo":"dimension29","quantidade_imagens":"pageview-metric3","quantidade_videos":"pageview-metric4","timingCategory":"timingCategory","timingVar":"timingVar","timingValue":"timingValue","timingLabel":"timingLabel","gaEv_category":"eventCategory","gaEv_action":"eventAction","gaEv_label":"eventLabel","gaEv_value":"eventValue","gaEv_noninteraction":"nonInteraction","editoria_path":"dimension32","feed_type":"dimension19","word_count":"pageview-metric6","word_count_range":"dimension18","has_top_video":"dimension31","quantidade_embed_social":"pageview-metric7","quantidade_paragrafos":"pageview-metric8","quantidade_related_articles":"pageview-metric9","quantidade_playgif":"pageview-metric10","content_type":"dimension33","has_photo":"dimension34","has_gif":"dimension35","quantidade_votacao":"pageview-metric11","track_exception":"exception_reason","quantidade_tabelas":"pageview-metric12","has_table":"dimension38","has_chart":"dimension39","has_entenda":"dimension40","quantidade_graficos":"pageview-metric13","quantidade_entenda":"pageview-metric14","bd_suser_provider":"dimension98,dimension96","bd_suser_code":"dimension99,dimension97","has_resumo":"dimension42","quantidade_resumo":"pageview-metric15","has_related":"dimension44","estado_cobertura":"dimension7","has_votacao":"dimension45","platform":"dimension36","user_agent":"dimension52","resource_id":"dimension53","home_ref":"dimension58","krux_id":"dimension75","horizonclientuuid":"dimension76","bs_userpower_connection_saveData":"dimension200","bs_userpower_connection_connectionType":"dimension199","bs_userpower_connection_rtt":"dimension198","bs_userpower_hardware_deviceMemory":"dimension197","bs_userpower_hardware_cpuCores":"dimension196"};u.extend=[function(a,b){window._gaq=window._gaq||[];window._gaq.oldPush=window._gaq.oldPush||window._gaq.push;window._gaq.push=function(obj){try{this.oldPush(obj);if((Array.isArray(obj)||Object.prototype.toString.call(obj)==='[object Array]')&&obj.length>0){if(typeof obj[0]==="string"){if(obj[0].indexOf("_trackEvent")>-1){if(typeof ga!=="undefined"&&typeof ga==="function"){for(var iii=0;iii<ga.getAll().length;iii++){ga((function(tr){if(tr.get('name')==="g1_portal"){var ct=obj[1]||"",ac=obj[2]||"",lb=obj[3]||"",vl=obj[4]||0,ni=obj[5]||false;if(ct!==""&&ac!==""){tr.send("event",ct,ac,lb,vl,{nonInteraction:ni});}}})(ga.getAll()[iii]));}}}}}}
catch(e){}};},function(a,b){if(!!document.cookie.match(/GLBID=.*?(;|$)/)){b.vta_logada="visita";b.vte_logado="visitante";}},function(a,b){var aurl=(window.location.hostname.indexOf("globoi.com")>-1?"https://usergate.dev.globoi.com":"https://usergate.globo.com");if(!userStorage.utStorage.get("cdUserCodeGlb_v3")){cadunUserData(aurl);}
else{var stUser=JSON.parse(userStorage.utStorage.get("cdUserCodeGlb_v3"));if(!!document.cookie.match(/GLBID=.*?(;|$)/)&&stUser.provider==="anonymous"){cadunUserData(aurl);}
else if(stUser.glb_uid!==userStorage.docCookies.getItem("glb_uid")){cadunUserData(aurl);}
else if(stUser.glbid!==userStorage.docCookies.getItem("GLBID")){cadunUserData(aurl);}
else if(!document.cookie.match(/GLBID=.*?(;|$)/)&&stUser.provider==="cadun"){cadunUserData(aurl);}
else if(!stUser.sprovider&&!stUser.suser_code){cadunUserData(aurl);}
else{b.bd_suser_code=stUser.user_code;b.bd_suser_provider=stUser.provider;if(stUser.provider!=="anonymous"){b.metrics_user_code=stUser.user_code;}}}
window.addEventListener('loginSuccess',function(e){var stUser=JSON.parse(userStorage.utStorage.get("cdUserCodeGlb_v3"));if(!!document.cookie.match(/GLBID=.*?(;|$)/)&&stUser.provider==="anonymous"){cadunUserData(aurl);}
setTimeout(function(){if(typeof ga!=="undefined"&&typeof ga==="function"){for(var iii=0;iii<ga.getAll().length;iii++){ga((function(tr){var ct="Votacao Interatividade",ac="Login",lb="Sucesso Login";if(tr.get("trackingId")==="UA-296593-3"){tr.set("&uid",window.utag_data.metrics_user_code);tr.set("dimension98",window.utag_data.bd_suser_provider);tr.set("dimension99",window.utag_data.bd_suser_code);tr.set("dimension96",window.utag_data.bd_suser_provider);tr.set("dimension97",window.utag_data.bd_suser_code);tr.send("event",ct,ac,lb);}})(ga.getAll()[iii]));}}},1250);},false);},function(a,b){var tl_hasVideo=document.getElementsByTagName("script"),tl_hv_control=false,tl_v_api="api.min.js";if(location.pathname!=="/"){tl_v_api="player.min.js";}
for(var i=0;i<tl_hasVideo.length;i++){if(tl_hasVideo[i].src.indexOf("s.videos")>-1&&tl_hasVideo[i].src.indexOf(tl_v_api)>-1){tl_hv_control=false;b.has_video="True";break;}
else{tl_hv_control=true;}}
if(tl_hv_control){b.has_video="False";}},function(a,b){if(b["dom.referrer"]){b.last_referrer=b["dom.referrer"];}
else{b.last_referrer="direct";}},function(a,b){try{if(1){if(b.tipo_pagina==="multi-content"){b.has_video="false";b.has_photo="false";b.has_gif="false";b.has_table="false";b.has_chart="false";b.has_entenda="false";b.has_resumo="false";b.has_related="false";b.has_votacao="false";var layerComp={};if(b.components){layerComp=b.components;for(var key in layerComp){switch(key){case"video":b.has_video="true";b.quantidade_videos=layerComp[key].total;break;case"photo":b.has_photo="true";b.quantidade_imagens=layerComp[key].total;break;case"paragraphs":b.quantidade_paragrafos=layerComp[key].total;break;case"related-articles":b.quantidade_related_articles=layerComp[key].total;b.has_related="true";break;case"embed-social":b.quantidade_embed_social=layerComp[key].total;break;case"gif":b.has_gif="true";b.quantidade_playgif=layerComp[key].total;break;case"votacao":b.quantidade_votacao=layerComp[key].total;b.has_votacao="true";break;case"chart":b.quantidade_graficos=layerComp[key].total;b.has_chart="true";break;case"entenda-o-caso":b.quantidade_entenda=layerComp[key].total;b.has_entenda="true";break;case"table-plugin":b.quantidade_tabelas=layerComp[key].total;b.has_table="true";break;case"resumo":b.quantidade_resumo=layerComp[key].total;b.has_resumo="true";break;}}}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){function whenAvailableUtagKey(name,callback,trys){var interval=500,dec=trys||5;window.setTimeout(function(){if(window.utag_data[name]){callback(window.utag_data[name]);}else{if(dec>0){window.setTimeout(arguments.callee,interval);dec--;}}},interval);}
if(b.tipo_pagina==="multi-content"){whenAvailableUtagKey("versao_experimento",function(){utag.link({"gaEv_category":"integracao globoab","gaEv_action":"envio de dados","gaEv_noninteraction":false,"nome_experimento":b.nome_experimento,"versao_experimento":b.versao_experimento},false,["203","205"]);},10);}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){(function(d,w){try{var productUa=window.utag_data.productGAId,docReady=function(callback){if(document.readyState==="complete"||(!document.attachEvent&&document.readyState==="interactive")){setTimeout(callback,1);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",callback,false);window.addEventListener("load",callback,false);}else{document.attachEvent("onreadystatechange",callback);window.attachEvent("onload",callback);}},getgaLinker=function(){var linker="";if(typeof window.ga!=="undefined"&&typeof window.ga==="function"&&window.ga.loaded){for(var iii=0;iii<ga.getAll().length;iii++){ga((function(tr){if(tr.get("trackingId")===productUa){linker=tr.get("linkerParam");}})(ga.getAll()[iii]));}}
return linker;},whenAvailableGa=function(callback,trys){var interval=100,dec=trys||5
window.setTimeout(function(){if(window.ga&&window.ga.loaded){callback();}else{if(dec>0){window.setTimeout(arguments.callee,interval);dec--;}}},interval);};docReady(function(){var loginLinks=d.querySelectorAll("a[href*='login.globo']");if(loginLinks.length>0){for(var xx=0;xx<loginLinks.length;xx++){loginLinks[xx].addEventListener("mousedown",function(){var linker=getgaLinker();if(this.href.indexOf("glbproduct")===-1){this.href=this.href+(this.href.indexOf("?")>-1?"&glbproduct="+productUa+"&":"?glbproduct="+productUa+"&")+linker;}});}}});whenAvailableGa(function(){var linker=getgaLinker();window.utag_data.galinker=linker.split("=")[1];},20);}
catch(e){}})(document,window);}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){u.o=window[window.GoogleAnalyticsObject];b.ga_events=b.ga_events||[];var c,d,e,f,g,h,tn,prop;if(u.data&&u.data.name){tn=u.data.name;}
u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"","a":a,"cookieDomain":"auto"||utag.loader.lh(),"name":tn||"g1_portal","account":"UA-296593-3","anonymizeIp":"false","allowLinker":"true","crossDomainTrack":"g1.globo.com,especiaisg1.globo","enhancedLinkAttribution":"false","enhancedecommerce":"false","displayfeatures":"true","screenView":"false","optimizely":"false","init_before_extensions":"false","autofill_params":"false","autosend_events":"true"||"true","clear_global_vars":"false","enh_action":"","enh_event_cb":"","enh_checkout_step":"","enh_checkout_option":"","product_action_list":"","product_variant":[],"enh_impression_id":[],"enh_impression_name":[],"enh_impression_price":[],"enh_impression_category":[],"enh_impression_brand":[],"enh_impression_variant":[],"enh_impression_list":[],"enh_impression_position":[],"enh_promo_id":[],"enh_promo_name":[],"enh_promo_creative":[],"enh_promo_position":[],"id":"","product_id":[],"product_name":[],"product_brand":[],"product_category":[],"product_quantity":[],"product_unit_price":[],"product_discount":[],"product_position":[],"ga_events":[],"sessionControl":"","set":{}};if(u.data.init_before_extensions==="true"){u.createTracker();u.initTracker();}
for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("a.")===0){u.data["a"][e[f].substring(2)]=b[d];}else if(e[f].indexOf("set.")===0){u.data.set[e[f].substring(4)]=b[d];}else{u.data[e[f]]=b[d];}}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.enh_action=u.map[d];}}}}
u.data.account=u.data.tid||u.data.account;if(u.typeOf(u.data.ga_events)==="array"&&u.typeOf(b.ga_events)==="array"){if(u.data.ga_events.length===0&&b.ga_events.length>0){u.data.ga_events=b.ga_events;}else if(u.data.ga_events.length>0&&b.ga_events.length>0){u.data.ga_events=u.data.ga_events.concat(b.ga_events);}}
u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.order_tax=u.data.order_tax||b._ctax||"";u.data.order_store=u.data.order_store||b._cstore||"";u.data.order_currency=u.data.order_currency||b._ccurrency||"";u.data.order_coupon_code=u.data.order_coupon_code||b._cpromo||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_brand.length===0&&b._cbrand!==undefined){u.data.product_brand=b._cbrand.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.data.product_discount.length===0&&b._cpdisc!==undefined){u.data.product_discount=b._cpdisc.slice(0);}
if(u.data.init_before_extensions!=="true"){u.createTracker();u.initTracker();}
if(u.data.enhancedecommerce==="true"&&!u.required["ec"]){u.required["ec"]=!0;u.all("require","ec");}
u.data.app_id=u.data.app_id||u.data.appId||b.app_id;u.data.app_name=u.data.app_name||u.data.appName||b.app_name;u.data.app_version=u.data.app_version||u.data.appVersion||b.app_version;u.data.app_rdns=u.data.app_rdns||u.data.appInstallerId||b.app_rdns;u.data.screen_title=u.data.screen_title||u.data.screenName||b.screen_title;if(u.data.app_id||u.data.app_name){g={};g.appName=u.data.app_name;g.appId=u.data.app_id||"";g.appVersion=u.data.app_version;g.appInstallerId=u.data.app_rdns;u.all("set",g);}
u.data.exception_reason=u.data.exception_reason||b.exception_reason;if(u.data.exception_reason){g={};g.exDescription=u.data.exception_reason;g.exFatal=true;if(u.data.nonInteraction){g.nonInteraction=1;}
u.all("send","exception",g);}
if(u.data.allowLinker==="true"||u.data.allowLinker===true){if(!u.required["linker"]){u.all("require","linker");u.required["linker"]=!0;}
if(u.data.crossDomainTrack){if(u.typeOf(u.data.crossDomainTrack)==="string"){u.data.crossDomainTrack=u.data.crossDomainTrack.replace(/\s/g,'').split(',');}
u.all("linker:autoLink",u.data.crossDomainTrack);}}
if(u.data.clear_global_vars==="true"){u.setGlobalProperties(u.data,true);for(prop in utag.loader.GV(u.data.set)){u.setGlobalProperties(u.data,true,prop);}}
u.setGlobalProperties(u.data,false);if(u.data.anonymizeIp==="true"||u.data.anonymizeIp===true){u.all("set",'anonymizeIp',true);}
if(u.data.uid){u.all("set","&uid",u.data.uid);}
if(u.data.page){u.all("set","page",u.data.page);}
if(u.data.title){u.all("set","title",u.data.title);}
if(u.data.location){u.all("set","location",u.data.location);}
if(u.data.campaignId){u.all("set","campaignId",u.data.campaignId);}
if(u.data.campaignName){u.all("set","campaignName",u.data.campaignName);}
if(u.data.campaignSource){u.all("set","campaignSource",u.data.campaignSource);}
if(u.data.campaignMedium){u.all("set","campaignMedium",u.data.campaignMedium);}
if(u.data.campaignContent){u.all("set","campaignContent",u.data.campaignContent);}
if(u.data.campaignKeyword){u.all("set","campaignKeyword",u.data.campaignKeyword);}
if(u.data.displayfeatures==="true"||u.data.displayfeatures===true){if(!u.required["displayfeatures"]){u.required["displayfeatures"]=!0;u.all("require","displayfeatures");}}else{u.all("set","displayFeaturesTask",null);}
if(u.data.dataSource){u.all("set","dataSource",u.data.dataSource);}
for(prop in utag.loader.GV(u.data.set)){u.all("set",prop,u.data.set[prop]);}
u.data.transaction_events={};u.data.pageview_events={};u.data.link_events={};u.data.enhecom_events={};for(d in utag.loader.GV(u.data)){if(d.indexOf("-")>-1&&(d.indexOf("metric")>-1||d.indexOf("dimension")>-1||d.indexOf("contentGroup")>-1)){if(d.indexOf("transaction-")===0){u.data.transaction_events[d]=u.data[d];}else if(d.indexOf("pageview-")===0){u.data.pageview_events[d]=u.data[d];}else if(d.indexOf("link-")===0){u.data.link_events[d]=u.data[d];}else if(u.data.enhancedecommerce==="true"&&d.indexOf("enh_")===0){u.data.enhecom_events[d]=u.data[d];}}else if(d.indexOf("metric")===0||d.indexOf("dimension")===0||d.indexOf("contentGroup")===0){u.all("set",d,u.data[d]);}}
if(u.data.enhancedLinkAttribution==="true"){if(!u.required["enhancedLinkAttribution"]){u.required["enhancedLinkAttribution"]=!0;u.all("require","linkid","linkid.js");}}
u.data.order_id=(u.data.order_id?u.data.order_id:u.data.id);if(u.data.enhancedecommerce==="true"){u.all("set",'&cu',(u.data.currency?u.data.currency:u.data.order_currency));if(u.data.order_id&&u.data.enh_action==="refund"){if(u.data.order_id instanceof Array&&u.data.order_id.length>0){u.data.order_id=u.data.order_id[0];}
for(f=0;f<u.data.product_id.length;f++){g={};g.id=u.data.product_id[f];g.quantity=(u.data.product_quantity[f]?u.data.product_quantity[f]:"1");u.setHitData(g,"enhecom_events","product_refund",f);u.all('ec:addProduct',g);}
g={};g.id=u.data.order_id;u.setHitData(g,"enhecom_events","refund");u.all('ec:setAction','refund',g);}
else if(u.data.order_id){if(u.data.order_id instanceof Array&&u.data.order_id.length>0){u.data.order_id=u.data.order_id[0];}
u.addproduct("product_purchase",u.data.product_id.length,false);g={};g.id=u.data.order_id;g.affiliation=(u.data.affiliation?u.data.affiliation:u.data.order_store);g.revenue=(u.data.revenue?u.data.revenue:u.data.order_total);g.shipping=(u.data.shipping?u.data.shipping:u.data.order_shipping);g.tax=(u.data.tax?u.data.tax:u.data.order_tax);g.coupon=(u.data.coupon?u.data.coupon:u.data.order_coupon_code);u.setHitData(g,"enhecom_events","purchase");u.all('ec:setAction','purchase',g);}
else if(u.data.enh_action==="product_click"&&u.data.a==="link"){u.addproduct("product_click",1,false);u.all('ec:setAction','click',{list:u.data.product_action_list});if(u.data.autosend_events==="true"){u.all('send','event','UX','click','Results',{'hitCallback':u.data.enh_event_cb});}
}
else if(u.data.enh_action==="detail"){u.addproduct("detail",1,false);g={};u.setHitData(g,"list",u.data.product_action_list);u.all("ec:setAction","detail");}
else if(u.data.enh_action==="add"){u.addproduct("product_add",u.data.product_id.length,false);u.all('ec:setAction','add',{list:u.data.product_action_list});if(u.data.a==="link"&&u.data.autosend_events==="true"){u.all('send','event','UX','click','add to cart',{'hitCallback':u.data.enh_event_cb});}
}
else if(u.data.enh_action==="remove"){u.addproduct("product_remove",u.data.product_id.length,false);u.all('ec:setAction','remove');if(u.data.a==="link"&&u.data.autosend_events==="true"){u.all('send','event','UX','click','remove from cart',{'hitCallback':u.data.enh_event_cb});}
}
else if(u.data.enh_action==="checkout"){u.addproduct("product_checkout",u.data.product_id.length,false);g={};g.step=u.data.enh_checkout_step||"1";g.option=u.data.enh_checkout_option;u.all('ec:setAction',u.data.enh_action,g);}
if(u.data.enh_action==="checkout_option"&&u.data.a==="link"){g={};g.step=u.data.enh_checkout_step||"1";g.option=u.data.enh_checkout_option;u.all('ec:setAction',u.data.enh_action,g);if(u.data.autosend_events==="true"){u.all('send','event','Checkout','Option',{'hitCallback':u.data.enh_event_cb});}
}
if(u.data.enh_impression_id){u.addproduct("product_impression",u.data.enh_impression_id.length,true);}
if(u.data.enh_promo_id){u.addpromo(u.data.enh_action,u.data.a);}
g={};if(u.data.order_id){u.setHitData(g,"transaction_events");}
u.setHitData(g,"pageview_events");if(u.data.sessionControl==="start"||u.data.sessionControl==="end"){g.sessionControl=u.data.sessionControl;}
if(u.data.a==="view"){if(u.data.screenView==="true"||u.data.screenView===true){g.screenName=u.data.screen_title||"";u.all("send","screenview",g);}else{g.hitType="pageview";u.all("send",g);}}
}else if(u.data.a==="view"){g={};u.setHitData(g,"pageview_events");if(u.data.sessionControl==="start"||u.data.sessionControl==="end"){g.sessionControl=u.data.sessionControl;}
if(u.data.screenView==="true"||u.data.screenView===true){g.screenName=u.data.screen_title||"";u.all("send","screenview",g);}else{g.hitType="pageview";u.all("send",g);}
if(u.data.order_id&&!(u.data.order_id instanceof Array)){if(!u.required["ecommerce"]){u.required["ecommerce"]=!0;u.all("require","ecommerce","ecommerce.js");}
g={};u.setHitData(g,"transaction_events");g.id=u.data.order_id;g.affiliation=(u.data.affiliation?u.data.affiliation:u.data.order_store);g.revenue=(u.data.revenue?u.data.revenue:u.data.order_total);g.shipping=(u.data.shipping?u.data.shipping:u.data.order_shipping);g.tax=(u.data.tax?u.data.tax:u.data.order_tax);g.currency=(u.data.currency?u.data.currency:u.data.order_currency);u.all('ecommerce:addTransaction',g);for(f=0;f<u.data.product_id.length;f++){g={};g.id=u.data.order_id;g.sku=u.data.product_id[f];g.name=(u.data.product_name[f]?u.data.product_name[f]:u.data.product_id[f]);g.category=(u.data.product_category[f]?u.data.product_category[f]:"");g.price=(u.data.product_unit_price[f]?u.data.product_unit_price[f]:"1.00");g.quantity=(u.data.product_quantity[f]?u.data.product_quantity[f]:"1");u.setHitData(g,"transaction_events");u.all('ecommerce:addItem',g);}
u.all('ecommerce:send');}else if(u.data.order_id instanceof Array&&u.data.order_id.length>0){if(!u.required["ecommerce"]){u.required["ecommerce"]=!0;u.all("require","ecommerce","ecommerce.js");}
var lastindex=0;for(f=0;f<u.data.order_id.length;f++){if(f===u.data.order_id.length-1||(u.data.order_id[f]!==u.data.order_id[f+1])){g={};u.setHitData(g,"transaction_events");g.id=u.data.order_id[f];g.affiliation=(u.data.affiliation&&typeof u.data.affiliation[f]!=="undefined"?u.data.affiliation[f]:u.data.order_store);g.revenue=(u.data.revenue&&typeof u.data.revenue[f]!=="undefined"?u.data.revenue[f]:u.data.order_total);g.shipping=(u.data.shipping&&typeof u.data.shipping[f]!=="undefined"?u.data.shipping[f]:u.data.order_shipping);g.tax=(u.data.tax&&typeof u.data.tax[f]!=="undefined"?u.data.tax[f]:u.data.order_tax);g.currency=(u.data.currency?u.data.currency:u.data.order_currency);u.all('ecommerce:addTransaction',g);for(e=lastindex;e<f+1;e++){g={};g.id=u.data.order_id[f];g.sku=u.data.product_id[e];g.name=(u.data.product_name[e]?u.data.product_name[e]:u.data.product_id[e]);g.category=(u.data.product_category[e]?u.data.product_category[e]:"");g.price=(u.data.product_unit_price[e]?u.data.product_unit_price[e]:"1.00");g.quantity=(u.data.product_quantity[e]?u.data.product_quantity[e]:"1");u.setHitData(g,"transaction_events");u.all('ecommerce:addItem',g);}
lastindex=f+1;}}
u.all('ecommerce:send');}
}
if(u.data.eventCategory&&u.data.eventAction){g={};u.setHitData(g,"link_events");g.hitType="event";g.eventCategory=u.data.eventCategory;if(u.data.nonInteraction){g.nonInteraction=1;}
g.eventAction=u.data.eventAction;if(u.data.eventLabel){g.eventLabel=u.data.eventLabel;}
if(typeof u.data.eventValue!=="undefined"&&u.data.eventValue!==""){g.eventValue=u.data.eventValue;}
if(u.data.standard_event_cb){g.hitCallback=u.data.standard_event_cb;}
if(u.data.screenView==="true"||u.data.screenView===true){g.screenName=u.data.screen_title||"";}
if(u.data.sessionControl==="start"||u.data.sessionControl==="end"){g.sessionControl=u.data.sessionControl;}
u.all("send",g);u.data.eventCategory=u.data.eventAction=u.data.eventLabel=u.data.eventValue="";}
for(e=0;e<u.data.ga_events.length;e++){g={};u.setHitData(g,"link_events");g.hitType="event";g.eventCategory=u.data.ga_events[e].eventCategory;g.eventAction=u.data.ga_events[e].eventAction;g.eventLabel=u.data.ga_events[e].eventLabel;g.eventValue=u.data.ga_events[e].eventValue;if(u.data.ga_events[e].nonInteraction){g.nonInteraction=1;}
if(u.data.sessionControl==="start"||u.data.sessionControl==="end"){g.sessionControl=u.data.sessionControl;}
u.all("send",g);}
if(u.data.socialNetwork&&u.data.socialAction&&u.data.socialTarget){g={};g.hitType="social";g.socialNetwork=u.data.socialNetwork;g.socialAction=u.data.socialAction;g.socialTarget=u.data.socialTarget;u.all("send",g);u.data.socialNetwork=u.data.socialAction=u.data.socialTarget="";}
if(u.data.timingCategory&&u.data.timingVar&&u.data.timingValue){g={};g.hitType="timing";g.timingCategory=u.data.timingCategory;g.timingVar=u.data.timingVar;g.timingValue=u.data.timingValue;g.timingLabel=u.data.timingLabel||"";u.all("send",g);}
if(u.data["ga-disable"]){window["ga-disable-"+u.data["ga-disable"]]=true;}
(function(){var id="tealium-tag-7110";if(document.getElementById(id)){return;}
u.loader({"type":"script","src":"https://www.google-analytics.com/analytics.js","loc":"script","id":id});u.o.l=1*new Date();})();}};utag.o[loader].loader.LOAD(id);}('205','globo.g1'));}catch(error){utag.DB(error);}
