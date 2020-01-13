const todos = ['drink wine', 'party', 'code'];
const controller = {
    get: (req, res) => {
        res.status(200).send(todos);
    }, 
    post: (req, res) => {
        let { todo } = req.body; // todo = req.body.todo
        todos.push(todo);
        res.status(201).send(`posted todo ${todo}`);
    },
    delete: (req, res) => {
        let { index } = req.params;
        let deleted = todos.splice(index, 1);
        res.status(200).send(`deleted todo ${deleted}`);
    }
}

module.exports = controller;