export type Student = {
  id: string;
  name: string;
  gpa: number;
  year: number;
};

export const students: Student[] = [
  { id: "1", 
    name: "Ruby Rose",
    gpa: 3.4,
    year: 2,
  },
  { id: "2", 
    name: "John Smith",
    gpa: 4,
    year: 1,
  },
  { id: "3", 
    name: "Gracy Glint",
    gpa: 2.4,
    year: 2,
  },
  { id: "4", 
    name: "Gwin Pine",
    gpa: 3.8,
    year: 3,
  },
  { id: "5", 
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
