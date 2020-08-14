const express = require('express');

const appName = 'myProject';

const app = express();

app.use(express.static(`./dist/${appName}`));

app.get('/*', function(req, res) {
  res.sendFile(
    'index.html',
    {root: `./dist/${appName}/`}
  );
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is running');
});
