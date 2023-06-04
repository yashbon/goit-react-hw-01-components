import styled from "styled-components";

export const Item = styled.li`
    width: calc(100% / 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    
    list-style-type: none;
    
    &:last-child {
        border-radius: 0 0 8px 0px;
    }
    &:first-child {
        border-radius: 0 0 0px 8px;
    }
`
export const Label = styled.span`
padding: 5px;
    color: whitesmoke;
    font-style: 14px;
`
export const Percentage = styled.span`
padding: 7px;
    color: whitesmoke;
    font-size: 18px;
    font-weight: bold;
    `