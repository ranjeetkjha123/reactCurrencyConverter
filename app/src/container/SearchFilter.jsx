import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../action/countryActions';
import CountryTable from '../component/CountryTable';

class SearchFilter extends Component {
   constructor(props){
       super(props)
       this.state = {
           selected : '',
           selectedCountries: [],
       }
       this.handleRadioSelection = this.handleRadioSelection.bind(this);
   }

   handleRadioSelection = (e) =>{
         let countryArray = []
          // on the change of radio button clear searchbox and searchedarray
         this.props.countryActions.clearSearchedValue()
         if(e.target.value !== 'All' && this.props.allCountries){
             for(let i= 0; i< this.props.allCountries.length; i++) {
                 if(this.props.allCountries[i].region === e.target.value){
                    countryArray.push(this.props.allCountries[i])
                 }
             }

        }else {
            countryArray = this.props.allCountries
        }

         this.setState({selected: e.target.value, selectedCountries: countryArray})

   }


    render() {

        return (
            <div className="App">
                <div className="searchFilter">
                    Search Filter:
                    <input
                        type='radio'
                        value='All'
                        onChange={this.handleRadioSelection}
                        checked={this.state.selected === 'All'}
                    />All <br />
                    <input
                     type='radio'
                      value='Asia'
                       onChange={this.handleRadioSelection}
                       checked={this.state.selected === 'Asia'}
                        />Asia<br />
                    <input
                     type='radio'
                      value='Americas'
                       onChange={this.handleRadioSelection}
                       checked={this.state.selected === 'Americas'}
                       />Americas <br />
                    <input
                     type='radio'
                      value='Africa'
                       onChange={this.handleRadioSelection}
                       checked={this.state.selected === 'Africa'}
                        />Africa<br />
                    <input
                     type='radio'
                      value='Europe'
                       onChange={this.handleRadioSelection}
                       checked={this.state.selected === 'Europe'}
                        />Europe <br />
                </div>
                <CountryTable
                  selectedCountries={this.props.searchedCountryArray ? this.props.searchedCountryArray : this.state.selectedCountries}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    allCountries: state.country.allCountries,
    searchedCountryArray: state.country.searchedCountryArray

});

const mapDispatchToProps = dispatch => ({
    countryActions: bindActionCreators(countryActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter);
