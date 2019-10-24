import React from 'react';
import { StyledButton } from './styles';

const Button = ({ className, text, ...props}) => {
    return (
        <StyledButton
            className={`btn ${className}`}
            {...props}
        >
            {text}
        </StyledButton>
    )
}

export default Button;