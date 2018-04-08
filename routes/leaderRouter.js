var express = require('express');
var leaderRouter = express.Router();
var bodyParser = require('body-parser');

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send all the leaders to you!');
})

.post(function(req, res, next){
    res.end('Will add the Leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting all Leaders');
});

leaderRouter.route('/:leadershipId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the leaders: ' + req.params.leadershipId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the Leader: ' + req.params.leadershipId + '\n');
    res.end('Will update the Leader: ' + req.body.name +
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting Leaders: ' + req.params.leadershipId);
});
module.exports = leaderRouter
