// app/page.tsx
"use client"; 
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login"); // Automatically redirect to /login (not /Login)
  }, [router]);

  return null; // No need to render anything here
}
