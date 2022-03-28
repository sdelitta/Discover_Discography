const db = require('/..db')
const { Album, Artist, Review } = require('../Models')
db.on('error', console.error.bind(console,'DB Connection Error'))

const createArtist = async () => {
    let artistSeed = [
        {
            artistName: "The Beatles",
            members: "Paul McCartney, John Lennon, George Harrison, Ringo Starr",
            albums: ["Please Please Me", "With The Beatles", "A Hard Day's Night", "Beatles For Sale", "Help!", "Rubber Soul", "Revolver", "Sgt. Pepper's Lonely Hearts Club", "Magical Mystery Tour", "The Beatles", "Yellow Submarine", "Abbey Road", "Let It Be"]
        },
        {
            artisName: "Michael Jackson",
            members: "Michael Jackson",
            albums: ["Got To Be There", "Ben", "Music & Me", "Forever, Michael", "Off The Wall", "Thriller", "Bad", "Dangerous", "Invincible"]
        },
        {
            artisName: "Elvis Presley",
            members: "Elvis Presly",
            albums: ["Elvis Presley", "Elvis", "Elvis' Christmas Album", "Elvis Is Back", "His Hand In Mine", "Something For Everybody", "Pot Luck", "Elvis For Everyone!", "How Great Thou Art", "From Elvis In Memphis", "From Mephis To Vegas / From Vegas To Memphis", "That's The Way It Is", "Elvis Country", "Love Letters From Elvis", "Elvis Sings The Wonderful World Of Christmas", "Elvis Now", "He Touched Me", "Elvis", "Raised On Rock / For Ol' Times Sake", "Good Times", "Promised Land", "Today", "From Elvis PResly Boulevard, Memphis Tennessee", "Moody Blue"]
        },
        {
            artisName: "Queen",
            members: "Freddie Mercury, Brian May, Roger Taylor, John Deacon",
            albums: ["Queen", "Queen II", "Sheer Heart Attack", "A Night At The Opera", "A Day At The Races", "News Of The World", "Jazz", "The Game"]
        },
        {
            artisName: "Madoonna",
            members: "Madonna",
            albums: ["Madonna", "Like A Virgin", "True Blue", "Like A Prayer", "Erotica", "Bedtime Stories", "Ray Of Light", "Music", "American Life", "Confession On A Dance Floor", "Hard Candy", "MDNA", "Rebel Heart", "Madame X"]
        }
    ]
    await Artist.insertMany(artisSeed)
    console.log(`inserted ${artistSeed.length}`)
}

const createAlbums = async () =>{
    let albumSeed = [   
        {
            albumName: "Please Please Me",
            year: "1963",
            cert: "Platinum"
        },
        {
            albumName: "With The Beatles",
            year: "1963",
            revenue: "Multi-Platinum"
        },
        {
            albumName: "A Hard Days Night",
            year: "1964",
            revenue: "Multi-Platinum"
        },
        {
            albumName: "Beatles For Sale",
            year: "1964",
            revenue: "Platinum"
        },
        {
            albumName: "Help!",
            year: "1965",
            revenue: "Multi-Platinum"
        },
        {
            albumName: "Got To Be There",
            year: "1972",
            revenue: "Gold"
        },
        {
            albumName: "Ben",
            year: "1972",
            revenue: "Silver"
        },
        {
            albumName: "Music & Me",
            year: "1973",
            revenue: ""
        },
        {
            albumName: "Forever, Michael",
            year: "1975",
            revenue: ""
        },
        {
            albumName: "Off The Wall",
            year: "1979",
            revenue: "Double-Diamond"
        },
        {
            albumName: "Elvis Presley",
            year: "1956",
            revenue: "Platinum"
        },
        {
            albumName: "Elvis",
            year: "1956",
            revenue: "Platinum"
        },
        {
            albumName: "Elvis' Christmas Album",
            year: "1957",
            revenue: "4x Platinum"
        },
        {
            albumName: "Elvis Is Back",
            year: "1960",
            revenue: ""
        },
        {
            albumName: "His Hand In Mine",
            year: "1960",
            revenue: ""
        },
        {
            albumName: "Queen",
            year: "1973",
            revenue: "Gold"
        },
        {
            albumName: "Queen II",
            year: "1974",
            revenue: "Gold"
        },
        {
            albumName: "Sheer Heart Attack",
            year: "1974",
            revenue: "Gold"
        },
        {
            albumName: "A Night At The Opera",
            year: "1975",
            revenue: "Triple Platinum"
        },
        {
            albumName: "A Day At The Races",
            year: "1976",
            revenue: "Platinum"
        },
        {
            albumName: "Madonna",
            year: "1983",
            revenue: "Diamond"
        },
        {
            albumName: "Like A Virgin",
            year: "1984",
            revenue: "Double-Diamond"
        },
        {
            albumName: "True Blue",
            year: "1986",
            revenue: "Double-Diamond+"
        },
        {
            albumName: "Like A Prayer",
            year: "1989",
            revenue: "Diamond+"
        },
        {
            albumName: "Erotica",
            year: "1992",
            revenue: "6x Platinum"
        },
    ]
    await Album.insertMany(albumSeed)
    console.log(`inserted ${albumSeed.length} albums`)
}

const run = async () => {
    try{
        await createAlbums()
        //awai createArtist()
    }
    catch (error) {
        console.log(error)
    }
    finally {
        await db.close()
    }
}
run()