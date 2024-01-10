import styled from 'styled-components';

type CardContainerProps = {
    animate?: boolean;
};

export const IntroduceCardContainer = styled.div<CardContainerProps>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.animate ? 1 : 0)};
  transform: translateY(${(props) => (props.animate ? 0 : '100px')});
  transition:
    opacity 4s ease,
    transform 4s ease;
`;