function loopTocheck(){
    let Name = "Agharaye Emmanuel (agharayee)";
    let courses = [ "Html", " Javascript", "Css", " C#"];

    let display = document.getElementById('display');
    let coursesCount = courses.length;


console.log("I am offering " + coursesCount + " Courses");
display.innerHTML = "Courses offered are " + courses;

// check if total number of courses offered is = an odd number. if odd print out odd numbers from 1-200
if (coursesCount % 2 !== 0){
    let i = 1;
 for(i = 1; i < 200; i +=2){
     console.log(i);
 }
}

// check if total number of courses offered is = an even number. if odd print out even numbers from 1-200
if (coursesCount % 2 === 0){
    let i = 0;
 for(i = 0; i <= 200; i +=2){
     console.log(i);
 }
} 

}





loopTocheck();