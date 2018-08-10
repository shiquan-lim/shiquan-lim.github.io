function generateChart() {
  var data = [{name:"	DEV 1 - SQ	",score:	19748	},
{name:"	DEV2 - Dude 1	",score:	12000	},
{name:"	Dev 5 - Dude 2	",score:	11000	},
{name:"	DEV1 - Dude 3	",score:	13837	},
{name:"	dev2 - Dude 4	",score:	17892	},
{name:"	DEV3 - Dude 5	",score:	18092	},
{name:"	DEV3 - Dude 6	",score:	10293	},
{name:"	DEV4 - Dude 7	",score:	14562	},].map(function(i) {
  return {
    "name": i.name.trim(),
    "score": i.score
  }
}).map(function(x) {
  return {
    "group": x.name.split('-')[0],
    "name": x.name.split('-')[1],
    "score": x.score
  }
});

var categories = [];
for(var i = 0; i < data.length; i++) {
  if(categories.indexOf(data[i].group.replace(/ /g,'').toUpperCase()) < 0) {
    categories.push(data[i].group.replace(/ /g,'').toUpperCase());
  }
}

  var scores = [];
  var colours = [];
  for(var i = 0; i < categories.length; i++) {
    var groupScores = data.filter(x => x.group.replace(/ /g,'').toUpperCase()==categories[i]);
    var groupTotal = 0;
    for(var j = 0; j < groupScores.length; j++) {
      groupTotal += groupScores[j].score;
    }
    scores.push(groupTotal / groupScores.length);
    colours.push("#a3bdff");
  }

  var maxIndex = indexOfMax(scores);
  colours[maxIndex] = "#b6ffa5";
  scores.unshift("scores");

  function indexOfMax(arr) {
      if (arr.length === 0) {
          return -1;
      }

      var max = arr[0];
      var maxIndex = 0;

      for (var i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
              maxIndex = i;
              max = arr[i];
          }
      }

      return maxIndex;
  }

	var bugChart = c3.generate({
		bindto: "#chart",
		data: {
			columns: [
        scores
      ],
			type: "bar",
        color: function (color, d) {
            return colours[d.index];
        }
		},
		axis: {
		  x: {
		  	type: "category",
		    categories: categories
		  }
		},
		color: {
			pattern: colours
		}
	});
}
