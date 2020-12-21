import styled from 'styled-components';

export interface IsStyContainer {
  readonly width?: string;
  readonly height?: string;
  readonly disable: boolean;
}

export const StyContainer = styled.div<IsStyContainer>`
  max-width: auto;
  border-radius: 2px;
  background: #ffbc40;
  border-radius: 5px;
  width: ${(props) => props.width ? props.width : '100px'};
  height: ${(props) => props.height ? props.width : '40px'};
  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border: none;
    align-items: center;
    border-radius: 2px;
    background: transparent;
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
    border-radius: 5px;
    color: ${(props) =>
      props.disable
        ? 'rgba(66,65,65,0.3)'
        : '#fff'};
    :hover {
        background: ${(props) => !props.disable && '#ffa500'};
    }

    span {
        font-size: 16px;
        font-weight: 600;
    }
  }
`;