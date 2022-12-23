const { Album, Artist } = require('../models')
const express = require('express')

const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find()
        return res.status(200).json({ albums })
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
        const artist = await new Artist(req.body)
        await artist.save()
        return res.status(201).json({
            artist,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const deleteArtist = async (req, res) => {
    try {
        const id = req.params.id
        await Artist.findByIdAndDelete(id)
        return res.status(200).send("Successfully Deleted")
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const editArtist = async (req, res) => {
    try {
        const id = req.params.id
        await Artist.updateOne({ _id: id }, req.body)
        return res.status(200).send("Successfully Edited")
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAllAlbums,
    createArtist,
    getAllArtists,
    getArtistAlbums,
    getArtist,
    deleteArtist,
    editArtist
}