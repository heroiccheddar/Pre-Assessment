import express from "express";

const app = express();

app.use(express.static('./dist/pre-assessment'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist'});
});

app.listen(process.env.PORT || 8080);
