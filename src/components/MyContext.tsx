import React from 'react';
import { Post } from '../models/Post';
import { User } from '../models/User';

export const MyContext = React.createContext({
    users: [] as User[],
    posts: [] as Post[],
});
