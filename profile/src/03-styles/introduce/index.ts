import styled from 'styled-components';

type CardContainerProps = {
    animate?: boolean;
};

export const IntroduceCardContainer = styled.div<CardContainerProps>`
  padding: 250px;
  opacity: ${(props) => (props.animate ? 1 : 0)};
  transform: translateY(${(props) => (props.animate ? 0 : '150px')});
  transition:
    opacity 5s ease,
    transform 5s ease;
`;