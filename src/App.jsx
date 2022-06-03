import axios from 'axios'
import {useEffect} from 'react'


//original
//import {useEffect, useState} from 'react'

import React, {useState} from 'react'

//for modal
import Modal from './Modal/Modal'



const App = () => {

  //save {e} to state
  const [chosenLevel, setChosenLevel] = useState(null) //useState from react
  const [words, setWords] = useState(null)
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [clicked, setClicked] = useState([])
  const [score, setScore] = useState(0)

  //modal 
  const [isOpen, setIsOpen] = useState(false);

  //for dictionaryap
  const [setWord, Dictionary] = useState(null);

const getRandomWords = () =>{

    const options = {
      method: 'GET',
      url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
      params: { level: chosenLevel, area: 'sat' },
      headers: {
        'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
      }
    }
  
    axios.request(options).then((response) => {
      console.log(response.data)
      setWords(response.data)

    }).catch((error) => {
      console.error(error)  
    })
}

console.log(words && words.quizzlist) //if words exists, display words from quizzlist


//useEffect hook happens after the app renders (like a side effect)
//Renders as many time as we wish
useEffect(() => { 
  if (chosenLevel) getRandomWords() //if chosenLevel exists, get random words

}, [chosenLevel]) //if chosen level changes

const checkAnswer = (option, optionIndex, correctAnswer) => {
  console.log(optionIndex, correctAnswer)
  if (optionIndex === correctAnswer){
    setCorrectAnswers([...correctAnswers, option]) //add a new value to an existing array, display correct answer
    setScore((score) => score + 1) //if correct answer set sscore to plus one
  }else{
    setScore((score) => score - 1) //if incorrect answer set score to plus one
  }
  setClicked([...clicked, option]) // option is passed through whether the action is correct or not
}
 
console.log('correctAnswers', correctAnswers)
console.log('clicked', clicked)
  return (
    
    <div className="app">


      {!chosenLevel && <div className="levelSelector"> 
        <h2 className ="wordly_box + below" style={{bottom:"15%"}}>A word association gaming app that helps you improve your vocabulary.</h2>

        <select
          className ="wordly_box2" style={{ marginTop: `${12}%` }}
          name="levels"
          id="levels" value={chosenLevel}
          onChange={(e) => setChosenLevel(e.target.value)}>
          <option value={null}>Select a Level</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
          <option value="4">Level 4</option>
          <option value="5">Level 5</option>
          <option value="6">Level 6</option>
          <option value="7">Level 7</option>
          <option value="8">Level 8</option>
          <option value="9">Level 9</option>
          <option value="10">Level 10</option>
       </select>
      </div>}

     {chosenLevel && words && <div className="questionArea"> 
        <h1 style={{paddingTop:"1.5em"}}>Welcome to level: {chosenLevel} </h1>
        <h3>Your score is: {score}</h3>   

      
        <div>
          <button className style={{padding: "13px 25px"}} onClick={() => setIsOpen(true)}>
            Instructions
          </button>
          {isOpen && <Modal setIsOpen={setIsOpen} />}
      </div>

 
     

        <div className = "questions">
        {words.quizlist.map((question, _questionIndex) =>  /*map out question*/
          (<div key ={_questionIndex} className="questionBox">
            {question.quiz.map((tip, _index) =>( /*map out tip*/
              <p key={_index}>{tip}</p>
            ))}

            <div className={"questionButtons"}>
              {question.option.map((option, optionIndex) => ( /*map out options that has index each (0,1)*/
                  <div key={optionIndex} className="questionButton">
                    <button /*A function inside the button that checks if the answer is correct */
                      disabled={clicked.includes(option)} //if we clicked an array that includes the option mapping, then disable the button

                      /*Add plus one to make index from 0 and 1 to 1 and 2*/
                      onClick={() => checkAnswer(option, optionIndex + 1, question.correct)} /*passed parameters - option, index & correct answer*/
                    >{option}</button>
                    {correctAnswers.includes(option) && <p>Correct!</p>}
                  </div>
              ))}
            </div>
           
           </div>
        ))}

        </div>


       <button onClick={() => setChosenLevel(null)}> Return to Main Menu</button>

      </div>} 
   
    </div>
  )
}

export default App
