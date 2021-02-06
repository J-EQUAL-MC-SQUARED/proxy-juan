const express = require('express');
const compression = require('compression');
const path = require('path');
const router = require('./router');

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

console.log(PUBLIC_DIR);

const app = express();

app.use(compression());
app.use(express.static(PUBLIC_DIR));

app.use('/bundles', router.bundles);
app.use('/api', router.api);

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
