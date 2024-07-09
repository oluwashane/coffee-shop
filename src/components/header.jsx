import { Nav } from './nav';
import Logo from '../assets/icons/Logo.png';

export function Header() {
  return (
    <div className="bg-[#261200]">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="">
          <img src={Logo} />
        </div>

        <Nav />
      </div>
    </div>
  );
}
