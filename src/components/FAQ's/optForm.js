import React from "react";
import { Container, Input, Break, Button, Text } from './optForm-styles';

const OptForm = props => {
    return(
        <Container {...props}>{props.children}</Container>
    )
}

OptForm.Input = (props) => <Input type = 'email' {...props} />

OptForm.Break = props => <Break {...props} />

OptForm.Text = props => <Text {...props}>{props.children}</Text>

OptForm.Button = props => (
    <Button {...props}>
        {props.children} 
        <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
)


export default OptForm;