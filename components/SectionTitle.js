import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
    line-height: 30px;
    text-align: center;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: bold;
    /* font-size: 25px; */
    font-size: 26px;
    margin: 10px 0;
    color: rgba(19, 19, 19, 1);
    text-align: left;
    padding: 0 25px;
`
const SectionTitle = ({text}) => {

  return (
    <Text>{text}</Text>
  )
}

export default SectionTitle