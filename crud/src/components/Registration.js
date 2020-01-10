import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {withRouter, Link} from 'react-router-dom';
import {
    Header,
    Wrapper, 
    Form, 
    Input, 
    Button2,
    SubTitle,
    NavLink
    } from '../styles/RegistrationStyles'; 


class Registration extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }; 

    handleChange = event => {    
        this.setState ({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    login = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/register', this.state.credentials)
            .then(response => {
                console.log('kd:registration:login:axios:then', response.data)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('username', response.data.created_user.username); 
                this.props.history.push('/dashboard'); 
                this.setState ({ credentials: {
                    username: '',
                    password: ''
                }});
            })
                .catch (error => console.log ('kd:registration:login:axios.catch', error));
    };



    render() {
        
        return (
            <>
            <Header><h1>HACKER NEWS RANK</h1></Header>
            <Wrapper>
                <Form onSubmit = {this.login}>
                    <Input
                        type = 'text'
                        name = 'username'
                        value = {this.state.credentials.username || ''}
                        onChange = {this.handleChange}
                        placeholder = '* username'
                        />

                        <br></br>


                    <Input
                        type = 'password'
                        name = 'password'
                        value = {this.state.credentials.password || ''}
                        onChange = {this.handleChange}
                        placeholder = '* password'
                        />
                        <br></br>

                    <Button2 
                        type = 'submit'
                        >Register
                    </Button2>
                    <hr></hr>
                    
                    <SubTitle>Already registered? 
                        <br />Click <Link to='/login'><NavLink>here</NavLink></Link> to login</SubTitle>
                   
                   
                </Form>
            </Wrapper>
            </>
        );
    }
    
}

export default withRouter (Registration);