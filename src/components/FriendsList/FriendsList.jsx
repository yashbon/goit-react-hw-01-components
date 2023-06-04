import FriendListItem from './FriendListItem/FriendListItem';

const FriendsList = ({ friends }) => {
    // console.log(friends);
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem
                    {...friend}
                    // avatar={friend.avatar}
                    // name={friend.name}
                    // isOnline={friend.isOnline}
                    key={friend.id}
                />
            ))}
        </ul>
    );
};

export default FriendsList;
