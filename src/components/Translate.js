import React from 'react';
import { translateJaToEn } from '../api/translateApi';

function Translate() {

    const [lang, setLang] = React.useState('');
    // ①:通信中かどうかを管理するStateを定義
    const [loading, setLoading] = React.useState(false);

    const input = React.useRef(null);

    const onClick = async () => {
        try {
            // ②:通信処理実行前にLoadingにtrueをset
            setLoading(true);
            const response = await translateJaToEn(input.current.value);
            setLang(response.data);
        } catch (e) {
            alert(e.toString());
        } finally {
            // ③:処理が完了したloadingにfalseをset
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                < p > Loading...</p>
            ) : (
                    <div>
                        <input ref={input} />
                        <button onClick={onClick}>日⇒英</button>
                        <p>{lang}</p>
                    </div>
                )
            }
        </div >
    );
}

export default Translate;