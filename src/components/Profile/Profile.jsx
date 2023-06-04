import {
    Card,
    Avatar,
    Description,
    Name,
    Tag,
    Location,
    StatsList,
    StatsItem,
    Label,
    Value,
} from './Profile.styled';

export const Profile = props => {
    const { username, avatar, tag, location, stats } = props;
    return (
        <Card>
            <Description>
                <Avatar src={avatar} alt="User avatar" />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <StatsList>
                <StatsItem>
                    <Label>Followers</Label>
                    <Value>
                        {stats.followers
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </Value>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Value>
                        {stats.views
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </Value>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Value>
                        {stats.likes
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </Value>
                </StatsItem>
            </StatsList>
        </Card>
        // <div className="profile">
        // <div className="description">
        //     <img src={avatar} alt="User avatar" className="avatar" />
        //     <p className="name">{username}</p>
        //     <p className="tag">@{tag}</p>
        //     <p className="location">{location}</p>
        // </div>

        // <ul className="stats">
        //     <li>
        //         <span className="label">Followers</span>
        //         <span className="quantity">{stats.followers}</span>
        //     </li>
        //     <li>
        //         <span className="label">Views</span>
        //         <span className="quantity">{stats.views}</span>
        //     </li>
        //     <li>
        //         <span className="label">Likes</span>
        //         <span className="quantity">{stats.likes}</span>
        //     </li>
        // </ul>
        // </div>
    );
};
