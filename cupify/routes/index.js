var express = require('express');
var router = express.Router();
var selecoes = require('../src/selecoes.json')
var estadios = require('../src/estadios.json')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(selecoes);
});

router.get('/estadios', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.json(estadios);
});

module.exports = router;
