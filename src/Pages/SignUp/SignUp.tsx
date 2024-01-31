import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  chakra,
  FormHelperText,
  Button,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { Link , useNavigate} from "react-router-dom";
import { User } from "../../context/UserContext";

const SignUp = () => {
    const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());

    const users: User[] =JSON.parse(localStorage.getItem('users') || '[]')
    if (users.find(({email})=> email === user.email)) {
        /* Afficher une erreur d'unicité */
        return;
    }

    localStorage.setItem("users", JSON.stringify([...users, user]));
    navigate('/login')
  };

  return (
    <chakra.form display="flex" flex={1} onSubmit={handleSubmit}  >
      
      <FormControl
        display="flex"
        flex={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Heading mb={6}>Not a Dumb Yet ?</Heading>
        <FormLabel>Email address</FormLabel>
        <Input id="email" name="email" type="email" w="auto" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>firstname</FormLabel>
        <Input id="firstname" name="firstname" w="auto" />
        <FormHelperText>We'll never share your name.</FormHelperText>
        <FormLabel>lastname</FormLabel>
        <Input id="lastname" name="lastname" w="auto" />
        <FormHelperText>We'll never share your name.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input id="password" name="password" type="password" w="auto" />
        <FormHelperText>We'll never share your password.</FormHelperText>
        <HStack mt={4}>
          <Link to="/login">
            <Button variant="outline">Se connecter</Button>
          </Link>
          <Button colorScheme="teal" type="submit">
            S'inscrire
          </Button>
        </HStack>
      </FormControl>
    </chakra.form>
  );
};

export default SignUp;
