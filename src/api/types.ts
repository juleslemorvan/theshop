export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string[];
  rating: number
  thumbnail: string
};
