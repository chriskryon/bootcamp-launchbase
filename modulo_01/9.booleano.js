/* 
Esses valores são falsy, considerados como false
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')

truty são todos diferente de falsy, alguns exemplos:
if (true), if ({})
if ([]), if (42), if ("foo")
if (new Date()) , if (-42) , if (3.14)
if (-3.14), if (Infinity), if (-Infinity)
*/

const students = [
    {
        name: 'Fulano',
        note: 5,
    },
    {
        name: 'Beltrano',
        note: 9.5,
    },
    {
        name: 'Ciclano',
        note: 10,
    }
];

const marksAsDisapproved = student => {
    student.disapproved = false;

    if (student.note <= 5) student.disapproved = true;
}

const sendMessageDisapproved = student => {
    if(student.disapproved) {
        console.log(`The student ${student.name} is disapproved!`);
    }
}

const studentsDisapproveds = students => {
    for (student of students) {
        marksAsDisapproved(student);
        sendMessageDisapproved(student);
    }
}

studentsDisapproveds(students);
console.table(students);