const { Validator } = require('node-input-validator');

const recipeSchema = {
        recipe_title: 'required|maxLength:50',
        short_description: 'required',
        recipe: 'required',
        // user_id: 'required',
        category: 'required',
        prep_time: 'required',
        no_people: 'required'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let res = await v.check();
    if (!res) {
        throw v.errors;
    }
    return res;
};

module.exports = {
    recipeSchema,
    validate
};