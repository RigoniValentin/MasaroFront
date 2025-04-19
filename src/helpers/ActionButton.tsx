import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  return (
    <Link
      to="/unirme"
      className="hover:bg-primary-600 rounded-md bg-primary-500 px-10 py-2 text-white transition duration-300 ease-in-out"
    >
      {children}
    </Link>
  );
};

export default ActionButton;
