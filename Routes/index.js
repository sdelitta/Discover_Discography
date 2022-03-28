const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/allAlbums', controllers.getAllAlbums)
router.get('/allArtists', controllers.getAllArtists)
router.get('/allReviews', controllers.getAllReviews)

router.post('/artists/create', controllers.createArtist)
router.post('/albums/create', controllers.createAlbum)

router.post('/albums/:id',controllers.addReview)

module.exports = router;