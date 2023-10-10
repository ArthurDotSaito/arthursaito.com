import { BaseWrapper } from '@/components/BaseWrapper';
import NavBar from '@/components/NavBar';

export default function Base({ children }: any) {
  return (
    <BaseWrapper>
      <NavBar />
    </BaseWrapper>
  );
}
