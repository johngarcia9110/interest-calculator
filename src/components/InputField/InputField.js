import React from 'react';
import { InputWrapper } from './styles';

const InputField = ( { name, labelTitle, icon, iconPosition = null, ...props } ) => {
    return (
        <InputWrapper>
            <label htmlFor={name}>{labelTitle}</label>
            <div className="inputGroup">
                { icon && iconPosition === 'left' && (
                    <span className="inputGroup__icon">{icon}</span>
                )}
                <input name={name} id={name + 'Input'} {...props}/>
                { icon && iconPosition === 'right' && (
                    <span className="inputGroup__icon">{icon}</span>
                )}
            </div>
        </InputWrapper>
    )
}

export default InputField;