import express from 'express';
import cors from 'cors';
import { socialMediaData } from './Data/SocialMedia.js';
import { blogs } from './Data/Blog.js';

const app = express()
app.use(cors());
const port = 3000

app.get("/" , (request , response) => {
    return response.json({
        message: "Hello, World!"
    })
})

app.get("/socialMedia" , (request , response) => {
    return response.json(socialMediaData)
})

app.get("/blogs" , (request , response) => {
    return response.json(blogs)
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})