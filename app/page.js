'use client'

import './home.css'
import wave from  './wave.png'
import emoji from './emoji.png'
import Image from "next/image";

let theme = 'white'
function changetheme() {

    if (theme === 'white') {
        document.getElementById('Heros').style.color = 'white';
        document.getElementById('Heross').style.color = 'white';
        document.getElementById('main').style.backgroundColor = 'black';
        document.getElementById('button').style.backgroundColor = 'black';
        document.getElementById('hero1').style.color= 'white';
        document.getElementById('hero2').style.color = 'white';
        document.getElementById('name').style.color = 'white';
        document.getElementById('name2').style.color = 'white';
        document.getElementById('social').style.backgroundColor = '#1e1e1e';
        document.getElementById('songname').style.backgroundColor = '#1e1e1e';
        document.getElementById('artistname').style.backgroundColor = '#1e1e1e';
        document.getElementById('instagram').style.color = 'white';
        document.getElementById('twitter').style.color = 'white';
        document.getElementById('copright').style.color = 'white';
        theme = 'black'
    } else if (theme === 'black') {
        document.getElementById('Heros').style.color = 'black';
        document.getElementById('Heross').style.color = 'black';
        document.getElementById('main').style.backgroundColor = 'white';
        document.getElementById('button').style.backgroundColor = 'white';
        document.getElementById('hero1').style.color= 'black';
        document.getElementById('hero2').style.color = 'black';
        document.getElementById('name').style.color = 'black';
        document.getElementById('name2').style.color = 'black';
        document.getElementById('social').style.backgroundColor = '#F2F2F2';
        document.getElementById('songname').style.backgroundColor = '#F2F2F2';
        document.getElementById('artistname').style.backgroundColor = '#F2F2F2';
        document.getElementById('instagram').style.color = 'black';
        document.getElementById('twitter').style.color = 'black';
        document.getElementById('copright').style.color = 'black';
        theme = 'white'
    }





}
function Home() {



    return (
        <div className="main" id='main'>

            <header>
                <a className='Heros' id='Heros' href='/'>Lyric</a>
                <button id='button' onClick={changetheme}>  <Image src={emoji} alt={'heelo'} height={32} width={32} />  </button>
                <a className='Heros' id='Heross' href='/'>Show</a>
            </header>

            <main>
                <div className="hero" id='hero1'>The <span>easiest</span></div>
                <div className="hero" id='hero2'>lyrics finder</div>
                <Image className='wave' src={wave} alt={'heelo'}/>
                <div className="inputs">
                    <p id='name'>Artist Name : </p>
                    <input id='artistname'/>
                    <p id='name2' >Track Name : </p>
                    <input id='songname'/>
                    <button className='bang' id='bang'>Bang!</button>
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

        </div>
    );
}

export default Home;
