import Button from '../../../components/button/Button'
import Textarea from '../../../components/textarea/Textarea'

const AddTask = () => {
  return (
    <div className='border border-gray-300 rounded-xl mt-2 mx-2 sm:mx-0 w-full sm:w-xl  md:w-2xl xl:w-4xl '>
        <div className='max-h-[400px] px-2 pt-4 overflow-y-scroll'>
          <Textarea placeholder='Heading' className='border-none outline-none py-0 text-sm font-medium tracking-wider'/>
          <Textarea placeholder='Description' className='border-none outline-none py-0 text-sm text-gray-500 tracking-wider'/>
        </div>
        <div className='border-b-[1px] border-gray-200 my-4'></div>
        <div className='flex justify-end gap-4 px-6 pb-4'>
          <div>
            <Button text='Cancel' btnClass='px-1 py-0' variant='danger'/>
          </div>
          <div>
            <Button text='Add task' btnClass=' py-0' variant='outline'/>
          </div>
        </div>
    </div>
  )
}

export default AddTask