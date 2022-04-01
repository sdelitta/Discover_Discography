const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/allAlbums', controllers.getAllAlbums)
router.get('/allArtists', controllers.getAllArtists)
router.get('/allReviews', controllers.getAllReviews)
router.get("/artists/:id/albums", controllers.getArtistAlbums)
router.get("/artists/:id", controllers.getArtist)
router.delete("/artists/:id", controllers.deleteArtist)

router.post('/artists/create', controllers.createArtist)

module.exports = router