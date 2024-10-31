const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const issueController = require('./controllers/issueController');

const logger = require('morgan');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(logger('combined'));

// Connect to database
connectDB();

// Routes
app.get('/issues', issueController.getAllIssues);
app.get('/issues/:id', issueController.getIssueById);
app.post('/issues', issueController.createIssue);
app.put('/issues/:id', issueController.updateIssue);
app.delete('/issues/:id', issueController.deleteIssue);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});