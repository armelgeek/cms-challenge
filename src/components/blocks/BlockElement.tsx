import React, { useState, useEffect } from 'react';
import { useDispatch, useGetter } from '../../store';
import {element} from "prop-types";

const BlockElement = (props: any) => {
  const editor = useGetter('editor', 'data', []);
  const setInfo = useDispatch('editor', 'setInfo');

  const classe = () => {
    if (!editor.current && !props.element) {
      return
    }
    let cls = ''
    cls += props.element.css.css + ' ' + props.element.css.container
    cls += ' z-' + (parseInt(props.level) + 1)
    editor.current && editor.current.type === 'hidden' ?
      (cls += ' h-10 w-64 bg-gray-100 shadow') : null
    editor.current && editor.current.id === props.element.id ?
      cls += ' shadow' :
      cls += ' '
    return cls
  }
  const stile = () => {
    let st = ''
    if (props.element.image && props.element.image.url) {
      st += "background-image:url(" + props.element.image.url + ");"
    }
    // props?.element.font ? st += `font-family:"${this.element.font.replace('+',' ')}";` : null

    return st.replace('absolute', '') + props.element.style
  }
  const setEditable = () => {
    return editor.current && editor.current.id === props.element.id && props.element.editable ? true : false
  }
  const component = () => {
    if (!props.element) return null

    return props.element.hasOwnProperty('level') ? 'h' + props.element.level :
      props.element.element === 'grid' ? 'div' : props.element.element
  }
  const selector = () => {
    let cls = 'z-' + props.level
    if (editor.current && editor.current.id === props.element.id) {
      cls += ' shadow'
    } else {
      cls += ' '
    }
    return cls
  }
  console.log('typetype',props.element.element)
  const renderElement=()=>{
    const commonProps = {
      'data-id': props.element.id,
      'data-type': props.element.type,
      className: `relative ${classe()}`,
      onClick: () => setCurrent(props.element),
      contentEditable: props.element.editable,
      'data-element-tag': `${props.element.type}`,
      'data-icon': props.element.data && props.element.data.tag === 'iconify' ? props.element.data.icon : null,
    };

    switch (props.element.element) {
      case 'div':
        return <div {...commonProps}>{props.element.content}</div>;
      case 'img':
        return <img {...commonProps} src={props.element.content.src} alt={props.element.content.alt} />;
      case 'p':
        return <p {...commonProps}>{props.element.content}</p>;
      case 'h1':
        return <h1 {...commonProps}>{props.element.content}</h1>;
      case 'span':
        return <span {...commonProps}>{props.element.content}</span>;
      default:
        return <div {...commonProps}>{props.element.content}</div>;
    }
  }
  const setCurrent = (block: any) => {
    editor.current && editor.current.id === block.id ?
        setInfo({
          prop: 'current',
          value: null
        }) : setInfo({
          prop: 'current',
          value: block
        })


    /**
     * if ( this.editor.current && this.editor.current.id === block.id ){
     *                 this.$store.dispatch ( 'setCurrent' , null )
     *
     *                 this.$refs[block.id].blur()
     *                 return
     *             }
     *
     *             this.$refs[block.id].setAttribute ( 'contenteditable' , block.editable )
     *             this.$store.dispatch ( 'setCurrent' , block )
     *             this.$editorBus('floatingElement',block.id)
     *             let coords = this.$refs[this.element.id].getBoundingClientRect()
     *             this.element.coords = coords
     *
     * editor.current && !editor.current.image ?
     this.editor.current.image = { url: this.editor.current.image } : null
     **/
  }
  return props.element ? renderElement() : null;
};

export default BlockElement;
