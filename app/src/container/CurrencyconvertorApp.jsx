import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../action/countryActions';
import CountryCodeSearchBox from './CountryCodeSearchBox';
import SearchFilter from './SearchFilter';

class CurrencyConvertorApp extends Component {
    componentWillMount() {
        this.props.countryActions.init()
    }

    render() {
        return (
            <div className="App">
                <CountryCodeSearchBox />
                <SearchFilter />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    selectedCountry: state.country.selectedCountry

});

const mapDispatchToProps = dispatch => ({
    countryActions: bindActionCreators(countryActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConvertorApp);
