import styled from "styled-components";

export const TransactionsHistory = styled.div`
    width: 500px;
    margin: 0 auto 40px auto;
    `

export const Transactions = styled.table`
    width: 100%;
    border: 1px solid #aec7da;
    border-collapse: collapse;
    box-shadow: 4px 1px 4px rgba(0,0,0,.12),0 4px 4px rgba(0,0,0,.06),1px 4px 6px rgba(0,0,0,.16);
    margin: 0 auto;
    text-align: center;
`

export const TableHeader = styled.thead`
    color: whitesmoke;
    border: 1px solid #aec7da;
    `
export const TableHead = styled.th`
    padding: 15px 0;
    border: 1px solid Gainsboro;
    background-color: var(--accent);
    `
export const TableRow = styled.tr`
    &:nth-child(2n) {
    background-color: whitesmoke;
    }
    &:nth-child(2n+1) {
    background-color: silver;
    }
    `
export const TableBody = styled.tbody``

export const TableData = styled.td`
    padding-left: 12%;
    padding: 10px 0;
    border: 1px solid Gainsboro;
    &::first-letter {
        text-transform: uppercase;
    }
    `