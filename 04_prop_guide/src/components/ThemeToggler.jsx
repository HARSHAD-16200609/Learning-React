import { createContext, useContext, useState } from "react";

/*
|--------------------------------------------------------------------------
| CONTEXT CREATION
|--------------------------------------------------------------------------
| createContext() creates a global state container.
| Initially it holds `undefined` until a Provider supplies a value.
|
| Think of it as:
| "I am defining WHAT kind of data will be shared globally"
*/
const ThemeContext = createContext();

/*
|--------------------------------------------------------------------------
| THEME PROVIDER COMPONENT
|--------------------------------------------------------------------------
| - This component OWNS the theme state.
| - It wraps part (or all) of the app.
| - Any child inside can ACCESS the theme data.
|
| Provider = scope boundary
*/
export function ThemeProvider({ children }) {

    /*
    | Local state that becomes GLOBAL via Context
    | This is the SINGLE SOURCE OF TRUTH for theme
    */
    const [theme, setTheme] = useState("light");

    /*
    | Business logic to mutate global state
    | Never mutate state directly
    | Always use setter function
    */
    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === "light" ? "dark" : "light"
        );
    };

    /*
    | Value object sent to ALL consumers
    | Best practice:
    | - expose raw state
    | - expose derived state
    | - expose actions
    */
    const value = {
        theme,                  // raw state
        toggleTheme,            // action
        isDark: theme === "dark" // derived state (computed once)
    };

    /*
    | Provider makes `value` accessible to ALL children
    | children can be deeply nested — depth does NOT matter
    */
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

/*
|--------------------------------------------------------------------------
| CUSTOM HOOK 
|--------------------------------------------------------------------------
| - Encapsulates useContext logic
| - Prevents misuse outside Provider
| - Improves DX and readability
|
| This is HOW context is consumed in real apps
*/
export function useTheme() {
    const context = useContext(ThemeContext);

    /*
    | Defensive programming
    | Fails fast if developer forgets Provider
    | This is STANDARD in production code
    */
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}

/*
|--------------------------------------------------------------------------
| THEME TOGGLE BUTTON (CONSUMER)
|--------------------------------------------------------------------------
| - Consumes context via useTheme()
| - Does NOT manage theme itself
| - Just triggers global action
*/
function ThemeToggleButton() {
    const { toggleTheme, isDark } = useTheme();

    return (
        <button
            onClick={toggleTheme} // calls global state updater
            className={`
                relative w-16 h-8 rounded-full transition-colors duration-300
                ${isDark ? "bg-blue-600" : "bg-gray-300"}
            `}
        >
            <div
                className={`
                    absolute top-1 left-1 w-6 h-6 rounded-full bg-white
                    transition-transform duration-300
                    ${isDark ? "translate-x-8" : ""}
                `}
            >
                {isDark ? "🌙" : "☀️"}
            </div>
        </button>
    );
}

/*
|--------------------------------------------------------------------------
| THEMED CARD COMPONENT
|--------------------------------------------------------------------------
| - Reads theme only
| - Pure UI component
| - Re-renders automatically when theme changes
*/
function ThemedCard({ title, children }) {
    const { isDark } = useTheme();

    return (
        <div
            className={`
                p-6 rounded-lg shadow-lg transition-colors
                ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}
            `}
        >
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            {children}
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| THEMED BUTTON COMPONENT
|--------------------------------------------------------------------------
| - Uses BOTH context + props
| - Context = global behavior (theme)
| - Props = local configuration (variant)
|
| This combo is VERY common in real projects
*/
function ThemedButton({ children, variant = "primary", onClick }) {
    const { isDark } = useTheme();

    const getButtonClasses = () => {
        if (variant === "primary") {
            return isDark
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-orange-500 hover:bg-blue-600 text-white";
        }

        if (variant === "secondary") {
            return isDark
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800";
        }
    };

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-lg transition-colors ${getButtonClasses()}`}
        >
            {children}
        </button>
    );
}

/*
|--------------------------------------------------------------------------
| MAIN DEMO COMPONENT
|--------------------------------------------------------------------------
| - Consumes global theme
| - Maintains its OWN local state (clickCount)
| - Demonstrates separation of concerns
*/
export default function ThemeToggler() {
    const { isDark } = useTheme();   // global state
    const [clickCount, setClickCount] = useState(0); // local state

    return (
        <section
            className={`
                p-8 rounded-xl transition-colors
                ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"}
            `}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Theme Toggler</h2>
                <ThemeToggleButton />
            </div>

            {/* Cards consuming same global theme */}
            <ThemedCard title="Statistics">
                <p>Total Clicks: {clickCount}</p>
                <p>Theme: {isDark ? "Dark" : "Light"}</p>
            </ThemedCard>

            {/* Buttons using both context + props */}
            <div className="flex gap-3 mt-4">
                <ThemedButton onClick={() => setClickCount(c => c + 1)}>
                    Increment
                </ThemedButton>
                <ThemedButton variant="secondary" onClick={() => setClickCount(0)}>
                    Reset
                </ThemedButton>
            </div>
        </section>
    );
}
