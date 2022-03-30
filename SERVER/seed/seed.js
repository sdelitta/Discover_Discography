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
            members: "Elvis Presly",
            albums: ["Elvis Presley", "Elvis", "Elvis' Christmas Album", "Elvis Is Back", "His Hand In Mine", "Something For Everybody", "Pot Luck", "Elvis For Everyone!", "How Great Thou Art", "From Elvis In Memphis", "From Mephis To Vegas / From Vegas To Memphis", "That's The Way It Is", "Elvis Country", "Love Letters From Elvis", "Elvis Sings The Wonderful World Of Christmas", "Elvis Now", "He Touched Me", "Elvis", "Raised On Rock / For Ol' Times Sake", "Good Times", "Promised Land", "Today", "From Elvis PResly Boulevard, Memphis Tennessee", "Moody Blue"],
            picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Elvis_Presley_Jailhouse_Rock.jpg/1200px-Elvis_Presley_Jailhouse_Rock.jpg"
        },
        {
            artistName: "Queen",
            members: "Freddie Mercury, Brian May, Roger Taylor, John Deacon",
            albums: ["Queen", "Queen II", "Sheer Heart Attack", "A Night At The Opera", "A Day At The Races", "News Of The World", "Jazz", "The Game"],
            picture: "https://static.wikia.nocookie.net/disney/images/3/35/Queen_band.jpg/revision/latest?cb=20160825024847"
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
            albumName: "Please Please Me",
            year: "1963",
            revenue: "Platinum",
            image: ""
        },
        {
            albumName: "With The Beatles",
            year: "1963",
            revenue: "Multi-Platinum",
            image: ""
        },
        {
            albumName: "A Hard Days Night",
            year: "1964",
            revenue: "Multi-Platinum",
            image: ""
        },
        {
            albumName: "Beatles For Sale",
            year: "1964",
            revenue: "Platinum",
            image: ""
        },
        {
            albumName: "Help!",
            year: "1965",
            revenue: "Multi-Platinum",
            image: ""
        },
        {
            albumName: "Got To Be There",
            year: "1972",
            revenue: "Gold",
            image: ""
        },
        {
            albumName: "Ben",
            year: "1972",
            revenue: "Silver",
            image: ""
        },
        {
            albumName: "Music & Me",
            year: "1973",
            revenue: "",
            image: ""
        },
        {
            albumName: "Forever, Michael",
            year: "1975",
            revenue: "",
            image: ""
        },
        {
            albumName: "Off The Wall",
            year: "1979",
            revenue: "Double-Diamond",
            image: ""
        },
        {
            albumName: "Elvis Presley",
            year: "1956",
            revenue: "Platinum",
            image: ""
        },
        {
            albumName: "Elvis",
            year: "1956",
            revenue: "Platinum",
            image: ""
        },
        {
            albumName: "Elvis' Christmas Album",
            year: "1957",
            revenue: "4x Platinum",
            image: ""
        },
        {
            albumName: "Elvis Is Back",
            year: "1960",
            revenue: "",
            image: ""
        },
        {
            albumName: "His Hand In Mine",
            year: "1960",
            revenue: "",
            image: ""
        },
        {
            albumName: "Queen",
            year: "1973",
            revenue: "Gold",
            image: ""
        },
        {
            albumName: "Queen II",
            year: "1974",
            revenue: "Gold",
            image: ""
        },
        {
            albumName: "Sheer Heart Attack",
            year: "1974",
            revenue: "Gold",
            image: ""
        },
        {
            albumName: "A Night At The Opera",
            year: "1975",
            revenue: "Triple Platinum",
            image: ""
        },
        {
            albumName: "A Day At The Races",
            year: "1976",
            revenue: "Platinum",
            image: ""
        },
        {
            albumName: "Madonna",
            year: "1983",
            revenue: "Diamond",
            image: ""
        },
        {
            albumName: "Like A Virgin",
            year: "1984",
            revenue: "Double-Diamond",
            image: ""
        },
        {
            albumName: "True Blue",
            year: "1986",
            revenue: "Double-Diamond+",
            image: ""
        },
        {
            albumName: "Like A Prayer",
            year: "1989",
            revenue: "Diamond+",
            image: ""
        },
        {
            albumName: "Erotica",
            year: "1992",
            revenue: "6x Platinum",
            image: ""
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