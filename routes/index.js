var express = require('express');
var router = express.Router();

var Graph = require('graphology');


function getGraph() {

  const graph = new Graph();

// Adding some nodes
  graph.addNode('Platte 1');
  graph.addNode('Platte 2');
  graph.addNode('Platte 3');
  graph.addNode('Platte 4');

// Adding an edge
  graph.addEdge('Platte 1', 'Platte 2');
  graph.addEdge('Platte 2', 'Platte 3');
  graph.addEdge('Platte 3', 'Platte 4');

// Displaying useful information about your graph
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

  /*graph.forEachNode(node => {
    console.log(node);
  });*/

  res.send(graph.toJSON());
});


module.exports = router;
