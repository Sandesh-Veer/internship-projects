const addbook = (req, res) => {
    const data = req.body;

    console.log("Book Name:", data.bookname);
    console.log("Author:", data.bookauthor);
    console.log("Price:", data.bookprice);
    console.log("Publish Date:", data.publishdate);

    res.send("book added");
};

module.exports = { addbook }