import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h1`
    padding: 10px;
    font-size: clamp(1.3rem, 5vw, 3rem);
`

export default function Logo() {
    return (
        <div>
            <StyledH2>onur gurso;</StyledH2>
        </div>
    )
}
