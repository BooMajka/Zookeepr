const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve Static Files like images, client-side JavaScript code, or CSS code
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
// app.get("/animals", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/animals.html"));
// });
// app.get("/zookeepers", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/zookeepers.html"));
// });

// wildcard - meaning any route that wasn't previously defined will fall under this request and will receive the homepage as the response ALWAYS LAST!
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

app.use('/', htmlRoutes);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
