"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-800 text-white px-6 py-4 flex justify-between items-center border-b-2 border-slate-700 fixed">
      <h1 className="text-xl font-bold text-slate-300">New Generation High School</h1>
      <span className="opacity-80 text-violet-300">Student Portal</span>
    </nav>
  );
}