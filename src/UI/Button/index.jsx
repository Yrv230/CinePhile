import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
    background: #149A03;
    border-radius: 10px;
    width: max-content;
    padding: 15px 20px;
    display: flex;
    column-gap: 15px;
    span {
        color: #FFFFFF;
        font-size: 20px;
        line-height: 30px;  
        font-family: 'RalReg';
    }
`