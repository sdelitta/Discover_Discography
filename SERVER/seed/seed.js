const db = require('../db')
const { Album, Artist, Review } = require('../models')
db.on('error', console.error.bind(console,'DB Connection Error'))

const createArtist = async () => {
    let artistSeed = [
        {
            artistName: "The Beatles",
            members: "Paul McCartney, John Lennon, George Harrison, Ringo Starr",
            albums: ["Please Please Me", "With The Beatles", "A Hard Day's Night", "Beatles For Sale", "Help!", "Rubber Soul", "Revolver", "Sgt. Pepper's Lonely Hearts Club", "Magical Mystery Tour", "The Beatles", "Yellow Submarine", "Abbey Road", "Let It Be"],
            picture: "https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg"
        },
        {
            artistName: "Michael Jackson",
            members: "Michael Jackson",
            albums: ["Got To Be There", "Ben", "Music & Me", "Forever, Michael", "Off The Wall", "Thriller", "Bad", "Dangerous", "Invincible"],
            picture: "https://www.billboard.com/wp-content/uploads/media/Michael-Jackson-1986-concert-billboard-1548.jpg"
        },
        {
            artistName: "Elvis Presley",
            members: "Elvis Presley",
            albums: ["Elvis Presley", "Elvis", "Elvis' Christmas Album", "Elvis Is Back", "His Hand In Mine", "Something For Everybody", "Pot Luck", "Elvis For Everyone!", "How Great Thou Art", "From Elvis In Memphis", "From Mephis To Vegas / From Vegas To Memphis", "That's The Way It Is", "Elvis Country", "Love Letters From Elvis", "Elvis Sings The Wonderful World Of Christmas", "Elvis Now", "He Touched Me", "Elvis", "Raised On Rock / For Ol' Times Sake", "Good Times", "Promised Land", "Today", "From Elvis PResly Boulevard, Memphis Tennessee", "Moody Blue"],
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Elvis_Presley_Jailhouse_Rock.jpg/1200px-Elvis_Presley_Jailhouse_Rock.jpg"
        },
        {
            artistName: "Queen",
            members: "Freddie Mercury, Brian May, Roger Taylor, John Deacon",
            albums: ["Queen", "Queen II", "Sheer Heart Attack", "A Night At The Opera", "A Day At The Races", "News Of The World", "Jazz", "The Game"],
            picture: "https://www.musicconnection.com/wp-content/uploads/2014/01/queen-band-image-011.jpg"
        },
        {
            artistName: "Madonna",
            members: "Madonna",
            albums: ["Madonna", "Like A Virgin", "True Blue", "Like A Prayer", "Erotica", "Bedtime Stories", "Ray Of Light", "Music", "American Life", "Confession On A Dance Floor", "Hard Candy", "MDNA", "Rebel Heart", "Madame X"],
            picture: "https://m.media-amazon.com/images/M/MV5BMjlhMzJjNjAtOWY5YS00NDVmLTkzYTAtZTk4ZGJiOTUwM2NiXkEyXkFqcGdeQXVyMjQ0NzE0MQ@@._V1_.jpg"
        }
    ]
    await Artist.insertMany(artistSeed)
    console.log(`inserted ${artistSeed.length}`)
}

const createAlbums = async () =>{
    let albumSeed = [   
        {
            artistName: "The Beatles",
            albumName: "Please Please Me",
            year: "1963",
            revenue: "Platinum",
            image: "https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-06/Please%20Please%20Me.jpg?itok=35QM9ey0"
        },
        {
            artistName: "The Beatles",
            albumName: "With The Beatles",
            year: "1963",
            revenue: "Multi-Platinum",
            image: "https://m.media-amazon.com/images/I/91Nxj5UJZYL._SL1500_.jpg"
        },
        {
            artistName: "The Beatles",
            albumName: "A Hard Days Night",
            year: "1964",
            revenue: "Multi-Platinum",
            image: "https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-06/A%20Hard%20Days%20Night.jpg?itok=SxMZ7xSM"
        },
        {
            artistName: "The Beatles",
            albumName: "Beatles For Sale",
            year: "1964",
            revenue: "Platinum",
            image: "https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-06/The%20Beatles%20for%20Sale.jpg?itok=rBZvOeja"
        },
        {
            artistName: "The Beatles",
            albumName: "Help!",
            year: "1965",
            revenue: "Multi-Platinum",
            image: "https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-06/Help.jpg?itok=sQBcoIcm"
        },
        {
            artistName: "Michael Jackson",
            albumName: "Got To Be There",
            year: "1972",
            revenue: "Gold",
            image: "https://m.media-amazon.com/images/I/71WDeP8OUCL._SL1000_.jpg"
        },
        {
            artistName: "Michael Jackson",
            albumName: "Ben",
            year: "1972",
            revenue: "Silver",
            image: "https://m.media-amazon.com/images/I/61lYF3BAAEL._SL1200_.jpg"
        },
        {
            artistName: "Michael Jackson",
            albumName: "Music & Me",
            year: "1973",
            revenue: "",
            image: "https://m.media-amazon.com/images/I/71YEVucKOWL._SL1200_.jpg"
        },
        {
            artistName: "Michael Jackson",
            albumName: "Forever, Michael",
            year: "1975",
            revenue: "",
            image: "https://m.media-amazon.com/images/I/91bhYFCzGIL._SL1500_.jpg"
        },
        {
            artistName: "Michael Jackson",
            albumName: "Off The Wall",
            year: "1979",
            revenue: "Double-Diamond",
            image: "https://media.pitchfork.com/photos/5929b3a1ea9e61561daa6b11/1:1/w_600/a6db7cdb.jpg"
        },
        {
            artistName: "Elvis Presley",
            albumName: "Elvis Presley",
            year: "1956",
            revenue: "Platinum",
            image: "https://m.media-amazon.com/images/I/610YiLKkTKL._SL1200_.jpg"
        },
        {
            artistName: "Elvis Presley",
            albumName: "Elvis",
            year: "1956",
            revenue: "Platinum",
            image: "https://m.media-amazon.com/images/I/510NAfBjEyL.jpg"
        },
        {
            artistName: "Elvis Presley",
            albumName: "Elvis' Christmas Album",
            year: "1957",
            revenue: "4x Platinum",
            image: "https://m.media-amazon.com/images/I/81ZDZVnja0L._SL1500_.jpg"
        },
        {
            artistName: "Elvis Presley",
            albumName: "Elvis Is Back",
            year: "1960",
            revenue: "",
            image: "https://m.media-amazon.com/images/I/81Q7eXD8X9L._AC_SL1500_.jpg"
        },
        {
            artistName: "Elvis Presley",
            albumName: "His Hand In Mine",
            year: "1960",
            revenue: "",
            image: "https://m.media-amazon.com/images/I/71KgIxGb8lL._SL1200_.jpg"
        },
        {
            artistName: "Queen",
            albumName: "Queen",
            year: "1973",
            revenue: "Gold",
            image: "https://m.media-amazon.com/images/I/81pZv1PYEiL._SL1500_.jpg"
        },
        {
            artistName: "Queen",
            albumName: "Queen II",
            year: "1974",
            revenue: "Gold",
            image: "https://m.media-amazon.com/images/I/61u2KkzeInL._SL1200_.jpg"
        },
        {
            artistName: "Queen",
            albumName: "Sheer Heart Attack",
            year: "1974",
            revenue: "Gold",
            image: "https://m.media-amazon.com/images/I/71wM+FEZkYL._SL1400_.jpg"
        },
        {
            artistName: "Queen",
            albumName: "A Night At The Opera",
            year: "1975",
            revenue: "Triple Platinum",
            image: "https://m.media-amazon.com/images/I/71eu02SZK1L._SL1058_.jpg"
        },
        {
            artistName: "Queen",
            albumName: "A Day At The Races",
            year: "1976",
            revenue: "Platinum",
            image: "https://m.media-amazon.com/images/I/714s8D4ItOL._SL1400_.jpg"
        },
        {
            artistName: "Madonna",
            albumName: "Madonna",
            year: "1983",
            revenue: "Diamond",
            image: "https://m.media-amazon.com/images/I/81hXRTWVaWL._SL1447_.jpg"
        },
        {
            artistName: "Madonna",
            albumName: "Like A Virgin",
            year: "1984",
            revenue: "Double-Diamond",
            image: "https://m.media-amazon.com/images/I/81rwgpU6dOL._SL1447_.jpg"
        },
        {
            artistName: "Madonna",
            albumName: "True Blue",
            year: "1986",
            revenue: "Double-Diamond+",
            image: "https://m.media-amazon.com/images/I/7194R8FlmrL._SL1089_.jpg"
        },
        {
            artistName: "Madonna",
            albumName: "Like A Prayer",
            year: "1989",
            revenue: "Diamond+",
            image: "https://m.media-amazon.com/images/I/81CSQjSWxtL._SL1425_.jpg"
        },
        {
            artistName: "Madonna",
            albumName: "Erotica",
            year: "1992",
            revenue: "6x Platinum",
            image: "https://m.media-amazon.com/images/I/81eXEjkz+0L._SL1383_.jpg"
        },
    ]
    await Album.insertMany(albumSeed)
    console.log(`inserted ${albumSeed.length} albums`)
}

const run = async () => {
    try{
        await createAlbums()
        await createArtist()
    }
    catch (error) {
        console.log(error)
    }
    finally {
        await db.close()
    }
}
run()