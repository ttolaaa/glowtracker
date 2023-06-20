import Bodypage from '@/components/Body/Bodypage';
import { Navbar } from '../components/Navbar/Navbar';
const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* Rest of your page content */}
      <Bodypage/>
   
    </div>
  );
};

export default HomePage;
