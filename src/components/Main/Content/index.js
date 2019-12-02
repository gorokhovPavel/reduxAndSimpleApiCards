import React, {useState} from 'react'
import './style.css'

function Content() {
  //const [menuItem, setMenuItem] = useState(1);
  const menuArr = ['Main', 'Blog', 'Forum', 'Contacts', 'About site'].map((item, index)=>(
    <li key={index}>
      <a href='/#' >{item}</a>
    </li>
  ));
  return (
    <>
      <div id='header' >
        <h1>MySite</h1>
        <div id='nav'>
          <ul>
            {menuArr}
          </ul>
        </div>
      </div>
      <div id='wrapper' >
        <div id='sidebar1' className='aside' >
          <h2>The standart Lorem Ipsum </h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua..."
          </p>
        </div>
        <div id='sidebar2' className='aside' >
          <h2>1914 translation by H. Rackham</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout.
          </p>
          <h3>Options</h3>
          <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
          </ul>
        </div>
        <div id='article'>
            <h2>What is Lorem Ipsum?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
              classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
              a Latin professor at Hampden-Sydney College in Virginia...
            </p>
          </div>
      </div>
      <div id='footer'>
        <p>Contacts: admin@mysyte.com</p>
        <p>Copyright © MySyte.com, 2016</p>
      </div>
    </>
  )
}

export default Content;