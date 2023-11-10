import { styled } from '../../stitches.config';

export const PageContainer = styled('main', {
  fontSize: '16px',
  lineHeight: '32px',
  color: '$secondary',
  background: '$background',
  height: '100%',
  paddingTop: '100px',
});

export const PageStandardContent = styled('section', {
  margin: '0 auto',
  maxWidth: '760px',
  padding: '0 20px',
});
