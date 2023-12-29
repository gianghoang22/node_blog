const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /

    async index(req, res, next) {
        
        Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: multipleMongooseToObject(courses)
                 });
            })
            .catch(next);

        
        // try {
        //     const data = await Course.find({});
        //     res.json(data);
        // }  catch (err) {
        //     next(err);
        // }
    }

    // index(req, res) {

    //     Course.find({}, function(err, course) {
    //         if (!err) res.json(course);
    //         res.status(400).json({ error: 'ERROR!!!' });
    //     })

    //     // res.render('home');
    // }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
