import { Header } from '@/components/globals/header';
import { AboutUs } from './components/about-us';
import { Procedures } from './components/procedures';
import { Doubts } from './components/doubts-session';
import { Results } from './components/results';

export function LandingPage() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Procedures />
      <Doubts />
      <Results />
    </div>
  );
}
