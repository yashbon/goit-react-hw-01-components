import FriendListItem from './FriendListItem/FriendListItem';
import { FriendList, FriendsAll } from './FriendsList.styled';

const FriendsList = ({ friends }) => {
    return (
        <FriendsAll>
            <FriendList>
                {friends.map(friend => (
                    <FriendListItem {...friend} key={friend.id} />
                ))}
            </FriendList>
        </FriendsAll>
    );
};

export default FriendsList;
