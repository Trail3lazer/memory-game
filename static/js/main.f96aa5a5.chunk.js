(window["webpackJsonpmemory-clicky-game"]=window["webpackJsonpmemory-clicky-game"]||[]).push([[0],[,,,,function(e,t,i){e.exports=i(18)},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);i(5);var n=i(0),a=i.n(n),o=i(3),c=i.n(o),s=(i(10),i(1)),r=(i(11),function(e){return a.a.createElement("nav",{className:"navbar navbar-expand-lg"},a.a.createElement("ul",{className:"container-fluid justfiy-content-between"},a.a.createElement("li",{className:"brand"},a.a.createElement("a",{href:"/"},"Clicky Game")),a.a.createElement("li",{className:"".concat(e.correct)},null!==e.correct?!0===e.correct?"Noice":"Wrong choice muchacho":"Make a guess"),a.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))}),l=(i(12),function(e){return a.a.createElement("nav",{className:"header"},a.a.createElement("h1",{className:"display-4"},"Memory Game"),a.a.createElement("h2",{className:"lead"},"Click on all of the pictures without clicking on the same one twice."))}),p=(i(13),{The_Office:["https://vignette.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest/scale-to-width-down/350?cb=20170701082424","https://vignette.wikia.nocookie.net/theoffice/images/0/02/Michael_Scott.jpg/revision/latest/scale-to-width-down/350?cb=20170701090332","https://vignette.wikia.nocookie.net/theoffice/images/9/9a/Jim.jpg/revision/latest/scale-to-width-down/350?cb=20170701084550","https://vignette.wikia.nocookie.net/theoffice/images/6/67/Pam_Beesley.jpg/revision/latest/scale-to-width-down/2000?cb=20170701084358","https://vignette.wikia.nocookie.net/theoffice/images/b/b2/2009Kevincropped.PNG/revision/latest/scale-to-width-down/2000?cb=20170701083657","https://vignette.wikia.nocookie.net/theoffice/images/b/b5/Andy_Bernard.jpg/revision/latest/scale-to-width-down/2000?cb=20170701084205","https://vignette.wikia.nocookie.net/theoffice/images/2/2d/Ryan_Howard.jpg/revision/latest/scale-to-width-down/350?cb=20170630190335","https://vignette.wikia.nocookie.net/theoffice/images/0/0b/Angela_Martin.jpg/revision/latest/scale-to-width-down/350?cb=20170701090232","https://vignette.wikia.nocookie.net/theoffice/images/2/20/2009Creed.jpg/revision/latest/scale-to-width-down/350?cb=20170701085348","https://vignette.wikia.nocookie.net/theoffice/images/2/25/Oscar_Martinez.jpg/revision/latest?cb=20170701085818","https://vignette.wikia.nocookie.net/theoffice/images/6/69/Kelly_Kapoor.jpg/revision/latest/scale-to-width-down/350?cb=20170701090501","https://vignette.wikia.nocookie.net/theoffice/images/2/23/Stanley_Hudson.jpg/revision/latest/scale-to-width-down/350?cb=20170701085445"],Marvel:["https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423175213","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/1/13/Thor-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423174911","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/39/Scarlet_Witch_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212455","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/CapAmerica-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423175339","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/BlackWidow-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423174842","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/63/97d1d9f934a350cee765c5ac1a466605.jpg/revision/latest/scale-to-width-down/310?cb=20190527184444","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/a/a4/ProfHulkAvengersEndgamelicensingart001.jpg/revision/latest/scale-to-width-down/310?cb=20190506122658","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/08/HawkeyeRonin-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423175147","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/ea/AntMan-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423175007","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d9/Doctor_Strange_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212354","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/99/Black_Panther_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212436","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20190917181733","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/46/DS_Ancient_One_Poster_cropped.png/revision/latest/scale-to-width-down/295?cb=20161016233048","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/96/TyroneS2Info.png/revision/latest/scale-to-width-down/310?cb=20190607082757","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/Daredevil_S3_Textless_Poster03.jpg/revision/latest/scale-to-width-down/310?cb=20181018132223","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/73/TandyS2info.png/revision/latest/scale-to-width-down/310?cb=20190607082757","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f2/Drax_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212237","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/8/82/Skurgetheexecutionerprofile.png/revision/latest/scale-to-width-down/310?cb=20190522202704","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/48/Falcon_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212822","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/61/Gamora_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212221","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/6f/Groot_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20190326211501","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/8/80/Ghost_Rider_RR.jpg/revision/latest/scale-to-width-down/295?cb=20160927161605","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/Textless_AMATW_Character_Posters_03.jpg/revision/latest/scale-to-width-down/310?cb=20180731232107","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/f7/Korgas152.jpg/revision/latest/scale-to-width-down/310?cb=20190723105354","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d5/Wong_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212810","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/77/WarMachine-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423174940","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/2f/Vision_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212532","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/29/Thor_Ragnarok_Textless_Character_Posters_05.jpg/revision/latest/scale-to-width-down/310?cb=20170918170714","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/96/Star-Lord_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518211942","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/fd/Shuri_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212643","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/34/Rocket-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423175032","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/28/Qckslvr.jpg/revision/latest/scale-to-width-down/303?cb=20190630202205","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/8/8c/PunisherSeasonTwoProfilePic.jpg/revision/latest/scale-to-width-down/310?cb=20190531095948","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/56/Okoye-EndgameProfile.jpeg/revision/latest/scale-to-width-down/310?cb=20190423175120","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Nick_Fury_Textless_AoU_Poster.jpg/revision/latest/scale-to-width-down/310?cb=20161119163035","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/05/Nebula-EndgameProfile.jpg/revision/latest/scale-to-width-down/310?cb=20190423175315","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/c/c7/Mantis_AIW_Profile.jpg/revision/latest/scale-to-width-down/310?cb=20180518212335","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/7/7d/Thor_Ragnarok_Textless_Character_Posters_03.jpg/revision/latest/scale-to-width-down/310?cb=20170918170640","https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/27/Lockjaw_Prof.JPG/revision/latest/scale-to-width-down/310?cb=20170830141148"],Heads_of_State:["https://planetrulers.com/wp-content/uploads/2016/07/uk-prime-minister-boris-johnson.jpg","https://planetrulers.com/wp-content/uploads/2010/04/south-africa-president-cyril-ramaphosa.jpg","https://planetrulers.com/wp-content/uploads/2012/11/usa-president-Donald-Trump-300x186.jpg","https://planetrulers.com/wp-content/uploads/2012/05/russia-president-vladimir-putin.jpg","https://planetrulers.com/wp-content/uploads/2010/04/Finland-president-Sauli-Niinist%C3%B6-150x109.jpg","https://planetrulers.com/wp-content/uploads/2012/11/china-president-Xi-Jinping.jpg","https://planetrulers.com/wp-content/uploads/2010/04/India-Prime_Minister_Narendra_Modi-300x307.jpg","https://planetrulers.com/wp-content/uploads/2016/05/brazil-president-jair-bolsonaro-200x200.jpg","https://planetrulers.com/wp-content/uploads/2010/04/Spain-Prime-Minister-Pedro_Sanchez-200x200.jpg","https://planetrulers.com/wp-content/uploads/2017/05/France-President-Emmanuel-Macron-300x253.jpg","https://planetrulers.com/wp-content/uploads/2014/06/ukraine-president-Volodymyr-Zelenskiy-300x204.jpg","https://planetrulers.com/wp-content/uploads/2013/06/Australia-Prime-Minister-Malcolm_Turnbull-150x150.jpg","https://planetrulers.com/wp-content/uploads/2016/12/New-Zealand-Prime-Minister-Jacinda-Ardern-300x239.jpg","https://planetrulers.com/wp-content/uploads/2010/04/denmark_margrethe-150x200.jpg","https://planetrulers.com/wp-content/uploads/2012/06/iceland-president-Johannesson-300x248.jpg","https://planetrulers.com/wp-content/uploads/2014/06/egypt-president-Abdel-Fattah-al-Sisi.jpg"]}),m=(i(14),function(e){return a.a.createElement("div",{onClick:function(){e.setShuffled(!1),e.picked.includes(e.link)?(e.alreadyClicked(!0),e.setPicked([])):(e.alreadyClicked(!1),e.pushPicked(e.link))},role:"img","aria-label":"click item",className:"click-item",style:{backgroundImage:"url("+e.link+")"}})}),d=function(e){var t,i,o=Object(n.useState)([]),c=Object(s.a)(o,2),r=c[0],l=c[1],d=Object(n.useState)([]),g=Object(s.a)(d,2),v=g[0],w=g[1],h=Object(n.useState)(!1),u=Object(s.a)(h,2),k=u[0],f=u[1];function b(e){r.push(e)}return a.a.createElement("main",{className:"Marvel"===e.topic?"container-fluid clearfix pb-5 px-5 mx-5":"container clearfix pb-5"},(e.correct||(t=p,i=e.topic,void(t[i]&&(v.length=0,t[i].map((function(e){return v.push(e)}))))),k||(w(function(e){for(var t,i,n=e.length;0!==n;)i=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[i],e[i]=t;return e}(v)),f(!0)),v.map((function(t){return a.a.createElement(m,{alreadyClicked:e.clickCheck,link:t,setShuffled:f,picked:r,pushPicked:b,setPicked:l,key:t})}))))},g=(i(15),function(e){return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"bottom"},"Clicky Game!",a.a.createElement("img",{alt:"react",style:{width:"20px",height:"auto"},src:"./logo192.png"})))}),v=(i(16),function(e){var t=[];return a.a.createElement("div",{className:"container-fluid text-center"},a.a.createElement("div",{className:"btn-group"},a.a.createElement("button",{className:"btn btn-dark btn-lg dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},e.topic.replace(/_/g," ")),a.a.createElement("div",{className:"dropdown-menu"},function(){for(var i in p)t.push(i);return t.map((function(t){return console.log(t),a.a.createElement("div",{className:"dropdown-item",onClick:function(){e.setTopic(t),e.setCorrect(null)},href:"#",key:t},t.replace(/_/g," "))}))}(e.topic))))}),w=(i(17),function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),i=t[0],o=t[1],c=Object(n.useState)(0),p=Object(s.a)(c,2),m=p[0],w=p[1],h=Object(n.useState)(null),u=Object(s.a)(h,2),k=u[0],f=u[1],b=Object(n.useState)("The_Office"),j=Object(s.a)(b,2),_=j[0],P=j[1];function E(){m<i&&w(i)}return a.a.createElement("div",null,a.a.createElement(r,{correct:k,score:i,topScore:m}),a.a.createElement(l,null),a.a.createElement(v,{topic:_,setTopic:P,setCorrect:f}),a.a.createElement(d,{topic:_,clickCheck:function(e){!0===e?(f(!1),E(),o(0)):(f(!0),o(i+1),E())},correct:k}),a.a.createElement(g,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.f96aa5a5.chunk.js.map