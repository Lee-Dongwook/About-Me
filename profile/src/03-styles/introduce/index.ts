import styled from 'styled-components';

type CardContainerProps = {
    animate?: boolean;
};

export const IntroduceCardContainer = styled.div<CardContainerProps>`
  padding: 220px;
  opacity: ${(props) => (props.animate ? 1 : 0)};
  transform: translateY(${(props) => (props.animate ? 0 : '150px')});
  transition:
    opacity 5s ease-in-out,
    transform 5s ease;
`;