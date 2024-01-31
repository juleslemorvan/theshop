
import star from "../../assets/star-icon.svg";
import { Flex, Image } from "@chakra-ui/react";

type RatingProps = {
  rate: number;
};


const Rating = ({ rate }: RatingProps) => {
  const fullyStars = Math.round(rate);

  return (
    <Flex gap={1}>
      {Array.from({ length: fullyStars }).map((_, index) => (
        <Image boxSize={5} src={star} key={index}/>
      ))}
      
    </Flex>
  );
};

export default Rating;
