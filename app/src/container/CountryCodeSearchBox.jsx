import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../action/countryActions';
import search from '../image/search.svg';
import CountryMap from '../component/CountryMap';

class countryCodeSearchBox extends Component {
  constructor(props){
      super(props)
      this.state = {
          selectedList: [],
          singleList: [],
          filteredList: [],
      }
      this.handleSearch = this.handleSearch.bind(this);
      // this.increaseScore = this.increaseScore.bind(this);
  }
    handleSearch = (e) => {
        console.log(this.props.allCountries);
        this.props.countryActions.handleSearch((e.target.value).toUpperCase());
        const filtercountrylist = this.props.allCountries.filter(word => word.countyCode === (e.target.value).toUpperCase());
        this.setState({selectedList : filtercountrylist});
        const singlecountrylist = this.props.allCountries.filter(word => (word.name).charAt(0) === (e.target.value).toUpperCase()).slice(0,6);
        this.setState({singleList : singlecountrylist});
        let mergeArray =[];
        if((e.target.value).length === 2){
          mergeArray = filtercountrylist;
          this.setState({filteredList: mergeArray});
        } else if ((e.target.value).length === 1) {
          mergeArray = singlecountrylist;
          this.setState({filteredList: mergeArray});
        } else {
           this.setState({filteredList: []});
        }

    }


    render() {
    const singlelist = (this.state.filteredList);
        return (
            <div className="search-box">
                <input
                    type="text"
                    onChange={(e)=> this.handleSearch(e)}
                />
                <CountryMap single={singlelist}/>
            </div>

        )
    }
}
const mapStateToProps = state => ({
  selectedList: state.selectedList,
    searchText: state.country.searchText,
    allCountries: state.country.allCountries,
    searchedCountryArray: state.country.searchedCountryArray,
});

const mapDispatchToProps = dispatch => ({
    countryActions: bindActionCreators(countryActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(countryCodeSearchBox);
