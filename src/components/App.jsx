import user from 'data/user';
import Profile from './Profile/Profile';

import data from 'data/data';
import Statistics from './Statistics/Statistics';

import friends from 'data/friends';
import FriendsList from './FriendsList/FriendsList';

import transactions from 'data/transactions';
import TransactionHistory from './Transactions/TransactionHistory';

export const App = () => {
    return (
        <>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={data} />
            <FriendsList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
};
