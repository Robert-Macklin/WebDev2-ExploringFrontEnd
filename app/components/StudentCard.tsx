import { Student } from "@/lib/data";

const StudentPage = ({firstname,lastname,id,year,grade,birthday}: Student) => {

  return (
        <div className='bg-slate-800 p-5 rounded-xl  m-2 w-90 border-2 border-slate-700'>
          <div className='flex items-center'>
            <div className='bg-violet-300 justify-center p-3 rounded-full'>
              <span className='font-bold text-slate-900 text-xl'>{firstname.charAt(0)}{lastname.charAt(0)}</span>
            </div>
            <div className='ml-2 flex flex-col'>
              <span className='font-bold text-slate-300'>{firstname} {lastname}</span>
            <span className='text-violet-300 text-xs'>{'('}{id}{')'}</span>
            </div>
          </div>
          <div className='px-2 py-1 bg-slate-200 rounded-xl mt-5'>
            <Row label="Year" value={year}/>
            <Row label='Grade' value={`${grade}%`}/>
            <Row label="Birthday" value={birthday} isBottom={true}/>
          </div>
        </div>
  )
}

type rowProp = {
  label: string;
  value: string | number | undefined;
  isBottom?: boolean
}

const Row = ({label,value,isBottom = false}:rowProp) => {
  return (
    <div className={'flex justify-between' + (isBottom ? '' : ' border-b border-slate-300 py-0.5')}>
      <span className='text-slate-900 font-bold'>{label}:</span>
      <span className='text-slate-500 font-semibold'>{value}</span>
    </div>
  )
}

export default StudentPage