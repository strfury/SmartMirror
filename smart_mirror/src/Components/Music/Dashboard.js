import {useEffect, useState} from 'react';
import useAuth from './useAuth';
import SpotifyWebApi from 'spotify-web-api-node';
import TimePlayback from './TimePlayback';

const styleSheet = {
    container: {
    },
    item:{
        textAlign: "center",
    }
}

const spotifyApi = new SpotifyWebApi({
    clientId: 'a73d4edf67a14b5abb4b9eb74bc4bdea',
  })

export default function Dashboard({ code }){
    const [currentSong, setCurrentSong] = useState('0');
    const [currentArtist, setCurrentArtist] = useState('0');
    const [currentTime, setCurrentTime] = useState(0);
    const [songLength, setSongLength] = useState(1);
    const accessToken = useAuth(code); 
    useEffect( ()=> {
        if(!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
        const interval = setInterval( async()=> {
            if(!accessToken) return;
            try{
                const response = await spotifyApi.getMyCurrentPlaybackState();
                setCurrentSong((response?.body?.item?.name).toLowerCase());
                setCurrentArtist((response?.body?.item?.artists?.[0]?.name).toLowerCase());
                setCurrentTime((response?.body?.progress_ms));
                setSongLength((response?.body?.item?.duration_ms));
                console.log(response?.body?.item);
            } catch(err){
                console.log(err)
            }

        }, 1000)
        return(()=> {
            clearInterval(interval);
        })

    }, [accessToken])
    return(
        <div style = {styleSheet.container}>
            <h3 style = {styleSheet.item}>now playing:</h3>
            <p style = {styleSheet.item}>{currentSong} - {currentArtist}</p>
            < TimePlayback songLength = {songLength} currentTime = {currentTime}/>
        </div>
    )
}