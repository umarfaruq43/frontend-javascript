// Define interfaces
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Implement classes
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Test cases
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

// Type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

// executeWork function
function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

// Test cases
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks

// String literal type
type Subjects = "Math" | "History";

// teachClass function
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}

// Test cases
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History
