interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const headers = ["First Name", "Location"];

headers.forEach(headerText => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

studentsList.forEach(student =>{
    const tableRow = document.createElement("tr");
    const rowData1 = document.createElement("td");
    rowData1.textContent = student.firstName;
    tableRow.appendChild(rowData1);
    const rowData2 = document.createElement("td");
    rowData2.textContent = student.location;
    tableRow.appendChild(rowData2);

    table.appendChild(tableRow)
});

