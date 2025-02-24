document.addEventListener("turbo:load", function () {
  const todayWeightElement = document.getElementById("today__weight");
  const changesYesterday = document.getElementById("changes_yesterday");
  const changesMonth = document.getElementById("changes_month");
  const changesHalf = document.getElementById("changes_half");
  const changesYear = document.getElementById("changes_year");

  // 今日の体重を取得（数値変換）
  const todayWeight = parseFloat(todayWeightElement?.textContent);

  function calcWeightChanges() {
    if (!isNaN(todayWeight)) {
      if (!isNaN(pastWeights.yesterday)) {
        changesYesterday.textContent = (todayWeight - pastWeights.yesterday).toFixed(1);
      }
      if (!isNaN(pastWeights.month)) {
        changesMonth.textContent = (todayWeight - pastWeights.month).toFixed(1);
      }
      if (!isNaN(pastWeights.halfYear)) {
        changesHalf.textContent = (todayWeight - pastWeights.halfYear).toFixed(1);
      }
      if (!isNaN(pastWeights.year)) {
        changesYear.textContent = (todayWeight - pastWeights.year).toFixed(1);
      }
    }
  }

  calcWeightChanges();
});