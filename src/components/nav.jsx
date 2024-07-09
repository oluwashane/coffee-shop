import { ShoppingCart } from 'lucide-react';
import { Button } from './button';

export function Nav() {
  return (
    <nav className="text-white flex items-center space-x-8">
      <p>Coffee</p>
      <p>Shop</p>
      <p>About</p>
      <ShoppingCart className="text-[#EB7100]" />
      <Button className="bg-[#EB7100] rounded-md">Login</Button>
    </nav>
  );
}
