import { Box, Divider } from '@chakra-ui/react';
import CardImage from '../Molecules/CardImage';
import CardDescription from '../Molecules/CardDescription';
import CardPrice from '../Molecules/CardPrice';
import CardProfile from '../Molecules/CardProfile';

const Card = () => {
  return (
    <Box bg='cardBg' maxW='350px' m='auto' p='20px' borderRadius='2xl'>
      <CardImage />
      <CardDescription />
      <CardPrice />
      <Divider borderColor='softBlue' py='10px' />
      <CardProfile/>
    </Box>
  )
}

export default Card;