import { ReactNode } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { ChakraProvider } from '@chakra-ui/react';

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps) => {
  return (
    <ChakraProvider>
      <PrimeReactProvider value={{ ripple: true }}>{children}</PrimeReactProvider>;
    </ChakraProvider>
  );
};

export { Providers };
