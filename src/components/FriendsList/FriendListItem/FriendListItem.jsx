import PropTypes from 'prop-types';
import { Avatar, FriendsItem, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsItem>
            <Status isOnLine={isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt={avatar} width="48" />
            <p className="{name}">{name}</p>
        </FriendsItem>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
