import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="sm" className="p-2 w-9 h-9" disabled />;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className="p-2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-gray-700 hover:text-accessible-orange dark:text-white dark:hover:text-accessible-orange" />
      ) : (
        <Sun className="h-5 w-5 text-gray-700 hover:text-accessible-orange dark:text-white dark:hover:text-accessible-orange" />
      )}
    </Button>
  );
};

export default ThemeToggle;
