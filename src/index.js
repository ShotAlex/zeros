module.exports = function zeros(expression) {
  let Expression = expression.split("*");  
  let ArrN =[];
  let step = 1;

  for (let i of Expression) {
    step = (i.endsWith('!!')) ? 2 : 1;
    let numberExpN = parseInt(i);
    let numberExpNPush = factorial(numberExpN, step);
    ArrN.push(numberExpNPush); 
  }

  function factorial(num, step) { 
    
    let i = 1;
    if (step == 2 && num%2 == 0)  i = 2;

    let result = num;
      for ( i; i <= num; i+=step) {  
        result = (BigInt(result) * BigInt(i)).toString();
      }
  
      return BigInt(result/num).toString();      
    }

  //  Произведение факториалов 
  let multiplyNum = 1;
  for (let i of ArrN) {
    multiplyNum = (BigInt(multiplyNum) * BigInt(i)).toString();
  }

  //  Реверс произведения факториалов
  let multiplyNumReverse = multiplyNum.toString().split("").reverse();

  //  Подсчёт количества нулей
  let value = 0;
  for (let i of multiplyNumReverse) {
    if(i != 0) break; 
    ++value;
    }
  return value;
}

