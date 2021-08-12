import { User } from "../models/User";
import voay from '../images/users/voay.jpg';
import croco from '../images/users/croco.png';
import ispm from '../images/users/logo_ispm.png';
import mikakely from '../images/users/saka.jpg';
import mika from '../images/users/Mika.jpg';

export const dataUser: User[] = [
    new User(1, "Voay be", voay),
    new User(2, "Lacoste", croco),
    new User(3, "ISPM", ispm),
    new User(4, "Mikakely", mikakely),
    new User(5, "RA-MICHAEL", mika)
]