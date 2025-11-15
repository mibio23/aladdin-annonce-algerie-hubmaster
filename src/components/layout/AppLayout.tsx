import React from "react";
import Header from "@/components/layout/Header";

interface AppLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, showHeader = true }) => {
  return (
    <>
      {showHeader && <Header />}
      {children}
    </>
  );
};

export default AppLayout;