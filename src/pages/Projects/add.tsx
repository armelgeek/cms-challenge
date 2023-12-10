import React, { useCallback, useState } from 'react'
import { useDispatch, useGetter } from '../../store';
import { useHistory } from 'react-router-dom';

const AddProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const create = useDispatch("projects", "addProject");
    const history = useHistory();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (name != '' && description != '') {
            create(name, description);
            history.push('/projects');
        }
    };
    return (
        <div className='mx-28 flex flex-row justify-center items-center mt-32'>
            <div className='card p-5 w-96'>
                <form onSubmit={handleSubmit} className='grid gap-y-2'>
                    <label className='text-gray-700 mt-2'>Nom du Projet:</label>
                    <input type="text" value={name} className='text-sm  h-10 w-full border border-gray-300 items-center rounded-primary bg-slate-50 px-3 dark:border-transparent dark:bg-slate-700 sm:flex' onChange={(e) => setName(e.target.value)} />
                    <label  className='text-gray-700 mt-2'>Description:</label>
                    <textarea rows={10} value={description} className='text-sm  w-full border border-gray-300 items-center rounded-primary bg-slate-50 px-3 dark:border-transparent dark:bg-slate-700 sm:flex' onChange={(e) => setDescription(e.target.value)} />
                    <button type="submit" className='btn text-white bg-primary-500'>Créer Projet</button>
                </form>
            </div>


        </div>
    )
}
export default AddProject;