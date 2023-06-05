import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './StatListItem.styled';
import randomColor from '../randomColor';

const StatListItem = props => {
    const { label, percentage } = props;
    return (
        <Item style={{ backgroundColor: randomColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </Item>
    );
};

StatListItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatListItem;
