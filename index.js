const express = require('express')
const blogRoutes = require('./routes/blog')

// express app
const app = express()

// register view engine ejs
app.set('view engine', 'ejs')

// listen for request
app.listen(3000)

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