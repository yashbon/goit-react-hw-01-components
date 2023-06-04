import FriendListItem from './FriendListItem/FriendListItem';
import { FriendList, FriendsAll } from './FriendsList.styled';

const FriendsList = ({ friends }) => {
    // console.log(friends);
    return (
        <FriendsAll>
            <FriendList>
                {friends.map(friend => (
                    <FriendListItem
                        {...friend}
                        // avatar={friend.avatar}
                        // name={friend.name}
                        // isOnline={friend.isOnline}
                        key={friend.id}
                    />
                ))}
            </FriendList>
        </FriendsAll>
    );
};

export default FriendsList;
