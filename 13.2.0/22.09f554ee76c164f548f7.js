(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Qo3Y:function(e,n,t){"use strict";t.r(n);var o=t("CcnG"),r=t("Ip0R"),i=t("dIas"),p=function(e,n,t,o){var r,i=arguments.length,p=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,n,t,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(p=(i<3?r(p):i>3?r(n,t,p):r(n,t))||p);return i>3&&p&&Object.defineProperty(n,t,p),p},s=function(){function e(){this.title="Notifications",this.hidden=!1,this.content="No notifications yet"}return e.prototype.onClick=function(){this.hidden=!this.hidden},e=p([Object(o.Component)({selector:"st-pop-over-demo",template:t("cwj0"),styles:[t("qCAM")]})],e)}();t.d(n,"StPopOverDemoModule",function(){return a});var c=function(e,n,t,o){var r,i=arguments.length,p=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(e,n,t,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(p=(i<3?r(p):i>3?r(n,t,p):r(n,t))||p);return i>3&&p&&Object.defineProperty(n,t,p),p},a=function(){function e(){}return e=c([Object(o.NgModule)({imports:[r.b,i.I,i.i.withComponents({components:[s]})],declarations:[s],providers:[]})],e)}()},cwj0:function(e,n){e.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n<section class="container-liquid">\r\n   <div class="pop-over-demo-container">\r\n      <div class="pop-over-demo-items">\r\n         <st-pop-over class="pop-over-demo-component" qaTag="pop-over-demo" [title]="title" [hidden]="hidden"\r\n                      [offset]="{x: 0, y:0}" [showSettingBtn]="true">\r\n\r\n         <button pop-over-button class="pop-over-demo-button button button-primary" (click)="onClick()">\r\n            <span>Pop Over</span>\r\n         </button>\r\n\r\n            <div pop-over-content class="pop-over-demo-content">\r\n               <span>{{content}}</span>\r\n            </div>\r\n         </st-pop-over>\r\n      </div>\r\n   </div>\r\n</section>\r\n'},qCAM:function(e,n){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\n.pop-over-demo-container {\n  width: 800px;\n  height: 300px;\n  background-color: #f1f1f1;\n  padding: 20px; }\n.pop-over-demo-items {\n  float: right; }\n.pop-over-demo-button {\n  float: inherit; }\n.pop-over-demo-content {\n  padding: 30px;\n  display: flex;\n  flex-wrap: nowrap;\n  white-space: nowrap; }\n.pop-over-demo-componet {\n  position: relative;\n  right: 42px;\n  top: 10px; }\n'}}]);