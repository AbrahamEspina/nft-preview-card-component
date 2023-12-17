import { Text } from '@chakra-ui/react';

export const Paragraph = ({ children, pb }) => {
  return (
    <Text fontSize='18px' fontWeight='300' color='softBlue' pb={pb}>
      { children }
    </Text>
  )
}
