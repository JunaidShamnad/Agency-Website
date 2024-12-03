import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    padding:30px;
    display: flex;
    flex-direction: column;
    overflow-y:scroll;
 `;
export const Section = styled.div`
    width: 100%;
    height:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    gap:15px;
 `;
export const SliderBox = styled.div`
    min-width: 300px;
    min-height:300px;
    background:red;
    display: flex;
    justify-content: center;
    align-items: center;
 `;

export const SliderWrapper = styled.div`
 min-width: 300px;
 flex-shrink: 0;
 margin: 0 10px;
 box-sizing: border-box;
`;
