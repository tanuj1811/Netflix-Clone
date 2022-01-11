import React,{ useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/header'
import logo from '../logo.svg';
import { Form } from '../components/UI-Elements';

import {FirebaseContext} from '../context/firebase'
import FooterContainer from '../containers/footer';

const Signin = () => {

    const { firebase } = useContext(FirebaseContext); 
    const [emailAddress, setEmailAddress ] = useState('');
    const [password, setPassword ] = useState('');
    const [error, setError ] = useState('');
    const navigate = useNavigate();
    const [ isValid, setIsValid ] = useState(false);

    // const valid = /^\S+@\S+\.\S+$/.test(emailAddress) && password.trim().length > 0;

    // const emailHandler = (event) => {
    //     setEmailAddress(event.target.value)
    //     setIsValid(/^\S+@\S+\.\S+$/.test(emailAddress) && (password.trim().length > 0));
    // }

    // const passwordHandler = (event) => {
    //     setPassword(event.target.value)
    //     setIsValid(/^\S+@\S+\.\S+$/.test(emailAddress) && (password.trim().length > 0));
    // }

    useEffect(() => {
        setIsValid(/^\S+@\S+\.\S+$/.test(emailAddress) && (password.trim().length > 0));
    }, [emailAddress,password])

    const handlerSignin = (event) => {
        event.preventDefault();

        return firebase
        .auth()
        .signInWithEmailAndPassword(emailAddress, password)
        .then(() => navigate('/browse'))
        .catch((error) => {
            setEmailAddress('')
            setPassword('')
            setIsValid(false)
            setError(error.message)
        })
    }

    return (
        <React.Fragment>
            <Header>
                <Header.Frame>
                    <Header.Logo to='/' src={logo} alt="Netflix" />
                </Header.Frame>
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error data-testid="error">{error}</Form.Error>}

            <Form.Base onSubmit={handlerSignin} method="POST">
                <Form.Input 
                    placeholder="Email address"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)} 
                    // onChange={emailHandler}
                />

                <Form.Input 
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)} 
                    // onChange={passwordHandler}
                />
                <Form.Submit disabled={!isValid} type="submit" data-testid="sign-in">
                    Sign In
                </Form.Submit>

            </Form.Base>
            <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
        </Form>
        </Header>
        <FooterContainer />
        </React.Fragment>
    )
}

export default Signin
