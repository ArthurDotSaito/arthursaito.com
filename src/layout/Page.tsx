import { AnimationContainer } from '@/components/Animation-Container';
import { BaseWrapper } from '@/components/BaseWrapper';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { PageContainer, PageStandardContent } from '@/components/PageContainer';
import ThreeJsScene from '@/components/lib/ThreeScene';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export default function Page({ children }: any) {
  return (
    <BaseWrapper>
      <NavBar />
      <PageContainer>
        <AnimationContainer>
          <ThreeJsScene />
        </AnimationContainer>
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          <PageStandardContent>{children}</PageStandardContent>
        </motion.div>
      </PageContainer>
      <Footer />
    </BaseWrapper>
  );
}
