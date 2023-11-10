import { AnimationContainer } from '@/components/Animation-Container';
import { BaseWrapper } from '@/components/BaseWrapper';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { PageContainer, PageStandardContent } from '@/components/PageContainer';
import ThreeJsScene from '@/components/lib/ThreeScene';
import { motion } from 'framer-motion';

export default function Page({ children }: any) {
  return (
    <BaseWrapper>
      <NavBar />
      <PageContainer>
        <AnimationContainer>
          <ThreeJsScene />
        </AnimationContainer>
        <PageStandardContent>{children}</PageStandardContent>
      </PageContainer>
      <Footer />
    </BaseWrapper>
  );
}
