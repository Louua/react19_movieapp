import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const Card = ({title}) => {
  return (
    <div className='card'> 
      <h2> {title}</h2>
    </div>
  )
}
const App =() => {
  const [hasLiked , setHasliked] = useState(false);
  return (
    <div className='card-container'>
    
      <Card title = "Star Wars " rating={5} isCool={true}  />
      <Card title = "Avatar"/>
      <Card title = "The Lion King"/>

    </div>
  )
 
   
}

export default App
