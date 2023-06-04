import user from 'data/user';
import { Profile } from './Profile/Profile';

import data from 'data/data';
import Statistics from './Statistics/Statistics';

import friends from 'data/friends';
// console.log(friends);
import Friends from './FriendsList/FriendsList';

import transactions from 'data/transactions';
// console.log(transactions);
import TransactionHistory from './Transactions/TransactionHistory';

// console.log(friends[0].name);
export const App = () => {
    return (
        <div
        // style={{
        //     height: '100vh',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     fontSize: 40,
        //     color: '#010101',
        // }}
        >
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={data} />
            {/* <Friends friendsList={friends} /> */}
            {/* <TransactionHistory items={transactions} /> */}
        </div>
    );
};
