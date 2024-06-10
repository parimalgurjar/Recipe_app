import { Recipe } from "../Models/Recipe.js";
import {SavedRecipe} from '../Models/SavedRecipe.js'
export const add = async (req, res) => {
    const { title, ist, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgUrl } = req.body
    try {
        const recipe = await Recipe.create({
            title,
            ist,
            ing1,
            ing2,
            ing3,
            ing4,
            qty1,
            qty2,
            qty3,
            qty4,
            imgUrl,
            user:req.user,

        })
        res.json({message:"Recipe Created Successfully...!",recipe})
    } catch(error){
        res.json({message:error})

    }
}
export const getAllrecipe=async(req,res)=>{
    const recipe=await Recipe.find()
    res.json({recipe})
}

export const getRecipeById = async (req, res) => {
    const id = req.params.id;
    try {
        let recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.json({ recipe });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getRecipeByUserId=async(req,res)=>{
    const userId = req.params.id;
    try {
        let recipe = await Recipe.find({user:userId});
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.json({ recipe });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }

}


export const SavedRecipeById = async (req, res) => {
    const id = req.params.id;

    try {
        let recipe = await SavedRecipe.findOne({ recipe: id });
        if (recipe) {
            return res.json({ message: "Recipe already exists" });
        } else {
            // If the recipe doesn't exist, create a new SavedRecipe
            await SavedRecipe.create({ recipe: id });
            return res.json({ message: "Recipe saved successfully..!" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export const getSavedRecipe=async(req,res)=>{
    const recipe =await SavedRecipe.find()
    res.json({recipe})
}