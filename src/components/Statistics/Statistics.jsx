import StatisticsItem from './StatisticsItem';

const Statistics = props => {
    const { title, stats } = props;
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map(stat => (
                    // <StatisticsItem
                    //     id={stat.id}
                    //     label={stat.label}
                    //     percentage={stat.percentage}
                    // />
                    <li className="item" key={stat.id}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Statistics;
