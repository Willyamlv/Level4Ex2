const students = [
    {
      name: "Will",
      firstTest: 9,
      secondTest: 8
    },
    {
      name: "Luana",
      firstTest: 8,
      secondTest: 6
    },
    {
      name: "Marcos",
      firstTest: 3,
      secondTest: 4
    }
  ];
  
  function average(firstNumber, secondNumber) {
    return ((firstNumber + secondNumber) / 2).toFixed(2);
  }
  
  function printStudentAverage(student) {
    const studentAverage = average(student.firstTest, student.secondTest);
    let passFail = "";
  
    if (studentAverage >= 7) {
      passFail = "Parabéns, você foi aprovado(a) no concurso!";
    } else {
      passFail = "Não foi dessa vez, tente novamente!";
    }
  
    return `A média do(a) aluno(a) ${student.name} é ${studentAverage}.\n${passFail}`;
  }
  
  for (let student of students) {
    let gradeAverage = printStudentAverage(student);
    alert(gradeAverage);
  }
  
  