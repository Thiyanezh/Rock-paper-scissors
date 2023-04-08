const score={
    wins:0,
    loss:0,
    tie:0
};
let compat ='';
let result='';
function move(pm)
{
const computer = Math.random()*1;
if (computer >=0 && computer <.3)
{
    compat='stone';
}
else if(computer >=.3 && computer <.7){
    compat='paper';
}
else if(computer >=.7 && computer <1){
    compat='scissor';
}
if (pm==='stone')
{
    if(compat==='scissor')
    {
        result='You won';
    }
    else if (compat==='paper')
    {
        result='You loss';
    }
    else if (compat==='stone')
    {
        result='Tie';
    }
}
if (pm==='scissor')
{
    if(compat==='scissor')
    {
        result='Tie';
    }
    else if (compat==='paper')
    {
        result='You won';
    }
    else if (compat==='stone')
    {
        result='You loss';
    }
}
if (pm==='paper')
{
    if(compat==='paper')
    {
        result='Tie';
    }
    else if (compat==='stone')
    {
        result='You won';
    }
    else if (compat==='scisssor')
    {
        result='You loss';
    }
}
if (pm==='reset')
{
    result='Game reset';
}
console.log(result);
if(result==='You won')
{
    score.wins+=1;
}
else if(result==='You loss')
{
    score.loss+=1;
}
else if (result==='Tie')
{
    score.tie+=1;
}
else if (result==='Game reset'){
    score.loss=0;
    score.wins=0;
    score.tie=0;
}
document.querySelector('.result').innerHTML=result
document.querySelector('.show').innerHTML='wins: '+score.wins+'  loss: '+score.loss+'  Tie: '+score.tie;
}