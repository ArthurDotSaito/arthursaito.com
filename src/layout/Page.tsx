import { BaseWrapper } from '@/components/BaseWrapper';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { PageContainer, PageStandardContent } from '@/components/PageContainer';

export default function Page({ children }: any) {
  return (
    <BaseWrapper>
      <NavBar />
      <PageContainer>
        <PageStandardContent>{children}</PageStandardContent>
      </PageContainer>
      <Footer />
    </BaseWrapper>
  );
}
