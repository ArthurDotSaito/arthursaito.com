import { Box, Spinner } from '@/layout/ChakraUI';
import { forwardRef } from 'react';

export const AnimationSpiner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const AnimationContainer = forwardRef<HTMLDivElement, React.PropsWithChildren<{}>>(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 540]}
    h={[280, 480, 540]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <AnimationContainer>
      <AnimationSpiner />
    </AnimationContainer>
  );
};

export default Loader;
