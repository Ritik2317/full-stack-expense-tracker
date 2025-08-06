import React from 'react'
import { Button } from '../ui/button'

function DeleteAlert({content,onDelete}) {
  return (
    <div className="p-4 space-y-4">
        <p className="text-base text-gray-800 dark:text-gray-100">{content}</p>
        <div className="flex justify-end">
            <Button
            onClick={onDelete}
            className="bg-red-600 text-white hover:bg-red-700 transition hover:cursor-pointer"
            >
             Delete
            </Button>
        </div>
    </div>

  )
}

export default DeleteAlert