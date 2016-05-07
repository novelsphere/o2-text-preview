/* global o2 Tag TagAction */
(function() {

	var running = false,
		timerId = undefined;

	Tag.actions.text_preview_start = new TagAction({
		rules : {
			layer:         {type:"MESSAGE_LAYER"},
			page:          {type:/fore|back/},
			text:          {type:"STRING", required:true},
			delay:         {type:"FLOAT", defaultValue:0}
		},
		action : function(args) {
			if (running) {
				o2.warn('すでにpreviewを使っているレイヤーがあります');
				return 0;
			}
			running = true;

			var targetLayer;
			if (args.layer && args.page) {
				targetLayer = args.layer[args.page];
			} else {
				targetLayer = o2.currentMessageLayer;
			}

			function drawText() {
				targetLayer.resetMessageLayer();
				targetLayer.drawText(args.text, function() {
					timerId = setTimeout(function() {
						timerId = undefined;
						if (running) {
							drawText();
						}
					}, args.delay);
				});
			}
			drawText();

			return 0;
		}
	});

	Tag.actions.text_preview_end = new TagAction({
		rules : {

		},
		action : function(args) {
			running = false;
			if (timerId !== undefined) {
				clearTimeout(timerId);
			}
			return 0;
		}
	});
})();