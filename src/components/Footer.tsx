import { Box } from '@/layout/ChakraUI';

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Arthur Saito. All Rights Reserved.
    </Box>
  );
};

export default Footer;
