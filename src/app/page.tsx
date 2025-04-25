import Top from './components/top';
import Destination from './components/Destination';
import Middle from './components/middle';
import Booking from './components/booking';
import Packages from './components/package';
import Partner from './components/Partner';
import Footer from './components/footer';

export default function Home() {
  return (
    <main>
      <Top />
      <Destination />
      <Middle />
      <Packages />
      <Booking />
      <Partner />
      <Footer />
      {/* Rest of your sections */}
    </main>
  );
}
