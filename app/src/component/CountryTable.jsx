import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countryActions from '../action/countryActions';
import Select from './Select';

class CountryTable extends Component {
  // var options1 = [ { value: 'one', label: 'One' },{ value: 'two', label: 'Two' }];
  constructor(props) {
    super(props);
    this.state = { value: 'kkkkk' };
    this.setValue = this.setValue.bind(this);
  }
  // const options1 = ["Select an Option", "First Option", "Second Option", "Third Option"]
  setValue(value) {
    this.setState({value});
  }
    handleCountrySelection = (item) => {
        this.props.countryActions.setSelectedCountry(item)
    }

    render() {
        return (

            <div className="row">
            <div className="column3">
            <Select options={this.props.selectedCountries} setValue={this.setValue} id="idone" name="nameone"/>
            </div>
            <div className="column">
            <Select options={this.props.allCountries} setValue={this.setValue} id="idtwo" name="nametwo"/>
            </div>
            <div className="column2">
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


            </div>
        )
    }



}
const mapStateToProps = state => ({
    selectedCountry: state.country.selectedCountry,
    allCountries: state.country.allCountries,

});


const mapDispatchToProps = dispatch => ({
    countryActions: bindActionCreators(countryActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryTable);
