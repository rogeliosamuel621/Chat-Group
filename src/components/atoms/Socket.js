import io from 'socket.io-client';
import { API_URL } from '../../config/';

const socket = io(API_URL);
console.log(API_URL);

export default socket;
