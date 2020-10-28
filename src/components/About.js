import React from 'react'

const About = () => (
  <div className="container">
    <h1>About This Demo</h1>
    <p>A simple React HangMan game made with Create-React-App. This was a learning exercise for me to get into and play around with React and React Hooks.</p>
    <p>It is based on a tutorial from the <a href="https://www.youtube.com/c/TraversyMedia">Traversy Media YouTube channel</a>.</p>
    <p>But I extended it a bit, by adding a <a href="https://www.npmjs.com/package/random-words">random word generator</a> and the <a href="https://owlbot.info/">OwlBot API</a> for word lookups. The OwlBot API will enable me to extend this relatively simple game, with other functionalty like hints and various other things. This might be something I will add at some point.</p>
  </div>
)

export default About;