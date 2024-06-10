import React, { useContext, useState } from 'react';
import { AppContext } from '../context/App_Context';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
function AddRecipe() {
  const navigate = useNavigate()
  const { addRecipe } = useContext(AppContext)
  const [formData, setformData] = useState({
    title: "",

    ist: "",
    ing1: "",
    ing2: "",
    ing3: "",
    ing4: "",
    qty1: "",
    qty2: "",
    qty3: "",
    qty4: "",
    imgUrl: "",


  })

  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const {
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
      imgUrl

    } = formData;
    const result = await addRecipe(
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
      imgUrl
    )
    //console.log(result)
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
    //console.log(result.data)
    setTimeout(() => {
      navigate('/')

    }, 1500)
  }
  return (
    <>
      <ToastContainer
      />
      <div className="container my-5 p-4" style={{
        width: "30%",
        border: "2px solid yellow",
        borderRadius: "10px"
      }}>
        <h2 className='text-center'>AddRecipe</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleInputEmail1" name='title'
              value={formData.title}
              onChange={onChangeHandler} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Instrution</label>
            <input type="text" className="form-control" id="exampleInputEmail1" name='ist' value={formData.ist}
              onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ing 1</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='ing1'
              value={formData.ing1}
              onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ing 2</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='ing2'
              value={formData.ing2}
              onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ing 3</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='ing3'
              value={formData.ing3}
              onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Ing 4</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='ing4'
              value={formData.ing4}
              onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">qty 1</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='qty1' 
            value={formData.qty1} onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">qty 2</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='qty2'
              value={formData.qty2}
              onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">qty 3</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='qty3'
              value={formData.qty3} onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">qty 4</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='qty4'
              value={formData.qty4} onChange={onChangeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">img url</label>
            <input type="text" className="form-control" id="exampleInputPassword1" name='imgUrl'
              value={formData.imgUrl} onChange={onChangeHandler} />
          </div>
          <div className="container d-grid col-5">

            <button type="submit" className="btn btn-primary my-3">Add Recipe</button>

          </div>
        </form>
      </div>
    </>
  );
}

export default AddRecipe;
