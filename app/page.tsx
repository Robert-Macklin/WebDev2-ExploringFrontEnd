"use client";

import { useState } from "react";
import Navbar from "./components/NavBar";
import StudentForm from "./components/StudentForm";

// Fallback local definitions to avoid missing module '@/data'
type Student = {
  id: number;
  name: string;
  email?: string;
};

const initialStudents: Student[] = [];

export default function Page() {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  
  const addStudent = (s: any) => {
    const student: Student = {
      id: s.id ?? Date.now(),
      name: s.name ?? "",
      email: s.email,
    };

    setStudents([...students, student]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold">Student List</h1>


        <StudentForm onAdd={addStudent} />
      </main>

    </div>
  );
}
