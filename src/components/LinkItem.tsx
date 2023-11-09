import { Link } from '@/layout/ChakraUI';
import NextLink from 'next/link';

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
}

const LinkItem = ({ href, path, target, children, ...props }: LinkItemProps) => {
  const active = path === href;

  return (
    <Link as={NextLink} href={href} scroll={false} p={2} target={target} {...props}>
      {children}
    </Link>
  );
};

export default LinkItem;
