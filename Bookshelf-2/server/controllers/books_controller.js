
var books = [];
var id = 0;

module.exports = {
    create: (req, res) => {
        const { title, author } = req.body;
        books.push( { id, title, author } );
        id++;
        res.status(200).send( books );
    },
    read: (req, res) => {
        res.status(200).send( books );
    },
    update: ,
    delete:

}