import styled from 'styled-components'

export const Card = styled.div`
    margin: 20px auto auto auto;
    height: 30vh;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 5%;
    width: 15%;
    text-align: center;
    background-color: ${props => props.color};
    cursor:pointer;
    transition: 0.7s all;
    &:hover{
        opacity:0.5;
    }
    `;
export const Select = styled.select`
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 5%;
    width: 20%;
    height: 25px;
`

export const Waiting = styled.select`
    font-size: 5rem;
    height: 100%;
    width: 100%;
`

export const Button = styled.button`
    background-color: #fff;
    height: 25px;
`

export const CardContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    
`
export const Image = styled.img`
    height: 65%
`