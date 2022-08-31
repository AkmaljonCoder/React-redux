import React, { useEffect, useState } from 'react'
import { useDispatch  } from 'react-redux'

// react redux hooks: useDispatch , useSelector ,  useStore;

const Home = ({render,setrender}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>dispatch({type:'ADD',payload:json}));
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <input type="text" placeholder='name:' />
      <button>POST</button>
    </div>
  )
}

export default Home