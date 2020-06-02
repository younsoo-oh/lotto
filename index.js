const resultTag = document.querySelector("#result");
const bonusTag = document.querySelector("#bonus");

const candidate = Array(45).fill().map((value, index) => index + 1);
    //Array는 빈 45개의 자리를 만들고 fill로 채움 map으로 각 index에 0~44까지 넣음
const shuffle = [];
    while (candidate.length > 0) {
        const random = Math.random() * candidate.length;
        const spliceArray = candidate.splice(random, 1); //random된 1개의 값을 뽑음(이때 각각 배열상태로 됨)
        const value = spliceArray[0]; // 배열상태의 것을 숫자로 꺼내기위함
        shuffle.push(value); //45개 숫자가 랜덤으로 들어가게됨
    }
console.log(shuffle);

const resultBall = shuffle.slice(0, 6).sort((a,b) => a-b);
const bonusBall = shuffle[6];
console.log(resultBall);
console.log(bonusBall);

//공에 색입히기 number는 판단기준, tag는 색넣기
function colorize(number, tag) {
    if (number <= 10){
        tag.style.backgroundColor = 'red';
        tag.style.color = 'white';
    } else if (number <= 20){
        tag.style.backgroundColor = 'orange';
    } else if (number <= 30){
        tag.style.backgroundColor = 'yellow';
    } else if (number <= 40){
        tag.style.backgroundColor = 'blue';
        tag.style.color = 'white';
    } else {
        tag.style.backgroundColor = 'green';
        tag.style.color = 'white';
    }
}

//setTimeout로 비동기작업, 1.5초마다 index가 하나씩 나오도록 함 
//(index+1을 안하면 0번째는 등장한상태에서 시작)
resultBall.forEach((value, index) => {
    setTimeout(() => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.textContent = value;
        colorize(value, ball);
        resultTag.appendChild(ball);
    }, 1500 * (index + 1));
});

//bonus는 마지막에 등장하도록
setTimeout(() => {
    const bonus = document.createElement('div');
    bonus.className = 'ball';
    bonus.textContent = bonusBall;
    colorize(bonusBall, bonus);
    bonusTag.appendChild(bonus);
}, 10000);