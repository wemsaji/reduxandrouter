import { Box, Button, SxProps, Theme, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const CounterView = ({
    title, count, Increment, Decrement
}: {
    title: string;
    count: number;
    Increment: () => void;
    Decrement: () => void;
}) => {
    return (
        <Box sx={styles.container}>
            <Typography variant='h2' sx={styles.viewTitle}>{title}</Typography>
            <Typography variant='h3'>count:{count}</Typography>
            <Button variant='contained' onClick={Increment}>Increment!</Button>
            <Button variant='contained' onClick={Decrement}>Decrement!</Button>
            {title !== 'CounterWithState' &&
                <Link to='/CounterWithState'>Go to CounterWithState!</Link>}
            {title !== 'CounterWithRtk' &&
                <Link to='/CounterWithRtk'>Go to CounterWithRtk!</Link>}
        </Box>
    );
};

const styles: { [key: string]: SxProps<Theme> } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginX: 6,
        gap: 2,
    },
    viewTitle: {
        color: 'darkorange',
    },
};
