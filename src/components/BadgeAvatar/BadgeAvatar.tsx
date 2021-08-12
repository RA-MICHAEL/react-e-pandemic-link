import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import mika from '../../images/users/Mika.jpg';

const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: '-1px',
                left: '-1px',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: '$ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        }
    }),
)(Badge);


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

export default function BadgeAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <Avatar alt="Mikakely" src={mika} />
            </StyledBadge>
        </div>
    );
}
