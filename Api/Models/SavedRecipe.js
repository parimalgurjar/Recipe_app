import mongoose,{modelNames} from "mongoose";
const savedrecipeSchema=new mongoose.Schema({
    recipe:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"recipe",
    }
})
export const SavedRecipe=mongoose.model("SavedRecipe",savedrecipeSchema)
