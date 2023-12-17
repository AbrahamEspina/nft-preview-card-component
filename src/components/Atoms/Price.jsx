import { Text } from '@chakra-ui/react';

export const Price = ({ children }) => {
  return (
    <Text fontSize='md' fontWeight='600' color='cyan'>
      { children }
    </Text>
  )
}