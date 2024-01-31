import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  chakra,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, User } from "../../context/UserContext";

/* 
LocalStorage = DB
UserContext => J'ai un utilisateur connecté ? Oui / non
*/

const Login = () => {
  const userContext = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());

    /* 
    1.1 Aller chercher les utilisateurs dans le localStorage
    1.2 Comparer les identifiants avec le tableau d'utilisateurs

    

    2. vérifier que le mot de passe lié à ce compte est bon
    3.1 Si c'est bon => On set l'utilisateur dans le contexte
    3.2 C'est pas bon => Erreur, et on reste là
    */

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(({ email }) => email === user.email)) {
        userContext.setUser?.(user as User);
    } else {
        // Afficher une erreur indiquant que l'utilisateur n'existe pas
    }
  };

  return (
    <chakra.form display="flex" flex={1} onSubmit={handleSubmit}>
      <FormControl
        display="flex"
        flex={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
         h="100vh"
        
      >
        <Heading mb={6}>Already Dumb ?</Heading>
        <FormLabel>Email address</FormLabel>
        <Input id="email" name="email" type="email" w="auto" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input id="password" name="password" type="password" w="auto" />
        <FormHelperText>We'll never share your password.</FormHelperText>

        <HStack mt={4}>
          <Link to="/signup">
            <Button variant="outline">S'inscrire</Button>
          </Link>
          <Button colorScheme="teal" type="submit">
            Se connecter
          </Button>
        </HStack>
      </FormControl>
    </chakra.form>
  );
};

export default Login;
