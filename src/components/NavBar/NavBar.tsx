import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BadgeAvatars from '../BadgeAvatar/BadgeAvatar';
import './NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
        <AppBar position="fixed" className="navbar">
            <Toolbar>
                <Typography variant="h6" className="title">
                    E-PANDEMIC-LINK
                </Typography>
                <Link to="/"><Button>ACCUEIL</Button></Link>
                <Link to="/chat"><Button>DISCUSSIONS</Button></Link>
                <Link to="/forum"><Button>COMMUNICATION</Button></Link>
                <BadgeAvatars />
            </Toolbar>
        </AppBar>
    );
}
