let students = [
  {
    code: "2025010601",
    division: "프로그래밍",
    name: "황백인",
    birth: "2000-01-01",
    subjects: [
      { subjectName: "웹프로그래밍", score: 4.5, view: "A+" },
      { subjectName: "데이터베이스", score: 4.0, view: "A0" },
      { subjectName: "운영체제", score: 3.5, view: "B+" },
    ],
  },
  {
    code: "2025010602",
    division: "프로그래밍",
    name: "김민수",
    birth: "1999-05-12",
    subjects: [
      { subjectName: "웹프로그래밍", score: 3.5, view: "B+" },
      { subjectName: "데이터베이스", score: 4.5, view: "A+" },
      { subjectName: "운영체제", score: 4.0, view: "A0" },
    ],
  },
  {
    code: "2025010603",
    division: "프로그래밍",
    name: "이수진",
    birth: "2001-03-22",
    subjects: [
      { subjectName: "웹프로그래밍", score: 4.0, view: "A0" },
      { subjectName: "데이터베이스", score: 3.0, view: "B0" },
      { subjectName: "운영체제", score: 3.5, view: "B+" },
    ],
  },
  {
    code: "2025010604",
    division: "프로그래밍",
    name: "박준호",
    birth: "1998-11-03",
    subjects: [
      { subjectName: "웹프로그래밍", score: 2.5, view: "C+" },
      { subjectName: "데이터베이스", score: 3.5, view: "B+" },
      { subjectName: "운영체제", score: 3.0, view: "B0" },
    ],
  },
  {
    code: "2025010605",
    division: "프로그래밍",
    name: "최유나",
    birth: "2000-08-17",
    subjects: [
      { subjectName: "웹프로그래밍", score: 4.5, view: "A+" },
      { subjectName: "데이터베이스", score: 4.0, view: "A0" },
      { subjectName: "운영체제", score: 4.5, view: "A+" },
    ],
  },
];

let tbody = document.getElementById("studentBody");
let stbody = document.getElementById("scoreBody");
let stName = document.getElementById("studentName");

let currentIndex = 0;

function lowerStudent() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = students.length - 1;
  }
  stName.innerText = students[currentIndex].name;
  tbody.innerHTML = "";
  stbody.innerHTML = "";
  createStudentTable(currentIndex);
}

function higherStudent() {
  currentIndex++;
  if (currentIndex >= students.length) {
    currentIndex = 0;
  }
  stName.innerText = students[currentIndex].name;
  tbody.innerHTML = "";
  stbody.innerHTML = "";
  createStudentTable(currentIndex);
}

function createStudentTable(i) {
  tbody.innerHTML += `
    <tr>
      <td>${students[i].code}</td>
      <td>${students[i].division}</td>
      <td>${students[i].name}</td>
      <td>${students[i].birth}</td>
    </tr>
  `;
  stbody.innerHTML += `
    <tr>
      <td>${students[i].subjects[0].subjectName}</td>  
      <td>${students[i].subjects[0].score}</td>  
      <td>${students[i].subjects[0].view}</td>
    </tr>
        <tr>
      <td>${students[i].subjects[1].subjectName}</td>  
      <td>${students[i].subjects[1].score}</td>  
      <td>${students[i].subjects[1].view}</td>
    </tr>
        <tr>
      <td>${students[i].subjects[2].subjectName}</td>  
      <td>${students[i].subjects[2].score}</td>  
      <td>${students[i].subjects[2].view}</td>
    </tr>
  `;
}
