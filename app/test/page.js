import {detectTypo} from "next/dist/lib/detect-typo";

async function getData() {
    const res = await fetch('https://lyrist.vercel.app/api/Summer/Blackfield')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    const data = await getData();
    console.log()
    const lyric = data.lyrics.split('\n')

    return (
        <>
            {lyric.map(function(data) {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div>
                        {data}
                    </div>
                )
            })}
        </>
    )
}