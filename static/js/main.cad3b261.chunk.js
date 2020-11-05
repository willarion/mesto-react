(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),l=a.n(n),c=a(4),i=a.n(c),o=(a(12),a(2)),r=a.p+"static/media/logo.c2821b38.svg";var d=function(){return Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("div",{className:"header__logo",style:{backgroundImage:"url(".concat(r,")")}})})},m=a(5),j=a(6),u=new(function(){function e(t){Object(m.a)(this,e),this._baseUrl=t.baseUrl,this._authorization=t.headers.authorization,this._contentType=t.headers["Content-Type"]}return Object(j.a)(e,[{key:"_handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._authorization}}).then(this._handleOriginalResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._authorization}}).then(this._handleOriginalResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"fd3bf28b-131d-4028-93e3-e0966938f828","Content-Type":"application/json"}});var _=function(e){return Object(s.jsx)("li",{className:"card-element",children:Object(s.jsxs)("div",{className:"element",children:[Object(s.jsx)("button",{type:"button",className:"element__delete-btn"}),Object(s.jsx)("img",{src:e.card.link,alt:e.card.name,className:"element__image",onClick:function(){e.onCardClick(e.card)}}),Object(s.jsxs)("div",{className:"element__caption",children:[Object(s.jsxs)("p",{className:"element__text",children:[e.card.name," "]}),Object(s.jsxs)("div",{className:"element__like-display",children:[Object(s.jsx)("button",{type:"submit",className:"element__like"}),Object(s.jsx)("p",{className:"element__like-counter",children:e.card.likes.length})]})]})]})})};var b=function(e){var t=l.a.useState(""),a=Object(o.a)(t,2),n=a[0],c=a[1],i=l.a.useState(""),r=Object(o.a)(i,2),d=r[0],m=r[1],j=l.a.useState(""),b=Object(o.a)(j,2),p=b[0],h=b[1];l.a.useEffect((function(){u.getUserInfo().then((function(e){c(e.name),m(e.about),h(e.avatar)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]);var O=l.a.useState([]),x=Object(o.a)(O,2),f=x[0],N=x[1];return l.a.useEffect((function(){u.getInitialCards().then((function(e){N(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),Object(s.jsxs)("main",{children:[Object(s.jsxs)("section",{className:"profile",children:[Object(s.jsxs)("div",{className:"profile__description",children:[Object(s.jsxs)("button",{className:"profile__edit-avatar-btn",onClick:e.onEditAvatar,children:[Object(s.jsx)("div",{className:"profile__edit-btn-overlay"}),Object(s.jsx)("img",{src:p,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"})]}),Object(s.jsxs)("div",{className:"profile__info",children:[Object(s.jsx)("h1",{className:"profile__name",children:n}),Object(s.jsx)("p",{className:"profile__bio",children:d}),Object(s.jsx)("button",{type:"button",className:"profile__edit-btn",onClick:e.onEditProfile})]})]}),Object(s.jsx)("button",{type:"button",className:"profile__add-btn",onClick:e.onAddPlace})]}),Object(s.jsx)("section",{className:"elements",children:Object(s.jsx)("ul",{className:"elements__list",children:f.map((function(t){return Object(s.jsx)(_,{card:t,onCardClick:e.onCardClick},t._id)}))})})]})};var p=function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})};var h=function(e){return Object(s.jsx)("div",{className:e.isOpen?"modal_visible modal modal_".concat(e.modalName):"modal modal_".concat(e.modalName),children:Object(s.jsxs)("form",{action:"#",className:"modal__container modal__".concat(e.formName),noValidate:!0,children:[Object(s.jsx)("button",{type:"reset",className:"modal__reset-btn",onClick:e.onClose}),Object(s.jsxs)("fieldset",{className:"modal__info-input",children:[Object(s.jsx)("legend",{className:"modal__title",children:e.title}),e.children]}),Object(s.jsx)("input",{type:"submit",className:"modal__save-btn",value:e.buttonValue,disabled:!0})]})})};var O=function(e){return console.log(e),Object(s.jsx)("div",{className:e.isOpen?"modal_visible modal modal_type_big-image":"modal modal_type_big-image",children:Object(s.jsxs)("figure",{className:"modal__figure",children:[Object(s.jsx)("button",{type:"reset",className:"modal__reset-btn",onClick:e.onClose}),Object(s.jsx)("img",{src:e.card.link,alt:e.card.name,className:"modal__image"}),Object(s.jsx)("figcaption",{className:"modal__caption",children:e.card.name})]})})};var x=function(){return Object(s.jsx)("div",{className:"modal modal_type_delete-confirm",children:Object(s.jsxs)("div",{className:"modal__container modal__container_size_xs",children:[Object(s.jsx)("button",{type:"reset",className:"modal__reset-btn"}),Object(s.jsx)("p",{className:"modal__title",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(s.jsx)("input",{type:"submit",className:"modal__save-btn modal__save-btn_size_xs",value:"\u0414\u0430"})]})})};var f=function(){var e=l.a.useState(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],c=l.a.useState(!1),i=Object(o.a)(c,2),r=i[0],m=i[1],j=l.a.useState(!1),u=Object(o.a)(j,2),_=u[0],f=u[1],N={link:"#",name:""},v=l.a.useState(N),g=Object(o.a)(v,2),y=g[0],k=g[1],C=l.a.useState(!1),S=Object(o.a)(C,2),z=S[0],E=S[1];function U(){n(!1),m(!1),f(!1),k(N),E(!1)}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"page",children:[Object(s.jsx)(d,{}),Object(s.jsx)(b,{onEditProfile:function(){n(!0)},onEditAvatar:function(){m(!0)},onAddPlace:function(){f(!0)},onCardClick:function(e){k(e),E(!0)}}),Object(s.jsx)(p,{})]}),Object(s.jsxs)(h,{modalName:"type_edit-profile",formName:"edit-profile-form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonValue:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:U,children:[Object(s.jsxs)("label",{className:"modal__input-field",children:[Object(s.jsx)("input",{type:"text",name:"name",placeholder:"\u0418\u043c\u044f",className:"modal__name modal__input-line",id:"input-name",required:!0,minLength:"2",maxLength:"40"}),Object(s.jsx)("span",{className:"modal__error",id:"input-name-error"})]}),Object(s.jsxs)("label",{className:"modal__input-field",children:[Object(s.jsx)("input",{type:"text",name:"about",placeholder:"\u041e \u0432\u0430\u0441",className:"modal__bio modal__input-line",id:"input-bio",required:!0,minLength:"2",maxLength:"200"}),Object(s.jsx)("span",{className:"modal__error",id:"input-bio-error"})]})]}),Object(s.jsx)(h,{modalName:"type_edit-avatar",formName:"edit-avatar-form",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonValue:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:r,children:Object(s.jsxs)("label",{className:"modal__input-field",children:[Object(s.jsx)("input",{type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"modal__avatar-url modal__input-line",id:"input-avatar-url",required:!0}),Object(s.jsx)("span",{className:"modal__error",id:"input-avatar-url-error"})]})}),Object(s.jsxs)(h,{modalName:"type_add-card",formName:"add-card-form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonValue:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:_,children:[Object(s.jsxs)("label",{className:"modal__input-field",children:[Object(s.jsx)("input",{type:"text",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"modal__place-title modal__input-line",id:"input-place-title",required:!0,minLength:"1",maxLength:"30"}),Object(s.jsx)("span",{className:"modal__error",id:"input-place-title-error"})]}),Object(s.jsxs)("label",{className:"modal__input-field",children:[Object(s.jsx)("input",{type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"modal__image-url modal__input-line",id:"input-image-url",required:!0}),Object(s.jsx)("span",{className:"modal__error",id:"input-image-url-error"})]})]}),Object(s.jsx)(O,{card:y,isOpen:z,onClose:U}),Object(s.jsx)(x,{})]})};i.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.cad3b261.chunk.js.map