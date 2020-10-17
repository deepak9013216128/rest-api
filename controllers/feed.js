
exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'first book', content: 'this is the first post' }]
  })
}

exports.createPost = (req, res, next) => {
  const { title, content } = req.body;

  res.status(201).json({
    id: new Date().toISOString(),
    message: 'post ceated successfully!',
    post: { title, content }
  })
}