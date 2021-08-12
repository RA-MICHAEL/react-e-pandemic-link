export class Message {
    id: number;
    senderId: number;
    receiverId: number;
    time: string;
    texte: string;

    constructor(id: number, senderId: number, receiverId: number, time: string, texte: string) {
        this.id = id;
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.time = time;
        this.texte = texte;
    }
}