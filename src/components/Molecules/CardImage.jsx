import { Box, Image, Flex } from '@chakra-ui/react';
import Cover from '../../assets/image-equilibrium.jpg';
import IconView from '../../assets/icon-view.svg';

const CardImage = () => {
  return (
    <Box display='inline-block' position='relative' width='100%'>
      <Image src={Cover} alt='cover image' borderRadius='2xl' />
      <Flex align='center' justify='center' cursor='pointer' position='absolute' top='0px' height='100%' transition='.3s ease' opacity='0' width='100%' textAlign='center' borderRadius='2xl' _hover={{ opacity: '90%', bg: 'cyan' }}>
        <Image src={IconView} alt='view image' opacity='100%' borderRadius='2xl' />
      </Flex>
    </Box>
  )
}

export default CardImage;