import PropTypes from 'prop-types';
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number.isRequired })
    ),
};

export default FriendsList;
