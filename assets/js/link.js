!function(r){"use strict";function n(t,e){var n=this;wp&&wp.template&&wpLink&&(n.$el=t,n.options=e,n.$elements=n.$el.find(n.options.elements),n.length=n.$elements.find(n.options.item).length,n.$addbutton=n.$el.find(n.options.addbutton),n.$submitbox=n.$addbutton.parent(),n.$addbutton.on("click",r.proxy(n.add_block,n)),n.$elements.find(n.options.editbutton).on("click",r.proxy(n.edit_block,n)),n.$elements.find(n.options.removebutton).on("click",r.proxy(n.remove_block,n)),n.update_buttons())}n.prototype.$addbutton=null,n.prototype.$el=null,n.prototype.$elements=null,n.prototype.length=0,n.prototype.options=null,n.prototype.$submitbox=null,n.prototype.add_block=function(t){t.preventDefault();var e=this;r(t.target||t.currentTarget);e.length++;var n=wp.template(e.options.source),o=r(n({id:e.length}));o.find(e.options.editbutton).on("click",r.proxy(e.edit_block,e)),o.find(e.options.removebutton).on("click",r.proxy(e.remove_block,e)),e.$elements.append(o),e.update_buttons()},n.prototype.edit_block=function(t){t.preventDefault();var e=this,n=r(t.target||t.currentTarget).closest(e.options.item),o=n.attr("data-u"),i=n.find("#"+o+"-url"),l=n.find("#"+o+"-label"),p=n.find("#"+o+"-target");wpLink.open(o+"-url","",""),r("#wp-link-url").val(i.val()),r("#wp-link-text").val(l.val()),r("#wp-link-target").prop("checked","_blank"===p.val()),wpLink.htmlUpdate=function(){e.update_inputs(n,r("#wp-link-url").val(),r("#wp-link-text").val(),r("#wp-link-target").prop("checked")?"_blank":"_self"),wpLink.close()}},n.prototype.remove_block=function(t){t.preventDefault();var e=this,n=r(t.target||t.currentTarget).closest(e.options.item);n.css("background",e.options.color),n.animate({opacity:"0"},"slow",function(){n.remove(),e.update_buttons()})},n.prototype.update_buttons=function(){var t=this;1<=t.length&&!t.options.multiple&&t.$submitbox.hide(),t.length&&!t.options.multiple||t.$submitbox.show()},n.prototype.update_inputs=function(t,e,n,o){var i=this,l=t.attr("data-u");t.find("#"+l+"-url").val(e),t.find("#"+l+"-label").val(n),t.find("#"+l+"-target").val(o),t.find(i.options.linklabel).text(n),t.find(i.options.linkurl).attr("href",e),t.find(i.options.linkurl).attr("target","_blank"),t.find(i.options.linkurl).text(e)};var e={init:function(t){if(!this.length)return!1;var e={color:"#ffaaaa",elements:".links-elements",item:"fieldset",multiple:!1,addbutton:".add-button",editbutton:".edit-button",removebutton:".remove-button",linkurl:".link-url",linklabel:".link-label",source:"template-id"};return this.each(function(){t&&r.extend(e,t),new n(r(this),e)})},update:function(){},destroy:function(){}};r.fn.dionysosLink=function(t){return e[t]?e[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(r.error("Method "+t+" does not exist on dionysosLink"),!1):e.init.apply(this,arguments)}}(window.jQuery);