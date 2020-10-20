const Blog = require('../models/blog')

const index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('blog/index', { title: 'Home', blogs: result })
    })
    .catch(err => {
      console.log(err)
    })
}

const create = (req, res) => {
  res.render('blog/create', { title: 'Create a new blog' });
}

const store = (req, res) => {
  const blog = new Blog(req.body)
  blog.save()
    .then(() => {
      res.redirect('/blogs')
    })
    .catch(err => {
      console.log(err)
    })
}

const edit = (req, res) => {
  const id = req.params.id
  Blog.findById(id)
    .then(result => {
      res.render('blog/edit', { title: 'Edit', blog: result})
    })
    .catch(err => {
      console.log(err)
      res.render('404', { title: 'Blog not found' })
    })
}

const update = (req, res) => {
  const id = req.params.id
  Blog.findByIdAndUpdate(id, req.body, {new:true})
    .then(() => {
      res.redirect('/blogs')
    })
    .catch(err => {
      console.log(err)
    })
}

const show = (req, res) => {
  const id = req.params.id
  Blog.findById(id)
    .then(result => {
      res.render('blog/show', { title: 'Show', blog: result })
    })
    .catch(err => {
      console.log(err)
      res.render('404', { title: 'Blog not found' })
    })
}

const destroy = (req, res) => {
  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' })
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  show,
  destroy
}