// src/components/PageLayout.js
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 40%;
  margin: 0 auto;
  padding: 20px;
  
`;

const PageTitle = styled.h1`
  color: #2c3e50;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid #3498db;;
  
  
`;


const PageLayout = ({ title, children }) => {
  return (
    <PageContainer>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </PageContainer>
  );
};

export default PageLayout;