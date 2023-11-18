import { AnimationContainer } from '@/components/Animation-Container';
import { BaseWrapper } from '@/components/BaseWrapper';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { PageContainer, PageStandardContent } from '@/components/PageContainer';
import ThreeJsScene from '@/components/lib/ThreeScene';
import { useRouter } from 'next/router';

export default function Page({ children }: any) {
  const router = useRouter();
  const pathsWithoutAnimation = ['/[slug]', '/404'];
  const showAnimation = !pathsWithoutAnimation.includes(router.pathname);

  return (
    <BaseWrapper>
      <NavBar />
      <PageContainer>
        {showAnimation && (
          <AnimationContainer>
            <ThreeJsScene />
          </AnimationContainer>
        )}
        <PageStandardContent>{children}</PageStandardContent>
      </PageContainer>
      <Footer />
    </BaseWrapper>
  );
}
