
import './show.css'

let track_name = 'Lowest In Me'
let artist_name = 'Staind'


async function getData(trakname , artistname) {

    var replaced = artistname.replace("+", "%20");
    var replaceds = trakname.replace("+", "%20");

    let url = 'https://lyrist.vercel.app/api/' + replaceds + '/' + replaced;
    console.log(url);
    const res = await fetch(url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default async function Show({ searchParams }) {

    const data = await getData(searchParams.trakname,searchParams.artistname );
    const lyric = data.lyrics.split('\n')

    return (
        <div className="frame">

            <header className="frame-header">
                <div className="image">
                    <img className="album-artwork"
                         src={data.image}
                         alt='error'/>
                </div>
                <div className="info">
                    <div className="title">{data.title}</div>
                    <div className="subtitle">{data.artist}</div>
                </div>
            </header>

            <div className="frame-lyrics">
                {lyric.map(function(data) {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div>
                            {data}
                        </div>
                    )
                })}
            </div>

            <div className="frame-bg">
                <img className="bg-color album-artwork"
                     src={data.image}/>
            </div>

        </div>
    );
}


