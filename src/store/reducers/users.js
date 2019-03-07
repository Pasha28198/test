import { GET_USERS } from '../actions/types'

export default function (state = {}, { type, payload }) {
    switch (type) {
        case GET_USERS: {
            return payload['Brastlewark'];
        }
        default: {
            return state;
        }
    }
}