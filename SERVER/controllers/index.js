const { Album, Artist, Review, CustomArtist, CustomAlbum } = require('../models')
const express = require('express')

const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find()
        return res.status(200).json({ albums })
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

const getArtist = async (req, res) => {
    try {
        const { id } = req.params
        const artist = await Artist.findById(id)
        return res.status(200).json({ artist })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.find()
        return res.status(200).json({ artists })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getArtistAlbums = async (req, res) => {
    try {
        const { id } = req.params
        const artist = await Artist.findById(id).exec()
        const albums = await Album.find({artistName: artist.artistName}).exec()
        return res.status(200).json({ albums })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createArtist = async (req, res) => {
    try {
        const artist = await new CustomArtist(req.body)
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
        const album = await new CustomAlbum(req.body)
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
        const cost = await Album.findById(id)

        if(cost){
            cost.reviews.push(rev)
            cost.save()
            return res.status(200).send(`Added Review to ${cost.albumName}`)
        }
            return res.status(404).send('Album with the specified ID does not exist');
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
    getAllReviews,
    getArtistAlbums,
    getArtist
}