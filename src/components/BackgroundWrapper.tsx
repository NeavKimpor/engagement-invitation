// src/components/BackgroundWrapper.tsx
import { ReactNode } from "react";
import "../pages/Opening.css"; // use the same CSS for body, fonts, etc.

interface Props {
  children: ReactNode;
}

function BackgroundWrapper({ children }: Props) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-center px-4">
      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 -z-10 pointer-events-none" />
      {children}
    </div>
  );
}

export default BackgroundWrapper;
