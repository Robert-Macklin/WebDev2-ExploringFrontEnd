"use client";

import { useState } from "react";

type Student = {
  id: string;
  firstname: string;
  lastname: string;
  birthday: string;
  grade: number;
  year: number;
};

export default function StudentForm({ onAdd }: { onAdd: (s: Student) => void }) {
  const [form, setForm] = useState({
    id: "",
    firstname: "",
    lastname: "",
    birthday: "",
    grade: "",
    year: "",
  });

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let e: any = {};

    if (!form.id.trim()) e.id = "Student ID is required";
    if (!form.firstname.trim()) e.firstname = "First name is required";
    if (!form.lastname.trim()) e.lastname = "Last name is required";
    if (!form.birthday) e.birthday = "Birthday is required";

    const gradeNum = Number(form.grade);
    if (isNaN(gradeNum) || gradeNum < 0 || gradeNum > 100)
      e.grade = "Grade must be between 0 and 100";

    const yearNum = Number(form.year);
    if (isNaN(yearNum) || yearNum < 1 || yearNum > 4)
      e.year = "Year must be between 1 and 4";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validate()) return;

    const newStudent: Student = {
      id: form.id,
      firstname: form.firstname,
      lastname: form.lastname,
      birthday: form.birthday,
      grade: Number(form.grade),
      year: Number(form.year),
    };

    onAdd(newStudent);

    setForm({
      id: "",
      firstname: "",
      lastname: "",
      birthday: "",
      grade: "",
      year: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 rounded-lg shadow-md mt-8 border-2 border-slate-700"
    >
      <h2 className="text-xl font-bold mb-4 text-slate-300 ">Add New Student</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="text-slate-300">Student ID</label>
          <input
            className="border p-2 w-full rounded text-slate-400"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />
          {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
        </div>

        <div>
          <label className="text-slate-300">First Name</label>
          <input
            className="border p-2 w-full rounded text-slate-400"
            value={form.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm">{errors.firstname}</p>
          )}
        </div>

        <div>
          <label className="text-slate-300">Last Name</label>
          <input
            className="border p-2 w-full rounded text-slate-400"
            value={form.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm">{errors.lastname}</p>
          )}
        </div>

        <div>
          <label className="text-slate-300">Birthday</label>
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            className="border p-2 w-full rounded text-slate-400"
            value={form.birthday}
            onChange={(e) => setForm({ ...form, birthday: e.target.value })}
          />
          {errors.birthday && (
            <p className="text-red-500 text-sm">{errors.birthday}</p>
          )}
        </div>

        <div>
          <label className="text-slate-300">Grade</label>
          <input
            type="number"
            className="border p-2 w-full rounded text-slate-400"
            value={form.grade}
            onChange={(e) => setForm({ ...form, grade: e.target.value })}
          />
          {errors.grade && (
            <p className="text-red-500 text-sm">{errors.grade}</p>
          )}
        </div>

        <div>
          <label className="text-slate-300">Year Level</label>
          <input
            type="number"
            className="border p-2 w-full rounded text-slate-400"
            value={form.year}
            onChange={(e) => setForm({ ...form, year: e.target.value })}
          />
          {errors.year && (
            <p className="text-red-500 text-sm">{errors.year}</p>
          )}
        </div>

      </div>

      <button
        type="submit"
        className="mt-4 bg-violet-300 text-slate-900 px-4 py-2 rounded-lg hover:bg-violet-400"
      >
        Add Student
      </button>
    </form>
  );
}