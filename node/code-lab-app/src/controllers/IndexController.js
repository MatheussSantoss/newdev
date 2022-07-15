exports.index = (req, res) => {
  console.log('API is available');
  return res.status(200).send('API is available');
}