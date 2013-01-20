Ext.data.JsonP.Layer({"tagname":"class","name":"Layer","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Layer","members":{"cfg":[],"property":[{"name":"canvas","tagname":"property","owner":"Layer","meta":{"readonly":true},"id":"property-canvas"},{"name":"context","tagname":"property","owner":"Layer","meta":{"readonly":true},"id":"property-context"},{"name":"height","tagname":"property","owner":"Layer","meta":{"readonly":true},"id":"property-height"},{"name":"opacity","tagname":"property","owner":"Layer","meta":{},"id":"property-opacity"},{"name":"parallax","tagname":"property","owner":"Layer","meta":{},"id":"property-parallax"},{"name":"relative","tagname":"property","owner":"Layer","meta":{},"id":"property-relative"},{"name":"width","tagname":"property","owner":"Layer","meta":{"readonly":true},"id":"property-width"},{"name":"x","tagname":"property","owner":"Layer","meta":{},"id":"property-x"},{"name":"xOffset","tagname":"property","owner":"Layer","meta":{},"id":"property-xOffset"},{"name":"y","tagname":"property","owner":"Layer","meta":{},"id":"property-y"},{"name":"yOffset","tagname":"property","owner":"Layer","meta":{},"id":"property-yOffset"}],"method":[{"name":"clear","tagname":"method","owner":"Layer","meta":{"chainable":true},"id":"method-clear"},{"name":"draw","tagname":"method","owner":"Layer","meta":{"chainable":true},"id":"method-draw"},{"name":"scroll","tagname":"method","owner":"Layer","meta":{"chainable":true},"id":"method-scroll"},{"name":"showCanvasOverlay","tagname":"method","owner":"Layer","meta":{},"id":"method-showCanvasOverlay"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1137,"files":[{"filename":"actors.js","href":"actors.html#Layer"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/actors.html#Layer' target='_blank'>actors.js</a></div></pre><div class='doc-contents'><p>The Layer object (basically a new, utility canvas).</p>\n\n<p>Layers allow efficient rendering of complex scenes by acting as caches for\nparts of the scene that are grouped together. For example, it is recommended\nto create a Layer for your canvas's background so that you can render the\nbackground once and then draw the completely rendered background onto the\nmain canvas in each frame instead of re-computing the background for each\nframe. This can significantly speed up animation.</p>\n\n<p>In general you should create a layer for any significant grouping of items\nif that grouping moves together when animated. It is more memory-efficient\nto specify a smaller layer size if possible; otherwise the layer will\ndefault to the size of the whole canvas.</p>\n\n<p>Draw onto a Layer by using its \"context\" property, which is a\n<a href=\"#!/api/CanvasRenderingContext2D\" rel=\"CanvasRenderingContext2D\" class=\"docClass\">canvas graphics context</a>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-canvas' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-canvas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-canvas' class='name not-expandable'>canvas</a><span> : HTMLElement</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The canvas backing the Layer.</p>\n</div><div class='long'><p>The canvas backing the Layer.</p>\n</div></div></div><div id='property-context' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-context' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-context' class='name expandable'>context</a><span> : <a href=\"#!/api/CanvasRenderingContext2D\" rel=\"CanvasRenderingContext2D\" class=\"docClass\">CanvasRenderingContext2D</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>The Layer's graphics context. ...</div><div class='long'><p>The Layer's graphics context. Use this to draw onto the Layer.</p>\n</div></div></div><div id='property-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-height' class='name not-expandable'>height</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The height of the Layer.</p>\n</div><div class='long'><p>The height of the Layer.</p>\n</div></div></div><div id='property-opacity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-opacity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-opacity' class='name expandable'>opacity</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>A fractional percentage [0, 1] indicating the opacity of the Layer. ...</div><div class='long'><p>A fractional percentage [0, 1] indicating the opacity of the Layer.\n  0 (zero) means fully transparent; 1 means fully opaque. This value is\n  applied when <a href=\"#!/api/Layer-method-draw\" rel=\"Layer-method-draw\" class=\"docClass\">drawing</a> the layer.</p>\n</div></div></div><div id='property-parallax' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-parallax' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-parallax' class='name not-expandable'>parallax</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>A fractional percentage indicating how much to\n  <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scroll</a> the Layer relative to the viewport's\n  movement.</p>\n</div><div class='long'><p>A fractional percentage indicating how much to\n  <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scroll</a> the Layer relative to the viewport's\n  movement.</p>\n</div></div></div><div id='property-relative' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-relative' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-relative' class='name not-expandable'>relative</a><span> : \"world\"/\"canvas\"</span></div><div class='description'><div class='short'><p>What to draw the Layer relative to.</p>\n</div><div class='long'><p>What to draw the Layer relative to.</p>\n</div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-width' class='name not-expandable'>width</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The width of the Layer.</p>\n</div><div class='long'><p>The width of the Layer.</p>\n</div></div></div><div id='property-x' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-x' class='name not-expandable'>x</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The x-coordinate on the <a href=\"#!/api/global-property-canvas\" rel=\"global-property-canvas\" class=\"docClass\">global canvas</a> of the\n  upper-left corner of the Layer.</p>\n</div><div class='long'><p>The x-coordinate on the <a href=\"#!/api/global-property-canvas\" rel=\"global-property-canvas\" class=\"docClass\">global canvas</a> of the\n  upper-left corner of the Layer.</p>\n</div></div></div><div id='property-xOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-xOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-xOffset' class='name not-expandable'>xOffset</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The horizontal distance in pixels that the Layer has\n  <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scrolled</a>.</p>\n</div><div class='long'><p>The horizontal distance in pixels that the Layer has\n  <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scrolled</a>.</p>\n</div></div></div><div id='property-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-y' class='name not-expandable'>y</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The y-coordinate on the <a href=\"#!/api/global-property-canvas\" rel=\"global-property-canvas\" class=\"docClass\">global canvas</a> of the\n  upper-left corner of the Layer.</p>\n</div><div class='long'><p>The y-coordinate on the <a href=\"#!/api/global-property-canvas\" rel=\"global-property-canvas\" class=\"docClass\">global canvas</a> of the\n  upper-left corner of the Layer.</p>\n</div></div></div><div id='property-yOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-property-yOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-property-yOffset' class='name not-expandable'>yOffset</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The vertical distance in pixels that the Layer has\n  <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scrolled</a>.</p>\n</div><div class='long'><p>The vertical distance in pixels that the Layer has\n  <a href=\"#!/api/Layer-method-scroll\" rel=\"Layer-method-scroll\" class=\"docClass\">scrolled</a>.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-method-clear' class='name expandable'>clear</a>( <span class='pre'>[fillStyle]</span> ) : <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Clear the layer, optionally by filling it with a given style. ...</div><div class='long'><p>Clear the layer, optionally by filling it with a given style.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fillStyle</span> : Mixed (optional)<div class='sub-desc'><p>A canvas graphics context fill style. If not passed, the Layer will\n  simply be cleared. If passed, the Layer will be filled with the given\n  style.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-draw' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-method-draw' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-method-draw' class='name expandable'>draw</a>( <span class='pre'>[ctx], [x], [y]</span> ) : <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Draw the Layer. ...</div><div class='long'><p>Draw the Layer.</p>\n\n<p>This method can be invoked in two ways:</p>\n\n<ul>\n<li><code>draw(x, y)</code></li>\n<li><code>draw(ctx, x, y)</code></li>\n</ul>\n\n\n<p>All parameters are optional either way.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctx</span> : <a href=\"#!/api/CanvasRenderingContext2D\" rel=\"CanvasRenderingContext2D\" class=\"docClass\">CanvasRenderingContext2D</a> (optional)<div class='sub-desc'><p>A canvas graphics context onto which this Layer should be drawn. This is\n  useful for drawing onto other Layers. If not specified, defaults to the\n  <a href=\"#!/api/global-property-context\" rel=\"global-property-context\" class=\"docClass\">global context</a> for the default canvas.</p>\n</div></li><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>An x-coordinate on the canvas specifying where to draw the upper-left\n  corner of the Layer. The actual position that the coordinate equates to\n  depends on the value of the\n  <a href=\"#!/api/Layer-property-relative\" rel=\"Layer-property-relative\" class=\"docClass\">Layer's &quot;relative&quot; property</a>. Defaults to the\n  <a href=\"#!/api/Layer-property-x\" rel=\"Layer-property-x\" class=\"docClass\">Layer's &quot;x&quot; property</a> (which defaults to 0 [zero]).</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>A y-coordinate on the canvas specifying where to draw the upper-left\n  corner of the Layer. The actual position that the coordinate equates to\n  depends on the value of the\n  <a href=\"#!/api/Layer-property-relative\" rel=\"Layer-property-relative\" class=\"docClass\">Layer's &quot;relative&quot; property</a>. Defaults to the\n  <a href=\"#!/api/Layer-property-y\" rel=\"Layer-property-y\" class=\"docClass\">Layer's &quot;y&quot; property</a> (which defaults to 0 [zero]).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-scroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-method-scroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-method-scroll' class='name expandable'>scroll</a>( <span class='pre'>x, y, [p]</span> ) : <a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Scroll the Layer. ...</div><div class='long'><p>Scroll the Layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The horizontal distance the target has shifted.</p>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The vertical distance the target has shifted.</p>\n</div></li><li><span class='pre'>p</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The parallax factor. Defaults to <a href=\"#!/api/Layer-property-parallax\" rel=\"Layer-property-parallax\" class=\"docClass\">this.parallax</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Layer\" rel=\"Layer\" class=\"docClass\">Layer</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-showCanvasOverlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Layer'>Layer</span><br/><a href='source/actors.html#Layer-method-showCanvasOverlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Layer-method-showCanvasOverlay' class='name expandable'>showCanvasOverlay</a>( <span class='pre'></span> ) : HTMLElement</div><div class='description'><div class='short'>Display this Layer's canvas in an overlay (for debugging purposes). ...</div><div class='long'><p>Display this Layer's canvas in an overlay (for debugging purposes).</p>\n\n<p>Clicking the overlay will remove it.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>A jQuery representation of a div containing the canvas holding the\n  Layer.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});