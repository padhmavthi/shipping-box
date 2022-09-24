import React , {useState } from 'react'



function ShippingForm(props) {
    const [Title,setTitle] = useState("");
    const [Weight,setWeight] = useState("");
    const [Color,setColor] = useState("");
    const [Place,setPlace] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const data={
            Title: Title,
            Weight: Weight,
            Place: Place,
            Color:Color,
            
        }
        props.addToListCallback(data)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>ShippingForm</h1>
        <input type="text" value={Title} placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
        <input type="number"  value={Weight} placeholder="Weight" onChange={(e) => setWeight(e.target.value)} ></input><br></br>
        <label>color</label><br></br>
        <input Type="Color" value={Color} placehlder="Color" onChange={(e) => setColor(e.target.value)}></input><br></br>
        <input type="text" placeholder="Place"  onChange={(e) => setPlace(e.target.value)}></input><br></br>

        <button>submit</button><br></br>

        



        </form>
        
    </div>
  ) 
}

export default ShippingForm