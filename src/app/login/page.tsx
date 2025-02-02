"use client"; 
import Image from "next/image";
import RegisterImage from "@/app/components/registerImage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();

  // Handle button click to redirect to homepage
  const handleLoginClick = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission
    router.push("/homepage");
  };

  return (
    <div className="h-full px-4 md:px-32 py-20 bg-black flex items-center justify-center">
      {/* Responsive grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-[70%_auto] w-full h-full rounded-lg overflow-hidden">
        
        {/* Left (Hidden on small screens) */}
        <RegisterImage />

        {/* Right */}
        <div className="w-full h-full bg-white px-8 py-6 max-w-md mx-auto shadow-lg rounded-lg md:rounded-l-none">
          <h2 className="text-3xl font-bold text-blue-500 pb-4 pt-2"> Log in</h2>
          <form className="justify-center mt-5" onClick={handleLoginClick}>  {/* onsubmit if theres form */}
            <div className="flex flex-col items-center mt-4 pb-4">
              <button className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
                <Image 
                  src="/google.png" 
                  alt="Google Logo" 
                  width={20} 
                  height={20} 
                  className="mr-2"
                />
                <span className="text-gray-700 font-medium">Continue with Google</span>
              </button>
            </div>

            {/* Divider with OR */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-gray-500 text-sm">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <label className="block text-blue-500 text-sm font-bold pb-1 pl-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full mb-2 p-2 pl-4 border border-gray-300 rounded-lg" 
            />

            <label className="block text-blue-500 pt-4 text-sm font-bold pb-1 pl-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-2 pl-2 border border-gray-300 rounded-lg" 
            />
            
            <div className="flex justify-center pt-4">
              {/* When the button is clicked, it will navigate to /homepage */}
              <button 
                type="submit" 
                className="w-full p-2 my-2 bg-blue-500 text-white rounded-lg"
              >
                Log in
              </button>
            </div>

            <div className="flex justify-center mt-2">
              <a href="#" className="text-blue-500 font-medium hover:underline">Forgot Password?</a>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="flex justify-center mt-4 pt-6">
            <p className="text-gray-600 text-sm">
              Don't have an account? 
              <a href="#" className="text-blue-500 font-medium hover:underline ml-1">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
