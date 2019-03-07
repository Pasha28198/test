import weather from '../../api/weather';
import { GET_USERS } from './types.js';

export default function (name) {
    return (dispatch) => {
        weather(name).then(res => {
            dispatch({type: GET_USERS, payload: res})
        })
    }
}