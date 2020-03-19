import React from 'react';
import { translateJaToEn } from '../api/translateApi';

function Translate() {

    const [lang, setLang] = React.useState('');

    const input = React.useRef(null);

    const onClick = async () => {
        try {
            const response = await translateJaToEn(input.current.value);
            setLang(response.data);
        } catch (e) {
            alert(e.toString());
        }
    };

    return (

        <div>
            <input ref={input} />
            <button onClick={onClick}>日⇒英</button>
            <p>{lang}</p>
        </div>
    );
}

export default Translate;