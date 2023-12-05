import React, { useEffect } from 'react'
import { useDispatch, useGetter } from '../../../store';
import { UnControlled as CodeMirror } from 'react-codemirror2'

const BlockSourceCode = () => {
  const source = useGetter('desktop', 'data', []);
  return (
    <>
    {/**<CodeMirror
      value={source.html}
      options={{
        mode: 'html',
        theme: 'material',
        lineNumbers: true
      }}
      onChange={(editor, data, value) => {
      }}

    />**/}
    {source.html}
    </>
  )
}
export default BlockSourceCode;