// task_4/js/Subject.ts
/// <reference path="./Teacher.ts" />

// prettier-ignore
namespace Subjects {
  export class Subject {
    teacher: Teacher;

    set setTeacher(teacher:Teacher) {
      this.teacher = teacher;
    }
  }
}
