import React from 'react'
import Header from '../components/Header/header';
import OptForm from "../components/FAQ's/optForm";
import { HomeHeader } from '../components/UI-Elements'
import logo from '../logo.svg'

const HeaderContainer = () => {
    return (
        <Header>
             <Header.Frame>
            <Header.Logo to='/' src={logo} alt="Netflix" />
            <Header.ButtonLink to='/signin'>Sign In</Header.ButtonLink>
      </Header.Frame>
            <HomeHeader>
                <HomeHeader.Title>Unlimited movies, TV shows and more.</HomeHeader.Title>
                <HomeHeader.SubTitle>Watch anywhere. Cancel anytime.</HomeHeader.SubTitle>
            
                <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Break />
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Get Started</OptForm.Button>
                </OptForm>
            </HomeHeader>
            
        </Header>
    )
}

export default HeaderContainer;
