const Friends = ({ friendsList }) => {
    // console.log(friendsList);
    return (
        <ul className="friend-list">
            {friendsList.map(friend => (
                <li className="item" key={friend.id}>
                    <span className="status"></span>
                    <img
                        className="avatar"
                        src={friend.avatar}
                        alt={friend.name}
                        width="48"
                    />
                    <p className="name">{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};
export default Friends;
