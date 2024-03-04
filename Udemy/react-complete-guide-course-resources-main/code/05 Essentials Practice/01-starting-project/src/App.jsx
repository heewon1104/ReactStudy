import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12
  })

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    console.log(userInput);
    setUserInput(prevUsetInput =>{
        const updatedValue = {
            ...prevUsetInput,
            [inputIdentifier] : +newValue
        }
        console.log(updatedValue);
        return updatedValue;
    })
}

  return (<>
    <Header></Header>
    <UserInput userValue={userInput} onChangeInput={handleChange}></UserInput>
    {inputIsValid && <Result userValue={userInput}></Result>}
    {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
  </>
  )
}

export default App
