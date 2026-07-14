interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Leyla',
  lastName: 'Gurbanova',
  age: 27,
  location: 'Krakow',
};

const student2: Student = {
  firstName: 'Nihad',
  lastName: 'Aliyev',
  age: 31,
  location: 'Krakow',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstName = document.createElement('td');
  firstName.textContent = student.firstName;

  const location = document.createElement('td');
  location.textContent = student.location;

  row.appendChild(firstName);
  row.appendChild(location);

  table.appendChild(row);
});

document.body.appendChild(table);
