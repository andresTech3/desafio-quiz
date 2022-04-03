
import '../styles/quiz.scss'
import React, { Component, useState,useEffect } from 'react'

export default function Quiz(){

  const [post, setPost] = useState([]);
  const [Puntuacion, setPuntuacion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(()=>{
    apiWeb();
  },[])

   const apiWeb = async () =>{
    const api = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");
    const dataApi = await api.json()
    const respontApi = await dataApi.results;
    setPost(respontApi);
  };

  const resultPregunts = (isCorrect, eve)=>{
    if(isCorrect){
      setPuntuacion(Puntuacion + 1)
    }
    eve.target.classList.add(isCorrect  ? "correct" : "incorrect");
    // if(post === post.length -1){
    //   setIsFinished(true);
    // }
    // else{
    //   setPost(post + 1)
    // }
  }

    return(
      <div>
        {
          post.map((e)=>{
              return(
                <main className="quiz" key="1">
                  <div className="izq" key="2">
                      <div className="categoria" key={"3"}>
                      <h1>{e.category}</h1>
                      </div>
                      <div className="estado"><h3 className="text-estado">{e.difficulty}</h3></div>
                      <div className="title-quiz" key={"4"} ><p>{e.question}</p></div>
                  </div>
                  <div className="der" key={"5"}>
                      <button className="true btn" onClick={(eve)=> resultPregunts(e.correct_answer,eve)} key={"6"}>True</button>
                      <button className="false btn" onClick={(eve)=> resultPregunts(e.incorrect_answers,eve)} key={"7"} >False</button>
                  </div>
                </main>
            )
          })
        }
      </div> 
    )
}




