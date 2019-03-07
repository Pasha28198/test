import React from 'react';
import { connect } from 'react-redux';
import { Card, Image, Label, Loader } from 'semantic-ui-react'

import { stateToProps, actionToProps } from './redux';

class User extends React.Component {
    componentDidMount() {
        if(!Object.keys(this.props.users).length) {
            this.props.getUsers();
        }

    }

    render () {
        if (!Object.keys(this.props.users).length) {
            return (<div><Loader/></div>)
        }
        const { match: {params}, users } = this.props;
        const currentUser = users[users.findIndex(item => item.id === +params.id)];
        console.log(currentUser);
        if(!Object.keys(this.props.users).length) {
            return (<div>loader</div>)
        }
        return (
            <div className='centerd'>
                <Card>
                    <Image src={currentUser.thumbnail} />
                    <Card.Content>
                        <Card.Header>{currentUser.name}</Card.Header>
                    </Card.Content>
                    <Card.Content extra>
                        Age: <Label as='a' image>{currentUser.age}</Label>
                    </Card.Content>
                    <Card.Content extra>
                        Weight: <Label as='a' image>{currentUser.weight}</Label>
                    </Card.Content>
                    <Card.Content extra>
                        Height: <Label as='a' image>{currentUser.height}</Label>
                    </Card.Content>
                    <Card.Content extra>
                        Hair color: <Label as='a' image>{currentUser['hair_color']}</Label>
                    </Card.Content>
                    <Card.Content extra>
                        Professions:<br/><br/>
                        {
                            currentUser.professions.map((item, key) => (
                                <div key={key}>
                                    <Label as='a' image>
                                        {item}
                                    </Label>
                                    <br/>
                                    <br/>
                                </div>
                            ))
                        }
                    </Card.Content>
                    <Card.Content extra>
                        Friends:<br/><br/>
                        {
                            currentUser.friends.map((item, key) => (
                                <div key={key}>
                                    <Label as='a' image>
                                        {item}
                                    </Label>
                                    <br/>
                                    <br/>
                                </div>
                            ))
                        }
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default connect(stateToProps, actionToProps)(User);