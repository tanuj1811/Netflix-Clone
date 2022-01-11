import React,{ createContext, useContext, useState } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './faqs-styles';



const ToggleContext = createContext();
const Faqs = props => {
    return (
        <Container {...props} >
            <Inner>{props.children}</Inner>
        </Container>
    )
}

Faqs.Title = (props) => <Title {...props}>{props.children}</Title>

Faqs.Frame = (props) => <Frame {...props}>{props.children}</Frame>

Faqs.Item = function FaqsItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow ] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item> 
        </ToggleContext.Provider>
    )
}

Faqs.Header = function FaqsHeader(props) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
  
    return (
      <Header onClick={() => setToggleShow(!toggleShow)} {...props}>
        {props.children}
        {toggleShow ? (
          <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
          <img src="/images/icons/add.png" alt="Open" />
        )}
      </Header>
    );
  };
  
  Faqs.Body = function FaqsBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);
  
    /* return toggleShow ? <Body {...restProps}>{children}</Body> : null; */
  
    return (
      <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
        <span>{children}</span>
      </Body>
    );
  };

  



export default Faqs
