import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from "cors"
const app = express();
app.use(bodyParser.json())
app.use(cors({
    
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials: true
}))
//useRouter
app.use("/api", userRouter)
const port = 3000;

//recipe route
app.use('/api', recipeRouter)
mongoose.connect('mongodb+srv://parimal:p9575785155@cluster0.kshskvc.mongodb.net/',
    {
        dbName: "Mern_recipe",

    }
).then(() => {
    console.log("Db is connected");
}).catch((err) => {
    console.log(err.message); 
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

