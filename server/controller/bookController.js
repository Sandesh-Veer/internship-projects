const { Long } = require("mongodb")

const book = require("../model/book");

const handleAddBookController = async (req, res) => {
    try {
        const data = req.body;

        await book.create(data);

        return res.status(200).json({
            message: "Details added successfully"
        });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: err.message
        });
    }
};

// display all books

const handlegetAllBookController = async (req, res) => {
    try {
        const booklist = await book.find({});

        return res.status(200).json({
            message: "Book details fetched",Booklist:booklist
        });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: err.message
        });
    }
};

// delete book 

const handleDeleteBookController = async (req, res) => {
    try {
        const data= req.body
        const deleted = await book.deleteOne({_id:data.Id});
        console.log("book deleted");
        
        return res.status(200).json({
            message: "Book deleted"
        });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: err.message
        });
    }
};


module.exports = { handleAddBookController,handlegetAllBookController,handleDeleteBookController };