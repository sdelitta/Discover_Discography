const { Album, Artist, Review } = require('../models/');

// const Coaster = require('../models/coaster.js');
// const Park = require('../models/park');
// const Review = require('../models/review');

const getAllAlbums = async (req, res) => {
    try {
        const albums = await Coaster.find()
        return res.status(200).json({ coasters })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllArtists = async (req, res) => {
    try {
        const artists = await Park.find()
        return res.status(200).json({ parks })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createArtist = async (req, res) => {
    try {
        const artist = await new Artist(req.body)
        await artist.save()
        return res.status(201).json({
            artist,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createAlbum = async (req, res) => {
    try {
        const album = await new Coaster(req.body)
        await album.save()
        return res.status(201).json({
            album,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const addReview = async (req,res) =>{
    try{
        const { id } = req.params
        const rev = await new Review(req.body)
        await rev.save()
        const cost = await Coaster.findById(id)

        if(cost){
            cost.reviews.push(rev)
            cost.save()
            return res.status(200).send(`Added Review to ${cost.rideName}`)
        }
            return res.status(404).send('Coaster with the specified ID does not exist');
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllAlbums,
    createArtist,
    addReview,
    getAllArtists,
    createAlbum,
    getAllReviews
}