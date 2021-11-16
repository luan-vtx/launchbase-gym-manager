const postInstructor = (req, res) => {
  const keys = Object.keys(req.body);

  for(const key of keys) {
    if(!req.body[key] || req.body[key] === "") {
      return res.send('Please, fill all fields!');
    }
  }

  return res.send(req.body);
}

module.exports = {
  postInstructor,
}