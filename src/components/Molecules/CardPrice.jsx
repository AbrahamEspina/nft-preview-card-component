import { Flex, Image } from '@chakra-ui/react';
import { Price } from '../Atoms/Price';
import { Paragraph } from '../Atoms/paragraph';
import IconEther from '../../assets/icon-ethereum.svg';
import Clock from '../../assets/icon-clock.svg';

const CardPrice = () => {
  return (
    <Flex align='center' justifyContent='space-between'>
      <Flex align='center' gap='5px'>
        <Image src={IconEther} alt='ether icon' boxSize='20px' />
        <Price>0.041 ETH</Price>
      </Flex>
      <Flex align='center' gap='5px'>
        <Image src={Clock} alt='clock icon' boxSize='20px' />
        <Paragraph>3 days left</Paragraph>
      </Flex>
    </Flex>
  )
}

export default CardPrice;