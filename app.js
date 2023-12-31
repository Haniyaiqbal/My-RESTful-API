const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
  .get(async function(req, res) {
    try {
      const articlesFound = await Article.find({});
      res.send(articlesFound);
    } catch (err) {
      res.send(err);
    }
  })
  .post(async function(req, res) {
    try {
      const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
      });

      await newArticle.save();
      res.send("Successfully added a new article!");
    } catch (err) {
      res.send(err);
    }
  })
  .delete(async function(req, res) {
    try {
      const deletedArticle = await Article.deleteMany({});
      console.log('deleted everything');
      res.send("Successfully deleted all articles!");
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  });


//targeting particular things  

app.route("/articles/:articleTitle")
  .get(async function(req, res) {
    try {
      const foundArticle = await Article.findOne({ title: req.params.articleTitle });

      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("No such article found");
      }
    } catch (e) {
      console.log(e);
      res.send(e);
    }
  })

 .put(async function(req, res) {
  try {
    const foundArticle = await Article.findOneAndUpdate(
      { title: req.params.articleTitle }, // Filter to find the document to update
      { title: req.body.title, content: req.body.content }, // New values to update
      { new: true, overwrite: true } // Options: new returns the updated document, and overwrite ensures only specified fields are updated
    );

    if (foundArticle) {
      res.send(foundArticle);
    } else {
      res.send("No such article found");
    }
  } catch (e) {
    console.log(e);
    res.send(e);
  }
})

 .patch(async function(req, res) {
  try {
    const foundArticle = await Article.findOneAndUpdate(
      { title: req.params.articleTitle }, // Filter to find the document to update
      { $set: req.body }, // Use $set to update only the fields provided in the request body
      { new: true } // Option: new returns the updated document
    );

    if (foundArticle) {
      res.send(foundArticle);
    } else {
      res.send("No such article found");
    }
  } catch (e) {
    console.log(e);
    res.send(e);
  }
})

.delete(async function(req, res) {
  try {
    const result = await Article.deleteOne({ title: req.params.articleTitle });

    if (result.deletedCount > 0) {
      res.send("Successfully deleted the corresponding article.");
    } else {
      res.send("No such article found.");
    }
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

   

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
