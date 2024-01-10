import React, { Component } from 'react';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
import PureComp from './components/PureComp';
import ParentComponent from './components/ParentComponent';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

class App extends Component {
  render() {
    return (
      <div className='App'>
        
        <ComponentC />

        {/* <
          Counter render={(count, incrementCount) => 
          <ClickCounter count={count} incrementCount={incrementCount}/> }
        /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComponent /> */}
        {/* <Tables /> */}
        {/* <FragmentDemo /> */}
      </div>
    )
  }
}
  
export default App;
