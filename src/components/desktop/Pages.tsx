import React, { useCallback, useEffect } from 'react'
import { useDispatch, useGetter } from '../../store';
import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaEdit, FaPlusCircle } from 'react-icons/fa';

const Pages = () => {
  const pages = useGetter('desktop', 'pages', []);
  console.log('pages',pages);
  return (
    <div className="h-8 mt-2  border-gray-300 flex flex-col">
        {pages.map((page:any) =>(
            <div className='flex flex-row justify-between'>
                <div className="">{page.name}</div>
                <div className="actions">
                    <FaEdit/>
                </div>
            </div>
        ))}
    </div>);

}
export default Pages;