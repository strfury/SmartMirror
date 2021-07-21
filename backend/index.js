const express = require('express');
const app = express();
const SpotifyWebApi = require("spotify-web-api-node");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/build'));

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/build/index.html');
})

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:8080',
      clientId: 'a73d4edf67a14b5abb4b9eb74bc4bdea',
      clientSecret: 'fcb99192a22b49169cad4084e14d3e73',
      refreshToken
  })

  spotifyApi.refreshAccessToken().then(
      (data) => {
          res.json({
              accessToken: data.body.accessToken,
              expiresIn: data.body.expiresIn
          })
      }).catch( () => {
          res.sendStatus(400);
      })
})

app.post('/login', (req, res) => {
  // console.log('hello world')
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:8080',
    clientId: 'a73d4edf67a14b5abb4b9eb74bc4bdea',
    clientSecret: 'fcb99192a22b49169cad4084e14d3e73',
  })

  spotifyApi.authorizationCodeGrant(code).then(data =>{
      res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
      })
  }).catch((error) => {
      console.log(error)
      res.sendStatus(400);
  })
})

app.listen(8080,()=>{console.log("Server starting on port 8080")});