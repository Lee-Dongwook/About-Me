import styled from 'styled-components';

type CertificateCardProps = {
    even?: boolean;
  };

export const CertificateCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CertificateCard = styled.div<CertificateCardProps>`
 width: 400px;
 text-align: center;
 border: 1px solid #ccc;
 padding: 16px;
 border-radius: 10px;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
 margin-left: ${(props) => (props.even ? '0' : '500px')};
`;