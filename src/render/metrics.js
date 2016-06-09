function generateChart(metric, period) {
	if(metric==='schedule') {
		renderSchedule(period);
	} else if(metric==='relworkload') {
		renderRelativeWorkload(period);
	} else if(metric==='bugOccur') {
		renderBugOcc(period);
	}
}

function renderSchedule(period) {
	var dataString = JSON.parse('{"Sprint 1": [10, 20, 30, 40, 50],"Sprint 2": [2, 4, 6, 8, 10],"Sprint 3": [5, 10, 15, 20, 25]}');
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
	var dataString = getMetricData();
	var workloadData = formatData(dataString);
	// console.log(workloadData);
	var workloadChart = c3.generate({
		bindto: "#chart",
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
	}
}

function renderBugOcc(period) {
	var dataString = getMetricData();
	var bugData = formatData(dataString);
	var bugChart = c3.generate({
		bindto: "#chart",
		data: {
			json: bugData,
			type: "bar"
		},
		axis: {
		  x: {
		  	type: "category",
		    categories: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6','Sprint 7', 'Sprint 8', 'Sprint 9', 'Sprint 10', 'Sprint 11', 'Sprint 12', 'Sprint 13', 'Sprint 14', 'Sprint 15']
		  }
		},
		color: {
			pattern: ["#ff0000", "#e6e600", "#3399ff"]
		}
	});
	function formatData(dataString) {
		// convert data to similar format {"high": 3,"medium": 12,"low": 8,"score": 100}
		var bugData = {};
		if(period==="all") {
			// format to {"high": [10, 20, 30, 40, 50],"medium": [2, 4, 6, 8, 10],"low": [5, 10, 15, 20, 25]}
			for(var sprintNum=1; sprintNum<=dataString.length; sprintNum++) {
				var sprintData = dataString.filter(
					function(dataString) {
						return dataString.sprint === sprintNum
					}
				);
				for(var i=1; i< sprintData[0].bugs.length; i++) {
					if(sprintNum===1) {
						bugData[sprintData[0].bugs[i].type] = []
						bugData[sprintData[0].bugs[i].type].push(sprintData[0].bugs[i].count);
					} else {
						bugData[sprintData[0].bugs[i].type].push(sprintData[0].bugs[i].count);
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
			for(var i=1; i< sprintData[0].bugs.length; i++) {
				bugData[sprintData[0].bugs[i].type] = sprintData[0].bugs[i].count;
			}
		}
		console.log(bugData);
		return bugData;
	}
}




