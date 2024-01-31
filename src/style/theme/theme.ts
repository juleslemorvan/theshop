import {
  extendTheme,
  theme as defaultTheme,

} from "@chakra-ui/react";

export const theme = extendTheme({
  ...defaultTheme,
  fonts: {
    heading: `'Luckiest Guy', sans-serif`,
    link: `'Luckiest Guy', sans-serif`,
    body: `'Body Font Name', sans-serif`,
  },
  color: {
    vertFonce: `"CCD5AE"`,
    vertClair: `"E9EDC9"`,
    beigeFonce: `"FEFAE0"`,
    beigeclair: `"FAEDCD"`,
  },
});

