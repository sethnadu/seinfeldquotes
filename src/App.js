import React from 'react';
import { connect } from "react-redux";
import './App.css';
import QuoteSection from "./Components/quoteSection.js";
import { getQuote, getAllQuote } from "./Actions";

function App(props) {
  return (
    <div className="App">
      <QuoteSection props ={props}/>
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    randomquote: state.randomquote,
    isLoading: state.isLoading,
    noStateApi: state.noStateApi,
    allQuote: state.allQuote,
    noStateApiAll: state.noStateApiAll
  }
}

export default connect(mapStateToProps, {getQuote, getAllQuote})(App);
