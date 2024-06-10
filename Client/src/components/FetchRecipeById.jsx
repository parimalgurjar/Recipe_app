import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/App_Context'
import { Link,useLocation } from 'react-router-dom';
function FetchRecipeById({ id }) {
  const location=useLocation()

  const { getRecipeById } = useContext(AppContext);
  const [recipe, setrecipe] = useState("")

  useEffect(() => {
    const fetchRecipe = async (id) => {
      const result = await getRecipeById(id)

      setrecipe(result.data.recipe)
    }
    fetchRecipe(id)
  }, [id])
  return (
    <div>

      <div className='main-container'>
        <div className='text-center'>
          <img src={recipe.imgUrl} className="card-img-top" alt={recipe.title} style={{ width: '200px', height: "210px", objectFit: "cover", borderRadius: "8px", border: "2px solid white" }} />
          <br /> <h3>{recipe.title}</h3>
        </div >
        {location.pathname !== '/saved' &&(
          <>
          <div className='mini-main'>
          <div className='main-left'>
            <h4>{recipe.ing1}-{recipe.qty1}</h4>
            <h4>{recipe.ing2}-{recipe.qty2}</h4>
            <h4>{recipe.ing3}-{recipe.qty3}</h4>
            <h4>{recipe.ing4}-{recipe.qty4}</h4>

          </div>
          <div className='main-right'>
            <p>{recipe.ist}</p>
            <button><Link to="/">Back To Home</Link></button>

          </div>
        </div>

          </>
        )}
        


      </div>
    </div>

  )
}

export default FetchRecipeById
