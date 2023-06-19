import classNames from 'utils/classNames'
import { useState } from 'react'

const App = () => {
  const [ input, setInput ] = useState(-1)
  return <>
    <div className='grid place-content-center h-full bg-black text-white text-center'>
      <div className='flex flex-col gap-8'>
        <h1 className='p-8 rounded-2xl border-t border-t-white shadow-xl shadow-white/20 text-3xl font-bold'>
          factor finder (GUI remake of <code className='bg-gray-900 p-1 rounded-md'>factorfinder.py</code>)
        </h1>
        <label className='text-2xl font-semibold'>enter an integer below to find its factors</label>
        <input
          type='number'
          className={classNames(
            'rounded-xl p-4 bg-black text-white border text-center text-xl',
            input < 0 || isNaN(input) || input > 100000
              ? 'border-red-500 bg-red-900'
              : 'border-green-500 bg-green-900'
          )}
          onInput={event => {
            setInput(parseInt(event.currentTarget.value, 10))
          }}
        />
        <div className='text-2xl font-semibold flex flex-col'>
          factors:
          <span className='text-3xl font-bold'>
            {input < 0 || isNaN(input) || input > 100000
              ? ' invalid input'
              : [...Array(input + 1).keys()].filter(index => input % index === 0).join(', ')
            }
          </span>
        </div>
      </div>
    </div>
  </>
}

export default App
