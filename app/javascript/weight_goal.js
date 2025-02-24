document.addEventListener("turbo:load", function () {
  const todayWeight = document.getElementById("today__weight")
  const weightGoal = document.getElementById("weight__goal");
  
  function calcWeightGoal() {
    const today = parseFloat(todayWeight.textContent.trim());
    const weight = parseFloat(weightMark.value)
    if(!isNaN(today) && weightMark) {
      const mark = (weightMark - today) //目標までの数値計算
      weightGoal.textContent = mark //計算結果を表示
    } else {
      weightGoal.textContent = "";
    }
  }
  calcWeightGoal();
});