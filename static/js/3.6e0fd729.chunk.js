(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{100:function(t,e,n){t.exports={postItem__container:"PostItem_postItem__container__PeBAJ"}},101:function(t,e,n){t.exports={postAdd__wrapper:"InputPost_postAdd__wrapper__13G3J",postAdd__text:"InputPost_postAdd__text__i47-K",postAdd__btn:"InputPost_postAdd__btn__3zXyU"}},102:function(t,e,n){t.exports={inner:"Posts_inner__2hSBE"}},103:function(t,e,n){t.exports={profileInfo:"ProfileInfo_profileInfo__29DM-",profileInfo__avatar:"ProfileInfo_profileInfo__avatar__3MB6y"}},104:function(t,e,n){t.exports={container:"ProfileStatus_container__d3u0E",input:"ProfileStatus_input__ao5I7",text:"ProfileStatus_text__1uYU5"}},105:function(t,e,n){t.exports={inner:"Profile_inner__3cfjG"}},107:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n(3),r=n(11),i=n(27),o=n(100),c=n.n(o),u=n(1),l=function(t){var e=t.text,n=t.likes;return Object(u.jsxs)("div",{className:c.a.postItem__container,children:[Object(u.jsx)(i.a,{}),Object(u.jsx)("div",{likes:n,children:e})]})},p=n(39),d=n(101),f=n.n(d),j=n(95),_=function(t){var e=t.addPost;return Object(u.jsx)("div",{className:f.a.postAdd__wrapper,children:Object(u.jsx)(j.a,{onSubmitClick:function(t){e(t.newPostBody)},name:"newPostBody",btntext:"Create Post",placeholder:"type..."})})},b=Object(r.b)((function(t){return{newPostText:t.profile.newPostText}}),(function(t){return{addPost:function(e){t(Object(p.a)(e))}}}))(_),x=n(102),h=n.n(x),O=Object(r.b)((function(t){return{postsData:t.profile.postsData}}))((function(t){var e=t.postsData;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)("div",{className:h.a.inner,children:e.map((function(t){return Object(u.jsx)(l,{likes:t.likes,text:t.text},t.id)}))})]})})),m=n(103),v=n.n(m),g=n(23),P=n(16),I=n(104),S=n.n(I),w=function(t){var e=t.status,n=t.updateStatus,a=Object(s.useState)(!1),r=Object(P.a)(a,2),i=r[0],o=r[1],c=Object(s.useState)(e),l=Object(P.a)(c,2),p=l[0],d=l[1];Object(s.useEffect)((function(){d(e)}),[e]);return Object(u.jsx)("div",{className:S.a.container,children:i?Object(u.jsx)("div",{children:Object(u.jsx)("input",{autoFocus:!0,className:S.a.input,onChange:function(t){d(t.target.value)},onFocus:function(t){return t.target.select()},onBlur:function(t){return o(!1),void n(p)},value:p})}):Object(u.jsx)("div",{children:Object(u.jsx)("span",{className:S.a.text,onClick:function(){o(!0)},children:e||"Click andy type status..."})})})},B=function(t){var e=t.profile,n=t.status,s=t.updateStatus,a=t.isOwner,r=t.savePhoto;if(!e)return Object(u.jsx)(g.a,{});return Object(u.jsxs)("div",{className:v.a.profileInfo,children:[Object(u.jsxs)("div",{className:v.a.profileInfo__avatar,children:[Object(u.jsx)(i.a,{avatar:e.photos.large}),Object(u.jsx)(w,{status:n,updateStatus:s})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:e.fullName}),Object(u.jsx)("div",{children:e.aboutMe}),Object(u.jsx)("div",{children:e.contacts.facebook}),a&&Object(u.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&r(t.target.files[0])}})]})]})},N=n(105),y=n.n(N),k=function(t){var e=t.profile,n=t.status,s=t.updateStatus,a=t.isOwner,r=t.savePhoto;return Object(u.jsxs)("div",{className:y.a.inner,children:[Object(u.jsx)(B,{profile:e,status:n,updateStatus:s,isOwner:a,savePhoto:r}),Object(u.jsx)(O,{})]})},A=n(38),C=n(18);e.default=Object(C.c)(Object(r.b)((function(t){return{profile:t.profile.profile,status:t.profile.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:p.c,getStatus:p.d,updateStatus:p.f,savePhoto:p.e}),A.a)((function(t){var e=t.profile,n=t.status,r=t.getProfile,i=t.getStatus,o=t.updateStatus,c=t.authorizedUserId,l=t.savePhoto,p=Object(a.h)().id,d=!1;return p||(p=c,d=!0),Object(s.useEffect)((function(){r(p),i(p)}),[p]),Object(u.jsx)(k,{profile:e,status:n,updateStatus:o,isOwner:d,savePhoto:l})}))},94:function(t,e,n){t.exports={wrapper:"TextInputBase_wrapper__1WfeH",container:"TextInputBase_container__2BQBx",input:"TextInputBase_input__1M1i9",btn:"TextInputBase_btn__2YInT"}},95:function(t,e,n){"use strict";n(0);var s=n(20),a=function(t){var e={};return t.message?t.message.length>300&&(e.message="Max message siaze is about ".concat(300," symbols")):e.message="Type a message!",e},r=n(94),i=n.n(r),o=n(1);e.a=function(t){var e=t.btntext,n=t.placeholder,r=t.onSubmitClick;return Object(o.jsx)("div",{className:i.a.wrapper,children:Object(o.jsx)(s.c,{initialValues:{message:""},validate:a,onSubmit:function(t,e){var n=e.setSubmitting,s=e.resetForm;r(t),n(!1),s()},children:function(t){var a=t.values,r=t.errors,c=t.touched,u=t.handleChange,l=t.handleBlur,p=t.isSubmitting;return Object(o.jsxs)(s.b,{className:i.a.container,children:[Object(o.jsx)(s.a,{className:i.a.input,name:"message",component:"textarea",placeholder:n,value:a.message,onChange:u,onBlur:l}),r.message&&c.message&&r.message,Object(o.jsx)("button",{className:i.a.btn,type:"submit",disabled:p,children:e})]})}})})}}}]);
//# sourceMappingURL=3.6e0fd729.chunk.js.map