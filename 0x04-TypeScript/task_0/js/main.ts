// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};

// Create array of students
const studentsList: Student[] = [student1, student2];

// Create and render the table
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// Create table header
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
const locationHeader = document.createElement("th");

firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tbody.appendChild(headerRow);

// Add student data to table
studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
