function generateChart(metric, period) {
	if(metric==='schedule') {
		renderSchedule(period);
	}
}

function renderSchedule(period) {
	var dataString = JSON.parse('{"field1": [10, 20, 30, 40, 50],"field2": [2, 4, 6, 8, 10],"field3": [5, 10, 15, 20, 25],"field4": [21, 35, 14, 34, 2]}');
	var chart = c3.generate({
  		bindto: "#chart",
		data: {
			//Test data
			// columns: [
			// 	['data1', 50, 70, 30, 20, 10],
			// 	['data2', 14, 56, 88, 34, 100]
			// ],
			json: dataString,
			type: "spline"
		}
	});
}