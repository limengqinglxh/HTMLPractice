//要素の取得
let text = document.getElementById("text-1");
//中身の確認
console.log(text);
//要素の内容を取得する
console.log(text.innerHTML);
//要素の内容を変更する
text.innerHTML = "你好";

//要素の取得　lunch1
let lunch1 = document.getElementById("lunch");
//要素の中身を確認
console.log(lunch1);
//要素の文章の部分を取得
console.log(lunch1.innerHTML);
//今日のランチはハンバーグ　という内容に変更
lunch1.innerHTML = "今日のランチはハンバーグ";

//クラスを指定して値を