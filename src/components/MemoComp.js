import React from 'react'

function MemoComp({Name}) {
    console.log('Rendering Memo Component')
  return (
    <div>
      {Name}
    </div>
  )
}

export default React.memo(MemoComp) 
