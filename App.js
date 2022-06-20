 import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent';
import Nav from './Nav/Nav';
import Home from './example/Home';
import Test from './Nav/test'
import FormSub from './example/formSubmit'

// 2 components: class component / function component ( function, arrow)
// JSX (để return element kèm tag trong html)
let App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        {/* <FormSub/> */}
        {/* <img src= {logo} className="App-logo" alt="logo" /> */}
        {/* <p className='tittle'>
          Hello world from VHGT
        </p> */}
          {/* <Home /> */}
        <MyComponent />
        
        {/* <FormSubmit/> */}
        
      </header>
    </div>
  );
}

export default App;
