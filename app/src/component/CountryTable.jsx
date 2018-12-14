import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../action/countryActions';

class CountryTable extends Component {

    handleCountrySelection = (item) => {
        this.props.countryActions.setSelectedCountry(item)
    }

    render() {
        return (
            <div>
                <table id="countryTable">
                     <tbody>
                    {this.props.selectedCountries && this.props.selectedCountries.map((item, i) =>
                        <tr key={i} >
                            <th onClick={()=>this.handleCountrySelection(item)}
                             className={this.props.selectedCountry && this.props.selectedCountry.name === item.name ? 'selected-country': ''}
                            > {item.name}
                            </th>
                        </tr>
                    )}
                     </tbody>
                </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(CountryTable);
