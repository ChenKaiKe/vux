!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxCell=t():e.vuxCell=t()}(this,function(){return function(e){function t(s){if(o[s])return o[s].exports;var n=o[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(6)},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(7),i=s(n);t["default"]={components:{InlineDesc:i["default"]},props:{title:{type:String},value:{type:String},isLink:{type:Boolean,"default":!1},inlineDesc:{type:String},primary:{type:String,"default":"title"}}}},function(e,t){},function(e,t){},function(e,t){e.exports="<div class=weui_cell> <div class=weui_cell_hd> <slot name=icon></slot> </div> <div class=weui_cell_bd :class=\"{'weui_cell_primary':primary==='title'}\"> <p> {{title}} <slot name=after-title></slot> </p> <inline-desc>{{inlineDesc}}</inline-desc> </div> <div class=weui_cell_ft :class=\"{'weui_cell_primary':primary==='content', 'with_arrow': isLink}\"> {{{value}}} <slot name=value></slot> </div> </div>"},function(e,t){e.exports="<span class=label_desc><slot></slot></span>"},function(e,t,o){var s,n;o(2),s=o(1),n=o(4),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,o){var s,n;o(3),n=o(5),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}])});