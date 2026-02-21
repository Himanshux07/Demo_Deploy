require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello')
}) 

app.get('/bgmi', (req, res) => {
  res.send('BGMI is a popular battle royale game developed by Krafton. It is the Indian version of PUBG Mobile, which was banned in India in 2020. BGMI offers similar gameplay and features as PUBG Mobile, but with some modifications to comply with Indian regulations. The game has gained a large player base in India and continues to be popular among gamers.')
})

app.get('/yt', (req, res) => {
  res.send('YouTube is a popular video-sharing platform that allows users to upload, view, and share videos. It was founded in 2005 and has since become one of the most visited websites in the world. YouTube offers a wide range of content, including music videos, tutorials, vlogs, and more. It also provides a platform for content creators to monetize their videos through advertising and sponsorships.')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

