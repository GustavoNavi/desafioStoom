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
        padding-bottom: 100px;
    }

    & > span:last-of-type {
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: flex-end;
    }
`;

interface IItems {
    readonly selected: boolean;
}

export const StyItems = styled.div<IItems>`
    display: flex;
    height: 40px;
    align-items: center;
    margin-bottom: 10px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);
    padding-left: 5px;
    cursor: pointer;
    background-color: ${(props) => props.selected ? '#fff3e0' : 'transparent'};

    & > span:first-of-type {
        width: 70%;
        display: flex;
        text-align: start;
    }

    :hover {
        background-color: #fff3e0;
    }
`;

export const StyContainerItems = styled.div`
    display: flex;
    flex-direction: column;
`;