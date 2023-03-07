import { useRef } from 'react';
import YouTube from 'react-youtube';

const MainYoutube = () => {
    const movie = useRef(null);
    const option = {
        height: '600',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            mute: 1,
        },
    }


    const playVideo = e => {
        e.target.playVideo();
    }

    const pauseVideo = () => {
        console.log(movie)
    }
    return (
        <>
            <YouTube videoId="G3dBG5zC7SA" opts={option} onReady={playVideo} ref={movie} />
            <button>play</button>
            <button onClick={pauseVideo}>pause</button>
        </>
    )
}

export default MainYoutube;