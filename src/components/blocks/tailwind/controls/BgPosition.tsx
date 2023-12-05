import React, { useCallback, useState } from 'react'
import _ from 'lodash';
import classes from '../../../../utils/scripts/tw.classes';
const BgPosition = ({ title, data, attr, updateCss }: any) => {
    const [state, setState] = useState({
        bgposition: {
            size: !_.isNull(data) && !_.isUndefined(data['bgsize']) ? data['bgsize'] : '',
            position: !_.isNull(data) && !_.isUndefined(data['bgposition']) ? data['bgposition'] : '',
            repeat: !_.isNull(data) && !_.isUndefined(data['bgrepeat']) ? data['bgrepeat'] : '',
            attachment: !_.isNull(data) && !_.isUndefined(data['bgattachment']) ? data['bgattachment'] : '',
            clip: !_.isNull(data) && !_.isUndefined(data['bgpositionclip']) ? data['bgpositionclip'] : '',
            origin: !_.isNull(data) && !_.isUndefined(data['bgorigin']) ? data['bgorigin'] : ''
        },
        bgsizes: classes.bgsizes,
        bgpositions: classes.bgpositions,
        bgrepeats: classes.bgrepeats,
        bgattachments: classes.bgattachments,
        bgclips:  classes.bgclips,
        bgorigin:  classes.bgorigin
    });
    const updateStateAttributes = useCallback((updates: any) => {
        setState((prevState: any) => ({
            ...prevState,
            ...Object.keys(updates).reduce((acc: any, key) => {
                if (updates[key] && typeof updates[key] === 'object') {
                    acc[key] = {
                        ...prevState[key],
                        ...updates[key],
                    };
                } else {
                    acc[key] = updates[key];
                }
                return acc;
            }, {}),
        }));
    }, [state]);
    const update = useCallback((value: any,attrKey:any, cssKey:any) => {
        updateStateAttributes({
            [attrKey]: value,
        })
        updateCss(value, cssKey);
    }, [])
    return (
        <div className="grid grid-cols-2 gap-y-1 content-center mx-2 mb-1">
        <div className="flex flex-row flex-wrap">
          
            <div >
                <div className="w-1/2">
                <span className="uppercase font-bold" style={{fontSize: '10px'}}>Size</span>
                    <select className='select select-sm bg-white' value={state.bgposition.size} onChange={(e) => {
                        update(e.target.value,'bgposition.size','bgsize');
                    }}>
                        <option value=""></option>
                        {state.bgsizes.map((size, index) => (
                            <option key={index} value={size}>{size.replace('bg-', '')}</option>
                        ))}

                    </select>
                </div>
                <div className="w-1/2 ml-1">
                <span className="uppercase font-bold" style={{fontSize: '10px'}}>Position</span>
                    <select  className='select select-sm bg-white' value={state.bgposition.position} onChange={(e) => {
                        update(e.target.value,'bgposition.position','bgposition');
                    }}>
                        <option value=""></option>
                        {state.bgpositions.map((position, index) => (
                            <option key={index} value={position}>{position.replace('bg-', '')}</option>
                        ))}

                    </select>
                </div>
                <div className="col-span-2">
                <span className="uppercase font-bold" style={{fontSize: '10px'}}>Repeat</span>
                    <select  className='select select-sm bg-white' value={state.bgposition.repeat} onChange={(e) => {
                        update(e.target.value,'bgposition.repeat','bgrepeat');
                    }}>
                        <option value=""></option>
                        {state.bgrepeats.map((repeat, index) => (
                            <option key={index} value={repeat}>{repeat.replace('bg-', '')}</option>
                        ))}

                    </select>
                </div>

                <div className="col-span-2">
                <span className="uppercase font-bold" style={{fontSize: '10px'}}>Attachment</span>
                    <select  className='select select-sm bg-white' value={state.bgposition.attachment} onChange={(e) => {
                        update(e.target.value,'bgposition.attachment','bgattachment');
                    }}>
                        <option value=""></option>
                        {state.bgattachments.map((attachment, index) => (
                            <option key={index} value={attachment}>{attachment.replace('bg-', '')}</option>
                        ))}

                    </select>
                </div>

                <div className="col-span-2">
                <span className="uppercase font-bold" style={{fontSize: '10px'}}>Clip</span>
                    <select  className='select select-sm bg-white' value={state.bgposition.clip} onChange={(e) => {
                        update(e.target.value,'bgposition.clip','bgpositionclip');
                    }}>
                        <option value=""></option>
                        {state.bgclips.map((clip, index) => (
                            <option key={index} value={clip}>{clip.replace('bg-', '')}</option>
                        ))}

                    </select>
                </div>
                <div className="">
                    <span className="uppercase font-bold" style={{fontSize: '10px'}}>Origin</span>
                    <select  className='select select-sm bg-white' value={state.bgposition.origin} onChange={(e) => {
                        update(e.target.value,'bgposition.origin','bgorigin');
                    }}>
                        <option value=""></option>
                        {state.bgorigin.map((origin, index) => (
                            <option key={index} value={origin}>{origin.replace('bg-', '')}</option>
                        ))}

                    </select>
                </div>
            </div>
        </div>
        </div>
    )
}
export default BgPosition;