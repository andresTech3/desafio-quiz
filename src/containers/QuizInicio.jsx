import React, { Component } from 'react';
import "../styles/styleQuiz.scss"
import imgWeb from "../assets/image/principal.png"
export class QuizInicio extends Component {

  render() {
    return (
        <div className='bg-quiz'>
            <div className="content-azul"></div>
            <div className="quiz-content">
                <div className="content-text">
                    <h1 className="text-principal">Welcome to the trivia challenge!</h1>
                    <p className="descrip-quiz">you will be presented with 10 true or false questions</p>
                    <p className="descrip-quiz2">Can you score 100%?</p>
                    <div className="btn">{this.props.btnBegin}</div>
                </div>
                <div className="content-img">
                    <img className="img-quiz" src={imgWeb} alt="imgweb"/>
                </div>
            </div>
            <div className="content-rojo"></div>
        </div>
        
    )
  }
}

export default QuizInicio