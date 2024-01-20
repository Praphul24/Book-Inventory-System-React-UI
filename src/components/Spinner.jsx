import React from 'react'

const Spinner = () => {
  return (
    <div class="flex items-center justify-center min-h-screen">
      <div class="animate-spin w-16 h-16 mt-[-300px] rounded-full border-t-4 border-blue-500 border-solid"></div>
    </div>
  )
}

export default Spinner