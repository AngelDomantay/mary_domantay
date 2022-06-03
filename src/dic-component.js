import React from 'react'
import styles from './style.css'
import ScriptTag from './dictionary'


const Dictionary = () => {

    return (
        <>
            <audio id="sound"></audio>

            <div className={styles.container}>
                <div className={styles.searchb}>
                    <input type="text" placeholder="Type the word here.." id="inp-word" />
                    <button id="search-btn">Search</button>
                </div>

                <div className={styles.result} id="result"></div>

            </div>
            <ScriptTag type="text/javascript"  src="./dictionary.js"/>
        </>
    );
};
export default Dictionary;