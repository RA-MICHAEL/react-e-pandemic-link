import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Comment from '../Comment/Comment';

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { Post } from '../../models/Post';
import { MyContext } from '../MyContext';
import { User } from '../../models/User';

import './OnePost.css'


export default class OnePost extends React.Component<{ currentPost: Post }> {

    static contextType = MyContext;

    isLiked: boolean = false;
    isDisliked: boolean = false;

    state = {
        expanded: false,
    }

    handleExpandClick() {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    handleLike() {
        this.isLiked = !this.isLiked;
        if (this.isLiked) {
            this.props.currentPost.likes++;
            if (this.isDisliked) {
                this.props.currentPost.dislikes--;
                this.isDisliked = false;
            }
        } else {
            this.props.currentPost.likes--;
        }
        this.context.postUpdate(this.props.currentPost);
    }

    handleDislike() {
        this.isDisliked = !this.isDisliked;
        if (this.isDisliked) {
            this.props.currentPost.dislikes++;
            if (this.isLiked) {
                this.props.currentPost.likes--;
                this.isLiked = false;
            }
        } else {
            this.props.currentPost.dislikes--;
        }
        this.context.postUpdate(this.props.currentPost);
    }

    render() {
        let olona: User = this.context.getUserById(this.props.currentPost.userId);
        return (
            <Card className="card-box">
                <CardHeader
                    avatar={
                        <Avatar alt={olona.name} src={olona.pdp} />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={olona.name}
                    subheader={this.props.currentPost.date}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {this.props.currentPost.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton onClick={this.handleLike.bind(this)}>
                        {this.isLiked ? <ThumbUpAltOutlinedIcon className="active" /> : <ThumbUpAltOutlinedIcon />}
                    </IconButton>
                    {this.props.currentPost.likes}
                    <IconButton onClick={this.handleDislike.bind(this)}>
                        {this.isDisliked ? <ThumbDownAltOutlinedIcon className="active" /> : <ThumbDownAltOutlinedIcon />}
                    </IconButton>
                    {this.props.currentPost.dislikes}
                    <IconButton
                        onClick={this.handleExpandClick.bind(this)}
                        className={this.state.expanded ? "expandOpen" : ""}
                    >
                        <ChatBubbleOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Comment CurrentPost={this.props.currentPost} />
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}