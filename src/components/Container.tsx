import React from 'react';
import styled from 'styled-components';

export default styled.div<{ width: number }>`
    max-width: ${({ width }):string => width + 'px'};
    margin: 0 auto;
`