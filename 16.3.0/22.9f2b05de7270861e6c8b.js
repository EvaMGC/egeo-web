(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Qo3Y:function(e,n,o){"use strict";o.r(n);var t=o("CcnG"),i=o("Ip0R"),r=o("dIas"),p=function(e,n,o,t){var i,r=arguments.length,p=r<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,n,o,t);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(p=(r<3?i(p):r>3?i(n,o,p):i(n,o))||p);return r>3&&p&&Object.defineProperty(n,o,p),p},s=function(){function e(){this.configDoc={html:"demo/st-pop-over-demo/st-pop-over-demo.component.html",ts:"demo/st-pop-over-demo/st-pop-over-demo.component.ts",component:"lib/st-pop-over/st-pop-over.component.ts"},this.title="Notifications",this.hidden=!1,this.content="No notifications yet"}return e.prototype.onClick=function(){this.hidden=!this.hidden},e=p([Object(t.Component)({selector:"st-pop-over-demo",template:o("cwj0"),styles:[o("qCAM")]})],e)}();o.d(n,"StPopOverDemoModule",function(){return a});var c=function(e,n,o,t){var i,r=arguments.length,p=r<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,n,o,t);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(p=(r<3?i(p):r>3?i(n,o,p):i(n,o))||p);return r>3&&p&&Object.defineProperty(n,o,p),p},a=function(){function e(){}return e=c([Object(t.NgModule)({imports:[i.CommonModule,r.L,r.j.withComponents({components:[s]}),r.k],declarations:[s],providers:[]})],e)}()},cwj0:function(e,n){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n<st-docs [htmlFile]="configDoc.html" [tsFile]="configDoc.ts" [componentFile]="configDoc.component">\n   <section class="container-liquid">\n      <div class="pop-over-demo-container">\n         <div class="pop-over-demo-items">\n            <st-pop-over class="pop-over-demo-component" qaTag="pop-over-demo" [title]="title" [hidden]="hidden" [offset]="{x: 0, y:0}"\n                [showSettingBtn]="true">\n\n               <button pop-over-button class="pop-over-demo-button button button-primary" (click)="onClick()">\n                  <span>Pop Over</span>\n               </button>\n\n               <div pop-over-content class="pop-over-demo-content">\n                  <span>{{content}}</span>\n               </div>\n            </st-pop-over>\n         </div>\n      </div>\n   </section>\n</st-docs>\n'},qCAM:function(e,n){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.pop-over-demo-container {\n  width: 800px;\n  height: 300px;\n  background-color: #f1f1f1;\n  padding: 20px; }\n.pop-over-demo-items {\n  float: right; }\n.pop-over-demo-button {\n  float: inherit; }\n.pop-over-demo-content {\n  padding: 30px;\n  display: flex;\n  flex-wrap: nowrap;\n  white-space: nowrap; }\n.pop-over-demo-componet {\n  position: relative;\n  right: 42px;\n  top: 10px; }\n'}}]);