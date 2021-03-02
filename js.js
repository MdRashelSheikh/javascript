function GradeScale(){
    var grade = document.getElementById('input').value;
    var result = document.getElementById('output');
    
    if (grade >= 90 && grade <=100)
    {
        result.innerHTML = "you got an 'A'. excellent!";
    }
    else if(grade >= 80 && grade <=90)
    {
        result.innerHTML ="yor got 'B' .great! ";
    }
    else if(grade >= 70 && grade <80)
    {
        result.innerHTML ="yor got   'C' . aim higher.  ";
    }
    else if(grade >= 60 && grade <70)
    {
        result.innerHTML ="yor got 'D' . you need to study ";
    }
    else if( grade < 60)
    {
        result.innerHTML ="yor got 'F'. you have failed your class  ";
    }
    else
    {
        window.alert("Invalid grade. please enter a numerical grade");
    }    
}