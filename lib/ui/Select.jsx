'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { cn } from '../../utils/tailwind';
import { Loader, LoaderIcon } from 'lucide-react';

const Select = ({ options, label, type, id, name, className,defaultValue, accessField = (p) => p,onSelect, ...props }) => {

  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const [val, setVal] = useState(defaultValue ||"")

  useEffect(() => {
    console.log('number ', typeof options.length)
    if (typeof options.length === 'number') {
      setList(options)
    }
    else {

      Promise.resolve(options).then(res => {
        setLoading(false)
        setList(res.data)
      })
    }

  }, [])

  const handleChange = (e) => {
    const isNotMatch = list.every(option => accessField(option) !== e.target.value)
    const item = list.find(option => accessField(option) === e.target.value)
    e.target.setCustomValidity(isNotMatch?"You must choose option from the list":"")
    console.log('isNotMatch', isNotMatch)
    setVal(e.target.value)
    if(!isNotMatch){
      onSelect(e,item)
    }
    // setError(isNotMatch)
  }


  return (
    <div className={cn("flex flex-col mb-2", className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <input type="text" list={name}
        onChange={handleChange}
        value={val}
        className="border border-gray-300 rounded-md p-2 h-full"
        id={id}
        name={name}
        {...props} />

      <datalist id={name} >
        {/* <option value={null}>{placeholder}</option> */}
        {
          loading ? <option > loading...
          </option> :
            list.map((option, i) => {
              return <option key={i} >{accessField(option)}</option>
            })
        }
      </datalist>

    </div>
  );
};

export default Select;
