import React, { Component } from 'react'

const dataApi = ()=>{
  dataFetch = async () =>{
    const data = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    const dataApi = await data.json();
    return dataApi
  }
}


export default dataApi



