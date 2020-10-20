const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blog')

// express app
const app = express()

// connect to mongodb
const dbURI = 'mongodb+srv://beda:testblog123@blog.dncxi.mongodb.net/node-blog'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000))
  .catch(err => console.log(err))

// register view engine ejs
app.set('view engine', 'ejs')

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// blog routes
app.use('/blogs', blogRoutes)

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', {title: 'About'})
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', {title: '404'})
})