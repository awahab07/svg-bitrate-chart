(function($){
	var reading = [2, 4, 5, 4, 0, 1, 0, 3, 4, 5];

	$('#svg-chart').svg({onLoad: drawChart});

	function drawChart(svg) {
		var width = 400,
			height = 200,
			nLevels = 7,
			nCols = 10,
			lineSize = 6,
			stepWidth = width / nCols,
			gapHeight = (height - (nLevels * lineSize)) / (nLevels - 1),
			backgroundBarStyle = '#9A9997';
		
		// Box border
		svg.rect(null, 0, 0, width, height, {fill: 'none', stroke: 'red'});
		
		// Background bars
		for(var i=0; i<nLevels; i++) {
			svg.rect(0, (i * gapHeight) + (i * lineSize), width, lineSize, {fill:backgroundBarStyle});
		}

		reading = [reading[0]].concat(reading);

		reading.reduceRight(function(preVal, currVal, index, arr) {
			
			var rIndex = reading.length - index - 1,
				i = nCols - rIndex,
				xRight = width - (rIndex * stepWidth),
				xLeft = width - (rIndex * stepWidth) - stepWidth,
				y = (preVal * gapHeight) + (preVal * lineSize),
				yNext = (currVal * gapHeight) + (currVal * lineSize),
				yVTop = Math.min(y, yNext),
				yVBottom = Math.max(y, yNext),
				h = currVal > preVal ? yVBottom - yVTop + lineSize: yVBottom - yVTop;
			
			// Horizontal Line of previous step level
			svg.rect(null, xRight, y, xRight - xLeft, lineSize);

			// Vertical Line to previous step level from current step
			svg.rect(null, xRight, yVTop, lineSize, h);

			return currVal;
		});
	}
}(jQuery));