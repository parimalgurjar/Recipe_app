import express from 'express';
import { SavedRecipeById, add, getAllrecipe,getRecipeById, getRecipeByUserId, getSavedRecipe } from '../controllers/recipe.js';
import { Authenticate } from '../middlewares/auth.js';
const router = express.Router();
router.post('/add',Authenticate,add)

// get all recipe
router.get('/',getAllrecipe)

//get all sved recipe
router.get("/saved",getSavedRecipe)
//get recipe by id
router.get("/:id",getRecipeById)

//get recipe by usreid
router.get('/user/:id',getRecipeByUserId)

//saved recipe by id
router.post('/:id',Authenticate,SavedRecipeById)


export default router