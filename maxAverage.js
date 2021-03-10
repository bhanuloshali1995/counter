const students = [
  {name: 'Alice', grades: [89, 93, null, 100, 66]},
  {name: 'Bob', grades: [70, 71, 100, 82, 90]},
  {name: 'Martin', grades: [89, 93, 45, 62, null]},
  {name: 'Storm', grades: [80, 70, 100, 82, 94]},
  {name: 'Corrina', grades: [86, null, 100, 34, 79]},
  {name: 'Alexa', grades: [95, 85, 100, null, 64]},
  {name: 'Susan', grades: [82, 91, 84, 94, 90]},
  {name: 'Jake', grades: [92, null, 84, null, 90]}
];



const getHAStudent = students => {
    let obj = { name: '', avg: 0}
    students.reduce((obj,student) => {

        let grades = student.grades.map(grade => {
            return grade === null ? 0 : grade;
        }).sort((a,b) => a-b);

        grades = grades.slice(1);

        let avg = calculateAvg(grades);
        if(obj.avg < avg) {
            obj.name = student.name;
            obj.avg = avg;
        }
        return obj;
    }, obj);
    
    return obj;
}




const calculateAvg = (grades) => {
    const tot = grades.reduce((total, grade) => total+grade, 0)
    return tot/grades.length
}
