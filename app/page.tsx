"use client";

import { useState } from "react";
import StudentForm from "./components/StudentForm";
import { getStudents, Student } from "@/lib/data";
import StudentPage from "./components/StudentCard";

const initialStudents: Student[] = getStudents();


export default function Home() {

  const [students, setStudents] = useState<Student[]>(initialStudents);

  
  const addStudent = (s: Student) => {

    setStudents([...students, s]);
  };

  return (
    <main className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold text-slate-300 mt-17">Student List</h1>
      <div className="">
        {students.map((p) => (
          <StudentPage 
          key={p.id}
           id={p.id}
          firstname={p.firstname}
          lastname={p.lastname}
          year={p.year}
          birthday={p.birthday}
          grade={p.grade}
          />))}
      </div>
      <h1 className="text-3xl font-bold text-slate-300 mt-3">Add Student</h1>
      <StudentForm onAdd={addStudent} />
    </main>
  );
}
