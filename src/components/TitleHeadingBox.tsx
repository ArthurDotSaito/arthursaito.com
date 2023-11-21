import { styled, keyframes } from '../../stitches.config';

const changeColor = keyframes({
  '0%': { color: '$cyan' },
  '25%': { color: '$purple' },
  '50%': { color: '$orange' },
  '75%': { color: '$green' },
  '100%': { color: '$yellow' },
});

const HeadingBox = styled('div', {
  fontFamily: '$heading',
  fontSize: '35px',
  animation: `${changeColor} 15s infinite alternate`,
  marginBottom: '2rem',
});

export default HeadingBox;
