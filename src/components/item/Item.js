import {useState} from 'react'
import "./Item.css"

const Item = ({card}) => { //!props.card daolabilr süslüsüz
  const [showLogo,setShowLogo] = useState(true)
   
  
  return (
    <div className="card" onClick={()=>setShowLogo(!showLogo)}>
       {showLogo ? (
       <div> 
        <img className='card-logo' src={card.img} alt="logo" />
        <h3 className='card-title'>{card.name}</h3>
        </div> 
        )
        :
        (
 
    <ul className='list'>
        {
            card.options.map((opt,index)=>{
                return <li key={index}>{opt}</li>
            })
        }

    </ul>
    )}
    </div>
  )
}

export default Item