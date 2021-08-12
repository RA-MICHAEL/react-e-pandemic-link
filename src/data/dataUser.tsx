import { User } from "../models/User";
import voay from '../images/users/voay.jpg';
import croco from '../images/users/croco.png';
import ispm from '../images/users/logo_ispm.png';

export const dataUser: User[] = [
    new User(1, "Voay be", voay),
    new User(2, "Lacoste", croco),
    new User(3, "ISPM", ispm)
]