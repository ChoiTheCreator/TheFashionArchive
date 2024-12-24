import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: white;
  background-color: red;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
  animation: fade-out 2s forwards;

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export default ErrorMessage;
