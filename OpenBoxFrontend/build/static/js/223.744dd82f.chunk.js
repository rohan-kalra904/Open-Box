"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[223],{67223:function(t,r,e){e.r(r),e.d(r,{Token:function(){return l}});var n=e(74165),a=e(15861),c=e(15671),u=e(43144),s=e(97326),i=e(60136),o=e(92572),p=e(2750),f=e(56126),h=e(68624),l=(e(80518),e(25025),e(70332),e(8455),e(26219),e(68834),e(65660),e(61303),e(71497),e(49242),e(94317),e(13670),e(79120),e(97604),e(8187),e(19362),e(59190),e(54730),e(36250),e(85725),e(38730),e(48507),e(38398),e(2090),e(86841),e(49561),e(80580),e(40246),e(54253),e(91559),e(40553),e(26),e(69392),e(29526),e(24601),e(46878),e(27761),e(20583),e(92355),e(84194),e(51121),e(58613),e(32484),e(78435),e(84255),e(98528),e(62555),e(82037),e(77437),e(59189),e(20737),e(78262),e(34161),e(50266),e(98839),e(51375),e(43320),e(65815),e(52378),e(55173),e(18281),e(31583),function(t){(0,i.Z)(e,t);var r=(0,o.Z)(e);function e(t,n,a){var u;(0,c.Z)(this,e);var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new f.cE(t,n,o,i);return u=r.call(this,l,a,h),(0,p._)((0,s.Z)(u),"abi",void 0),(0,p._)((0,s.Z)(u),"metadata",void 0),(0,p._)((0,s.Z)(u),"roles",void 0),(0,p._)((0,s.Z)(u),"encoder",void 0),(0,p._)((0,s.Z)(u),"estimator",void 0),(0,p._)((0,s.Z)(u),"history",void 0),(0,p._)((0,s.Z)(u),"events",void 0),(0,p._)((0,s.Z)(u),"platformFees",void 0),(0,p._)((0,s.Z)(u),"sales",void 0),(0,p._)((0,s.Z)(u),"signature",void 0),(0,p._)((0,s.Z)(u),"interceptor",void 0),u.abi=o,u.metadata=new f.aj(u.contractWrapper,f.cY,u.storage),u.roles=new f.ak(u.contractWrapper,e.contractRoles),u.sales=new f.am(u.contractWrapper),u.events=new f.aU(u.contractWrapper),u.history=new f.au(u.contractWrapper,u.events),u.encoder=new f.ai(u.contractWrapper),u.estimator=new f.aT(u.contractWrapper),u.platformFees=new f.aW(u.contractWrapper),u.interceptor=new f.aV(u.contractWrapper),u.signature=new f.av(u.contractWrapper,u.roles),u}return(0,u.Z)(e,[{key:"getVoteBalance",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.contractWrapper.getSignerAddress();case 3:return t.t1=t.sent,t.next=6,t.t0.getVoteBalanceOf.call(t.t0,t.t1);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getVoteBalanceOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this.erc20,t.next=3,this.contractWrapper.readContract.getVotes(r);case 3:return t.t1=t.sent,t.next=6,t.t0.getValue.call(t.t0,t.t1);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"getDelegation",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this,t.next=3,this.contractWrapper.getSignerAddress();case 3:return t.t1=t.sent,t.next=6,t.t0.getDelegationOf.call(t.t0,t.t1);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getDelegationOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.delegates(r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.hasRole((0,f.bx)("transfer"),h.d);case 2:return r=t.sent,t.abrupt("return",!r);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"mint",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc20.mint(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"mintTo",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc20.mintTo(r,e));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"mintBatchTo",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc20.mintBatchTo(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"delegateTo",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.sendTransaction("delegate",[r]);case 2:return t.t0=t.sent,t.abrupt("return",{receipt:t.t0});case 4:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"burn",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc20.burn(r));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"burnFrom",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r,e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc20.burnFrom(r,e));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(r){var e,a,c,u,s=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=s.length,c=new Array(a>1?a-1:0),u=1;u<a;u++)c[u-1]=s[u];return t.abrupt("return",(e=this.contractWrapper).call.apply(e,[r].concat(c)));case 2:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()}]),e}(f.ax));(0,p._)(l,"contractRoles",["admin","minter","transfer"])}}]);
//# sourceMappingURL=223.744dd82f.chunk.js.map