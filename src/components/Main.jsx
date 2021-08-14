import React from "react";


const Main = ({ lang }) => {
  const horizontAlign = {
    padding: '70px 0',
    textalign: 'center'
  }

  return ( 
    <div style={ horizontAlign}>
      <h1>Learning React</h1>
      <p>React looks interesting so far.</p>
      <p>Learning {lang} just got serious.</p>
    </div>
   );
}
 
export default Main;