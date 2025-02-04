
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [userData, setUserData] = useState<{ name: string; phone: string } | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <nav className="bg-gray-800/10 backdrop-blur-md rounded-b-xl p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Upliance.AI</div>
        <div className="text-white">
          {userData ? (
            <div className="flex gap-4">
              <span>{userData.name}</span>
              <span>{userData.phone}</span>
            </div>
          ) : (
            <span>Guest User</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
