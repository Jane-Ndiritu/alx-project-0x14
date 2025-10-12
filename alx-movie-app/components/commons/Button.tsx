import React from "react";

interface MovieButtonProps {
  label: string;
  trailerUrl?: string;
}

const Button: React.FC<MovieButtonProps> = ({ label, trailerUrl }) => {
  const handleClick = () => {
    if (trailerUrl) {
      window.open(trailerUrl, "_blank");
    } else {
      console.warn("Trailer URL not available");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full mt-2 bg-[#E2D609] text-black font-semibold py-2 rounded-md hover:bg-[#cfc108] transition-all duration-200"
    >
      {label}
    </button>
  );
};

export default Button;
