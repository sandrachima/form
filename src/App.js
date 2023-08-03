//import logo from './logo.svg';
import './App.css';
import React from 'react';


function App () {


 
const [FormData, setFormData] = React.useState({
  email:'',
  password:'',
  confirmPassword:'',
  joinedNewsletter:'false'
})



function handleChange(event) {
  const {name, value, type, checked} = event.target
  
 //setFormData
  setFormData(prevFormData => 
    ({ ...prevFormData,
  [name]:type === 'checked' ? checked : value
}))

}
console.log(FormData)

function handleSubmit(event){
  event.preventDefault(event)
  if (FormData.password === FormData.passwordConfirm){
    console.log('Successfully signed up')
  }
    else {
      console.log('password does not match')
      return
    }

    if(FormData.joinedNewsletter){
      console.log('thanks for signing up for our newsletter')
    }
  }



  return (
  
  <div className="form-container">
   <form className='form' onSubmit={handleSubmit}>
    <input  type = 'email'
    placeholder = 'Email address'
    className = 'form-input'
    name = 'email'
    onChange = {handleChange}
    value={FormData.email} />
   
  
    
    <input  type = 'password'
    placeholder = 'password'
    className = 'form-input'
    name = 'password'
    onChange = {handleChange}
    value={FormData.password} />



    <input  type = 'password'
    placeholder = 'confirm password'
    className = 'form-input'
    name = 'passwordConfirm'
    onChange = {handleChange}
    value={FormData.passwordConfirm} />



   <div className='form-marketing'>
    <input 
    id='okayToEmail'
    type='checkbox'
    name= 'joinNewsLetter'
    onChange={handleChange}
    value={FormData.password} 
    checked ={FormData.joinedNewsletter}
    />


  <label htmlFor='okayToEmail' className='news'>i want to join the newsletter</label>
  </div> 
  <button className='submit'>Sign up</button>
   

      </form>
     </div>
     
  )

  }

export default App;
