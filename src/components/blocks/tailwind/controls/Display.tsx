import React from 'react'
import SingleOptions from './SingleOptions';
import { Partial } from './Partial';
import Gap from './Gap';
import Grid from './Grid';
const Display = ({ title, data, updateCss }: any) => {
  return (
    <>
      <SingleOptions
        attr={'display'}
        title={'display'}
        prefix={''}
        data={data}
        updateCss={updateCss}
      />
      {data && data['display'] && data['display'] === 'flex' && (
        <>
          <Partial title={"Flex Options"} />
          <div className="flex flex-col gap-y-2">
            <SingleOptions
              attr={'flexdirection'}
              title={'Direction'}
              prefix={''}
              data={data}
              updateCss={updateCss}
            />
            <SingleOptions
              attr={'alignitems'}
              title={'Align'}
              prefix={''}
              data={data}
              updateCss={updateCss}
            />
            <SingleOptions
              attr={'justifycontent'}
              title={'Justify'}
              prefix={''}
              data={data}
              updateCss={updateCss}
            />
            <Gap
              attr={'gap'}
              title={'Gap'}
              prefix={''}
              data={data}
              updateCss={updateCss}
            />
            <SingleOptions
              attr={'flexwrap'}
              title={'Wrap'}
              prefix={''}
              data={data}
              updateCss={updateCss}
            />

          </div>
        </>
      )}
      {data && data['display'] && data['display'] === 'grid' && (
        <>
          <Partial title={"Grid Options"} />
          <div className="flex flex-col gap-y-2">
            <Grid
              title={'Grid'}
              prefix={''}
              data={data}
              updateCss={updateCss}
            />
            <SingleOptions
              attr={'gridautoflow'}
              title={'Flow'}
              prefix={''}
              data={data}
              updateCss={updateCss}
            />
            <Gap
              attr={'gap'}
              title={'Gap'}
              prefix={''}
              data={data}
              updateCss={updateCss}
            />
             <SingleOptions
              attr={'alignitems'}
              title={'Align'}
              prefix={''}
              data={data}
              updateCss={updateCss}
            />
             <SingleOptions
              attr={'aligncontent'}
              title={'Content'}
              prefix={''}
              data={data}
              updateCss={updateCss}
            />
          </div>
        </>
      )}
    </>
  )
}

export default Display;