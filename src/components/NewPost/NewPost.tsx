import React from 'react'
import { MyContext } from '../MyContext'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import mika from '../../images/users/Mika.jpg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Post } from '../../models/Post';

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

class NewPost extends React.Component {
    static contextType = MyContext;

    news: any;

    handleClick() {
        const plength: number = this.context.posts.length;
        const lastindex: number = this.context.posts[plength - 1].id + 1;
        const newpost: Post = new Post(lastindex, 5, "À l'instant", this.news.value, 0, 0);
        this.context.addPost(newpost);
        this.news.value = "";
    }

    render() {

        return (
            <React.Fragment>
                <Paper elevation={0} style={{ 'marginBottom': '50px' }}>
                    <form onSubmit={(e) => { e.preventDefault(); this.handleClick() }}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item xs={1}>
                                <Avatar alt="RA-MICHAEL" src={mika} />
                            </Grid>

                            <Grid item xs={9}>
                                <CssTextField
                                    id="news-input"
                                    label="Votre publication"
                                    multiline
                                    fullWidth
                                    maxRows={2}
                                    inputRef={node => this.news = node}
                                />
                            </Grid>
                            <Grid item xs={1} >
                                <Button variant="outlined" color="primary" type="submit">Publier</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </React.Fragment>
        )
    }
}

export default NewPost
