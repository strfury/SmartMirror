import React from 'react';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a73d4edf67a14b5abb4b9eb74bc4bdea&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-currently-playing%20user-read-email%20user-read-playback-state%20user-modify-playback-state"

export default function Login(){
    return(
        <div>
            <a href={AUTH_URL}>
                Login With Spotify
            </a>
        </div>
    )
}