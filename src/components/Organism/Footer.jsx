import { Flex, Link } from '@chakra-ui/react';

const Footer = () => {
  return(
    <Flex color='white' justify='center' wrap='wrap'>
      Challenge by 
      <Link color='cyan' px='1px' href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </Link>. 
      Coded by 
      <Link color='cyan' px='1px' href="https://github.com/AbrahamEspina">
        Abraham Espinosa
      </Link>.
    </Flex>
  )
}

export default Footer;