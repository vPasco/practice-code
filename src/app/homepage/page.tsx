// app/homepage/page.tsx
// app/homepage/page.tsx

// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar"; // Adjust the path as necessary
import Table from "../components/table"; // Import the Table component

// Define the shape of the data
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function Homepage() {
  const router = useRouter();
  const [data, setData] = useState<User[]>([]);

  // Example columns
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Role", accessor: "role" },
  ];

  // Example data (replace with dynamic data from an API if needed)
  const tableData: User[] = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "Editor" },
  ];

  useEffect(() => {
    // Fetch data from an API (if needed)
    // const fetchData = async () => {
    //   const response = await fetch("/api/users");
    //   const result = await response.json();
    //   setData(result);
    // };
    // fetchData();

    // For now, use static data
    setData(tableData);
  }, []);

  return (
    <div className="h-screen bg-blue-400 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-8">Welcome to the Homepage!</h1>

          {/* Use the Table component */}
          <Table data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
}