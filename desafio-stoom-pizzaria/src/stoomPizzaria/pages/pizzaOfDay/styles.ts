import styled from 'styled-components';

export const StyButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;

    & > div:last-of-type {
        margin-left: 15px;
    }
`;