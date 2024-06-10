import React, { useContext } from 'react';
import { AppContext } from '../context/App_Context';
import { ToastContainer, toast,Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate=useNavigate()
  const { recipe,savedRecipeById } = useContext(AppContext);

  const saved = async (id) => {
    try {
      const result = await savedRecipeById(id);
      toast.success(result.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    } catch (error) {
      console.error("Error saving recipe:", error);
      toast.error("Failed to save recipe. Please try again later.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  };

  return (
    <>
    <ToastContainer/>
    <div className=" text-center mx-auto hero-container" style={{ width: "85%", }}>
      <div className="row d-flex justify-content-center align-item-center">
        {recipe.map((data) => (
          <div key={data._id} className="col-md-3 my-3">
            <div className="card bg-dark" style={{ width: '18rem', height: "22rem", padding: "20px", }}>
              <div className='d-flex justify-content-center align-items-center'>
                <img src={data.imgUrl} className="card-img-top" alt={data.title} style={{ width: '200px', height: "210px", objectFit: "cover", borderRadius: "8px", border: "2px solid white" }} />
              </div>


              <div className="card-body text-white">
                <h5 className="card-title">{data.title}</h5>
                <div className='my-3'>
                <div className="btn btn-primary mx-3"onClick={()=>saved(data._id)}>Save</div>
                <div className="btn btn-warning" onClick={()=>navigate(`/${data._id}`)}>View more</div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Home;
