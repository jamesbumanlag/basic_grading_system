     
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

    quarterlyGrade(){
        let quizGrade = this.quiz * 0.1;
        let assignGrade = this.assign * 0.1;
        let reciteGrade = this.recite * 0.15;
        let projGrade = this.proj * 0.15;
        let attendGrade = this.attend * 0.15;
        let examGrade = this.exam * 0.4;

        let totalGrade = quizGrade + assignGrade + reciteGrade + projGrade + attendGrade + examGrade;
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

const scienceSubjectGrade = new Grades('Science', 89,78,88,87,89,85);
const mathSubjectGrade = new Grades('Math',79,78,78,77,79,75)

let scienceGradeAsFloat = parseFloat(scienceSubjectGrade.quarterlyGrade());
let mathGradeAsFloat = parseFloat(mathSubjectGrade.quarterlyGrade());

let subjectScience = scienceSubjectGrade.subject;
let subjectMath = mathSubjectGrade.subject;

quarterGrade(scienceGradeAsFloat, firstQuarter,subjectScience);
quarterGrade(mathGradeAsFloat,firstQuarter,subjectMath);


quarterGrade(scienceGradeAsFloat, secondQuarter, subjectScience);
quarterGrade(mathGradeAsFloat, secondQuarter, subjectMath)