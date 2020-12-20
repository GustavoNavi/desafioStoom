import styled from 'styled-components';

export const StyButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 20px;

    & > div:last-of-type {
        margin-left: 15px;
    }
`;

export const StySpanContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    & > span:first-of-type {
        text-align: start;
        padding-top: 40px;
        padding-bottom: 100px;
    }

    & > span:last-of-type {
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: flex-end;
    }
`;

export const StyItems = styled.div`
    display: flex;
    padding-bottom: 100px;

    & > span:first-of-type {
        width: 70%;
        display: flex;
        text-align: start;
    }
`;