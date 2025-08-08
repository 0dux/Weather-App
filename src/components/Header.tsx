import { useTheme } from "@/Context/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const isDark: boolean = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <img
            src={isDark ? "/logo.png" : "/logo2.png"}
            className="h-12"
            alt="Klimate Logo"
          />
        </Link>
        <div>
          {/* Search */}
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500 
            ${isDark ? "rotate-180" : "rotate-0"}`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500 transition-all rotate-0" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 transition-all rotate-0" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
