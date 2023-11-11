import { Button, Link, List, ListItem } from '@/layout/ChakraUI';

const SocialMediaSection = () => {
  return (
    <List spacing={'15px'}>
      <ListItem>
        <Link href="https://github.com/ArthurDotSaito" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<i className="pi pi-github" style={{ fontSize: '2rem' }} />}
            border={'none'}
            cursor={'pointer'}
          >
            @ArthurDotSaito
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.linkedin.com/in/arthur-saito/" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<i className="pi pi-linkedin" style={{ fontSize: '2rem' }} />}
            border={'none'}
            cursor={'pointer'}
          >
            linkedin.com/arthur-saito
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://www.instagram.com/arthurysaito/" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<i className="pi pi-instagram" style={{ fontSize: '2rem' }} />}
            border={'none'}
            cursor={'pointer'}
          >
            @arthurysaito
          </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<i className="pi pi-twitter" style={{ fontSize: '2rem' }} />}
          border={'none'}
          cursor={'pointer'}
        >
          @sorry-i-dont-have-one
        </Button>
      </ListItem>
    </List>
  );
};

export default SocialMediaSection;
