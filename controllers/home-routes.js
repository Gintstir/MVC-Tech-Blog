const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log('=================================');
    console.log('==========Get all Posts==========');
    console.log('=================================');
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_content',
            'created_at'
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get('/post/:id', (req, res) => {
    console.log('=================================');
    console.log('==========Get one Post===========');
    console.log('=================================');
    Post.findOne({
      where: {
          id: req.params.id
      },
      attributes: [
          'id',
          'title',
          'post_content',
          'user_id',
          'created_at'
      ],
      include: [
          {
              model: Comment,
              attributes: [ 'id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                  model: User,
                  attributes: ['username']
              } 
          },
          {
              model: User,
              attributes: ['username']
          }
      ]  
    }).then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({message: 'No post found with that ID' })
            return;
        }
        //serialize the data
        const post = dbPostData.get({ plain: true });

        //pass data to the template
        res.render('single-post', {
            post,
            loggedIn: req.session.loggedIn
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});




module.exports = router;