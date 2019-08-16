import React, { useState } from "react";
import Loader from "react-loader-spinner";
// import {BrowserRouter as Router, Switch} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Quote from "./quote.js";
import QuoteAll from "./quoteAll.js";
import seinfeldLogo from "../Assets/seinfeldlogo.png";
import seinfeldCharacters from "../Assets/seinfeldcharacters.jpg";

const useStyles = makeStyles({
  Container: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  Button: {
    width: "240px",
    padding: "5px 10px",
    fontSize: "1.2rem",
    borderRadius: "10px",
    border: "2px solid black",
    backgroundColor: "#fcd720",
    color: "#e22121",
    fontWeight: "bold",
    margin: "10px",
  },
  ButtonLast: {
    width: "240px",
    padding: "5px 10px",
    fontSize: "1.2rem",
    borderRadius: "10px",
    border: "2px solid black",
    backgroundColor: "#fcd720",
    color: "#e22121",
    fontWeight: "bold",
    marginBottom: "80px",
  },
  img: {
    width: "400px",
    marginTop: "80px",
  },
  quoteText: {
    display: "flex",
    marginLeft: "180px",
    marginTop: "-10px",
    fontSize: "2rem",
    color: "#e22121",
  },
  copyright: {
    bottom: "0",
    color: "#fcd720",
    textDecoration: "none",
  },
  address: {
    color: "#e22121",
    textDecoration: "none",
  },
  textDiv: {
    width: "500px",
    height: "300px",
    margin: "10px",
    backgroundImage: `url(${seinfeldCharacters}) `,
    backgroundSize: "cover",
  },
  text: {
    backgroundColor: "#1d4ba0",
    width: "300px",
    margin: "80px auto 10px auto",
    padding: "10px",
    opacity: ".9",
  },
  list: {
    width: "200px",
    height: "70px",
    margin: "10px auto 10px auto",
    padding: "10px",
    opacity: ".9",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  },
  ul: {
    display: "flex",
  },
  searchForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "120px auto auto auto",
  },
  inputForm: {
    margin: "auto auto 60px auto",
    width: "200px",
    height: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  copyrightDiv: {
   display: "flex",
   flexDirection: "row wrap",
   height: "40px",
   marginBottom: "30px"
  
  },
  heading: {
    color: "#e22121"
  },
  line: {
    border: "2px solid #fcd720",
    width: "100%",
    margin: "50px 20px auto 20px"
  },
  select: {
    height: "30px",
    border: "2px solid #fcd720",
  }
});

const QuoteSection = ({ props }) => {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false)

  const showNameAnswer = () => {
    return (
      setName(true)
    )
  
  }

  const classes = useStyles();

  const handleChange = event => {
    setName(event.target.value);
  };

  const showRandom = () => {
    props.getQuote()
    setShowName(false)

  }
  

  return (
 
    <div className={classes.Container}>
      <img className={classes.img} src={seinfeldLogo} alt="seinfeld logo" />
      <h3 className={classes.quoteText}>Quotes</h3>
      <h2 className = {classes.heading}>Random Quote Guessing Game</h2>
      <button className={classes.Button} onClick={() => showRandom()}>Click For Quote
      </button>
      {props.randomquote && (
        <Quote showName= {showName} setShowName = {setShowName} showNameAnswer= {showNameAnswer} noStateApi={props.noStateApi} randomquote={props.randomquote} />
      )}
      <div className = {classes.line}/>
      <p className={classes.text}>
        Giddy Up! Pick name below to display quotes!
      </p>
      <div className={classes.textDiv}>
        <div className={classes.searchForm}>
          <select className = {classes.select} onChange={handleChange} onClick={props.getAllQuote}>
            <option>Pick Below</option>
            <option value="Jerry">Jerry</option>
            <option value="George">George</option>
            <option value="Elaine">Elaine</option>
            <option value="Kramer">Kramer</option>
            <option value="Alton Benes(Elaines Father)">Elaines Father</option>
            <option value="Bill">Bill</option>
            <option value="Antonio(The Busboy)">The Busboy</option>
            <option value="Lt. Bookman">Lt. Bookman</option>
            <option value="Sid">Sid</option>
            <option value="Old Man Looking At Painting Of Kramer">
              Old Man Looking At Painting Of Kramer
            </option>
            <option value="Morty">Morty</option>
            <option value="Newman">Newman</option>
            <option value="The Bubble Boy">The Bubble Boy</option>
            <option value="Joe Davola">Joe Davola</option>
            <option value="George's Mom">George's Mom</option>
            <option value="Ticket Lady(Describing George)">
              Ticket Lady(Describing George)
            </option>
            <option value="Babu">Babu</option>
            <option value="Susan">Susan</option>
            <option value="Wheelchair Salesman">Wheelchair Salesman</option>
            <option value="TV Kramer (to George)">TV Kramer (to George)</option>
            <option value="Jerry's Mom">Jerry's Mom</option>
            <option value="George and Jerry">George and Jerry</option>
            <option value="Kramer and Jerry">Kramer and Jerry</option>
            <option value="Kramer and Frank Costanza">
              Kramer and Frank Costanza
            </option>
            <option value="George Steinbrenner">George Steinbrenner</option>
            <option value="The Soup Nazi">The Soup Nazi</option>
            <option value="Frank Costanza">Frank Costanza</option>
            <option value="The Detective(After Jerry's mechanic steals his car.)">
              The Detective(After Jerry's mechanic steals his car.)
            </option>
            <option value="Wyck">Wyck</option>
            <option value="Banya">Banya</option>
            <option value="Jackie Chiles">Jackie Chiles</option>
            <option value="Riley">Riley</option>
            <option value="Lloyd Brawn">Lloyd Brawn</option>
            <option value="Frank Costanza">Frank Costanza</option>
          </select>
        </div>
      </div>

      {props.isLoading ? (
          <Loader type="ThreeDots" color="#e22121" height={15} width={100} />
        ) : (
          ""
        )}

      {props.allQuote &&
        props.allQuote.map((item, index) => {
          return (
            item.author === name && (
              <QuoteAll
                key={index}
                noStateApiAll={item.noStateApiAll}
                allQuote={item}
              />
            )
          );
        })}
   

      <div className={classes.copyrightDiv}>
      <p className={classes.copyright}>Quotes from </p>
      <p>
        <a
          className={classes.address}
          href="https://seinfeld-quotes.herokuapp.com/"
        >
          https://seinfeld-quotes.herokuapp.com/
        </a>
      </p>
      <p className={classes.copyright}>Created by:<a className={classes.address} href="https://github.com/sethnadu/seinfeldquotes">sethnadu</a></p>
      </div>


    </div>

  );
};

export default QuoteSection;
