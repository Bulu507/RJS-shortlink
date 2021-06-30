import React from 'react';
import DataLink from './DataLink';

export default function ListHistory() {
    return (
        <>
            <div className='flex my-4 space-x-6'>
                <div className='font-heading text-primary'>
                    Previously shorten by you
                </div>
                <button className='text-accent self-end bg-transparent focus:outline-none'>
                    Clear History
                </button>
            </div>
            <div>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left w-3/4'>link</th>
                            <th className=''>Visits</th>
                            <th className=''>Last Visited</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-l-4 border-accent'>
                            <td className='text-left'>
                                <DataLink />
                            </td>
                            <td>
                                <p>1140</p>
                            </td>
                            <td>
                                <p>2 Days Ago</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
