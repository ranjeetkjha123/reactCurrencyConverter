import axios from 'axios';
import constant from '../constants/index';


export function handleSearch(searchText) {
  return (dispatch,getState)=>{
  }
}

function setCountryData (countryList,dispatch) {
    let countryArray= []
    for(let i =0; i<countryList.length; i++){
        let country = {}
        country.name =countryList[i].name.common
        country.region = countryList[i].region
        country.countyCode =  countryList[i].cca2
        countryArray.push(country)
    }

    dispatch({
        type: constant.SET_COUNTRY_DATA,
        payload:countryArray
    })

}

function getCountries(dispatch){
    axios.get('/countries')
    .then(function (response) {
        setCountryData(response.data,dispatch)
    })
    .catch(function (error) {
    });
}

function getCurrency(dispatch){
    axios.get('/currency')
    .then(function (response) {

    })
    .catch(function (error) {
    });
}

function getRate(dispatch){
    axios.get('/rates')
    .then(function (response) {

    })
    .catch(function (error) {
    });
}

export function setSelectedCountry(selectedCountry){
    return dispatch =>
        dispatch({
            type: constant.SET_SELECTED_COUNTRY,
            payload:selectedCountry
        })
}

export function clearSearchedValue(){
    return dispatch =>
        dispatch({
            type:constant.SET_SEARCH_TEXT,
            payload: {searchText : ''}
        })
}


export function init(){
    return dispatch => {
        getCountries(dispatch)
    }
}
