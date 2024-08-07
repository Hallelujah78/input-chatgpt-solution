<div align='center'>

 <h1>
    <br/>
    <br/>
    <br/>
    <br />
    Test ChatGPT Solution to overwrite content of input in Reactjs
    <br />
    <br />
    <br />
    <br />
  </h1>
  <section>
  <header>
  <h1>What?</h1>
  </header>
  <p align="left">I have a specific issue where I have an input in a React application. This needs to work on mobile devices with soft keyboards and on devices with physical keyboards. The input has local state. The app has other state that relies on the state of the input.<p>
  <p align="left">On Android devices, specifically my A71, e.key is "Unidentified" for most keys. When I click on my input, I want to be able to overwrite its contents without first deleting what is already in it.</p>
  <p align="left">ChatGPT suggested onInput, which is what I was using for text entry to the input on mobile and desktop. The onInput attribute would never work because it won't fire if there is already content in the input. Maxlength is set to 1.</p>
  <p align="left">The onChange handler also doesn't work for exactly the same reason, but this just confirmed it! Despite continued prompting, it continues to ignore the fact that onInput and onChange will never fire if the input contains a value already and the max length is 1. It suggests adding onBlur and onFocus to toggle the shouldOverwrite state ...</p>
   <h2>Second Attempt in a New Prompt</h2>
   <p align="left">Trying a new prompt, we get a nice solution where we remove the max length on the input, check the length of the e.target.value, and set the value to the last character input if it is greater than 1.</p>
  <h1>Why?</h1>
  <p align="left">See above</p>
  </section>
</div>

<h1 align="center">Getting Started</h1>
- Bootstrapped with Vite so:
  
  - clone it
  - `npm i`
  - `npm run dev`

## Todo

## Before Installing Deps

- Delete anything you don't want from the deps in package.json
- the deps/dev deps include:
  - styled-components
  - framer-motion
  - react-icons
  - react-toastify
  - styled-components
  - styled-reset
  - cypress
  - netlify-cli
