

const index = (req, res) => {
  res.render('blog/index', {title: 'Home'})
}

const create = (req, res) => {
  res.render('blog/create', {title: 'Create'})
}

const store = (req, res) => {

}

const show = (req, res) => {
  res.render('blog/show', {title: 'Show'})
}

const destroy = (req, res) => {

}

module.exports = {
  index,
  create,
  store,
  show,
  destroy
}