require('../models/database');
const Category = require('../models/Category');

/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {
<<<<<<< HEAD
    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);

        res.render('index',{ title: 'Cooking Blog - Home', categories });
    } catch(error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }

}

/**
 * GET /categories
 * Categories 
*/
exports.exploreCategories = async(req, res) => {
    try {
      const limitNumber = 20;
      const categories = await Category.find({}).limit(limitNumber);
      res.render('categories', { title: 'Cooking Blog - Categoreis', categories } );
    } catch (error) {
      res.satus(500).send({message: error.message || "Error Occured" });
    }
  }


=======
    res.render('index',{ title: 'Cooking Blog - Home' });
}

async function insertDummyCategoryData(){
  try {
    await Category.insertMany([
      {
        "name": "Thai",
        "image": "thai-food.jpg"
      },
      {
        "name": "American",
        "image": "american-food.jpg"
      }, 
      {
        "name": "Chinese",
        "image": "chinese-food.jpg"
      },
      {
        "name": "Mexican",
        "image": "mexican-food.jpg"
      }, 
      {
        "name": "Indian",
        "image": "indian-food.jpg"
      },
      {
        "name": "Spanish",
        "image": "spanish-food.jpg"
      }
    ]);
  } catch (error) {
    console.log('err', + error)
  }
}

insertDummyCategoryData();
>>>>>>> cbe9edfa8f04401520b5731e8fc7145d0a742f6d
