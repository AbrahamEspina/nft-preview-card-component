import { Link } from '@chakra-ui/react';

export const Title = ({ children }) => {
  return (
    <Link href='#' fontSize='2xl' fontWeight='600' color='white' py='20px' transition='ease-out 0.3s' _hover={{ color: 'cyan' }} cursor='pointer'>
      { children }
    </Link>
  )
}