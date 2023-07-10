import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $, { data } from 'jquery'
import List from './components/List.jsx'
import AboutUs from './components/AboutUs.jsx'
import Contact from './components/Contact.jsx'
const App = () => {
  const [data, setData] = useState([])
  const [currentView, setCurrentView] = useState('about us')
  useEffect(() => {
    $.ajax({
      url: 'http://localhost:5000/api/SM/students/',
      success: (data) => {
        console.log(data)
        setData(data)
      }, 
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])
  
  const changeView = (view) => {
    setCurrentView(view)
  }

  let content
   if (currentView === 'about') {
    content = <AboutUs />
  } else if (currentView === 'teachers') {
    content = <Teachers />
  } else if (currentView === 'students') {
    content = <List data={data} />
  } else if (currentView === 'grades') {
    content = <Grades />
  } else {
    content = <List data={data} />
  }

  return (
    <div>
    <header className='header'>
      <img className='logo' src="	https://dreamslms-wp.dreamguystech.com/wp-content/themes/dreamslms/assets/images/logo.svg" alt="Logo" width="180" />
      <nav className='nav'>
        <ul className='list'>
          <div className='list-item'>
            <button onClick={() => changeView('about')}>About Us</button>
          </div>
          <div className='list-item'>
            <button onClick={() => changeView('teachers')}>Teachers</button>
          </div>
          <div className='list-item'>
            <button onClick={() => changeView('students')}>Students</button>
          </div>
          <div className='list-item'>
            <button onClick={() => changeView('grades')}>Grades</button>
          </div>
          <div className='list-item'>
            <button onClick={() => changeView('contact')}>Contact Us</button>
          </div>
        </ul>
      </nav>
    </header>
    {content}
  </div>
)
}


ReactDOM.render(<App />, document.getElementById('app'))
