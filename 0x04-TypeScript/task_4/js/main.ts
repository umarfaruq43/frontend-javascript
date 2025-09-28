// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC: number;
}

// Teacher object
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp Class
export class Cpp {
  subjectName: string = 'C++';
  teacher: Teacher | null = null;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return 'Here is the list of requirements for C++: Basic understanding of programming concepts, knowledge of data structures, and familiarity with object-oriented programming.';
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
    }
    return 'No available teacher';
  }
}

// Java Class
export class Java {
  subjectName: string = 'Java';
  teacher: Teacher | null = null;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return 'Here is the list of requirements for Java: Understanding of OOP principles, basic programming knowledge, and familiarity with Java syntax.';
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
    }
    return 'No available teacher';
  }
}

// React Class
export class React {
  subjectName: string = 'React';
  teacher: Teacher | null = null;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return 'Here is the list of requirements for React: Knowledge of JavaScript, understanding of HTML/CSS, and familiarity with React components.';
  }

  getAvailableTeacher(): string {
    if (this.teacher && this.teacher.experienceTeachingC > 0) {
      return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
    }
    return 'No available teacher';
  }
}

// Instantiate the objects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Cpp operations
console.log(cpp.subjectName);
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java operations
console.log(java.subjectName);
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React operations
console.log(react.subjectName);
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
