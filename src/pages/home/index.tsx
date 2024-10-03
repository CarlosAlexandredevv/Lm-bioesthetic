import { Header } from '@/components/globals/header';
import { AboutUs } from './components/about-us';
import { Procedures } from './components/procedures';
import { Doubts } from './components/doubts-session';
import { Results } from './components/results';
import { Comments } from './components/comments';
import { FAQ } from './components/faq';

export function LandingPage() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Procedures />
      <Doubts />
      <Results />
      <Comments />
      <FAQ />
    </div>
  );
}
