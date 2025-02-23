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
    subjectTermGrade(){
                
        // Grade computation in quarter
        let quizGrade = this.quiz * 0.1;
        let assignGrade = this.assign * 0.1;
        let reciteGrade = this.recite * 0.15;
        let projGrade = this.proj * 0.15;
        let attendGrade = this.attend * 0.15;
        let examGrade = this.exam * 0.4     
        
        let totalQuarterGrade = quizGrade + assignGrade + reciteGrade + projGrade + attendGrade + examGrade;
        
        // this function will return a value to show in final grade table
        return totalQuarterGrade.toFixed(2);
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

    finalGradeCalculation(){
        let firstQuarterGrade = this.firstQuarter * 0.2;
        let secondQuarterGrade = this.secondQuarter * 0.2;
        let thirdQuarterGrade = this.thirdQuarter * 0.25;
        let fourthQuarterGrade = this.fourthQuarter * 0.35;

        let totalGradeCalculation = firstQuarterGrade + secondQuarterGrade + thirdQuarterGrade + fourthQuarterGrade;
        return totalGradeCalculation;
    }


}



function finalGradeDisplay(finalGrade,subject){

    const finalQuarterGrade = document.getElementById(`finalQuarter${capitalizeFirstLetter(subject)}`) || 0;


    if ((finalGrade) && finalGrade >= 75) {
        finalQuarterGrade.style.color = 'green';
        finalQuarterGrade.textContent = 'Passed';
    }
    else{
        finalQuarterGrade.style.color = 'red';
        finalQuarterGrade.textContent = 'Failed';
    }
}






let firstQuarter = 'First Quarter Grade';
let secondQuarter = 'Second Quarter Grade';
let thirdQuarter = 'Third Quarter Grade';
let fourthQuarter = 'Fourth Quarter Grade';




// let subj = document.getElementById('subject');
// let inputs = document.querySelectorAll("input:not([type='submit']");

// subj.addEventListener('change', function(){
//     inputs.forEach(input => input.value = '');
// });






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
    
    

    if (!isNaN(quiz)) {

        
        
        let quizScore = (quiz * 0.1).toFixed(2);
        localStorage.setItem(`${subject}Quiz1`,quizScore);

    


        // const subjectQuizText = document.getElementById(`${subject}Quiz`);
        // if (subjectQuizText){
        //     subjectQuizText.textContent = localStorage.getItem(`${subject}Quiz`);
        // }

    }else{
        alert('Quiz: Enter Number only')
    }


    if  (!isNaN(assign)) {

        
        
        let assignScore = (assign * 0.1).toFixed(2);
        localStorage.setItem(`${subject}Assign1`,assignScore);


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
        localStorage.setItem(`${subject}Recite1`,reciteScore);


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
        localStorage.setItem(`${subject}Proj1`,projScore);


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
        localStorage.setItem(`${subject}Attend1`,attendScore);


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
        localStorage.setItem(`${subject}Exam1`,examScore);


        // const subjectExamText = document.getElementById(`${subject}Exam`);
        // if (subjectExamText){
        //     subjectExamText.textContent = localStorage.getItem(`${subject}Exam`);
        // }
    }
    else{
        alert('Examination: Enter Number only');
    }



}

    
// this function will display the values in the quarter grade table
function displayGradeScore(subject,activity){
        const subjectText = document.getElementById(`${subject}${activity}`);
        if (subjectText){
            return score = subjectText.textContent = localStorage.getItem((`${subject}${activity}1`));
        }
};



// this function will get each subject final grade and save it to (quarter must be a whole number)
function finalQuarterGrade(subject, quarter/* this must be a number in a string format */, term) {
    
    //retrieve data from the database
    let quizScore = parseFloat(localStorage.getItem(`${subject}Quiz${quarter}`)) || 0;
    let assignScore = parseFloat(localStorage.getItem(`${subject}Assign${quarter}`)) || 0;
    let reciteScore = parseFloat(localStorage.getItem(`${subject}Recite${quarter}`)) || 0;
    let projScore = parseFloat(localStorage.getItem(`${subject}Proj${quarter}`)) || 0;
    let attendScore = parseFloat(localStorage.getItem(`${subject}Attend${quarter}`)) || 0;
    let examScore = parseFloat(localStorage.getItem(`${subject}Exam${quarter}`)) || 0;


    

    // display the values from the database
    console.log(`Scores for ${subject} (Quarter ${quarter}):`, { quizScore, assignScore, reciteScore, projScore, attendScore, examScore });

    // create a new Grade as quarterGrade
    const quarterGrade = new Grades(subject, quizScore, assignScore, reciteScore, projScore, attendScore, examScore);

    // calculation of quarter grade in the form of class method
    finalGrade = quarterGrade.subjectTermGrade();

    // save the result to the localstorage database
    localStorage.setItem(`${subject}Grade${quarter}`,finalGrade);

    displayFinalGrade(subject,quarter,term);

}


// this function will retrieve the data from the local storage
// and return the finalGrade value
function displayFinalGrade(subject,quarter,term){

    let QuarterSubject = document.getElementById(`${term}Quarter${capitalizeFirstLetter(subject)}`) || 0;

    finalGrade = localStorage.getItem(`${subject}Grade${quarter}`);

    QuarterSubject.textContent = finalGrade;   

    console.log(`${subject} Grade is: ${finalGrade} // this is from displayFinalGrade `);
    return finalGrade;


}


// this function will show the final grade to the table
function showFinalGrade(subject){
    

    // assign the result of displayFinalGrade function to a variable
    let firstQuarter = parseFloat(displayFinalGrade(subject, '1','first'));
    let secondQuarter = parseFloat(displayFinalGrade(subject,'2','second'));
    let thirdQuarter = parseFloat(displayFinalGrade(subject,'3','third'));
    let fourthQuarter = parseFloat(displayFinalGrade(subject,'4','fourth'));

    // get the html element id and assign to subjectTextId variable
    const subjectTextID = document.getElementById(`finalQuarter${capitalizeFirstLetter(subject)}`) || 0;

    
    
    // create a new class finalGrade to calculate the final grade using finalGradeCalculation method in the FinalGrade class
    let subjectFinalGrade = (firstQuarter + secondQuarter + thirdQuarter + fourthQuarter).toFixed(2);


    subjectTextID.textContent = subjectFinalGrade;

    
    quarterRemarks(subjectFinalGrade,subject);
}





// this function will show either pass or fail
function quarterRemarks(grade, subject){

    let remarks = document.getElementById(`remarks${capitalizeFirstLetter(subject)}`)|| 0;
    
    if (remarks){
        if  (grade){
            remarks.style.color = 'black';
            remarks.textContent = '--';
        
        } 
        else if (grade >= 75){
            remarks.style.color = "green";
            remarks.textContent = 'Passed';
        

        }else/*grade <= 65)*/ {
            remarks.style.color = "red";
            remarks.textContent = 'Failed';
            
        }
       
    }
    else{
            console.log('Element not found');
    }
}



// capitalize letter of the word
function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}



function showUsername(){
    let username = localStorage.getItem('username');
    if (username) {
        document.getElementById('usernameID').textContent = username;
    }

    
}


// will show username at the nav bar
document.addEventListener("DOMContentLoaded", showUsername);


// will show all data to the table
document.addEventListener("DOMContentLoaded",function(){
    let subject = ['science', 'math','history','arts','music'];
    let task = ['Quiz', 'Assign', 'Recite', 'Proj', 'Attend', 'Exam'];
    let term = ['first', 'second','third','fourth'];
    let quarter = ['1','2','3','4'];


    // this section will display final grade of every subject
    subject.forEach((subj) =>{
        showFinalGrade(subj);
    });

    // this section displays the value to the final grade table
    subject.forEach((subj) =>{
            finalQuarterGrade(subj,quarter[0],term[0]);
        });

        subject.forEach((subj) =>{
            finalQuarterGrade(subj,quarter[1],term[1]);
        });

        subject.forEach((subj) =>{
            finalQuarterGrade(subj,quarter[2],term[2]);
        });

        subject.forEach((subj) =>{
            finalQuarterGrade(subj,quarter[3],term[3]);
        });


    // this section will display the scores in the quarterly table
    subject.forEach((subj)=>{
        task.forEach((task)=>{
            displayGradeScore(subj,task); /* will return  eg. 'subjectQuiz2' */
            
        });
    });
});

// Logout
document.addEventListener('DOMContentLoaded',()=>{

        const logout = document.getElementById('logoutButton');

        logout.addEventListener('click',function(event){
            event.preventDefault();
            localStorage.removeItem('username');
            window.location.href = 'login.html';
            });
            
        
});


document.addEventListener('DOMContentLoaded',() =>{
    const clearTable = document.getElementById('clearFinalTable');

    clearTable.addEventListener('click',function(event){
        event.preventDefault();
        if (clearTable){
            localStorage.clear();
            location.reload();
        }
        
    })
})



// this function will check if the submitFirst button is present in the page 
// to eliminate the error 
// DOMContentLoaded event means when the html document is fully loaded and parse
// but before the images and css, and other resources are loaded
document.addEventListener('DOMContentLoaded', function(){
    // this will get the DOM element of submit button
    let submitFirst = document.getElementById('submitFirst');

   

        if (submitFirst){

        // submitfirst function will calculate the grade and show the result in the table
        submitFirst.addEventListener('click', function(event){
            event.preventDefault();
            const selectSubject = document.getElementById('subject');
            const selectValue = selectSubject.value; // get the selected value

            if (selectValue === 'scienceSubject'){
                subject(event,'science');
                finalQuarterGrade('science','1');
                

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

        });

        } else {

            console.warn('no submit button found on this page')
        }




        });