import { Link } from '@chakra-ui/react';

export const Title = ({ children }) => {
  return (
    <Link href='#' display='block' fontSize='2xl' fontWeight='600' color='white' py='5px' transition='ease-out 0.3s' _hover={{ color: 'cyan' }} cursor='pointer'>
      { children }
    </Link>
  )
}