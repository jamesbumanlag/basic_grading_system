// Create Class that can be use in every subject    
class Grades {
    constructor(subject, quiz,assign,recite,proj,attend,exam){
        this.subject = subject;
        this.quiz = quiz;
        this.assign = assign;
        this.recite = recite;
        this.proj = proj;
        this.attend = attend;
        this.exam = exam;
    }

// this function will display values in the Quarter Grade Table
    quarterlyGrade(){
        
        // Grade computation in quarter
        let quizGrade = this.quiz * 0.1;
        let assignGrade = this.assign * 0.1;
        let reciteGrade = this.recite * 0.15;
        let projGrade = this.proj * 0.15;
        let attendGrade = this.attend * 0.15;
        let examGrade = this.exam * 0.4;

        
        let totalGrade = quizGrade + assignGrade + reciteGrade + projGrade + attendGrade + examGrade;
        
        // this function will return a value to show in final grade table
        return totalGrade.toFixed(2);
    }


}


class FinalGrade {
    constructor(subject, firstQuarter, secondQuarter, thirdQuarter, fourthQuarter){
        this.subject = subject;
        this.firstQuarter = firstQuarter;
        this.secondQuarter = secondQuarter;
        this.thirdQuarter = thirdQuarter;
        this.fourthQuarter = fourthQuarter;

    }

    finalGrade(){
        let firstQuarterGrade = this.firstQuarter * 0.2;
        let secondQuarterGrade = this.secondQuarter * 0.2;
        let thirdQuarterGrade = this.thirdQuarter * 0.25;
        let fourthQuarterGrade = this.fourthQuarter * 0.35;

        let finalGrade = firstQuarterGrade + secondQuarterGrade + thirdQuarterGrade + fourthQuarterGrade;

        return finalGrade.toFixed(2);
    }


}

// this function will show username at the navbar

    function showUsername(){
        let username = localStorage.getItem('username');
        if (username) {
            document.getElementById('usernameID').textContent = username;
        }

        
    }


// this will display the username at the navbar on page load
document.addEventListener('DOMContentLoaded',showUsername);


// this function will show either pass or fail
function quarterGrade(grade, quarterGrade, subject){
    if (grade >= 75){

        console.log (`${quarterGrade} ${subject}: ${grade}  Passed`);
    } else {
        console.log(`${quarterGrade} (${subject}): ${grade} Failed`);
        }

}



let firstQuarter = 'First Quarter Grade';
let secondQuarter = 'Second Quarter Grade';
let thirdQuarter = 'Third Quarter Grade';
let fourthQuarter = 'Fourth Quarter Grade';




let subj = document.getElementById('subject');
let inputs = document.querySelectorAll("input:not([type='submit']");

subj.addEventListener('change', function(){
    inputs.forEach(input => input.value = '');
});






function displayScienceGrade(quiz, assign, recite, proj, attend, exam){
    let scienceQuizzText = document.getElementById('scienceQuiz');
    let scienceAssignText = document.getElementById('scienceAssign');
    let scienceReciteText = document.getElementById('scienceAttend');
    let scienceProjText = document.getElementById('scienceProj');
    let scienceAttendText = document.getElementById('scienceAttend');
    let scienceExamText = document.getElementById('scienceExam');

    scienceQuizzText.textContent = quiz;
    scienceAssignText.textContent = assign;
    scienceReciteText.textContent = recite;
    scienceProjText.textContent = proj;
    scienceAttendText.textContent =   attend;
    scienceExamText.textContent = exam;

}


// const scienceSubj = new Grades('Science', 77,88,99,77,66,89);

// let subjectScience = JSON.stringify(scienceSubj.subject);

function subject(event,subject){
    event.preventDefault(); // prevents the form submission and page reload
    
    // get value from form Grade Input
    const quiz = parseFloat(document.getElementById('quizzes').valueAsNumber);
    const assign = parseFloat(document.getElementById('assignment').valueAsNumber);
    const recite = parseFloat(document.getElementById('recitation').valueAsNumber);
    const proj = parseFloat(document.getElementById('project').valueAsNumber);
    const attend = parseFloat(document.getElementById('attendance').valueAsNumber);
    const exam = parseFloat(document.getElementById('examination').valueAsNumber)
    
    const firstQuarter =  new Grades(subject, quiz, assign, recite, proj, attend, exam)

    if (!isNaN(quiz)) {

        
        
        let quizScore = (quiz * 0.1).toFixed(2);
        localStorage.setItem(`${subject}Quiz2`,quizScore);


        // const subjectQuizText = document.getElementById(`${subject}Quiz`);
        // if (subjectQuizText){
        //     subjectQuizText.textContent = localStorage.getItem(`${subject}Quiz`);
        // }

    }else{
        alert('Quiz: Enter Number only')
    }


    if  (!isNaN(assign)) {

        
        
        let assignScore = (assign * 0.1).toFixed(2);
        localStorage.setItem(`${subject}Assign2`,assignScore);


        // const subjectAssignText = document.getElementById(`${subject}Assign`);

        // if (subjectAssignText){
        //     subjectAssignText.textContent = localStorage.getItem(`${subject}Assign`);
        //}
        }
        else{

        alert('Assignment: Enter Number only')
        }
    


    if (!isNaN(recite)) {
               
        let reciteScore = (recite * 0.15).toFixed(2);
        localStorage.setItem(`${subject}Recite2`,reciteScore);


        // const subjectReciteText = document.getElementById(`${subject}Recite`);
        // if (subjectReciteText){
        //     subjectReciteText.textContent = localStorage.getItem(`${subject}Recite`);
        // }
    }
        else{
        alert('Recitation: Enter Number only')
        }
    
    if (!isNaN(proj) ) {

        
        
        let projScore =( proj * 0.15).toFixed(2);
        localStorage.setItem(`${subject}Proj2`,projScore);


        // const subjectProjText = document.getElementById(`${subject}Proj`);

        // if (subjectProjText){
        //     subjectProjText.textContent = localStorage.getItem(`${subject}Proj`);
        // }
    }

    else{
        alert('Project: Enter Number only')
        }
    


    if (!isNaN(attend) ) {

        
        
        let attendScore = (attend * 0.15).toFixed(2);
        localStorage.setItem(`${subject}Attend2`,attendScore);


        // const subjectAttendText = document.getElementById(`${subject}Attend`);
        // if (subjectAttendText){
        //     subjectAttendText.textContent = localStorage.getItem(`${subject}Attend`);
        // }
        }
    else{
        alert('Attendance: Enter Number only')
        }
    


    if (!isNaN(exam)) {

        
        
        let examScore =( exam * 0.4).toFixed(2);
        localStorage.setItem(`${subject}Exam2`,examScore);


        // const subjectExamText = document.getElementById(`${subject}Exam`);
        // if (subjectExamText){
        //     subjectExamText.textContent = localStorage.getItem(`${subject}Exam`);
        // }
    }
    else{
        alert('Examination: Enter Number only');
    }

}

    


function displayGradeScore(subject,activity){
        const subjectText = document.getElementById(`${subject}${activity}`);
        if (subjectText){
            return score = subjectText.textContent = localStorage.getItem((`${subject}${activity}2`));
        };
};

document.addEventListener("DOMContentLoaded",function(){
    let subject = ['science', 'math','history','arts','music'];
    let task = ['Quiz', 'Assign', 'Recite', 'Proj', 'Attend', 'Exam'];

    subject.forEach((subj)=> {
        task.forEach((task)=>{
            displayGradeScore(subj,task);
        });
    });
});

    
   


// this will get the DOM element of submit button
const submitFirst = document.getElementById('submitFirst');

// submitfirst function will calculate the grade and show the result on the table
submitFirst.addEventListener('click', function(event){
    event.preventDefault();
    const selectSubject = document.getElementById('subject');
    const selectValue = selectSubject.value; // get the selected value

    if (selectValue === 'scienceSubject'){
        subject(event,'science');
        
        

    }
    else if (selectValue === 'mathSubject'){
        subject(event,'math');
       

        
    }
    else if (selectValue === 'historySubject'){
        subject(event,'history');
        
    } 
    else if (selectValue === 'artsSubject'){
        subject(event,'arts');
       

    }
    else if (selectValue === 'musicSubject'){
        subject(event,'music');
        

    }

    location.reload();    

})


// Logout

document.addEventListener('DOMContentLoaded',()=>{

    const logout = document.getElementById('logoutButton');

    logout.addEventListener('click',function(event){
        event.preventDefault();
        localStorage.removeItem('username');
        window.location.href = 'login.html';
        });
        
    
});
        