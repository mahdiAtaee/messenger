exports.register = (req, res) => {
  const userData = req.body;
  res.send(userData);
};
