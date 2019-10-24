import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { calcTotalCost } from '../../actions/index';
import { CalculatorWrap, FieldWrapper } from './styles';

class Calculator extends Component {
    state = {
        principal: 0,
        years: 0,
        rate: 0
    };

    handleFormSubmit = () => {
        const principal = parseInt(this.state.principal);
        const years = parseInt(this.state.years);
        const rate = parseFloat(this.state.rate) / 100.0;
        this.props.calcTotalCost( principal, rate, years );
    };

    handleInputChange = (key, value) => {
        //TODO: add in field validation
        this.setState({
            [key]: value
        });
    };

    formatTotal = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };

    render(){
        const { totalCost } = this.props;
        return (
            <CalculatorWrap>
                <FieldWrapper>
                    <InputField
                        type="number"
                        name="principal"
                        placeholder="0"
                        labelTitle="Principal Balance"
                        icon="$"
                        iconPosition="left"
                        min="0"
                        step="1"
                        onChange={(e) => this.handleInputChange('principal', e.target.value)}
                    />
                    <InputField
                        type="number"
                        name="years"
                        placeholder="0"
                        labelTitle="Number of Years"
                        min="0"
                        onChange={(e) => this.handleInputChange('years', e.target.value)}
                    />
                    <InputField
                        type="number"
                        name="rate"
                        placeholder="0.0"
                        labelTitle="Interest Rate"
                        icon="%"
                        iconPosition="right"
                        min="0.0"
                        step="0.1"
                        onChange={(e) => this.handleInputChange('rate', e.target.value)}
                    />
                </FieldWrapper>
                <Button className="btn-blue" text="Calculate" onClick={() => this.handleFormSubmit()}/>
                <div>
                    { // using simple form error message to save time. Would refactor along with adding in better field validation.
                        !isNaN(totalCost) && (
                            <h3>Total Cost: ${ this.formatTotal(totalCost)}</h3>
                        )
                    }
                    {
                        isNaN(totalCost) && (
                            <h3>Please ensure the fields above contain only numbers.</h3>
                        )
                    }
                </div>
            </CalculatorWrap>
        )
    }
}

const mapStateToProps = ({totalCost}) => {
    return {
        totalCost
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({calcTotalCost}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);