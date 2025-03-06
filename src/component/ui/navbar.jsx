import { Logo } from "../../icons/logo.jsx";
import { Button } from "./button.jsx"
export const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-row gap-2 justify-between items-start m-[1%] h-15">
        {/* iste Logo */}
        <div className="flex flex-row w-1/2 h-full item-start">
          <div className="h-full w-18"> 
            <img className="object-cover h-full w-full" src="./iste.png" alt="" />
          </div>
          <h1 className="text-white text-3xl font-medium">| ISTE</h1>
        </div>
        {/* prody Logo */}
        <div className="flex flex-row gap-2">
          <Logo/>
          <h1 className="text-white text-2xl font-medium">Prodyogiki</h1> 
        </div>
      </nav>
    </header>
  );
};
