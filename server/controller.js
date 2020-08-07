module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db')
    db.get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Did not work" });
        console.log(err)
      });
  },
  create: (req, res) => {
    const db = req.app.get('db');
    const { image_url, name, price } = req.body;
    db.create_product([image_url, name, price])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Did not work" });
        console.log(err)
      });
  },
}