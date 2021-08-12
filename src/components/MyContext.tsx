import React from 'react';
import { Post } from '../models/Post';
import { User } from '../models/User';
import { Commentaire } from "../models/Commentaire";

export const MyContext = React.createContext({
    users: [] as User[],
    posts: [] as Post[],
    comments: [] as Commentaire[]
});
