import io from 'socket.io-client';
import { API_URI } from '../../config/';

const socket = io(API_URI);
console.log(API_URI);

export default socket;
