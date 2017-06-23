function generateChart(results, div, kpi, dft, grainStr) {
	// console.log(results)
	if(kpi=='alphas') {
		kpi = 'rawAlphas'
	} else {
		kpi = 'rawUtils'
	}
	var grain = parseInt(grainStr)
	var raw1 = results[kpi]
	if(dft == 'cdf') {
		var dataArr = [];
		var running = Array.apply(null, {length: grain+1}).map(Number.call, Number);
		running = running.map(function(x) {
			return x/grain
		});
		for (var key in raw1) {
		    if (raw1.hasOwnProperty(key) && key != '2Hr') {
		    	toAppend = [];
		    	toAppend.push(key);
		    	var values = [];
		    	startIndex = 0;
		    	for(var i=1; i<=12; i++) {
		    		values.push(raw1[key][div].slice(startIndex, i*30+1).reduce((a,b)=>a+b,0)/31);
		    		startIndex = i*30+1;
		    	}
		    	for(benchmark_index in running) {
		    		toAppend.push(raw1[key][div].filter(function(x) {
		    			return x <= running[benchmark_index];
		    		}).length/raw1[key][div].length)
		    	}
		    	dataArr.push(toAppend)
		    }
		}
		running.unshift('x');
		dataArr.unshift(running);
		document.getElementById("loader").style.display = "none";
		var chart = c3.generate({
		    data: {
		        x: 'x',
		        columns: dataArr,
		        type: "step"
		    },
		    axis : {
		        x: {
		            type : 'indexed',
		            tick: {
		                format: function (x) { return x; }
		            }
		        },
			  	y: {
			    	min: 0,
			    	max: 1,
			    	padding: {top:0, bottom:0}
			  	}
		    },
		    point: {
		        show: false
		    },
		    size: {
			  width: 1000,
			  height: 400
			}
		});
	} else if (dft == 'pdf') {
		var dataArr = [];
		chartType = "";
		if(kpi == 'rawAlphas') {
			var running = Array.apply(null, {length: 12}).map(Number.call, Number);
			for (var key in raw1) {
			    if (raw1.hasOwnProperty(key)  && key != '2Hr') {
			    	toAppend = [];
			    	toAppend.push(key);
			    	var values = [];
			    	startIndex = 0;
			    	for(var i=1; i<=12; i++) {
			    		values.push(raw1[key][div].slice(startIndex, i*30+1).reduce((a,b)=>a+b,0)/30);
			    		startIndex = i*30+1;
			    	}
			    	values.unshift(key);
			    	dataArr.push(values);
			    }
			}
			chartType = "bar";
			xAxisType = 'category';
			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		} else {
			var running = Array.apply(null, {length: grain+1}).map(Number.call, Number);
			running = running.map(function(x) {
				return x/grain
			});
			for (var key in raw1) {
			    if (raw1.hasOwnProperty(key)  && key != '2Hr') {
			    	toAppend = [];
			    	toAppend.push(key);
			    	var values = [];
			    	startIndex = 0;
			    	for(var i=1; i<=12; i++) {
			    		values.push(raw1[key][div].slice(startIndex, i*30+1).reduce((a,b)=>a+b,0)/30);
			    		startIndex = i*30+1;
			    	}
			    	for(benchmark_index in running) {
			    		toAppend.push(raw1[key][div].filter(function(x) {
			    			if(benchmark_index == 0) {
			    				return x <= running[benchmark_index];
			    			} else {
			    				return x <= running[benchmark_index] && x > running[benchmark_index-1];
			    			}
			    		}).length)
			    	}
			    	values.unshift(key);
			    	dataArr.push(toAppend)
			    }
			}
			chartType = "spline";
			xAxisType = 'indexed';
		}
		running.unshift('x');
		dataArr.unshift(running);
		document.getElementById("loader").style.display = "none";
		var chart = c3.generate({
		    data: {
		        x: 'x',
		        columns: dataArr,
		        type: chartType
		    },
		    axis : {
		        x: {
		            type : xAxisType,
		            tick: {
		                format: function (x) { 
		                	if(xAxisType=='category') {
		                		return months[x]; 
		                	} else {
		                		return x;
		                	}
		                }
		            }
		        },
			  	y: {
			    	min: 0,
			    	padding: {top:0, bottom:0}
			  	}
		    },
		    point: {
		        show: false
		    },
		    size: {
			  width: 1000,
			  height: 400
			}
		});
	}
}	function generateChart(results, div, kpi, dft, grainStr) {
	// console.log(results)
	if(kpi=='alphas') {
		kpi = 'rawAlphas'
	} else {
		kpi = 'rawUtils'
	}
	var grain = parseInt(grainStr)
	var raw1 = results[kpi]
	if(dft == 'cdf') {
		var dataArr = [];
		var running = Array.apply(null, {length: grain+1}).map(Number.call, Number);
		running = running.map(function(x) {
			return x/grain
		});
		for (var key in raw1) {
		    if (raw1.hasOwnProperty(key) && key != '2Hr') {
		    	toAppend = [];
		    	toAppend.push(key);
		    	var values = [];
		    	startIndex = 0;
		    	for(var i=1; i<=12; i++) {
		    		values.push(raw1[key][div].slice(startIndex, i*30+1).reduce((a,b)=>a+b,0)/30);
		    		startIndex = i*30+1;
		    	}
		    	for(benchmark_index in running) {
		    		toAppend.push(raw1[key][div].filter(function(x) {
		    			return x <= running[benchmark_index];
		    		}).length/raw1[key][div].length)
		    	}
		    	dataArr.push(toAppend)
		    }
		}
		running.unshift('x');
		dataArr.unshift(running);
		document.getElementById("loader").style.display = "none";
		var chart = c3.generate({
		    data: {
		        x: 'x',
		        columns: dataArr,
		        type: "step"
		    },
		    axis : {
		        x: {
		            type : 'indexed',
		            tick: {
		                format: function (x) { return x; }
		            }
		        },
			  	y: {
			    	min: 0,
			    	max: 1,
			    	padding: {top:0, bottom:0}
			  	}
		    },
		    point: {
		        show: false
		    },
		    size: {
			  width: 1000,
			  height: 400
			}
		});
	} else if (dft == 'pdf') {
		var dataArr = [];
		chartType = "";
		if(kpi == 'rawAlphas') {
			var running = Array.apply(null, {length: 12}).map(Number.call, Number);
			for (var key in raw1) {
			    if (raw1.hasOwnProperty(key)  && key != '2Hr') {
			    	toAppend = [];
			    	toAppend.push(key);
			    	var values = [];
			    	startIndex = 0;
			    	for(var i=1; i<=12; i++) {
			    		values.push(raw1[key][div].slice(startIndex, i*30+1).reduce((a,b)=>a+b,0)/30);
			    		startIndex = i*30+1;
			    	}
			    	values.unshift(key);
			    	dataArr.push(values);
			    }
			}
			chartType = "bar";
			xAxisType = 'category';
			var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		} else {
			var running = Array.apply(null, {length: grain+1}).map(Number.call, Number);
			running = running.map(function(x) {
				return x/grain
			});
			for (var key in raw1) {
			    if (raw1.hasOwnProperty(key)  && key != '2Hr') {
			    	toAppend = [];
			    	toAppend.push(key);
			    	var values = [];
			    	startIndex = 0;
			    	for(var i=1; i<=12; i++) {
			    		values.push(raw1[key][div].slice(startIndex, i*30+1).reduce((a,b)=>a+b,0)/30);
			    		startIndex = i*30+1;
			    	}
			    	for(benchmark_index in running) {
			    		toAppend.push(raw1[key][div].filter(function(x) {
			    			if(benchmark_index == 0) {
			    				return x <= running[benchmark_index];
			    			} else {
			    				return x <= running[benchmark_index] && x > running[benchmark_index-1];
			    			}
			    		}).length)
			    	}
			    	values.unshift(key);
			    	dataArr.push(toAppend)
			    }
			}
			chartType = "spline";
			xAxisType = 'indexed';
		}
		running.unshift('x');
		dataArr.unshift(running);
		document.getElementById("loader").style.display = "none";
		var chart = c3.generate({
		    data: {
		        x: 'x',
		        columns: dataArr,
		        type: chartType
		    },
		    axis : {
		        x: {
		            type : xAxisType,
		            tick: {
		                format: function (x) { 
		                	if(xAxisType=='category') {
		                		return months[x]; 
		                	} else {
		                		return x;
		                	}
		                }
		            }
		        },
			  	y: {
			    	min: 0,
			    	padding: {top:0, bottom:0}
			  	}
		    },
		    point: {
		        show: false
		    },
		    size: {
			  width: 1000,
			  height: 400
			}
		});
	}
}	