import { StatList, Statistic, Title } from './Statistics.styled';
import StatListItem from './StatListItem/StatListItem';

const Statistics = props => {
    const { title, stats } = props;
    return (
        <Statistic>
            <Title>{title}</Title>
            <StatList>
                {stats.map(stat => (
                    // <StatisticsItem
                    //     id={stat.id}
                    //     label={stat.label}
                    //     percentage={stat.percentage}
                    // />
                    <StatListItem
                        {...stat}
                        key={stat.id}
                        // label={stat.label}
                        // percentage={stat.percentage}
                    />
                    // <li className="item" key={stat.id}>
                    //     <span className="label">{stat.label}</span>
                    //     <span className="percentage">{stat.percentage}%</span>
                    // </li>
                ))}
            </StatList>
        </Statistic>
    );
};

export default Statistics;
