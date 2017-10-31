var isSunk =false;
var hits = 0;
var guesses = 0;
var guess;
var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1+1;
var location3 = location1+1;
while(isSunk == false){
    guess = prompt('开火！（请输入0-6之间的数字');
    if(guess>6 || guess<0){
        alert('请输入正确的数值')
    }else{
        guesses = guesses+1;
        if(guess == location1 || guess == location2 || guess == location3){
            hits = hits+1;
            alert('击中！');
            if(hits==3){
                isSunk = true;
                alert('你击沉的所有军舰！');
            }
        }else{
            alert('Miss!');
        }
    }
}
var stats = `你共用了${guesses}次击沉了所有军舰，你的击中概率是${3/guesses}。`
alert(stats);