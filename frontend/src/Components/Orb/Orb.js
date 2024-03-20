import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb() {

    const {width, height} = useWindowSize()

    console.log(width, height)


    const OrbStyled = styled.div`
        width: 200vh;
        height: 200vh;
        position: absolute;
        background: black;
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb