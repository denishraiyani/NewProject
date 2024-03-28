const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('../Frontend'));

app.post('/submitFeedback', (req, res) => {
  // Handle the feedback submission here
  console.log(req.body);
  // Assuming you would save the feedback to a database or perform some other action
  // For this example, we'll just send a response
  res.json({ message: 'Feedback submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
