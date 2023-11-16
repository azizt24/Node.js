const todo = [
  {id: 1, desc: "I am tareq"},
  {id: 2, desc: "I am aziz"},
  {id: 3, desc: "I am mahran"}
];
const itemsController = {
  getAllItems: (req, res) => {
      res.send(todo);
  },
  getItem: (req, res) => {
      const itemId = req.params.id;
      const item = todo.find(to => to.id === parseInt(itemId));
      item ? res.status(200).send(item) : res.status(404).send("not found");
  },
  createItem: (req, res) => {
      const id = todo.length + 1;
      const desc = req.body.desc
      todo.push({id: id, desc: desc});
      res.status(201).send({id: id, desc: desc});
  },
  updateItem:  (req, res) => {
      const itemId = req.params.id;
      const item = todo.find(to => to.id === parseInt(itemId));
      if(!item){
          return res.status(404).send("not found")
      }
      item.desc = req.body.desc;
      res.status(200).send(item);
  },
  deleteItem: (req, res) => {
      const tempItem = todo.findIndex((element) => element.id === parseInt(req.params.id));
      if (tempItem == -1) {
        return res.status(400).send("element not found");
      }
      todo.splice(tempItem, 1);
      res.status(200).send(todo);
  },
}
module.exports = itemsController;