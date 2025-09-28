interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher: Teacher = {
    contract: false,
    firstName: "Faruq",
    fullTimeEmployee: false,
    lastName: "AbdulAzeez",
    location: "Nigeria",
};

console.log(teacher);
