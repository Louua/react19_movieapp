import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const Card = ({title}) => {
  const[count , setCount]=useState(0)
  const [hasLiked , setHasliked] = useState(false);
  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);



  

  return (
    <div className='card' onClick={()=> setCount(count+1)}> 
    <h2>{title} <br /> {count}</h2>
      <button onClick={()=> setHasliked(true)}>
      {hasLiked ? '❤️ Liked' : '🤍 Like'}
     
      </button>
    </div>
  )
}
const App =() => {
  return (
    <div className='card-container'>
    
      <Card title = "Star Wars " rating={5} isCool={true}  />
      <Card title = "Avatar"/>
      <Card title = "The Lion King"/>

    </div>
  )
 
   
}

export default App
