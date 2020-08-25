import React from 'react';


const heading ={
    color: 'lightslategrey',
    fontSize: '50px',   
    margin: '0',
    paddingTop: '50px',
    paddingBottom: '50px'

}

function Inline(){
  return(
    <div>
      <h1 style={heading}>Currency Converter</h1>
    </div>
  )
}

export default Inline