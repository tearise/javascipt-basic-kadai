const date=new Date();
const year= date.getFullYear();
const day= date.getDate();
//月のカウントが０からのスタ－トになるので、
//何もない状態だと７月になってしまうので、
//取得した数値に+1をしている
const month= date.getMonth()+1;
//出た数値に年、月、日を足して2023年8月22日を表示
console.log(year+'年',month+'月',day+'日');