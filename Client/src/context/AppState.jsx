import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AppContext } from './App_Context.jsx'
import Login from '../components/Login.jsx'
function AppState(props) {

  const url = "http://localhost:3000/api"
  const [token, setToken] = useState("")
  const [recipe, setrecipe] = useState([])
  const [savedRecipe, setsavedRecipe] = useState([])
  const [user, setuser] = useState([])
  const [userId,setuserId]=useState("")
  const [userRecipe,setuserRecipe]=useState([])
  const [isAuthenticated,setAuthenticated]=useState(false)
  useEffect(() => {
    const fetchRecipe = async () => {
      const api = await axios.get(`${url}/`, {

      }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
      //console.log(api.data.recipe)
      setrecipe(api.data.recipe)
    }
    fetchRecipe()
    getSavedRecipeById();
    profile(),
    recipeByUser(userId)
  }, [token,userId])
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token)
    }
    const tokenFromLocalStorage = localStorage.getItem("token", token)
    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage)
      setAuthenticated(true)
    }
  }, [token])
  //register
  const register = async (name, email, password) => {
    const api = await axios.post(`${url}/register`, {
      name, email, password
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    return api
  }

  const login = async (email, password) => {
    const api = await axios.post(`${url}/login`, {
      email, password
    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    setToken(api.data.token)
    setAuthenticated(true)
    return api
  }


  //addrecipe
  const addRecipe = async (
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
  ) => {
    const api = await axios.post(`${url}/add`, {
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
    }, {
      headers: {
        "Content-Type": "application/json",
        Auth: token
      },
      withCredentials: true
    })
    return api;
  };
  //recipe by id
  const getRecipeById = async (id) => {
    const api = await axios.get(`${url}/${id}`, {

    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    return api;
  }

  //save recipe by id
  const savedRecipeById = async (id) => {
    const api = await axios.post(`${url}/${id}`, {}, {

    }, {
      headers: {
        "Content-Type": "application/json",


      },
      withCredentials: true
    })
    console.log(api)
    return api;

  }
  //get saved recipe
  const getSavedRecipeById = async () => {
    const api = await axios.get(`${url}/saved`, {

    }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    })
    console.log(api.data.recipe)
    setsavedRecipe(api.data.recipe)
  }
  //profile
  const profile = async () => {
    const api = await axios.get(`${url}/user`, {

    }, {
      headers: {
        "Content-Type": "application/json",
        Auth:token,
      },
      withCredentials: true
    })
    //console.log("this is user profile",api.data.user)
    setuserId(api.data.user._id)
    setuser(api.data.user)
  }

  //get recipe ny userId
  const recipeByUser = async (id) => {
      const api = await axios.get(`${url}/user/${id}`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      setuserRecipe(api.data.recipe)
      
  }
  const logOut=()=>{
    localStorage.removeItem("token",token)
    setToken("")
    setAuthenticated(false)
  }

  return (
    <AppContext.Provider value={{
      login,
      register,
      addRecipe,
      recipe,
      getRecipeById,
      savedRecipeById,
      savedRecipe,
      userRecipe,
      logOut,
      user,
      isAuthenticated,setAuthenticated,
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState
