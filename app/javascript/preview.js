document.addEventListener('turbo:load', function(){
  const postForm = document.getElementById('new_user');
  const previewList = document.getElementById('previews');

  // フォームが存在しなければ処理を終了
  if(!postForm) return null;

  const fileField = document.querySelector('input[type="file"][name="user[image]"]');

  // fileField が null の場合はイベントリスナーを設定しない
  if (!fileField) return;

  // input要素で値の変化が起きた際に呼び出される関数
  fileField.addEventListener('change', function(e){

    // 古いプレビューが存在する場合は削除
    const alreadyPreview = document.querySelector('.preview');
    if (alreadyPreview) {
      alreadyPreview.remove();
    };

    console.log("e.target.files:", e.target.files); // ⑥ 選択したファイル情報を確認
    const file = e.target.files[0]; // 修正: e.target.files[e] → e.target.files[0]

    const blob = window.URL.createObjectURL(file);

    // 画像を表示するためのdiv要素を生成
    const previewWrapper = document.createElement('div');
    previewWrapper.setAttribute('class', 'preview');

    // 表示する画像を生成
    const previewImage = document.createElement('img');
    previewImage.setAttribute('class', 'preview-image');
    previewImage.setAttribute('src', blob);

    // 生成したHTMLの要素をブラウザに表示させる
    previewWrapper.appendChild(previewImage);
    previewList.appendChild(previewWrapper);
  });
});
