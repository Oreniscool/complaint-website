import { Button } from '@mui/base/Button';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <h3 className="text-2xl text-text-50">
        Tired of your voice not being heard?
      </h3>
      <h1 className="font-bold text-6xl text-text-100">
        Post your complaints on{' '}
        <span className="bg-gradient-to-r from-[#f7e522] to-[#90fa80] text-transparent bg-clip-text">
          CiviLink
        </span>
      </h1>
      <Link to="/form">
        <Button className="bg-primary-500 p-5 w-fit rounded-xl transition-all hover:scale-110 box shadow hover:shadow-[0_20px_80px_-10px_#c5b507]">
          Submit your complaint here!
        </Button>
      </Link>
    </div>
  );
}
export default Home;
