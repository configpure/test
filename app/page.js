"use client"
import { Analytics } from "@vercel/analytics/react"
import Link from 'next/link'
import './home.css'
import wave from './wave.png'
import emoji from './dayandnight.png'
import Image from "next/image";
import React from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"


function Home() {

    const [artistname, setartistname] = React.useState('artistname');
    const [trackname, settrackname] = React.useState('trackname');
    const artist = event => {
        setartistname(event.target.value)
    }
    const track = events => {
        settrackname(events.target.value)
    }


    return (
        <div className="main" id='main'>

            <header>
                
                <a className='Heros' id='Heros' href='/public'>Lyric</a>
                <Image src={emoji} alt={'heelo'} height={32} width={32} />
                <a className='Heros' id='Heross' href='/public'>Show</a>
            </header>

            <main>
                <div className="hero" id='hero1'>The <span>easiest</span></div>
                <div className="hero" id='hero2'>lyrics finder</div>
                <Image className='wave' src={wave} alt={'heelo'}/>
                <div className="inputs">
                    <p id='name'>Artist Name : </p>
                    <input id='artistname' placeholder="اسم خواننده" onChange={artist} />
                    <p id='name2' >Track Name : </p>
                    <input id='songname' placeholder="اسم آهنگ" onChange={track}  />
                    <Link className='bang' id='bang'
                        href={{
                            pathname: '/LyricShow',
                            query: { artistname: `${artistname}`, trakname: `${trackname}` } // the data
                        }}
                    >
                        جستجوی آهنگ
                    </Link>
                </div>
            </main>

            <footer id='social'>
                <div className="copright" id='copright'>
                    © LyricShow Team. 2024
                </div>
                <div className="social">
                    <div className='instagram' id='instagram'>Instagram</div>
                    <div className='twitter' id='twitter'>Twitter</div>
                </div>
            </footer>
            <SpeedInsights />
            <Analytics />

        </div>
    );
}

export default Home;
