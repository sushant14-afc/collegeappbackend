// exports.showInfo = (req,res) =>{
//     res.send("Message from controller")
// }


// exports.showMessage = (req,res)=>{
//     res.send("This is another message from controller")
// }

const Category = require("../Model/category")


// to add category
exports.addCategory = async (req, res) => {
    let category = new Category(req.body)
    Category.findOne({ category_name: category.category_name }, async (error, data) => {
        if (data == null) {
            category = await category.save()
            if (!category) {
                return res.status(400).json({ error: "something went wrong" })
            }
            else {
                res.send(category)
            }
        }
        else{
            return res.status(400).json({ error: "category already exists." })

        }
    })

}

// to show all category
exports.showCategories = async (req, res) => {
    let categories = await Category.find()
    if (!categories) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(categories)
    }
}

// to view a category
exports.findCategory = async (req, res) => {
    let category = await Category.findById(req.params.id)
    if (!category) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(category)
    }
}

// to update a category
exports.updateCategory = async (req, res) => {
    let category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            category_name: req.body.category_name
        },
        { new: true }
    )
    if (!category) {
        return res.status(400).json({ error: "something went wrong" })
    }
    else {
        res.send(category)
    }
}

// to delete a category
exports.deleteCategory = (req, res) => {
    let category = Category.findByIdAndRemove(req.params.id)
        .then(category => {
            if (!category) {
                return res.status(400).json({ error: "category not found" })
            }
            else {
                return res.status(200).json({ msg: "category deleted successfully" })
            }
        })
        .catch(error => res.status(400).json({ error: error }))
}