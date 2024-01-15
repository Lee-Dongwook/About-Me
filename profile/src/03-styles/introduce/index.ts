import styled from 'styled-components';

type CardContainerProps = {
    animate?: boolean;
};

export const IntroduceCardContainer = styled.div<CardContainerProps>`
  padding: 200px;
  opacity: ${(props) => (props.animate ? 1 : 0)};
  transform: translateY(${(props) => (props.animate ? 0 : '150px')});
  transition:
    opacity 4s ease-in-out,
    transform 4s ease;
`;

export const IntroduceCardFontStyle = styled.p`
 font-size: 20px;
 color: #333;
 margin: 30px 0
`;