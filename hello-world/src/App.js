import React, { Component } from 'react';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Tables from './components/Tables';
import PureComp from './components/PureComp';
import ParentComponent from './components/ParentComponent';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FetchApi from './components/FetchApi';
import ColorChanger from './components/ColorChanger';
import ReducerHook from './components/ReducerHook';
import RandomObj from './components/RandomObj';
import RandomUserGenerator from './components/RandomUserGenerator';

class App extends Component {
  render() {
    return (
      <div className='App'>
        
        <RandomUserGenerator />

        {/* <RandomObj /> */}
        {/* <ReducerHook /> */}
        {/* <ColorChanger /> */}
        {/* <FetchApi /> */}
        {/* <ComponentC /> */}
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
