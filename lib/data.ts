export type Student = {
  id: string;
  name: string;
  gpa: number;
  year: number;
};

export const students: Student[] = [
  { id: "00016235", 
    name: "Ruby Rose",
    gpa: 3.4,
    year: 2,
  },
  { id: "00028346", 
    name: "John Smith",
    gpa: 4,
    year: 1,
  },
  { id: "00036267", 
    name: "Gracy Glint",
    gpa: 2.4,
    year: 2,
  },
  { id: "00017234", 
    name: "Gwin Pine",
    gpa: 3.8,
    year: 3,
  },
  { id: "00027345", 
    name: "Judy Groove",
    gpa: 1.2,
    year: 1,
  },
];

export async function getAllStudents(): Promise<Student[]> {
  return students;
}

export async function getStudentById(id: string): Promise<Student | undefined> {
  return students.find((p) => p.id === id);
}
