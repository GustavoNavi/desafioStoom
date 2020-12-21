import styled from 'styled-components';

export interface IsStyContainer {
  readonly disable: boolean;
  readonly height?: string;
  readonly width?: string;
}

export const StyContainer = styled.div<IsStyContainer>`
  max-width: auto;
  width: ${(props) => props.width ? props.width : '100px'};
  height: ${(props) => props.height ? props.width : '40px'};
  background: transparent;
  border-radius: 5px;

  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border: 2px solid
      ${(props) =>
        props.disable
          ? 'rgba(66,65,65,0.08)'
          : '#ffbc40'};
    align-items: center;
    border-radius: 2px;
    background: transparent;
    color: ${(props) =>
      props.disable
        ? 'rgba(66,65,65,0.3)'
        : '#ffbc40'};
    font-size: 16px;
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
    border-radius: 2px;

    :hover {
      background: ${(props) =>
        !props.disable && '#fff3e0'};
    }

    span {
        font-size: 16px;
        font-weight: 600;
    }
  }
`;