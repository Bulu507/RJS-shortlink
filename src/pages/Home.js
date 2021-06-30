import React from 'react';
import '../index.css';
import {SearchBar, ListHistory} from '../components';
import {useForm} from '../utils';
import * as RandExp from "randexp";

export default function Home() {
    const initialData = {
        url: '',
        shortcode: ''
    }
    const {values, setValues, handleChange} = useForm(initialData);

    const handleButton = (e) => {
        e.preventDefault();
        const generateLink = new RandExp('^[0-9a-zA-Z_]{6}$').gen();
        setValues({
            ...values,
            shortcode: generateLink
        })
    }

    return (
        <>
            <div className='container mx-auto flex justify-center'>
                <div className='relative w-1/2 mt-10'>
                    <div className='flex flex justify-between items-center'>
                        <div className='font-logo text-accent underline'>
                            Shooooort
                        </div>
                        <p className='text-secondary self-end pb-3'>The link shortener with a long name</p>
                    </div>
                    <SearchBar 
                        name='url' 
                        searchValue={values.url} 
                        handleChange={handleChange}
                        handleButton={handleButton} 
                    />
                    <ListHistory />
                </div>
            </div>
        </>
    )
}
