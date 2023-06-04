import {
    TableBody,
    TableData,
    TableHead,
    TableHeader,
    TableRow,
    Transactions,
    TransactionsHistory,
} from './TransactionHistory.styled';

const TransactionHistory = props => {
    const transactions = props.items;
    return (
        <TransactionsHistory>
            <Transactions>
                <TableHeader>
                    <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Currency</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map(transaction => (
                        <TableRow key={transaction.id}>
                            <TableData>{transaction.type}</TableData>
                            <TableData>{transaction.amount}</TableData>
                            <TableData>{transaction.currency}</TableData>
                        </TableRow>
                    ))}
                </TableBody>
            </Transactions>
        </TransactionsHistory>
    );
};

export default TransactionHistory;
