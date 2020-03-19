import axios from 'axios';

// ②接続先のURL
const url = 'https://script.google.com/macros/s/AKfycby3NwZhozMWbkS8evh2t3dvfJgKxCBdchI0Xdr31L_BoUb7uqyE/exec';

// ③翻訳したい文字列を引数で受け取る関数
export function translateJaToEn(text) {
    // ④通信処理を実行し結果をreturnしている
    return axios.get(`${url}?text=${text}&source=ja&target=en`);
}