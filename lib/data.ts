export type Student = {
  id: string;
  firstname: string;
  lastname: string;
  birthday: string;
  grade: number;
  year: number;
};

export const students: Student[] = [
  { id: "00016235", 
    firstname: "Ruby",
    lastname: "Rose",
    birthday: "07/25/2004",
    grade: 80,
    year: 2,
  },
  { id: "00028346", 
    firstname: "John",
    lastname: "Smith",
    birthday: "12/02/2005",
    grade: 95,
    year: 1,
  },
  { id: "00036267", 
    firstname: "Gracy",
    lastname: "Glint",
    birthday: "08/12/2004",
    grade: 74,
    year: 2,
  },
  { id: "00017234", 
    firstname: "Gwin",
    lastname: "Pine",
    birthday: "09/15/2003",
    grade: 68,
    year: 3,
  },
  { id: "00027345", 
    firstname: "Judy",
    lastname: "Groove",
    birthday: "06/16/2005",
    grade: 45,
    year: 1,
  },
];

export async function getAllStudents(): Promise<Student[]> {
  return students;
}

export async function getStudentById(id: string): Promise<Student | undefined> {
  return students.find((p) => p.id === id);
}
