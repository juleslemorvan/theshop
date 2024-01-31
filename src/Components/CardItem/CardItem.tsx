import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import Rating from "../Rating/Rating";

const CardItem = ({
  image,
  title,
  description,
  category,
  price,
  rate,
  children,
}: {
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rate: number;
  children: React.ReactNode;
}) => {
  return (
    <Card width="sm">
      <CardBody>
        <Image
          src={image}
          alt={title}
          borderRadius="lg"
          boxSize={300}
          objectFit="contain"
        />
        <Stack mt="6" spacing="3" alignItems="center" justifyContent="center">
          <Text fontSize="2xl">{title}</Text>
          <Text alignItems="center">{description}</Text>
          <Text>{category}</Text>
          <Text color="blue.600" fontSize="2xl">
            {price} €
          </Text>
          <Rating rate={rate} />
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>{children}</CardFooter>
    </Card>
  );
};

export default CardItem;
