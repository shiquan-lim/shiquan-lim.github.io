function renderScope() {
	var width = 1300,
    height = 1100,
    root;

var force = d3.layout.force()
    .linkDistance(80)
    .charge(-120)
    .gravity(.05)
    .size([width, height])
    .on("tick", tick);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var link = svg.selectAll(".link"),
    node = svg.selectAll(".node");

// d3.json("graph.json", function(error, json) {
//   if (error) throw error;

//   root = json;
//   update();
// });

root = {
 "name": "Classmentors",
 "children": [
  {
   "name": "Class Session",
   "size": 17,
   "children": [
      {
        "name": "Team Creation", 
        "size": 8, 
        "details": "Split class into teams, by random or by choice."
      },
      {
        "name": "Automated Partitioning", 
        "size": 3, 
        "details": "Perform automated partitioning, which splits the class by pre-allocated teams or by individuals into two or more sets. These sets will experience slightly varied material application over the course of the class session instance."
      },
      {
        "name": "Survey", 
        "size": 3, 
        "details": "Allow the content creator to apply surveys to the class pre or post team creation and partitioning. Standardised survey templates are provided while still supporting custum survey creation."
      },
      {
        "name": "Index Cards", 
        "size": 3, 
        "details": "System allows individuals to submit questions or topics akin to index cards for review by the lecturer. Submissions are internally curated by the team before submission."
      },
      {
        "name": "Challenges",
        "size": 45,
        "children": [
          {
            "name": "Jeopardy",
            "size": 15,
            "details": "Students participate in a team based questionnaire with twists such as answer wagering and re-guessing."
          },
          {
            "name": "Journalling",
            "size": 10,
            "details": "Students are expected to submit a string-like answer for a question posed in the challenge."
          },
          {
            "name": "Code",
            "size": 20,
            "details": "Students dynamically upload code to a server-side compiler to solve a given problem. Should this prove infeasible, this functionality will simply permit online code submission."
          }
        ],
        "details": "These are challenges, or events / activities, that the lecturer may administer during the course of the classmentors session."
      },
      {
        "name": "Delete Down Experiment",
        "size": 10
      }
     ],
     "details": "Create an instance of a classmentors class session, which includes the features extended as shown."
  },
  {
    "name": "Analytics",
    "children": [

    ]
  }
  ]
};

update();

function update() {
  var nodes = flatten(root),
      links = d3.layout.tree().links(nodes);

  var values = [];
  for(var i=0; i<nodes.length; i++) {
    values.push(nodes[i].size);
  }
  var largestQty = d3.max(values);
  var scale = d3.scale.linear()
        .domain([0, largestQty])
        .range([5, 30]);

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
      .on('dblclick', function (d, i) {
        var popup = new chartpopup();
        popup.show({Name: d.name, "Estimated Man Hours": d.size, Details: d.details}, d);
      })
      .on("click", click)
      .call(force.drag);

  nodeEnter.append("circle")
      .attr("r", function(d) { return scale(d.size) || 10; });

  nodeEnter.append("text")
      .attr("dy", ".35em")
      .text(function(d) { return d.name; });

  node.select("circle")
      .style("fill", color);
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
  return d._children ? "#3182bd" // collapsed package
      : d.children ? "#c6dbef" // expanded package
      : "#fd8d3c"; // leaf node
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
}