import React, { useState } from 'react'
import './Calce.css' 

const Calce = () => {
    const[num,SetNum]=useState('')
    const demo=()=>{
        SetNum(eval(num))
    }
  return (
    <>
        <div className='container'>
            <div className='calculator'>
                <form action="">
                    <div className='display'>
                          <input type="text" value={num} />
                    </div>
                    <div >
                        <input type="button" value={'AC'} onClick={e => SetNum('')} />
                        <input type="button" value={'DE'} onClick={e => SetNum(num.slice(0,-1))} />
                        <input type='button' value={'.'} onClick={e => SetNum(num +  e.target.value)}/>
                        <input type="button" value={'/'} onClick={e => SetNum(num +  e.target.value)}/>
                    </div>
                    <div >
                        <input type="button" value={'7'} onClick={e => SetNum(num +  e.target.value)} />
                        <input type="button" value={'8'} onClick={e => SetNum(num +  e.target.value)} />
                        <input type='button' value={'9'} onClick={e => SetNum(num +  e.target.value)}/>
                        <input type="button" value={'*'} onClick={e => SetNum(num +  e.target.value)}/>
                    </div>
                    <div >
                        <input type="button" value={'4'} onClick={e => SetNum(num +  e.target.value)} />
                        <input type="button" value={'5'} onClick={e => SetNum(num +  e.target.value)}/>
                        <input type='button' value={'6'} onClick={e => SetNum(num +  e.target.value)}/>
                        <input type="button" value={'+'} onClick={e => SetNum(num +  e.target.value)}/>
                    </div>
                    <div >
                        <input type="button" value={'1'} onClick={e => SetNum(num +  e.target.value)} />
                        <input type="button" value={'2'} onClick={e => SetNum(num +  e.target.value)} />
                        <input type='button' value={'3'} onClick={e => SetNum(num +  e.target.value)}/>
                        <input type="button" value={'-'} onClick={e => SetNum(num +  e.target.value)}/>
                    </div>
                    <div >
                        <input type="button" value={'00'} onClick={e => SetNum(num +  e.target.value)} />
                        <input type="button" value={'0'} onClick={e => SetNum(num +  e.target.value)} />
                        {/* <input type='button' value={'='} className='equal' onClick={e => SetNum(eval(num))}/> */}
                        <input type='button' value={'='} className='equal' onClick={()=>demo()}/>
                    </div>
                </form>
                
            </div>

        </div>
    </>
  )
}

export default Calce