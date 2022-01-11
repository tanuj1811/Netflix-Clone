import React from "react";
import { Container, Row, Column, Link, Title, Text, Break } from './footer-styles'

const Footer = (props) => {
    return (<Container {...props}>{props.children}</Container>)
}

Footer.Row = (props) => <Row {...props} >{props.children}</Row>;

Footer.Column = (props) => <Column {...props} >{props.children}</Column>;

Footer.Link = (props) => <Link {...props} >{props.children}</Link>;

Footer.Title = (props) => <Title {...props} >{props.children}</Title>;

Footer.Text = (props) => <Text {...props} >{props.children}</Text>;

Footer.Break = (props) => <Break {...props} />;


export default Footer;