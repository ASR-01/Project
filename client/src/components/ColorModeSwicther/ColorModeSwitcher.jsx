import { useEffect, useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import { LuMoonStar } from "react-icons/lu";

const ColorModeSwitcher = () => {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
  
    let day = document.documentElement;
    if(theme){

      day.style.background ="white"
      day.style.color = "#23272A"
    }
    
    else{
      day.style.background = "#23272A"
      day.style.color = "white"
    }
   
    
  }, [theme])
  
  return (
    <div className="mt-2">
      <button id="theme" onClick={() => setTheme(!theme)}>
        {theme ? (
          <WiDaySunny className="text-3xl" />
        ) : (
          <LuMoonStar className="text-3xl" />
        )}
      </button>
    </div>
  );
};

export default ColorModeSwitcher;
