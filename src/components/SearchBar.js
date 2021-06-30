import React, {useState, useEffect} from 'react';

export default function SearchBar(props) {
    const [isEnable, setIsEnable] = useState(false);

    useEffect(() => {
        if(props.searchValue === ''){
            setIsEnable(false);
        }else{
            setIsEnable(true);
        }
    }, [props.searchValue])


    return (
        <>
            <div className={styles.container}>
                <input
                    className={styles.input} 
                    placeholder='Paste the link you want to shorten here'
                    name={props.name}
                    value={props.searchValue}
                    onChange={(e) => props.handleChange(e)}
                />
                <button disabled={!isEnable} className={styles.btn(isEnable)} onClick={props.handleButton}>
                    <span>Shorten this link</span>
                </button>
            </div>
        </>
    )
}

const styles = {
    container: 'py-6 flex space-x-4',
    input: 'px-3 py-1 rounded bg-light w-4/5 focus:outline-none',
    btn: (url) => `${url ? 'bg-accent text-white' : 'bg-btn-disable text-text-disable'} py-1 rounded w-1/5`
}
