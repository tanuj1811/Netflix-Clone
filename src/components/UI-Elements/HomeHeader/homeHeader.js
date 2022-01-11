import React from 'react';
import { Container, Title, SubTitle } from './homeHeader-styles';

const HomeHeader = (props) => {
    return (
        <Container {...props}>{props.children}</Container>
    )
}

HomeHeader.Title = ({children,...restProps}) => <Title {...restProps} >{children}</Title>

HomeHeader.SubTitle = ({children,...restProps}) => <SubTitle {...restProps} >{children}</SubTitle>

export default HomeHeader;