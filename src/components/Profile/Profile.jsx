import PropTypes from 'prop-types';
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

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

export default Profile;
