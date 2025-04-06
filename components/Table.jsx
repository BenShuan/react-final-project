import React from 'react'
import { getNestedKey } from '../lib/services/utils'
import { cn } from '../utils/tailwind'

const Table = ({ columns, data }) => {


  console.log('columns', columns)
  console.log('data', data)
  if (!columns || !data) {
    return <p>No data found</p>
  }
  return (
    <table className=' table table-auto relative  w-full border border-gray-300 border-collapse  rounded-2xl '>
      <thead className='sticky top-0'>
        <tr>

        {
          
          columns.map(col => {
            return <th className='py-2 px-1 border border-gray-300 bg-gray-200' key={col.header}> {col.header}</th>
          })
        }
        </tr>
      </thead>
      <tbody className='text-center '>
        {
          data.map((row,i) => {
            return (
              <tr key={row.id} className={cn(i%2&&'bg-gray-200','hover:bg-white')}>
                {
                  columns.map(col => {
                    return <td className={cn('border border-gray-300 py-1 px-2',)} key={row.id + col.header}>{
                      !col.cell?
                      getNestedKey(row, col.accessField):
                      col.cell(row)
                      }</td>
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Table