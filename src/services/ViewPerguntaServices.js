const { Perguntas } = require('../models/index');

const createQuestion = async (title, description) => {
  try {
    const response = await Perguntas.create({ title, description });
    if (response) return true;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createQuestion,
};
