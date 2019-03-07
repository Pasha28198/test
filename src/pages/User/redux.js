import users from "../../store/actions/users";

export const stateToProps = (state) => ({
    users: state.users
})

export const actionToProps = (dispatch) => ({
    getUsers: (name) => {dispatch(users(name))}
})