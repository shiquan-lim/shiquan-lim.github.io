function generateChart() {
  var data = [{name:"	Dev3-Jonathan	",score:	15789	},
{name:"	devops - vongst	",score:	15142	},
{name:"	Dev4 - LH	",score:	14162	},
{name:"	dev3-yamtai	",score:	13665	},
{name:"	Devops - Sean	",score:	13564	},
{name:"	DEV4-Desheng	",score:	13398	},
{name:"	DEV4-Kris	",score:	13041	},
{name:"	DEV1 - Jovi	",score:	13035	},
{name:"	Support - Rohi	",score:	12843	},
{name:"	Dev1-benny	",score:	12480	},
{name:"	DEV1 - Yi Xiang	",score:	12427	},
{name:"	Dev3 - Lyra	",score:	12378	},
{name:"	dev1-cz	",score:	12254	},
{name:"	DEV1 - EILEEN	",score:	12218	},
{name:"	SUPPORT - MAX	",score:	12193	},
{name:"	Dev3-Fui	",score:	12188	},
{name:"	Dev3 - P	",score:	12140	},
{name:"	Dev 2 - Ashiq	",score:	12114	},
{name:"	DEV1-Jacky	",score:	12085	},
{name:"	DevOps - SeeWhy	",score:	12083	},
{name:"	Dev1 - Jazlyn	",score:	12033	},
{name:"	DEV1 - zelin	",score:	12022	},
{name:"	Dev1 - Timothy	",score:	11955	},
{name:"	DEV1 - zihe	",score:	11865	},
{name:"	DEV2 - YS	",score:	11600	},
{name:"	Support-Zhaowei	",score:	11450	},
{name:"	Dev ops -Yn	",score:	11373	},
{name:"	DEV4 - chawin	",score:	11290	},
{name:"	DEV3 - HAIKAL	",score:	11283	},
{name:"	InfoSec- Matt	",score:	11210	},
{name:"	Devops-Jaslyn	",score:	11205	},
{name:"	DEV3 - Zionn	",score:	11122	},
{name:"	Dev2-liyu	",score:	11116	},
{name:"	DEV 4 - Simone	",score:	11030	},
{name:"	Dev 2 - Zh	",score:	10999	},
{name:"	Devops-yr	",score:	10927	},
{name:"	Dev3-Qiyu	",score:	10919	},
{name:"	DEV4-Damien	",score:	10869	},
{name:"	DEV4 - ROY	",score:	10860	},
{name:"	DevOps - Hong b	",score:	10736	},
{name:"	Dev2 - JA	",score:	10662	},
{name:"	DEV4 - Shawn	",score:	10583	},
{name:"	Infosec-william	",score:	10574	},
{name:"	DEV3 - RYAN	",score:	10323	},
{name:"	DevOps - Reuben	",score:	10033	},
{name:"	DEV4-ZHENGHUA	",score:	9969	},
{name:"	SUPPORT-Daryl	",score:	9883	},
{name:"	DEV3-JinMing	",score:	9871	},
{name:"	Support-cz	",score:	9824	},
{name:"	Dev4-Chanel	",score:	9429	},
{name:"	Dev1-Emilia	",score:	9426	},
{name:"	INFOSEC-JASW	",score:	9329	},
{name:"	DEV3 - Pam	",score:	9292	},
{name:"	Devops - Doland	",score:	9256	},
{name:"	DEVOPS-Marcus	",score:	9091	},
{name:"	DEVOps-SSW	",score:	9057	},
{name:"	Dev3 - Kyle	",score:	8928	},
{name:"	Support-Gaoyan	",score:	8923	},
{name:"	devops-wh	",score:	8805	},
{name:"	Dev 2 - joelle	",score:	8795	},
{name:"	DEV4 - Tommie	",score:	8484	},
{name:"	Devops - masaki	",score:	8419	},
{name:"	Dev2 - Tommy	",score:	8379	},
{name:"	Dev 2 - bryce	",score:	7368	},
{name:"	Support - TJ	",score:	6522	},
{name:"	Infosec-darren	",score:	6237	},
{name:"	DEV4 - JS	",score:	6184	},
{name:"	Dev4 - Wang An	",score:	5376	},
{name:"	Dev5-john	",score:	3955	},
{name:"	Support JC	",score:	0	},
].map(function(i) {
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
