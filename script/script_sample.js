class Subject {
    constructor(subject, science, math, history, arts, music){
        this.subject = subject;
        this.science = science;
        this.math = math;
        this.history = history;
        this.arts = arts;
        this.music = music;
    }
}


let subj = document.getElementById('subject');
let inputs = document.querySelectorAll("input:not([type='submit']");

subj.addEventListener('change', function(){
    inputs.forEach(input => input.value = '');
});



function getQuizGrade(quiz){
    let quizGrade = quiz * 0.1;  
    return quizGrade;
}

function getAssignmentGrade(assign){
    let assignGrade = assign * 0.1;
    return assignGrade;
}

function getRecitationGrade(recite){
    let reciteGrade = recite * 0.15;
    return reciteGrade;
}

function getProjectGrade(proj){
    let projectGrade = proj * 0.15;
    return projectGrade;
}

function getAttendanceGrade(attend){
    let attendanceGrade = attend * 0.15;
    return attendanceGrade;
}

function getExaminationGrade(exam){
    let examinationGrade = exam * 0.4;
    return examinationGrade
}



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


function science(event){
    event.preventDefault(); // prevents the form submission and page reload
    
    let quiz = parseFloat(document.getElementById('quizzes').valueAsNumber);
    let assign = parseFloat(document.getElementById('assignment').valueAsNumber);
    let recite = parseFloat(document.getElementById('recitation').valueAsNumber);
    let proj = parseFloat(document.getElementById('project').valueAsNumber);
    let attend = parseFloat(document.getElementById('attendance').valueAsNumber);
    let exam = parseFloat(document.getElementById('examination').valueAsNumber)
    

    if (!isNaN(quiz)) {
        let scienceQuizText = document.getElementById('scienceQuiz');
        scienceQuizText.textContent = quiz;
    
        
    }else{
        alert('Quiz: Enter Number only')
    }


    if (!isNaN(assign)) {
        let scienceAssignText = document.getElementById('scienceAssign');
        scienceAssignText.textContent = assign;
    
        
    }else{
        alert('Assignment: Enter Number only')
    }


    if (!isNaN(recite)) {
        let scienceReciteText = document.getElementById('scienceRecite');
        scienceReciteText.textContent = recite;
    
        
    }else{
        alert('Recitation: Enter Number only')
    }
    
    if (!isNaN(proj)) {
        let scienceProjText = document.getElementById('scienceProj');
        scienceProjText.textContent = proj;
    
        
    }else{
        alert('Project: Enter Number only')
    }


    if (!isNaN(attend)) {
        let scienceAttendText = document.getElementById('scienceAttend');
        scienceAttendText.textContent = attend;
    
        
    }else{
        alert('Attendance: Enter Number only')
    }


    if (!isNaN(exam)) {
        let scienceExamText = document.getElementById('scienceExam');
        scienceExamText.textContent = exam;
    
        
    }else{
        alert('Examination: Enter Number only')
    }

}


function math(event){
   
    event.preventDefault(); // prevents the form submission and page reload
      
    
    let quiz = parseFloat(document.getElementById('quizzes').valueAsNumber);
    let assign = parseFloat(document.getElementById('assignment').valueAsNumber);
    let recite = parseFloat(document.getElementById('recitation').valueAsNumber);
    let proj = parseFloat(document.getElementById('project').valueAsNumber);
    let attend = parseFloat(document.getElementById('attendance').valueAsNumber);
    let exam = parseFloat(document.getElementById('examination').valueAsNumber)
    


    if (!quiz && !assign && !recite && !proj && !proj && !exam){
        alert("Enter Grade")
    } 
    else{
        
        if (!isNaN(quiz)) {
            let mathQuizText = document.getElementById('mathQuiz');
            mathQuizText.textContent = quiz;
        
            
        }else{
            alert('Quiz: Enter Number only')
        }
    
    
        if (!isNaN(assign)) {
            let mathAssignText = document.getElementById('mathAssign');
            mathAssignText.textContent = assign;
        
            
        }else{
            alert('Assignment: Enter Number only')
        }
    
    
        if (!isNaN(recite)) {
            let mathReciteText = document.getElementById('mathRecite');
            mathReciteText.textContent = recite;
        
            
        }else{
            alert('Recitation: Enter Number only')
        }
        
        if (!isNaN(proj)) {
            let mathProjText = document.getElementById('mathProj');
            mathProjText.textContent = proj;
        
            
        }else{
            alert('Project: Enter Number only')
        }
    
    
        if (!isNaN(attend)) {
            let mathAttendText = document.getElementById('mathAttend');
            mathAttendText.textContent = attend;
        
            
        }else{
            alert('Attendance: Enter Number only')
        }
    
    
        if (!isNaN(exam)) {
            let mathExamText = document.getElementById('mathExam');
            mathExamText.textContent = exam;
        
            
        }else{
            alert('Examination: Enter Number only')
        }
    
    
    }
    }






    function history(event){
   
        event.preventDefault(); // prevents the form submission and page reload
          
        
        let quiz = parseFloat(document.getElementById('quizzes').valueAsNumber);
        let assign = parseFloat(document.getElementById('assignment').valueAsNumber);
        let recite = parseFloat(document.getElementById('recitation').valueAsNumber);
        let proj = parseFloat(document.getElementById('project').valueAsNumber);
        let attend = parseFloat(document.getElementById('attendance').valueAsNumber);
        let exam = parseFloat(document.getElementById('examination').valueAsNumber)
        
    
    
        if (!quiz && !assign && !recite && !proj && !proj && !exam){
            alert("Enter Grade")
        } 
        else{
            
            if (!isNaN(quiz)) {
                let historyQuizText = document.getElementById('historyQuiz');
                historyQuizText.textContent = quiz;
            
                
            }else{
                alert('Quiz: Enter Number only')
            }
        
        
            if (!isNaN(assign)) {
                let historyAssignText = document.getElementById('historyAssign');
                historyAssignText.textContent = assign;
            
                
            }else{
                alert('Assignment: Enter Number only')
            }
        
        
            if (!isNaN(recite)) {
                let historyReciteText = document.getElementById('historyRecite');
                historyReciteText.textContent = recite;
            
                
            }else{
                alert('Recitation: Enter Number only')
            }
            
            if (!isNaN(proj)) {
                let historyProjText = document.getElementById('historyProj');
                historyProjText.textContent = proj;
            
                
            }else{
                alert('Project: Enter Number only')
            }
        
        
            if (!isNaN(attend)) {
                let historyAttendText = document.getElementById('historyAttend');
                historyAttendText.textContent = attend;
            
                
            }else{
                alert('Attendance: Enter Number only')
            }
        
        
            if (!isNaN(exam)) {
                let historyExamText = document.getElementById('historyExam');
                historyExamText.textContent = exam;
            
                
            }else{
                alert('Examination: Enter Number only')
            }
        
        
        }
        }
    





function arts(event){
   
    event.preventDefault(); // prevents the form submission and page reload
      
    
    let quiz = parseFloat(document.getElementById('quizzes').valueAsNumber);
    let assign = parseFloat(document.getElementById('assignment').valueAsNumber);
    let recite = parseFloat(document.getElementById('recitation').valueAsNumber);
    let proj = parseFloat(document.getElementById('project').valueAsNumber);
    let attend = parseFloat(document.getElementById('attendance').valueAsNumber);
    let exam = parseFloat(document.getElementById('examination').valueAsNumber)
    


    if (!quiz && !assign && !recite && !proj && !proj && !exam){
        alert("Enter Grade")
    } 
    else{
        
        if (!isNaN(quiz)) {
            let artsQuizText = document.getElementById('artsQuiz');
            artsQuizText.textContent = quiz;
        
            
        }else{
            alert('Quiz: Enter Number only')
        }
    
    
        if (!isNaN(assign)) {
            let artsAssignText = document.getElementById('artsAssign');
            artsAssignText.textContent = assign;
        
            
        }else{
            alert('Assignment: Enter Number only')
        }
    
    
        if (!isNaN(recite)) {
            let artsReciteText = document.getElementById('artsRecite');
            artsReciteText.textContent = recite;
        
            
        }else{
            alert('Recitation: Enter Number only')
        }
        
        if (!isNaN(proj)) {
            let artsProjText = document.getElementById('artsProj');
            artsProjText.textContent = proj;
        
            
        }else{
            alert('Project: Enter Number only')
        }
    
    
        if (!isNaN(attend)) {
            let artsAttendText = document.getElementById('artsAttend');
            artsAttendText.textContent = attend;
        
            
        }else{
            alert('Attendance: Enter Number only')
        }
    
    
        if (!isNaN(exam)) {
            let artsExamText = document.getElementById('artsExam');
            artsExamText.textContent = exam;
        
            
        }else{
            alert('Examination: Enter Number only')
        }
    
    
    }
    }


    function music(event){
   
        event.preventDefault(); // prevents the form submission and page reload
          
        
        let quiz = parseFloat(document.getElementById('quizzes').valueAsNumber);
        let assign = parseFloat(document.getElementById('assignment').valueAsNumber);
        let recite = parseFloat(document.getElementById('recitation').valueAsNumber);
        let proj = parseFloat(document.getElementById('project').valueAsNumber);
        let attend = parseFloat(document.getElementById('attendance').valueAsNumber);
        let exam = parseFloat(document.getElementById('examination').valueAsNumber)
        
    
    
        if (!quiz && !assign && !recite && !proj && !proj && !exam){
            alert("Enter Grade")
        } 
        else{
            
            if (!isNaN(quiz)) {
                let musicQuizText = document.getElementById('musicQuiz');
                musicQuizText.textContent = quiz;
            
                
            }else{
                alert('Quiz: Enter Number only');            }
        
        
            if (!isNaN(assign)) {
                let musicAssignText = document.getElementById('musicAssign');
                musicAssignText.textContent = assign;
            
                
            }else{
                alert('Assignment: Enter Number only')
            }
        
        
            if (!isNaN(recite)) {
                let musicReciteText = document.getElementById('musicRecite');
                musicReciteText.textContent = recite;
            
                
            }else{
                alert('Recitation: Enter Number only')
            }
            
            if (!isNaN(proj)) {
                let musicProjText = document.getElementById('musicProj');
                musicProjText.textContent = proj;
            
                
            }else{
                alert('Project: Enter Number only')
            }
        
        
            if (!isNaN(attend)) {
                let musicAttendText = document.getElementById('musicAttend');
                musicAttendText.textContent = attend;
            
                
            }else{
                alert('Attendance: Enter Number only')
            }
        
        
            if (!isNaN(exam)) {
                let musicExamText = document.getElementById('musicExam');
                musicExamText.textContent = exam;
            
                
            }else{
                alert('Examination: Enter Number only')
            }
        
        
        }
        }
    



        submitFirst.addEventListener('click', function(event){
            event.preventDefault();
            let selectSubject = document.getElementById('subject');
            let selectValue = selectSubject.value; // get the selected value
        
            if (selectValue === 'scienceSubject'){
                science(event);
            }
            else if (selectValue === 'mathSubject'){
                math(event);
                
            }
            else if (selectValue === 'historySubject'){
                history(event);
            } 
            else if (selectValue === 'artsSubject'){
                arts(event);
            }
            else if (selectValue === 'musicSubject'){
                music(event);
            }
        })




submitSec.addEventListener('click', function(event){
    event.preventDefault();
    let selectSubject = document.getElementById('subject');
    let selectValue = selectSubject.value; // get the selected value

    if (selectValue === 'scienceSubject'){
        science(event);
    }
    else if (selectValue === 'mathSubject'){
        math(event);
        
    }
    else if (selectValue === 'historySubject'){
        history(event);
    } 
    else if (selectValue === 'artsSubject'){
        arts(event);
    }
    else if (selectValue === 'musicSubject'){
        music(event);
    }
})