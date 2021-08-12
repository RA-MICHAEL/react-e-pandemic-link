import React from 'react'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Commentaire } from '../../models/Commentaire'
import { User } from '../../models/User'
import { MyContext } from '../MyContext'

class OneComment extends React.Component<{ CurrentComment: Commentaire }> {
    static contextType = MyContext;
    render() {
        let olona: User = this.context.getUserById(this.props.CurrentComment.authorId);
        return (
            <React.Fragment>
                <Grid container spacing={1} alignItems="flex-start">
                    <Grid item xs={1}>
                        <Avatar alt={olona.name} src={olona.pdp} />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography variant="subtitle2">
                            {olona.name}
                        </Typography>
                        <Typography variant="body2">
                            {this.props.CurrentComment.texte}
                        </Typography>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default OneComment
