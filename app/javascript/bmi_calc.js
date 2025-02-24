document.addEventListener("turbo:load", function () {
  const bmiInput = document.getElementById("bmi_weight");
  const bmiDisplay = document.getElementById("bmi_display");
  const bmiField = document.getElementById("bmi_field");

  function calculateBMI() {
    const weight = parseFloat(bmiInput.value); //入力された体重の取得、parseFloatで数値に変換
    if (!isNaN(weight) && userHeight) {
      const bmi = (weight / ((userHeight / 100) ** 2)).toFixed(2) // BMI計算
      bmiDisplay.textContent = bmi; //計算結果の表示
      bmiField.value = bmi //DB保存フィールドにセット
    } else {
      bmiDisplay.textContent = "";
      bmiField.value = "";
    }
  }
  calculateBMI(); // 初回計算（ページロード時に実行）

  bmiInput.addEventListener("input", calculateBMI); // ユーザーが入力したときに再計算
});