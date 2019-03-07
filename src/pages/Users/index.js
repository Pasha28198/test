import React, { Component } from 'react';
import { Button, Card, Input, Pagination, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { stateToProps, actionToProps } from './redux'
import './styles.scss'

class Users extends Component {
    state={
        filter: '',
        page: 1
    };
    componentDidMount () {
        this.props.getUsers();
    }
    handleFilter = (e, data) => {
        this.setState({ filter: data.value })
    };
    changePage = (e, data) => {
        this.setState({page: data.activePage})
    }
    render () {
        const { users, pagesCount } = this.props;
        const { page, filter } = this.state;
        if (!Object.keys(users).length) {
            return (
                <div><Loader/></div>
            )
        }
        return (
            <div className='weatherBlock'>
                <Input
                    fluid
                    focus
                    placeholder='Search...'
                    value={filter}
                    onChange={this.handleFilter}
                />
                <Card.Group>
                {
                    users
                        .slice((page - 1) * 20, page * 20)
                        .filter(item => (new RegExp(filter,'i')).test(item.name))
                        .map((user) => (
                        <Card
                            key={user.id}
                            image={user.thumbnail}
                            header={user.name}
                            meta={
                                <Link to={`/user/${user.id}`}>
                                    <Button color='green'>
                                            View
                                    </Button>
                                </Link>

                            }
                        />
                    ))
                }
                </Card.Group>
                {
                    !filter && (
                        <Pagination
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={pagesCount}
                            onPageChange={this.changePage}
                        />
                    )
                }
            </div>
        )
    }
}

export default connect(stateToProps, actionToProps)(Users)