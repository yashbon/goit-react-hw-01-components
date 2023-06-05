import styled from "styled-components"

import { keyframes } from "styled-components"
const blink = keyframes`
  100% {
    transform: scale(1, 1);
    opacity: 0.5;
  }
  /* 0% {
    transform: scale(1, 1);
    opacity: 1;
  } */
`

export const FriendsItem = styled.li`
    list-style: none;
    align-items: center;
    background-color: whitesmoke;
    border: 1px solid #bab5b5;
    border-radius: 5px;
    box-shadow: 4px 1px 4px rgba(0,0,0,.12), 0 4px 4px rgba(0,0,0,.06), 1px 4px 6px rgba(0,0,0,.16);
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
    padding: 10px 20px;
`
export const Avatar = styled.img`
    display: block;
    max-width: 100%;
`

export const Status = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ isOnLine }) => (isOnLine ? 'green' : 'red')};

    animation: ${blink} 1500ms cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`

export const Name = styled.p`
    font-weight: bold;
    font-size: 18px;
    `
