import { useState , FC, SetStateAction, Dispatch } from 'react'
import Button from '../../../components/button/Button'
import Textarea from '../../../components/textarea/Textarea'
import { handleChange } from '../../../utility/usedFunctions'
import { createTask } from '../../../container/apiCall/user'
import { hideLoader, showLoader } from '../../../components/ui/loader/loader'
import { createTaskProps } from '../../../../interfaces/apiInterface'

interface AddTaskProps {
  onCancel: () => void;
  onAdd : ()=> void;
  createTask :createTaskProps
  setCreateTask :  Dispatch<SetStateAction<createTaskProps>>;
}
const AddTask: FC<AddTaskProps> = ({onAdd, onCancel, createTask, setCreateTask}) => {
  
  
  return (
    <div className='  mt-4'>
    <div className='border  border-gray-300 rounded-xl mt-2 mx-2 sm:mx-0 w-full sm:w-xl  md:w-2xl xl:w-4xl '>
        <div className='max-h-[400px] px-2 pt-4 overflow-y-scroll'>
          <Textarea value={createTask.title} onChange={(e)=>handleChange(createTask, setCreateTask, "title", e.target.value)} placeholder='Heading' className='border-none outline-none py-0 text-sm font-medium tracking-wider'/>
          <Textarea value={createTask.description} onChange={(e)=>handleChange(createTask, setCreateTask, "description", e.target.value)} placeholder='Description' className='border-none outline-none py-0 text-sm text-gray-500 tracking-wider'/>
        </div>
        <div className='border-b-[1px] border-gray-200 my-4'></div>
        <div className='flex justify-end gap-4 px-6 pb-4'>
          <div>
            <Button onClick={onCancel} text='Cancel' btnClass='px-1 py-0' variant='danger'/>
          </div>
          <div>
            <Button onClick={onAdd} text='Add task' btnClass=' py-0' variant='outline'/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default AddTask