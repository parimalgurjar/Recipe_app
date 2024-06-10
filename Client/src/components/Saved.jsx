import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/App_Context'
import FetchRecipeById from "../components/FetchRecipeById"

function Saved() {
  const { savedRecipe } = useContext(AppContext)
  
  return (
    <div>
      <div className="row container mx-auto my-3">
        {savedRecipe?.map((data) => (
          <FetchRecipeById key={data.recipe} id={data.recipe} />
        ))}
      </div>
    </div>
  )
}

export default Saved
                                                                                                                                                                                                                                                                                                       