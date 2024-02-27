import { useClickAway } from "react-use";
import { useRef, useState } from "react";
import { Squash as Hamburger } from 'hamburger-react';

const Mobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const navigateToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <div ref={ref} className="lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20">
          <ul className="grid gap-2">
            <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700 list-none">
              <button
                onClick={() => navigateToSection('about')}
                className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                <span className="flex gap-1 text-lg text-white">About</span>
              </button>
            </li>
            <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700 list-none">
              <button
                onClick={() => navigateToSection('skills')}
                className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                <span className="flex gap-1 text-lg text-white">Skills</span>
              </button>
            </li>
            <li className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700 list-none">
              <button
                onClick={() => navigateToSection('projects')}
                className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
              >
                <span className="flex gap-1 text-lg text-white">Projects</span>
              </button>
            </li>
            {/* Add more sections as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Mobile;