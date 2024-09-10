import { Header } from '@/components/globals/header';
import { AboutUs } from './components/about-us';
import { Procedures } from './components/procedures';

export function LandingPage() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Procedures />
    </div>
  );
}
