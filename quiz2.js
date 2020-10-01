function Question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

var q1 = new Question('Which color is not included in French Flag?',['red','yellow','blue','white'],'yellow');
var q2 = new Question('When did Gandhi die?',[1962,1933,1948,1926],1948);
var q3 = new Question('What is kurwa?',['Martyr','Curly','Fuck','Sake'], 'Fuck');
var q4 = new Question('When the Bolsheviq Revolution happen?',['1923','1905', '1453','1917'],'1917')
var questions = [q1,q2,q3,q4];


let quest = document.getElementById('question');
let opts = document.querySelectorAll('label');
let btn = document.getElementById('next');
let inp1 = document.getElementById('opt1');
let inp2 = document.getElementById('opt2');
let inp3 = document.getElementById('opt3');
let inp4 = document.getElementById('opt4');
let result = document.getElementById('result');
let qnum = document.getElementById('qnum');

let index = 0;
let score = 0;

function takeQuestion(){
    quest.textContent = questions[index].text;
    opts[0].textContent = questions[index].choices[0];
    inp1.value = questions[index].choices[0];
    opts[1].textContent = questions[index].choices[1];
    inp2.value = questions[index].choices[1];
    opts[2].textContent = questions[index].choices[2];
    inp3.value = questions[index].choices[2];
    opts[3].textContent = questions[index].choices[3];
    inp4.value = questions[index].choices[3];
    result.innerHTML = `Score : ${score} / ${index}`;
    qnum.innerHTML = `Question number ${index+1}`

}

takeQuestion();

btn.addEventListener('click',function(e){
    if(index == questions.length-1 && document.getElementById('questionform').elements["qitem"].value==questions[index].answer){
        
        score++;
        document.getElementsByClassName('container')[0].innerHTML = `<h1>The quiz has finished. Your score is ${score}/${index+1}</h1>`;
        
    }
    if(index == questions.length-1){
        document.getElementsByClassName('container')[0].innerHTML = `<h1>The quiz has finished. Your score is ${score}/${index+1}</h1>
        </br><input type = 'button' value='NEW GAME' onclick='again()'</input>`;
        
    }
    if(document.getElementById('questionform').elements["qitem"].value==questions[index].answer){
        score++;
    }

    index++;
    takeQuestion();
    document.querySelectorAll('input')[0].checked = false;
    document.querySelectorAll('input')[1].checked = false;
    document.querySelectorAll('input')[2].checked = false;
    document.querySelectorAll('input')[3].checked = false;
    e.preventDefault();
})

function again(){
    location.reload();
    return false;
}