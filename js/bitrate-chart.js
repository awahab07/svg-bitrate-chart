(function($){
	var reading = [0, 1, 0, 3, 4, 5];

	$('#svg-chart').svg({onLoad: drawChart});

	function drawChart(svg) {
		var width = 600,
			height = 400,
			nLevels = 7,
			nCols = 10,
			lineSize = 6,
			stepWidth = width / nCols,
			gapHeight = (height - (nLevels * lineSize)) / (nLevels - 1);

		//svg.circle(130, 75, 50, {fill: 'none', stroke: 'red', strokeWidth: 3});
		
		// Box border
		svg.rect(null, 0, 0, width, height, {fill: 'none', stroke: 'red'});

		
		reading.reduceRight(function(preVal, currVal, index, arr) {
			//  Vertical Line
			var rIndex = reading.length - index - 1,
				i = nCols - rIndex,
				x = width - (rIndex * stepWidth),
				w = lineSize,
				y = preVal * gapHeight,
				h = Math.abs(currVal - preVal) * gapHeight;
			
			console.log(i, stepWidth, x, y, w, h);
			
			svg.rect(null, x, y, w, h);

			return currVal;
		}, reading[reading.length - 1]);
	}
}(jQuery));