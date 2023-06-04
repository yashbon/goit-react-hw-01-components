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

const Profile = props => {
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
    );
};

export default Profile;
