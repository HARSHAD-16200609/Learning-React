import "./App.css";
import ComplexProps from "./components/ComplexProps";
import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import RefProps from "./components/RefProps";
import ThemeToggler, { ThemeProvider } from "./components/ThemeToggler";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "🔗" },
    { id: "children", label: "children Props", icon: "👶" },
    { id: "complex", label: "complex Props", icon: "🧩" },
    { id: "theme", label: "theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all bg-blue-600 text-white
                hover:bg-blue-800
              `}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const isDark = true;
  return (
    <div className="min-h-screen text-white">
      <Navigation />
      <div className="container mx-auto p-4 bg-blue-500 h-20  text-white">
        <header>
          <h1>Explaining React Props</h1>
          <p>A comprehensive guide to understand react</p>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="RefProps" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="ChildrenProps" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="ComplexProps" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="ThemeToggler" className="scroll-mt-200">
            <ThemeProvider>
              <ThemeToggler />
            </ThemeProvider>
          </div>
          <footer
            className={`mt-12 text-center pb-8 transition-colors ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <p className="text-sm">
              Made with ❤️ using Bun, Vite, React, and Tailwind CSS
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
