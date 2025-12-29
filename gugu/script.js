
function gugu()
{
    let num = document.getElementById("num");
    let income = Number(num.value);

    if(income <= 0 || income > 9) {
        alert("1~9 사이의 숫자를 입력하세요");
        return;
    }


    for(let i = 1; i <= 9; i++) {
        let check = document.getElementById(`item${i}`);
        check.innerText = `${income} x ${i} = ${income*i}`;
    }
}






