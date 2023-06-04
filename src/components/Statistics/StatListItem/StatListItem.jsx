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

export default StatListItem;
