import React,{ useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header/header'
import logo from '../logo.svg';
import { Form } from '../components/UI-Elements';
import FooterContainer from "../containers/footer";

import {FirebaseContext} from '../context/firebase'

const Signup = () => {

    const { firebase } = useContext(FirebaseContext); 
    const [emailAddress, setEmailAddress ] = useState('');
    const [password, setPassword ] = useState('');
    const [fname, setFname] = useState("");
    const [error, setError ] = useState('');
    const navigate = useNavigate();
    const [ isValid, setIsValid ] = useState(false);

    // const valid = /^\S+@\S+\.\S+$/.test(emailAddress) && password.trim().length > 0;

    const emailHandler = (event) => {
        setEmailAddress(event.target.value)
        setIsValid(/^\S+@\S+\.\S+$/.test(emailAddress) && (password.trim().length > 0));
    }

    const fnameHandler = (event) => {
        setFname(event.target.value)
        setIsValid(/^\S+@\S+\.\S+$/.test(emailAddress) && (password.trim().length > 0));
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
        setIsValid(/^\S+@\S+\.\S+$/.test(emailAddress) && (password.trim().length > 0));
    }

    const handleSignup = (event) => {
        event.preventDefault();
    
        return firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password)
          .then((result) =>
            result.user
              .updateProfile({
                displayName: fname,
                photoURL: Math.floor(Math.random() * 5) + 1,
              })
              .then(() => {
                navigate('/browse')
              })
          )
          .catch((error) => {
            setFname('');
            setEmailAddress('');
            setPassword('');
            setError(error.message);
          });
      };

    return (
        <React.Fragment>
            <Header>
                <Header.Frame>
                    <Header.Logo to='/' src={logo} alt="Netflix" />
                </Header.Frame>
        <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error data-testid="error">{error}</Form.Error>}

            <Form.Base onSubmit={handleSignup} method="POST">
                <Form.Input 
                    placeholder="First name"
                    value={fname}
                    // onChange={({ target }) => setEmailAddress(target.value)} 
                    onChange={fnameHandler}
                />
                <Form.Input 
                    placeholder="Email address"
                    value={emailAddress}
                    // onChange={({ target }) => setEmailAddress(target.value)} 
                    onChange={emailHandler}
                />

                <Form.Input 
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    // onChange={({ target }) => setPassword(target.value)} 
                    onChange={passwordHandler}
                />
                <Form.Submit disabled={!isValid} type="submit" data-testid="sign-in">
                    Sign In
                </Form.Submit>

            </Form.Base>
            <Form.Text>
            New to Netflix? <Form.Link to="/signin">Sign up now.</Form.Link>
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

export default Signup
