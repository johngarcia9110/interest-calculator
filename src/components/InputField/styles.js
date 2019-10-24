import styled from "styled-components";

export const InputWrapper = styled.div`
    text-align: center;
    label{
        display: block;
        margin-bottom: 8px;
        color: #1f446f;
    }
    input[type=number]{
        padding: 8px;
        -webkit-appearance: none;
        border: 0;
        text-align: center;
        height: 30px;
        color: #1f446f;
    }
    .inputGroup{
        margin-bottom: 32px;
        display: inline-block;
        border: 2px solid #4aaeff;
        border-radius: 4px;
        overflow: hidden;
        &__icon{
            font-weight: bold;
            display: inline-block;
            color: white;
            width: 30px;
            line-height: 30px;
            height: 32px;
            background: #4aaeff;
            vertical-align: center;
        }
    }
`;