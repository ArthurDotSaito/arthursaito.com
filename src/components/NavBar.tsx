import { useRouter } from 'next/router';
import { useState } from 'react';
import { styled } from '../../stitches.config';
import Link from 'next/link';

export default function NavBar() {
  const pages = ['home', 'sobre', 'artigos'];
  const router = useRouter();
  const [selected, setSelectedTab] = useState('');

  return (
    <Header>
      <Link href="/" passHref>
        <ButtonLogo>AS</ButtonLogo>
      </Link>
      <Nav>
        <List>
          {pages.map((page) => {
            const path = `/${page.toLowerCase()}`;
            const isHovered = selected === page;
            return (
              <li key={page} onMouseEnter={() => setSelectedTab(page)}>
                <NavBarPageTitle>{page}</NavBarPageTitle>
                {page === selected && <NavBarPageTitleSelected></NavBarPageTitleSelected>}
              </li>
            );
          })}
        </List>
      </Nav>
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

const List = styled('ul', {
  margin: '0',
  padding: '0',
  listStyle: 'none',
  display: 'inline-flex',
  position: 'relative',
  top: '5px',
  '@bp1': { justifyContent: 'space-around' },
});

const Nav = styled('nav', {
  textAlign: 'center',
  flex: 1,
  order: 2,
  flexBasis: '100%',
  '@bp2': { order: 0, flexBasis: 'initial' },
  '@bp3': { overflowX: 'scroll', overflowY: 'hidden' },
});

const NavBarPageTitle = styled('section', {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: '500',
  letterSpacing: '1.2px',
  padding: '20px',
  textDecoration: 'none',
  textTransform: 'uppercase',
});

const NavBarPageTitleSelected = styled('section', {
  display: 'inline-block',
  fontSize: '12px',
  fontWeight: '500',
  letterSpacing: '1.2px',
  padding: '20px',
  textDecoration: 'none',
  textTransform: 'uppercase',
});
