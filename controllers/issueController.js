const Issue = require('../models/Issue');

const issueController = {
    getAllIssues: async (req, res) => {
        try {
            const issues = await Issue.find();
            res.json(issues);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    getIssueById: async (req, res) => {
        try {
            const issue = await Issue.findOne({ _id: req.params.id });
            if (!issue) {
                return res.status(404).send('Issue not found');
            }
            res.json(issue);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    createIssue: async (req, res) => {
        const issue = new Issue({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            status: req.body.status
        });

        try {
            const savedIssue = await issue.save();
            res.json(savedIssue);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    updateIssue: async (req, res) => {
        try {
            const updatedIssue = await Issue.findOneAndUpdate(
                { _id: req.params.id }, 
                req.body, 
                { new: true }
            );
            res.json(updatedIssue);
        } catch (err) {
            res.status(500).send(err);
        }
    },

    deleteIssue: async (req, res) => {
        try {
            const deletedIssue = await Issue.findOneAndDelete({ _id: req.params.id });
            res.json(deletedIssue);
        } catch (err) {
            res.status(500).send(err);
        }
    }
};

module.exports = issueController;