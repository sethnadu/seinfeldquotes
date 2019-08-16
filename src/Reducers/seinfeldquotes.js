import {
    FETCH_RANDOM_QUOTE_START,
    FETCH_RANDOM_QUOTE_SUCCESS,
    FETCH_RANDOM_QUOTE_FAILURE,
    FETCH_ALL_QUOTE_START,
    FETCH_ALL_QUOTE_SUCCESS,
    FETCH_ALL_QUOTE_FAILURE

} from "../Actions"


const initialState = {
    randomquote: [],
    allQuote: [],
    isLoading: false,
    error: "",
    noStateApi: true,
    noStateApiAll: true,
    // nameHidden: true,
};

export const randomQuote = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_RANDOM_QUOTE_START:
            return {
                ...state,
                isLoading: true,
                error: "",
                noStateApi: true,
            };
        case FETCH_RANDOM_QUOTE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                randomquote: action.payload,
                error: "",
                noStateApi: false
            };
        case FETCH_RANDOM_QUOTE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                noStateApi: false
            };
        case FETCH_ALL_QUOTE_START:
            return {
                ...state,
                isLoading: true,
                error: "",
                noStateApiAll: true,
            };
        case FETCH_ALL_QUOTE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allQuote: action.payload,
                error: "",
                noStateApiAll: false
            };
        case FETCH_ALL_QUOTE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                noStateApiAll: false
            };

        // case "SHOW_NAME":
        //     return {
        //         ...state,
        //         nameHidden: false,
        //     }
       
        default:
            return state
    }
};