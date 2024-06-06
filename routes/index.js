var express = require('express');
var router = express.Router();

var Graph = require('graphology');


function getGraph() {

  const graph = new Graph();

  graph.addNode('Platte 1', { label: "Platte 1", x: 10, y: 10, size: 10, color: "blue" });
  graph.addNode('Platte 2', { label: "Platte 2", x: 20, y: 20, size: 10, color: "red" });
  graph.addNode('Platte 3', { label: "Platte 3", x: 30, y: 30, size: 10, color: "green" });
  graph.addNode('Platte 4', { label: "Platte 4", x: 40, y: 40, size: 10, color: "yellow" });

  graph.addEdge('Platte 1', 'Platte 2', { size: 5, color: "purple" });
  graph.addEdge('Platte 2', 'Platte 3', { size: 5, color: "purple" });
  graph.addEdge('Platte 3', 'Platte 4', { size: 5, color: "purple" });

  console.log('Number of nodes', graph.order);
  console.log('Number of edges', graph.size);


  /*graph.forEachNode(node => {
    console.log(node);
  });*/
  return graph;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moduleit Graphen' });
});

router.post('/runFunction', function(req, res) {
  let graph = getGraph();

  graph.export();
  res.send(graph);
});


module.exports = router;
