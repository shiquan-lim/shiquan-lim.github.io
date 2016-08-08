function generateChart(metric, period) {
	if(metric==='feature') {
		renderFeature(period);
	} else if(metric==='relworkload') {
		renderRelativeWorkload(period);
	} else if(metric==='bug') {
		renderBug(period);
	}
}

function renderFeature(period) {
	var featureData = getFeatureData();
	var dataString = formatFeatureData(featureData);
	var cats = getCategories();
	var chart = c3.generate({
  		bindto: "#chart",
		data: {
			json: dataString,
			type: "spline"
		},
		axis: {
	        x: {
	            type: 'category',
	            // categories: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6']
	            categories: cats
	        }
	    }
	});
	function formatFeatureData(dataString) {
		var featureData = {};
		if(period==="all") {
			return dataString;
		} else {
			var sprintNum = parseInt(period);
			featureData["Feature Metrics"] = dataString["Feature Metrics"][sprintNum-1];
			featureData.Ideal = 1;
		}
		return featureData;
	}
	function getCategories() {
		var retArr = [];
		if(period === "all") {
			return ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6','Sprint 7', 'Sprint 8', 'Sprint 9', 'Sprint 10', 'Sprint 11', 'Sprint 12', 'Sprint 13', 'Sprint 14', 'Sprint 15'];
		} else {
			retArr.push('Sprint ' + period);
		}
		return retArr;
	}
}

function renderRelativeWorkload(period) {
	var dataString = getMetricData();
	var workloadData = formatworkloadData(dataString);
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
	function formatworkloadData(dataString) {
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

function renderBug(period) {
	var dataString = getMetricData();
	var bugData = formatBugData(dataString);
	var cats = getCategories();
	var bugChart = c3.generate({
		bindto: "#chart",
		data: {
			json: bugData,
			type: "bar"
		},
		axis: {
		  x: {
		  	type: "category",
		    categories: cats
		  }
		},
		color: {
			pattern: ["#ff0000", "#e6e600", "#3399ff", "#cc6600"]
		}
	});
	function getCategories() {
		var retArr = [];
		if(period === "all") {
			return ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6','Sprint 7', 'Sprint 8', 'Sprint 9', 'Sprint 10', 'Sprint 11', 'Sprint 12', 'Sprint 13', 'Sprint 14', 'Sprint 15'];
		} else {
			retArr.push('Sprint ' + period);
		}
		return retArr;
	}
	function formatBugData(dataString) {
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
				for(var i=0; i< sprintData[0].bugs.length; i++) {
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
			for(var i=0; i< sprintData[0].bugs.length; i++) {
				bugData[sprintData[0].bugs[i].type] = sprintData[0].bugs[i].count;
			}
		}
		return bugData;
	}
}



