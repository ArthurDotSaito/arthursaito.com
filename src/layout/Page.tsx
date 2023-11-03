import { BaseWrapper } from '@/components/BaseWrapper';
import NavBar from '@/components/NavBar';
import { PageContainer, PageStandardContent } from '@/components/PageContainer';

export default function Page({ children }: any) {
  return (
    <BaseWrapper>
      <NavBar />
      <PageContainer>
        <PageStandardContent>{children}</PageStandardContent>
      </PageContainer>
    </BaseWrapper>
  );
}
