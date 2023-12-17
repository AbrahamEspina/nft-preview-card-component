import { Container } from '@chakra-ui/react';

const Wrapper = ({ children }) => {
  return (
    <Container display='flex' flexDirection='column' maxW='100%' h='100vh' bg='mainBg'>
      { children }
    </Container>
  )
}

export default Wrapper;