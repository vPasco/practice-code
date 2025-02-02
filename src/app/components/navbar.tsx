// components/Navbar.js
"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  // Handle Sign Out button click
  const handleSignOut = () => {
    // Add any sign-out logic here (e.g., clearing tokens, session, etc.)
    router.push("/login"); // Redirect to the login page
  };

  return (
    <nav className="p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: App Name */}
        <h1 className="text-white text-2xl font-bold">My App</h1>

        {/* Right side: Links and Sign Out Button */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li><a href="#" className="text-white hover:text-blue-200">Table 1</a></li>
            <li><a href="#" className="text-white hover:text-blue-200">Table 2</a></li>
            <li><a href="#" className="text-white hover:text-blue-200">Table 3</a></li>
          </ul>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="text-white hover:text-blue-200 bg-transparent border border-white px-4 py-2 rounded-lg"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}