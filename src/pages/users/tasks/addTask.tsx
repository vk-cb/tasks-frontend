import React from 'react'
import Input from '../../../components/input/Input'
import Button from '../../../components/button/Button'

const AddTask = () => {
  return (
    <div className='border border-gray-300 rounded-xl min-h-[300px] w-full'>
        <div className='max-h-[80%] border'>
        <Input placeholder='Task Heading' className='w-full outline-none border-none py-0 text-sm font-semibold'/>
        <Input placeholder='Description' className='w-full outline-none border-none py-0'/>
        </div>
        <div>
            <Button text='Cancel' className='px-1 py-1'/>
            <Button text='Add task'/>
        </div>
    </div>
  )
}

export default AddTask