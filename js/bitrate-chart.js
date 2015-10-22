(function($){
	$('#svg-chart').svg({onLoad: drawChart});

	var reading = [0, 1, 0, 5, 4, 3];

	function drawChart(svg) {
		var width = 600,
			height = 400,
			nLevels = 7,
			nCols = 10,
			lineSize = 6,
			stepWidth = width / nCols,
			gapHeight = (height - (nLevels * lineSize)) / (nLevels - 1);

		svg.circle(130, 75, 50, {fill: 'none', stroke: 'red', strokeWidth: 3});
		
		for(var i=0; i<nCols; i++) {
			for(var j=0; j<nLevels; j++) {

			}
		}
	}
}(jQuery));