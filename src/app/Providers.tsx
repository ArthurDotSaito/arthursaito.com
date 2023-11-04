import { ReactNode } from 'react';
import { PrimeReactProvider } from 'primereact/api';

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps) => {
  return <PrimeReactProvider value={{ ripple: true }}>{children}</PrimeReactProvider>;
};

export { Providers };
