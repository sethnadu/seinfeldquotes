import axios from "axios";

export const FETCH_RANDOM_QUOTE_START = "FETCH_RANDOM_QUOTE_START";
export const FETCH_RANDOM_QUOTE_SUCCESS = "FETCH_RANDOM_QUOTE_SUCCESS";
export const FETCH_RANDOM_QUOTE_FAILURE = "FETCH_RANDOM_QUOTE_FAILURE";

export const FETCH_ALL_QUOTE_START = "FETCH_ALL_QUOTE_START";
export const FETCH_ALL_QUOTE_SUCCESS = "FETCH_ALL_QUOTE_SUCCESS";
export const FETCH_ALL_QUOTE_FAILURE = "FETCH_ALL_QUOTE_FAILURE";


export const getQuote = () => {
    return dispatch => {
        dispatch({ type: FETCH_RANDOM_QUOTE_START});
        axios
            .get("https://seinfeld-quotes.herokuapp.com/random")
            .then(res => {
                dispatch({type: FETCH_RANDOM_QUOTE_SUCCESS, payload: res.data})
            })
            .catch(error => {
                console.log(error)
                dispatch({type: FETCH_RANDOM_QUOTE_FAILURE, payload: error})
            })
    }
}

export const getAllQuote = () => {
    return dispatch => {
        dispatch({ type: FETCH_ALL_QUOTE_START});
        axios
            .get("https://seinfeld-quotes.herokuapp.com/quotes")
            .then(res => { 
                // console.log(res.data.quotes)
                 dispatch({type: FETCH_ALL_QUOTE_SUCCESS, payload: res.data.quotes})
            })
            .catch(error => {
                console.log(error.data)
                dispatch({type: FETCH_ALL_QUOTE_FAILURE, payload: error})
            })
    }
}

