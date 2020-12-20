import styled, { css } from 'styled-components';

interface IStyContainerProps {
  readonly hasShadow: boolean;
  readonly hasMargin: boolean;
  readonly hasBorderRadius: boolean;
}

export const StyContainer = styled.div<IStyContainerProps>`
  position: absolute;
  opacity: 0.92;
  right: 0;
  left: 0;
  width: auto;
  padding: 20px;
  min-height: 90vh;
  background: #eceff3;
  text-align: center;
  margin: ${(props) => props.hasMargin && '1% 15% 1% 15%'};
  ${(props) =>
    props.hasShadow &&
    css`
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
        0px 4px 5px 0px rgba(0, 0, 0, 0.1),
        0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    `}
  ${props => props.hasBorderRadius && css`
    border-radius: 25px;
  `};

  button {
    display: flex;
    justify-content: center;
  }
`;

export const StyContent = styled.div`
  min-height: 62vh;
  display: flex;
`;