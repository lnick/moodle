YUI.add("moodle-atto_accessibilitychecker-button",function(e,t){var n="atto_accessibilitychecker";e.namespace("M.atto_accessibilitychecker").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){this.addButton({icon:"e/accessibility_checker",callback:this._displayDialogue})},_displayDialogue:function(){var e=this.getDialogue({headerContent:M.util.get_string("pluginname",n),width:"500px",focusAfterHide:!0});e.set("bodyContent",this._getDialogueContent()).show()},_getDialogueContent:function(){var t=e.Node.create('<div style="word-wrap: break-word;"></div>');return t.append(this._getWarnings()),t.delegate("click",function(e){e.preventDefault();var t=this.get("host"),n=e.currentTarget.getData("sourceNode"),r=this.getDialogue();n?(r.set("focusAfterHide",this.editor).hide(),t.setSelection(t.getSelectionFromNode(n))):r.hide()},"a",this),t},_getWarnings:function(){var t,r=e.Node.create("<div></div>");return t=[],this.editor.all("img").each(function(e){alt=e.getAttribute("alt"),(typeof alt=="undefined"||alt==="")&&e.getAttribute("role")!=="presentation"&&t.push(e)},this),this._addWarnings(r,M.util.get_string("imagesmissingalt",n),t,!0),t=[],this.editor.all("*").each(function(n){var r,i,s,o,u;if(e.Lang.trim(n.get("text"))!==""){r=n.getComputedStyle("color"),i=n.getComputedStyle("backgroundColor"),o=this._getLuminanceFromCssColor(r),u=this._getLuminanceFromCssColor(i),o>u?s=(o+.05)/(u+.05):s=(u+.05)/(o+.05);if(s<=4.5){var a=0,f=!1;for(a=0;a<t.length;a++){if(n.ancestors("*").indexOf(t[a])!==-1){f=!0;break}if(t[a].ancestors("*").indexOf(n)!==-1){t[a]=n,f=!0;break}}f||t.push(n)}}},this),this._addWarnings(r,M.util.get_string("needsmorecontrast",n),t,!1),r.hasChildNodes()||r.append("<p>"+M.util.get_string("nowarnings",n)+"</p>"),r},_addWarnings:function(t,n,r,i){var s,o,u,a,f,l,c;if(r.length>0){s=e.Node.create("<p>"+n+"</p>"),o=e.Node.create('<ol class="accessibilitywarnings"></ol>'),u=0;for(u=0;u<r.length;u++)l=e.Node.create("<li></li>"),i?(a=r[u].getAttribute("src"),c=e.Node.create('<a href="#"><img src="'+a+'" /> '+a+"</a>")):(f="innerText"in r[u]?"innerText":"textContent",c=e.Node.create('<a href="#">'+r[u].get(f)+"</a>")),c.setData("sourceNode",r[u]),l.append(c),o.append(l);s.append(o),t.append(s)}},_getLuminanceFromCssColor:function(t){var n;t==="transparent"&&(t="#ffffff"),n=e.Color.toArray(e.Color.toRGB(t));var r=function(e){return e=parseInt(e,10)/255,e<=.03928?e/=12.92:e=Math.pow((e+.055)/1.055,2.4),e},i=r(n[0]),s=r(n[1]),o=r(n[2]);return.2126*i+.7152*s+.0722*o}})},"@VERSION@",{requires:["color-base","moodle-editor_atto-plugin"]});