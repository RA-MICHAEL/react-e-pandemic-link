import { Typography } from '@material-ui/core'
import React from 'react'
import './Comment.css'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import mika from '../../images/users/Mika.jpg';
import OneComment from '../OneComment/OneComment';
import SendIcon from '@material-ui/icons/Send';
import { Post } from '../../models/Post';
import { MyContext } from '../MyContext';
import { Commentaire } from '../../models/Commentaire';
import Button from '@material-ui/core/Button';


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

class Comment extends React.Component<{ CurrentPost: Post }> {

    static contextType = MyContext;

    coms: any;

    handleClick() {
        const clength: number = this.context.comments.length;
        const lastindex: number = this.context.comments[clength - 1].id + 1;
        const newcom: Commentaire = new Commentaire(lastindex, this.props.CurrentPost.id, 5, this.coms.value);
        this.context.addComment(newcom);
        this.coms.value = "";
    }

    render() {
        let komantera: Commentaire[] = this.context.getCommentsByPostId(this.props.CurrentPost.id);
        return (
            <React.Fragment>
                <Typography paragraph><span className="comment-title">Commentaires :</span></Typography>
                {komantera.map((comment: Commentaire) => (
                    <OneComment CurrentComment={comment} />
                ))}

                <form onSubmit={(e) => { e.preventDefault(); this.handleClick() }}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item xs={1}>
                            <Avatar alt="RA-MICHAEL" src={mika} />
                        </Grid>

                        <Grid item xs={10}>
                            <CssTextField
                                id="comment-input"
                                label="Votre commentaire"
                                multiline
                                fullWidth
                                maxRows={2}
                                inputRef={node => this.coms = node}
                            />
                        </Grid>
                        <Grid xs={1} >
                            <Button type="submit"><SendIcon fontSize="small" /></Button>
                        </Grid>
                    </Grid>
                </form>

            </React.Fragment>
        )
    }
}

export default Comment
