import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import AddTeahcers from './components/Teachers/AddTeachers.js'
import axios from 'axios'
import Teachers from './components/Teachers/Teachers.js'
import AddGrade from './components/Teachers/Grade/AddGrade.js'
import Grade from './components/Teachers/Grade/Grade.js'

const App = () => {
  const [datas, setDatas] = useState([])
  const [grades,setGrades]=useState([])
  const [refrech,setRefrech]=useState(false)
  ///fetch data grade///
  useEffect(() => {
    fetchGrade()
  }, [!refrech])

  const fetchGrade=(()=>{
axios.get("//URL")
.then((response) => {
  setGrades(response.data);
})

.catch((error) => console.log(error));
})
///fetch data teacher///
  useEffect(() => {
    fetchData()
  }, [!refrech])

  const fetchData=(()=>{
axios.get("//URL")
.then((response) => {
  setDatas(response.data);
})
.catch((error) => console.log(error));
})
  return (
    <div>
      <h1>TeachersList</h1>
      <AddTeahcers />
      <Teachers data={datas} />
      <AddGrade/>
      <Grade datas={grades}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
