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

export default FriendListItem;
