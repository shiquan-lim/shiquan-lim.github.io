function generateChart(metric, period) {
	if(metric==='schedule') {
		renderSchedule(period);
	} else if(metric==='relworkload') {
		renderRelativeWorkload(period);
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

function renderRelativeWorkload(period) {
	var dataString = getWorkloadData();
	var workloadData = formatData(dataString);
	console.log(workloadData);
	var plannedChart = c3.generate({
		// bindto: "#chart",
		data: {
			json: workloadData,
			type: "pie",
			onmouseover: function(d) {
				return d.actual;
			}
		},
	 	tooltip: {
			format: {
				value: function (value) { return value + " hours"; }
			}
		},
		color: {
			pattern: ["#994f00", "#ffc180", "#cccc00", "#ff9999", "#0099ff"]
		}
	});
	function formatData(dataString) {
		// convert data to similar format {"data1": 30,"data2": 120,"data3": 80}
		var workloadData = {};
		if(period==="all") {
			for(var sprintNum=1; sprintNum<=dataString.length; sprintNum++) {
				var sprintData = dataString.filter(
					function(dataString) {
						return dataString.sprint === sprintNum
					}
				);
				for(var i=0; i< sprintData[0].members.length; i++) {
					// workloadData.push(sprintData[0].members[i].name, sprintData[0].members[i].actual);
					if(sprintNum===1) {
						workloadData[sprintData[0].members[i].name] = sprintData[0].members[i].actual;
					} else {
						workloadData[sprintData[0].members[i].name] += sprintData[0].members[i].actual;
					}
				}
			}
		} else {
			// get selected sprint interval
			var sprintNum = parseInt(period);
			var sprintData = dataString.filter(
				function(dataString) {
					return dataString.sprint === sprintNum
				}
			);
			for(var i=0; i< sprintData[0].members.length; i++) {
				// workloadData.push(sprintData[0].members[i].name, sprintData[0].members[i].actual);
				workloadData[sprintData[0].members[i].name] = sprintData[0].members[i].actual;
			}
		}
		// console.log(sprintData[0].sprint);
		return workloadData;
	}}