import React ,{useState} from 'react'

export default function TextForm(props) {
  //uppercase
const upperCaseClick = (e) => {
    console.log('Uppercase is clicked');
    let newText = text.toUpperCase()
    setText(newText);
    props.showAlert("Converted to Uppercase" , "success")
    e.preventDefault()
}

//lowercase
const lowerCaseClick = ()=>{
  let newText = text.toLowerCase();
  setText(newText)
}

//on click preview
const previewText = ()=>{
  // document.getElementsByClassName('previewArea').
}
//clear text
const clearText = ()=>{
  let clearText = '';
  setText(clearText)
}
// onchange handle
const handleonchange = (event) => {
    console.log('onchange clicked')
    setText(event.target.value)
}
    const [text , setText] = useState('') // array destructuring and string is assigned to a text avriable
  return (
    <div>
      
        <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3 my-3">
    <textarea className="form-control" placeholder='Enter Text here...'  value={text} onChange={handleonchange} style={{backgroundColor : props.mode === 'dark' ? 'gray' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={upperCaseClick}>Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={lowerCaseClick}>Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={previewText}>Preview</button>
  <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>


        </div>
        <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}> 
          <h2>Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters.</p>
          <p>{0.008 * text.split(" ").length} Minutes read (for slow reader)</p>
          <h2>Text Preview</h2>

          <p className='previewArea'>{text.length> 0 ? text : 'Enter something to preview here...'}</p>
        </div>
    </div>
  )
}
