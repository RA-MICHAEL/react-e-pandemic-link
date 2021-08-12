export class Post {
    id: number;
    userId: number;
    date: string;
    description: string;
    likes: number;
    dislikes: number;

    constructor(id: number, userId: number, date: string, description: string, likes: number, dislikes: number) {
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.description = description;
        this.likes = likes;
        this.dislikes = dislikes;
    }
}