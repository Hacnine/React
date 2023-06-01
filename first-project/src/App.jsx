import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Post from './components/Post.jsx'
import viteLogo from '/vite.svg'
import './App.css'

function randomness(){
  const names = ['Maximilian', 'Milan'];
  const selectName = Math.random() > 0.5 ? names[0] : names[1];
  return selectName
}

function App() {

  const selectName1 = randomness();
  const selectName2 = randomness();




  return (
    <main>
    <Post author={selectName1} body="React.js is awesome!"/>
    <Post author={selectName2} body="Check out"/>

    </main>
  );
}
export default App;

// const names = ['Maximilian', 'Milan'];
// function Post() {
    
//     const selectName = Math.random() > 0.5 ? names[0] : names[1];
// return (
// <div>
//     <p>{selectName}</p>
//     <p>React is boring.</p>
// </div>
// );
// }

// export default Post;

//
