class Professor {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
}

class Department {
  private professor: Professor[] = [];
  private name: string;
  constructor(name: string, professor?: Professor) {
    this.name = name;
    if (professor !== undefined) {
      this.professor.push(professor);
    }
  }

  addProf(professor: Professor): void {
    this.professor.push(professor);
  }

  getAllProfessor(): void {
    for (let professor of this.professor) {
      console.log("professor: " + professor.getName());
    }
  }
}

const prof1 = new Professor("Thang");
const prof2 = new Professor("Thang2");
const prof3 = new Professor("Thang3");

const department: Department = new Department("Math");
department.addProf(prof1);
department.addProf(prof2);
department.addProf(prof3);

department.getAllProfessor();

export {};
