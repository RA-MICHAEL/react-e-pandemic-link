import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Chat from './components/Chat/Chat'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import Forum from './components/Forum/Forum';
import Footer from './components/Footer/Footer';
import { dataUser } from './data/dataUser';
import { dataPost } from './data/dataPost';
import { Post } from './models/Post';
import { User } from './models/User';
import { MyContext } from './components/MyContext';

class App extends React.Component {

  state = {
    users: dataUser as User[],
    posts: dataPost as Post[],
    getUserById(id: number): User {
      return this.users.find(
        user => {
          return user.id === id
        }
      ) as User;
    }

  };

  render() {
    return (
      <MyContext.Provider value={this.state}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/chat" component={Chat} />
            <Route path="/forum" component={Forum} />
          </Switch>
          <Footer />
        </Router>
      </MyContext.Provider>

    );
  }
}

export default App;
