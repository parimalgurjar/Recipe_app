import React,{useContext} from 'react'
import { AppContext } from '../context/App_Context'


function Profile() {
  const {user,userRecipe,}=useContext(AppContext)
  return (
    <>
      <div className="contaniner text-center my-3">
      <h1>Welcome,{user.name}</h1>
      <h2>{user.gmail}</h2>
      </div>
      <div className="container">
      <div className=" text-center mx-auto hero-container" style={{ width: "85%", }}>
      <div className="row d-flex justify-content-center align-item-center">
        {userRecipe.map((data) => (
          <div key={data._id} className="col-md-3 my-3">
         
              <div className='d-flex justify-content-center align-items-center'>
                <img src={data.imgUrl} className="card-img-top" alt={data.title} style={{ width: '200px', height: "210px", objectFit: "cover", borderRadius: "8px", border: "2px solid white" }} />
              </div>


              <div className="card-body text-white">
                <h5 className="card-title">{data.title}</h5>
               
              </div>
            </div>
        ))}
      </div>
    </div>
      </div>
    </>
  )
}

export default Profile
