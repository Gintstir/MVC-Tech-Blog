const router = require("express").Router();
const { Post, User, Comment} = require("../models");
const withAuth = require("../utils/auth");

// get all posts for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",      
      "title",
      "created_at",     
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get one post to edit
router.get("/edit/:id", withAuth, (req, res) => {
  Post.findOne({
      where: {
          id: req.params.id
      },
        attributes: [
        "id",
        "title",
        "post_content",
        "created_at",      
        ],
        include: [
        {
            model: Comment,
            attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
            include: {
            model: User,
            attributes: ["username"],
            },
        },
        {
            model: User,
            attributes: ["username"],
        },
        ],
    })
        .then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this ID' })
            return;
        }
            const post = dbPostData.get({ plain: true });

            res.render("edit-post", {
            post,
            loggedIn: true,
            });        
        })
        .catch((err) => {
        res.status(500).json(err);
        });
});

router.get('/create-post', withAuth, (req, res) => {
    res.render('create-post', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;
