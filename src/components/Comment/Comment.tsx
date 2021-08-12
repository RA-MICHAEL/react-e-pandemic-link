import { Typography } from '@material-ui/core'
import React from 'react'
import './Comment.css'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {
    withStyles, makeStyles, Theme, createStyles

} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import mika from '../../images/users/Mika.jpg';
import zoky from '../../images/users/saka.jpg';
import { blue } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
        comment: {
            color: 'var(--main-color)',
            fontWeight: 500,
            textDecoration: 'underline'
        },
        avatar: {
            backgroundColor: blue[500],
        },
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#03a9f4',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#03a9f4',
        },
        '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#03a9f4',
        },
    },
})(TextField);

const Comment = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography paragraph><span className={classes.comment}>Commentaires :</span></Typography>
            <Grid container spacing={1} alignItems="flex-start">
                <Grid item xs={1}>
                    <Avatar alt="Mikakely" src={zoky} className={classes.avatar} />
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="subtitle2">
                        Zoky mpicomenty
                    </Typography>
                    <Typography variant="body2">
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes. Tsaramaso kabaro sosy mahavita sokola milay be ange ry reto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum nesciunt alias quos explicabo.
                    </Typography>
                </Grid>
            </Grid>


            <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={1}>
                    <Avatar alt="Mikakely" src={mika} />
                </Grid>
                <Grid item xs={10}>
                    <CssTextField
                        id="comment-input"
                        label="Votre commentaire"
                        multiline
                        fullWidth
                        maxRows={2}
                    />
                </Grid>
                <Grid xs={1} >
                    <Fab color="primary" aria-label="add" size="medium"><SendIcon /></Fab>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}

export default Comment
