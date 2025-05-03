// src/components/BackgroundLayout.tsx
import { ReactNode } from "react";
import BackgroundImage from "../assets/images/background.webp";

interface Props {
  children: ReactNode;
}

export default function BackgroundLayout({ children }: Props) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fixed background layer */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-10]"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      />

      {/* Optional black overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[-5]" />

      {/* Your actual page content */}
      {children}
    </div>
  );
}
