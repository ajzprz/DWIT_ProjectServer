const express = require('express');
const morgan = require('morgan');
var cors = require('cors')
const connectDatabase = require('./database/connection');
const Post = require('./models/Posts')
const Users = require('./models/User')
const postsRoutes = require('./routes/posts')
const authRoutes = require('./routes/authRoutes')

const app = express();

connectDatabase()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.use('/posts',postsRoutes )
app.use('/user', authRoutes )

app.get('/', async (req,res)=>{
    const Posts = await Post.find()
    res.json( {Posts} )
})
app.get('/users', async (req,res)=>{
    const User = await Users.find()
    res.json( {User} )
})

app.get('*', (req,res)=>{
    res.sendStatus(404)
})

app.listen(8000,()=>{
    console.log('Server is running on port 8000')})