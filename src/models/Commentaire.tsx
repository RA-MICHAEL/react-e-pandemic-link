export class Commentaire {
    id: number;
    authorId: number;
    postId: number;
    texte: string;

    constructor(id: number, postId: number, authorId: number, texte: string) {
        this.id = id;
        this.postId = postId;
        this.authorId = authorId;
        this.texte = texte;
    }
}