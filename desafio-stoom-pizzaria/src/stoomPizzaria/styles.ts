import styled from 'styled-components';

export const StyContainer = styled.div`
    width: 100%;
    position: fixed;
    height: inherit;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    right: 0;
    left: 0;

    & > img {
    width: 100%;
    position: fixed;
    height: inherit;
    display: flex;
    right: 0;
    }
`;

export const StyContent = styled.div`
    display: flex;
    overflow: overlay;
    width: 100%;
    position: fixed;
    height: inherit;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    right: 0;
    left: 0;
`;