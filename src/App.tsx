import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Chat from './components/Chat/Chat'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home';
import Forum from './components/Forum/Forum';
import Footer from './components/Footer/Footer';
import InfoModal from './components/InfoModal/InfoModal';
import { dataUser } from './data/dataUser';
import { dataPost } from './data/dataPost';
import { Post } from './models/Post';
import { User } from './models/User';
import { MyContext } from './components/MyContext';
import { dataComment } from './data/dataComment';
import { Commentaire } from './models/Commentaire';

class App extends React.Component {

  state = {
    users: dataUser as User[],
    posts: dataPost as Post[],
    comments: dataComment as Commentaire[],
    getUserById(id: number): User {
      return this.users.find(
        user => {
          return user.id === id
        }
      ) as User;
    },
    getPostById(id: number): Post {
      return this.posts.find(
        post => {
          return post.id === id
        }
      ) as Post;
    },
    getCommentsByPostId(id: number): Commentaire[] {
      return this.comments.filter(
        (comment) => {
          return comment.postId === id
        }
      ) as Commentaire[];
    },
    addComment: (newComs: Commentaire) => {
      const updatedArray = this.state.comments;
      updatedArray.push(newComs);
      this.setState({
        comments: updatedArray
      });
    },
    addPost: (newPost: Post) => {
      const updatedArray = this.state.posts;
      updatedArray.unshift(newPost);
      this.setState({
        posts: updatedArray
      });
    },
  };

  render() {
    return (
      <MyContext.Provider value={this.state}>
        <Router>
          <NavBar />
          <InfoModal />
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
