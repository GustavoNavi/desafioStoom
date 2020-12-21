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
    margin-bottom: 25px;

    & > span:first-of-type {
        text-align: start;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    & > span:nth-child(2) {
        text-align: start;
        padding-bottom: 20px;
        text-decoration: underline;
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
    flex-direction: column;
    padding-bottom: 50px;

    & > span {
        padding-bottom: 10px;
        display: flex;
        text-align: start;
    }
`;

export const StyModal = styled.div`
    width: fit-content;
    height: 800px;
    background-color: #eceff3;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
    padding-top: 20px;

    & > span:not(:first-of-type) {
        display: flex;
        text-decoration: start;
        padding-bottom: 10px;
    }

    & > span:first-of-type {
        padding-bottom: 30px;
        font-weight: 600;
    }

    & > span:nth-child(5) {
        padding-top: 40px;
        padding-bottom: 10px;
        text-decoration: underline;
    }

    & > span:nth-child(7) {
        padding-bottom: 10px;
        text-decoration: underline;
    }
`;

export const StyContainerWrapper = styled.div`
    width: inherit;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

export const StyItemsOrder = styled.div`
    display: flex;
    flex-direction: column;
    text-decoration: start;
    align-items: end;

    & > span:not(:first-of-type) {
        margin-bottom: 10px;
    }

    & > span:first-of-type {
        text-decoration: underline;
        margin-bottom: 20px;
        margin-top: 30px;
    }
`;