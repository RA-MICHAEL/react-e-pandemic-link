import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import './Chat.css'
import { MyContext } from '../MyContext';
import { User } from '../../models/User';
import { Message } from '../../models/Message';

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

class Chat extends React.Component {

    static contextType = MyContext;

    message: any;

    handleClick() {
        const mlength: number = this.context.messages.length;
        const lastindex: number = this.context.messages[mlength - 1].id + 1;
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        const newMes: Message = new Message(lastindex, 1, 4, time, this.message.value);
        this.context.addMessage(newMes);
        this.message.value = "";
    }
    render() {
        let lista: User[] = this.context.users.filter((user: User) => user.id !== 5)
        return (
            <div className="chat-box" style={{ 'marginTop': '120px' }}>
                <Grid container component={Paper} className="chatSection">
                    <Grid item xs={3} className="borderRight500">
                        {lista.map((user: User) => (
                            <React.Fragment>
                                <List>
                                    <ListItem button key={user.id}>
                                        <ListItemIcon>
                                            <Avatar alt={user.name} src={user.pdp} />
                                        </ListItemIcon>
                                        <ListItemText primary={user.name}></ListItemText>
                                    </ListItem>
                                </List>
                                <Divider />
                            </React.Fragment>
                        ))}

                    </Grid>
                    <Grid item xs={9}>
                        <List className="messageArea">
                            <ListItem key="1">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText primary="Manahoana e, vaovao any ?"></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText secondary="09:30"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem key="2">
                                <Grid container className="response">
                                    <Grid item xs={12}>
                                        <ListItemText primary="Salama tsara, tena tsy misy an" ></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText secondary="09:31"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem key="3">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText primary="Milay zan, de aona ny androany ?"></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText secondary="10:30"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            {this.context.messages.map((message: Message) => (
                                <ListItem key="4">
                                    <Grid container className="response">
                                        <Grid item xs={12}>
                                            <ListItemText primary={message.texte}></ListItemText>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <ListItemText secondary={message.time}></ListItemText>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <form onSubmit={(e) => { e.preventDefault(); this.handleClick() }}>
                            <Grid container spacing={1} alignItems="flex-end">

                                <Grid item xs={11}>
                                    <CssTextField
                                        id="comment-input"
                                        label="Votre message"
                                        multiline
                                        fullWidth
                                        maxRows={2}
                                        inputRef={node => this.message = node}
                                    />
                                </Grid>
                                <Grid item xs={1} >
                                    <Button type="submit"><SendIcon fontSize="small" /></Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default Chat;