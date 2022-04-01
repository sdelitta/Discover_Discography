import axios from 'axios'

export const getArtists = async () => {
    const res = await axios("http://127.0.0.1:3001/api/allArtists")
    return res.data.artists
}

export const getArtist = async (id) => {
    const res = await axios(`http://127.0.0.1:3001/api/artists/${id}`)
    return res.data.artist
}

export const deleteArtist = async (id) => {
    await axios.delete(`http://127.0.0.1:3001/api/artists/${id}`)
    window.location.reload()
}