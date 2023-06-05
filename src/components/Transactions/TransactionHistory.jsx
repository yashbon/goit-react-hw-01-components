import PropTypes from 'prop-types';
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
                    {transactions.map(({ id, type, amount, currency }) => (
                        <TableRow key={id}>
                            <TableData>{type}</TableData>
                            <TableData>{amount}</TableData>
                            <TableData>{currency}</TableData>
                        </TableRow>
                    ))}
                </TableBody>
            </Transactions>
        </TransactionsHistory>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.array,
    // id: PropTypes.string.isRequired,
    // type: PropTypes.string.isRequired,
    // amount: PropTypes.string.isRequired,
    // currency: PropTypes.string.isRequired,
};

export default TransactionHistory;
