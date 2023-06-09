import PropTypes from 'prop-types';
import { StatList, Statistic, Title } from './Statistics.styled';
import StatListItem from './StatListItem/StatListItem';

const Statistics = props => {
    const { title, stats } = props;
    return (
        <Statistic>
            {title && <Title>{title}</Title>}
            <StatList>
                {stats.map(stat => (
                    <StatListItem {...stat} key={stat.id} />
                ))}
            </StatList>
        </Statistic>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired })
    ),
};

export default Statistics;
