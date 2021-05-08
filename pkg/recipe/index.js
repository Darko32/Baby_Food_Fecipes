const mongoose = require('mongoose');

const recipe = mongoose.model(
    'recipe',
    {
        recipe_title: String,
        short_description: String,
        recipe: String,
        user_id: String,
        category: String,
        prep_time: Number,
        no_people: Number,
        likes:{type: Number, default:0},
        img: String,
        created: { type: Date, default: Date.now },
        _deleted: Boolean
    },
    'recipes',
);

const save = async (data, uid) => {
    let b = new recipe({ ...data, user_id: uid, _deleted: false });
    return await b.save();
};

const getOne = async (id) => {
    return await recipe.findOne({ _id: id, _deleted: false });
};

const getAll = async (uid) => {
    return await recipe.find({ user_id: uid, _deleted: false });
};

const getAllA = async () => {
    return await recipe.find({  _deleted: false }).sort({likes: -1}).limit(6);
};


const getAllPopular = async () => {
    return await recipe.find({ _deleted: false }).sort({ rating: -1 }).limit(9);
};

const getAllLatest = async () => {
    return await recipe.find({ _deleted: false }).sort({ created: -1 }).limit(3);
};

const getByCategory = async (cat) => {
    let data = await recipe.find({ category: cat, _deleted: false }).sort({ rating: -1 });
    return data;
};

const getAllBreakfast = async () => {
    return (await recipe.find({ _deleted: false })).filter(x => x.category === "breakfast");
};

const getAllBrunch = async () => {
    return (await recipe.find({ _deleted: false })).filter(x => x.category === "brunch");
};

const getAllLunch = async () => {
    return (await recipe.find({ _deleted: false })).filter(x => x.category === "lunch");
};

const getAllDinner = async () => {
    return (await recipe.find({ _deleted: false })).filter(x => x.category === "dinner");
};

const updateRate = async (id, data) => {
    let recipeD = await recipe.updateOne({ _id: id }, data);
    return recipeD.nModified !== 0;
}

const update = async (id, data) => {
    return await recipe.updateOne({ _id: id }, data);
};

const updatelike = async (id) => {
    return await recipe.updateOne({ _id: id },  {$inc : {'likes' : 1}});
};

const remove = async (id) => {
    return await recipe.updateOne({ _id: id }, { _deleted: true });
};

module.exports = {
    save,
    getOne,
    getAll,
    getAllA,
    getAllPopular,
    getAllLatest,
    updateRate,
    update,
    updatelike,
    remove,
    getByCategory,
    getAllBreakfast,
    getAllBrunch,
    getAllLunch,
    getAllDinner,
};