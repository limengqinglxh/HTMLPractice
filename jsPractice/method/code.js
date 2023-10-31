//メソッドの作成　戻り値なし　パラメーとなし
function printHello(){
    console.log("hello");
}

//メソッドの呼び出し
printHello();

//戻り値あり　パラメータあり
function sum(a,b){
    return a + b; 
}

//メソッドの呼び出し
console.log(sum(1,2));

//デフォルトパラメーター
function print(str1,str2="世界"、str3="!!!!"){
    console,log(str1+" "str2 + " "str3);
}

//呼び出し
print("ヤッホー");


//ラムダ式
