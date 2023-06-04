import styled from 'styled-components';

export const Card = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 4px 1px 4px rgba(0,0,0,.12),0 4px 4px rgba(0,0,0,.06),1px 4px 6px rgba(0,0,0,.16);
    margin: 40px auto 40px;
    overflow: hidden;
    text-align: center;
    width: 300px;
`

export const Description = styled.div`
	padding: 20px;
    margin-bottom: 25px;

    text-align: center;
    color: var(--secondary);
`

export const Avatar = styled.img`
    margin-right: auto;
	margin-left: auto;
 	margin-bottom: 15px;
 	width: 150px;
 	display: block;
    background-color: gray;
 	border-radius: 50%;
`;

export const Name = styled.p`
    margin-bottom: 7px;
    font-size: 28px;
    font-weight: 700;
    color: var(--accent);
    text-shadow: var(--main-shadow);
`

export const Tag = styled.p`
    margin-bottom: 7px;
    font-size: 18px;
    text-shadow: var(--main-shadow);
`;

export const Location = styled.p`
    font-size: 18px;
    text-shadow: var(--main-shadow);
`;

export const StatsList = styled.ul`
    background-color: #dad5d5;
    border-top: 1px solid #c1bebe;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding-left: 0;
`;

export const StatsItem = styled.li`
    padding: 20px;
    width: 33.33333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border: 1px solid rgb(193, 190, 190);
`;

export const Label = styled.span`
    font-weight: 500;
    color: var(--secondary);
    text-shadow: var(--main-shadow);
`;

export const Value = styled.span`
    font-weight: 700;
    color: var(--accent);
    text-shadow: var(--main-shadow);
`;
