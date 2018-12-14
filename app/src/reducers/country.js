import constant from '../constants'
const initialState = {
    searchText: '',
    allCountries:[],
    selectedCountry: null,
}

export default function countryReducer(currentState, { type, payload}) {
  const state = currentState || initialState;
  switch (type) {

    case constant.SET_SEARCH_TEXT:
        return Object.assign({}, state, {
            searchText : payload.searchText,
        });

    case constant.SET_COUNTRY_DATA:
        return Object.assign({}, state, {
            allCountries : payload
        });

    case constant.SET_SELECTED_COUNTRY:
        return Object.assign({}, state, {
            selectedCountry : payload
        });

    default:
      return state;
  }
}
