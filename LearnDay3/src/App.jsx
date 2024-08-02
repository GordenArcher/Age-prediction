import { useState } from 'react'
import Axios from 'axios';
import './App.css'

function App() {

  const [age, setAge] = useState(null);
  const [name, setname] = useState('')

  // useEffect(() => {

  // }, [])

  function handleINput(event) {
    setname(event.target.value)
  }

  function fetchData() {
    Axios.get(`https://api.agify.io/?name=${name}`).then((data) => {
      setAge(
        data.data
      )
    })

    // .then(data => {console.log(data)})
  }

  return (
    <>
    <div>
      <h1>Age Prediction</h1>
      <input type="text" placeholder='Ex: Gorden...' onChange={handleINput}/>
      <button onClick={fetchData} >predict Age</button>
    </div>

    <p>Your predicted age is {age?.age}</p>
    <p>Your predicted name is {age?.name}</p>
    <p>Your predicted count is {age?.count}</p>
    </>
  )
}

export default App
