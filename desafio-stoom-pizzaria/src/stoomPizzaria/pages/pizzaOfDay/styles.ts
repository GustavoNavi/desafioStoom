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

export const StyItems = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    margin-bottom: 10px;
    padding: 0px 5px 0px 5px;

    & > span:first-of-type {
        width: 70%;
        display: flex;
        text-align: start;
    }
`;

interface IContainerItems {
    readonly selected: boolean;
}

export const StyContainerItems = styled.div<IContainerItems>`
    height: 25%;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.selected ? '#fff3e0' : 'transparent'};
    cursor: pointer;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.5);

    :hover {
        background-color: #fff3e0;
    }
`;

export const StyContainer = styled.div`
    display: flex;
    width: 100%;
    height: inherit;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`;