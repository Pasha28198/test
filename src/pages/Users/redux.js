import weather from '../../store/actions/users'

export const stateToProps = (state) => ({
    users: state.users,
    pagesCount: parseInt(state.users.length / 20)
})
export const actionToProps = (dispatch) => ({
    getUsers: (name) => {dispatch(weather(name))}
})