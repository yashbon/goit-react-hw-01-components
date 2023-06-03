const StatisticsItem = props => {
    // console.log(props.id);
    return (
        <li className="item" key={props.id}>
            <span className="label">{props.label}</span>
            <span className="percentage">{props.percentage}%</span>
        </li>
    );
};

export default StatisticsItem;
