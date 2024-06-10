
import { useParams } from 'react-router-dom'
import FetchRecipeById from './FetchRecipeByid'
function Detail() {
    const {id}=useParams()
  return (
    <div>
      <FetchRecipeById id={id}/>
    </div>
  )
}

export default Detail
