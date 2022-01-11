import React from 'react'
import { Container, Error, Base, Title, Text, TextSmall, Link, Input, Submit } from './form-styles'


const Form = (props) => {
    return (<Container {...props} > {props.children}</Container>)
}

Form.Error = (props) => <Error {...props}>{props.children}</Error>

Form.Base = (props) => <Base {...props}>{props.children}</Base>

Form.Title = (props) => <Title {...props}>{props.children}</Title>

Form.Text = (props) => <Text {...props}>{props.children}</Text>

Form.TextSmall = (props) => <TextSmall {...props}>{props.children}</TextSmall>

Form.Link = (props) => <Link {...props}>{props.children}</Link>

Form.Input = (props) => <Input {...props}>{props.children}</Input>

Form.Submit = (props) => <Submit {...props}>{props.children}</Submit>



export default Form
