import { Flex, Avatar, Text } from '@chakra-ui/react';
import AvatarImg from '../../assets/image-avatar.png';

const CardProfile = () => {
  return (
    <Flex w='100%' align='center' pt='10px' gap='5px'>
      <Avatar border='1px solid white' size='md' borderColor='white' src={AvatarImg} name='avatar image'/>
      <Text color='softBlue' pl='10px'>Creation of</Text><Text transition='ease-out 0.3s' cursor='pointer' color='white' _hover={{ color: 'cyan' }}>Jules Wyvern</Text>
    </Flex>
  )
}

export default CardProfile;