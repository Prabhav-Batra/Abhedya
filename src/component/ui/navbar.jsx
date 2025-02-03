import { Button } from "./button";

export const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-2 px-4">
        <h1 className="text-[#f9f9f9] font-bold text-lg md:text-2xl">
          Abhedya{" "}
        </h1>
        <Button text="Sign Up" variant="main" />
      </nav>
    </header>
  );
};
