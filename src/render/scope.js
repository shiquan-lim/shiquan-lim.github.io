function renderScope() {
	var width = 1150,
    height = 900,
    root;

var force = d3.layout.force()
    .linkDistance(95)
    .charge(-200)
    .gravity(.05)
    .size([width, height])
    .on("tick", tick);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");

root = {
 "name": "Classmentors",
 "colour": "#F1D3BC",
 "details": "An interactive web portal for educators to test differring pedagogical approaches within the same classroom and collect data on the effectiveness of various approaches.",
 "children": [
  {
    "name": "Primary",
    "colour": "#ED4848",
    "details": "The necessary functions that must be implemented for Classmentors to serve it's purpose. These tasks will hence be executed with the highest level of priority.",
    "children": [
        {
      "name": "Class Session",
      "colour": "#E05858",
      "details": "Create an instance of a classmentors class session, which includes the features extended as shown.",
      "children": [
        {
          "name": "Administrator",
          "colour": "#DF8181",
          "details": "Functions available to the session creator, usually the lecturer.",
          "children": [
            {
              "name": "Automated Mentor Assignment",
              "colour": "#EBAFAF",
              "details": "When enabled, performs intra-class assignment between students for stragglers to get help from stronger students who have already completed their assigned exercises.",
              "size": 6
            },
            {
              "name": "Deleting Down Experiment",
              "colour": "#EBAFAF",
              "details": "When enabled, this module applies a variation to the activity that the class is assigned, and recursively performs A/B testing-like procedure to discern the \"most effective\" variation of the activity.",
              "size": 12
            },
            {
              "name": "Team Creation",
              "colour": "#EBAFAF",
              "details": "Either randomly or based on the content creator's input, splits the class into teams for performing activities in the later stages of the class.",
              "size": 4
            },
            {
              "name": "Automated Partitioning",
              "colour": "#EBAFAF",
              "details": "This function is performed in tandem with team creation, but can be executed as a stand-alone as well. Well enabled, automatically breaks the class into two main segments to apply subsequent activity variance to.",
              "size": 5
            },
            {
              "name": "Create Session",
              "colour": "#EBAFAF",
              "details": "Creates an instance of a Classmentors class session, from which subsequent activities are appended.",
              "size": 8
            },
            {
              "name": "Create Challenges",
              "colour": "#EBAFAF",
              "details": "The content creator is able to create challenges for the class to participate in.",
              "children": [
                {
                  "name": "Content Upload",
                  "colour": "#F3DADA",
                  "details": "Allows upload of various rich media, from documents to links and videos.",
                  "size": 4
                },
                {
                  "name": "Content Builder",
                  "colour": "#F3DADA",
                  "details": "Provides the content creator with various standarised templates from which to build event content for the class to participate in.",
                  "size": 10
                }
              ]
            },
            {
              "name": "Configurable Event Ranking",
              "colour": "#EBAFAF",
              "details": "Allows the content creator to adjust the weightage that aggregated events contribute to the total team score.",
              "size": 6
            }
          ]
        },
        {
          "name": "Student", 
          "colour": "#DF8181",
          "details": "Challenges, events, and tasks that students in the class may access and participate in.", 
          "children": [
            {
              "name": "Index Card",
              "colour": "#EBAFAF",
              "details": "Students participating in this event may submit individial digital index cards, which may contain questions pertaining to the class or simply information that they wish to elicit from the content creator. The team is then able to internally filter the index cards before submission.",
              "size": 5
            },
            {
              "name": "Jeopardy",
              "colour": "#EBAFAF",
              "details": "Students are able to participate in a game-like questionnaire event, which may be in the form of multiple choice or open ended questions. Elements such as wagering and repeated submission upon an errorneous answer are supported.",
              "size": 12
            },
            {
              "name": "MCQ",
              "colour": "#EBAFAF",
              "details": "Students are given a multiple choice answer challenge, from which they select their answer and submit to the content creator.",
              "size": 6
            },
            {
              "name": "Journaling",
              "colour": "#EBAFAF",
              "details": "Students are provided with an open ended text area field, where they input a text response to a given topic or question for submission.",
              "size": 3
            },
            {
              "name": "Code",
              "colour": "#EBAFAF",
              "details": "Students are provided with a text area to submit code snippets or an upload option to upload a code-based file for submission in response to a given challenge.",
              "size": 8
            }
        ]
      }
     ]
  },
  {
    "name": "Analytics",
    "colour": "#E05858",
    "details": "Provide statistical and descriptive insight into metrics of the class session",
    "children": [
      {
        "name": "Report generation",
        "colour": "#DF8181",
        "details": "This module builds a report stating the descriptive analytic status of the events and surveys conducted within a particular Classmentors class session. This view will include information of individual students, teams, and class segments from the automated partitioning.",
        "size": 20
      },
      {
        "name": "Completion Statistics",
        "colour": "#DF8181",
        "details": "Completion statistics include deeper detail than the generated report. This module includes non-functional reports such as time taken for completion, relative speed and accuracy, and the results of the partitioned A/B testing.",
        "size": 20
      },
      {
        "name": "Raw Data Display",
        "colour": "#DF8181",
        "details": "Raw data display shows the raw results by means of javascript object notation (JSON) or comma seperated values (CSV).",
        "size": 4
      }
    ]
  }
    ]
  },
  {
    "name": "Secondary",
    "colour": "#F9C95B",
    "details": "These modules function in support of the primary modules. While good to have, they do not contribute standalone functionality, and hence will only be prioritised once primary modules have been completed.",
    "children": [
      {
    "name": "Usability",
    "colour": "#FFDB5C",
    "details": "This module serves to increase the usability of existing primary functions by utilising metrics such as number of clicks to task completion and the goal of a single page view.",
    "children": [
      {
        "name": "Ease of Access",
        "colour": "#FFF2BB",
        "details": "Ease of access focuses on aspects of usability such as intuitiveness of icons, number of clicks to task completion, degree of scroll-to-view, and number of pages to desired destination.",
        "size": 15
      },
      {
        "name": "Automated Field Completion",
        "colour": "#FFF2BB",
        "details": "This module supports existing primary functions such as the \"Content Builder\" by initiailising intelligent defaults and recommendations to field inputs.",
        "size": 4
      }
    ]
  },
  {
    "name": "Data Visualisation",
    "colour": "#FFDB5C",
    "details": "This module supports the \"Analytics\" primary module by providing a user friendly and interactive data representation view.",
    "children": [
      {
        "name": "Result Dashboard",
        "colour": "#FFF2BB",
        "details": "Directly supports the \"Report Generation\" module by initialising a dashboard to complement the resultant information. Basic charts such as bar, pie, scatter, spline, and stacked bar will be supported.",
        "size": 20
      },
      {
        "name": "Data Export",
        "colour": "#FFF2BB",
        "details": "Directly supports the \"Raw Data Display\" module by allowing export of the data to the user's local machine for purpose of forwarding or processing by third-party software.",
        "size": 6
      },
      {
        "name": "Advanced Charts",
        "colour": "#FFF2BB",
        "details": "Renders charts not supported by the \"Result Dashboard\" module. Such charts include hierarchical visualisations such as sunburst models, and interactive timeline models.",
        "size": 15
      }
    ]
  }
    ]
  },
  {
    "name": "Tertiary",
    "colour": "#90AFC5",
    "details": "These modules are considered by the team to provide above-and-beyond functionality, and while they can be immensely beneficial to the portal, they have been deemed to be beyond the scope of client requirements. They will only be addressed should the project be far ahead of scheduele or in the event of a shift in demand from the client.",
    "children": [
      {
    "name": "Advanced Analytics",
    "colour": "#A1D6E2",
    "details": "This module supports a higher degree of analytics than the \"Result Generation\" module.",
    "children": [
      {
        "name": "Aggregated Analytics",
        "colour": "#C4DFE6",
        "details": "This module aims to provide insights by means of summation, averaging, and statistical methods. Other higher-level analytics such as text mining and sentiment analysis in tandem with parallel processing frameworks can be implemented here as well.",
        "size": 30
      },
      {
        "name": "Recommendation System",
        "colour": "#C4DFE6",
        "details": "Implement predictive and prescriptive analytics by means of decision trees and machine learning to provide recommendations to the content creator as to how to conduct the Classmentors class session.",
        "size": 30
      }
    ]
  },
  {
    "name": "Third Party Support",
    "colour": "#A1D6E2",
    "details": "Allow interaction with the developer.",
    "children": [
      {
        "name": "FAQ",
        "colour": "#C4DFE6",
        "details": "Create a repository of commonly asked questions pertaining to challenges and their answers.",
        "size": 6
      },
      {
        "name": "Request Submission",
        "colour": "#C4DFE6",
        "details": "Allow remote submission to the client (Professor Boesch and team) of questions or requests.",
        "size": 6
      }
    ]
  }
    ]
  }
  ]
};

// console.log(flatten(root));
var nodes = flatten(root),
  links = d3.layout.tree().links(nodes);

for(i=0; i<nodes.length; i++) {
  var task = nodes[i];
  if(task.children!==undefined) {
    var size = 0;
    for (var j = 0; j < task.children.length; j++) {
      size+=task.children[j].size;
    };
    nodes[i].size = size;
  }
}

//Toggle stores whether the highlighting is on
var toggle = 0;
//Create an array logging what is connected to what
var linkedByIndex = {};
for (i = 0; i < nodes.length; i++) {
    linkedByIndex[i + "," + i] = 1;
};
links.forEach(function (d) {
    linkedByIndex[d.source.index + "," + d.target.index] = 1;
});
//This function looks up whether a pair are neighbours
function neighboring(a, b) {
    return linkedByIndex[a.index + "," + b.index];
}

// nodes.forEach(function(d) {
//   d._children = d.children;
//   d.children = null;
// });

update();


function update() {
  nodes = flatten(root);
  links = d3.layout.tree().links(nodes);

  var values = [];
  for(var i=0; i<nodes.length; i++) {
    values.push(nodes[i].size);
  }

  var largestQty = d3.max(values),
    smallestQty = d3.min(values);
  var scale = d3.scale.linear()
        .domain([smallestQty, largestQty])
        .range([15, 50]);

  // Restart the force layout.
  force
      .nodes(nodes)
      .links(links)
      .start();

  // Update links.
  link = link.data(links, function(d) { return d.target.id; });

  link.exit().remove();

  link.enter().insert("line", ".node")
      .attr("class", "link");

  // Update nodes.
  node = node.data(nodes, function(d) { return d.id; });

  node.exit().remove();

  var nodeEnter = node.enter().append("g")
      .attr("class", "node")
      .on('dblclick', dblClick)
      .on("click", click)
      .on("mouseover", connectedNodes)
      .on("mouseout", connectedNodes)
      .call(force.drag);

  nodeEnter.append("circle")
      .attr("r", function(d) { return scale(d.size); });

  nodeEnter.append("text")
      .attr("dy", ".35em")
      .text(function(d) { return d.name; })
      .style("font-size", "12px")
      .attr("class", "shadow");
      // .attr("font-weight", "bold");

  node.select("circle")
      .style("fill", function(d) {
        return d.colour;
      });
}

function tick() {

  node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  // function(d) {console.log(d.r);};

  node.attr("cx", function(d) { return d.x = Math.max(0, Math.min(width - 0, d.x)); })
    .attr("cy", function(d) { return d.y = Math.max(0, Math.min(height - 0, d.y)); });

  link.attr("x1", function(d) { return d.source.x; })
      .attr("y1", function(d) { return d.source.y; })
      .attr("x2", function(d) { return d.target.x; })
      .attr("y2", function(d) { return d.target.y; });
}

function color(d) {
  // return d._children ? "#3182bd" // collapsed package
  //     : d.children ? "#c6dbef" // expanded package
  //     : "#fd8d3c"; // leaf node
  var color = "#CCFFFF"; //leaf
  if(d._children) {
    color = "#66FFCC"; // retracted
  } else if(d.children) {
    color = "#FFCCFF"; //expanded
  }
  return color;
}

// Toggle children on click.
function click(d) {
  if (d3.event.defaultPrevented) return; // ignore drag
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update();
}

function dblClick(d) {
  if (d3.event.defaultPrevented) return; // ignore drag
  var popup = new chartpopup();
  popup.show({Name: d.name, "Estimated Man Hours": d.size, Details: d.details}, d);
}

// Returns a list of all nodes under the root.
function flatten(root) {
  var nodes = [], i = 0;

  function recurse(node) {
    if (node.children) node.children.forEach(recurse);
    if (!node.id) node.id = ++i;
    nodes.push(node);
  }

  recurse(root);
  return nodes;
}

function connectedNodes() {
    if (toggle == 0) {
        //Reduce the opacity of all but the neighbouring nodes
        d = d3.select(this).node().__data__;
        node.transition()
    .duration(300).style("opacity", function (o) {
            return neighboring(d, o) | neighboring(o, d) ? 1 : 0.4;
        });
        link.transition()
    .duration(300).style("opacity", function (o) {
            return d.index==o.source.index | d.index==o.target.index ? 1 : 0.4;
        });
        //Reduce the op
        toggle = 1;
    } else {
        //Put them back to opacity=1
        node.transition()
    .duration(300).style("opacity", 1);
        link.transition()
    .duration(300).style("opacity", 1);
        toggle = 0;
    }
}
}