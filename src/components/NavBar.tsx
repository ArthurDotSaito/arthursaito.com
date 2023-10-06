import { useRouter } from 'next/router';
import { useState } from 'react';
import { styled } from '../../stitches.config';
import Link from 'next/link';

export default function NavBar() {
  const pages = ['home', 'sobre', 'artigos'];
  const router = useRouter();
  const [hovered, setHovered] = useState('');

  return (
    <Header>
      <Link href="/" passHref>
        <ButtonLogo as="a">AS</ButtonLogo>
      </Link>
    </Header>
  );
}

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  fontSize: '12px',
  minHeight: '59px',
  width: '100%',
  flexWrap: 'wrap',
  position: 'absolute',
  top: '0',
  zIndex: 4,
  marginTop: '13px',
});

const ButtonHeader = styled('div', {
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  borderRadius: '$borderRadius',
  color: 'white',
  cursor: 'pointer',
  height: '34px',
  padding: '0 10px',
  transition: 'background $duration ease-in-out',
  '&:hover': { background: '$hover' },
});

const ButtonLogo = styled(ButtonHeader, {
  fontWeight: 700,
  fontSize: '32px',
  textDecoration: 'none',
  marginLeft: '12px',
  fontFamily: '$heading',
});
