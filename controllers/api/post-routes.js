const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

//get all posts
router.get('/', (req, res) => {
    console.log('=================================');
    console.log('==========Get all posts==========');
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
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
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
    }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
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
        'created_at'
        ],
        include: 
            
            {
                model: User,
                attributes: ['username']
            }
        
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No user found with this ID' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    console.log('=================================');
    console.log('==========Create Post============');
    console.log('=================================');
    /*expect:
    "title": "Test Post",
    "post_content": "Lorem ipsum...",
    "user_id": 1
    */
    Post.create({
        title: req.body.title,
        post_content: req.body.post_content,
        user_id: req.session.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    console.log('=================================');
    console.log('===========Update Post===========');
    console.log('=================================');
    Post.update(
        {
            title: req.body.title,
            post_content: req.body.post_content
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: "No such post found to update"})
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })

})

router.delete('/:id', (req, res) => {
    console.log('=================================');
    console.log('===========Delete Post===========');
    console.log('=================================');
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if(!dbPostData) {
            res.status(404).json({ message: 'No such Post found!' })
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;