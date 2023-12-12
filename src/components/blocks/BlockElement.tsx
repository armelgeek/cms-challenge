import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useGetter } from '../../store';
import _ from 'lodash';
import BlockImage from './components/BlockImage';

const BlockElement = (props: any) => {
  const editor = useGetter('editor', 'data', []);
  const editBlockContent = useDispatch('editor', 'editBlockContent');
  const [isEnter, setIsEnter] = useState(false);
  const refElement = useRef(null);
  const classes = () => {
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
  const getStyle = (block: any) => {
    let stl = {} as any;

    if (block.style !== '') {
      stl = block.style.split(';').reduce((acc: any, rule: any) => {
        const [property, value] = rule.split(':');
        if (property && value) {
          acc[property.trim()] = value.trim();
        }
        return acc;
      }, {});
    }
    if (block.font !== '') {
      stl['fontFamily'] = block.font;
    }

    return stl;
  };

  const toggleBorder = () => {
    if (isEnter && (editor.current && editor.current.id == props.element.id)) {
      return 'border-primary-500';
    } else {
      if (editor.current && editor.current.id == props.element.id) {
        return 'border-primary-500';
      } else {
        return 'border-transparent';
      }
    }
  }
  useEffect(() => {
    props.ajustCoords(props.element, refElement?.current?.offsetWidth);
  }, [props.element])
  const renderElement = () => {
    const commonProps = {
      ref: refElement,
      'style': getStyle(props.element),
      'id': props.element.id,
      className: `relative border  ${isEnter ? 'bg-primary-100' : 'bg-white'} ${classes()} ${toggleBorder()}`,
      onMouseEnter: (e: any) => {
        e.stopPropagation();
        setIsEnter(true);
      },
      onMouseLeave: (e: any) => {
        e.stopPropagation();
        setIsEnter(false);
      },
      onClick: (e: any) => {
        e.stopPropagation();
        props.setCurrent(props.element, refElement.current?.offsetWidth)
      }
    };
    const editableProps = {
      contentEditable: true,
      onBlur: (e: any) => {
        editBlockContent(e.currentTarget.textContent);
      }
    }
    switch (props.element.element) {
      case 'div':
        return <div {...commonProps}>{props.element.content}</div>;
      case 'img':
        return <BlockImage commonProps={commonProps} element={props.element} />;
      case 'p':
        return <p {...commonProps} {...editableProps}>{props.element.content}</p>;
      case 'h': {
        if (props.element.level == 1) return <h1 {...commonProps} {...editableProps}>{props.element.content}</h1>;
        if (props.element.level == 2) return <h2 {...commonProps} {...editableProps}>{props.element.content}</h2>;
        if (props.element.level == 3) return <h3 {...commonProps} {...editableProps}>{props.element.content}</h3>;
        if (props.element.level == 4) return <h4 {...commonProps} {...editableProps}>{props.element.content}</h4>;
        if (props.element.level == 5) return <h5 {...commonProps} {...editableProps}>{props.element.content}</h5>;
        if (props.element.level == 6) return <h6 {...commonProps} {...editableProps}>{props.element.content}</h6>;
      }
        break;
      case 'span':
        return <span {...commonProps} {...editableProps}>{props.element.content}</span>;
      case 'blockquote':
        return <blockquote {...commonProps} {...editableProps}>{props.element.content}</blockquote>;
      case 'pre':
        return <pre {...commonProps} {...editableProps}>{props.element.content}</pre>;
      case 'input': {
        let placeholder = !_.isUndefined(props.element.data) && !_.isUndefined(props.element.data.attributes) ? props.element.data.attributes.placeholder : 'Input';
        let name = !_.isUndefined(props.element.data) && !_.isUndefined(props.element.data.attributes) ? props.element.data.attributes.name : null;
        let id = !_.isUndefined(props.element.data) && !_.isUndefined(props.element.data.attributes) ? props.element.data.attributes.id : null;
        let required = !_.isUndefined(props.element.data) && !_.isUndefined(props.element.data.attributes) ? props.element.data.attributes.required : null;
        return <input type={props.element.type} placeholder={placeholder} name={name} required={required} {...commonProps} />;
      }

      case 'textarea':
        return <textarea {...commonProps}>{props.element.placeholder}</textarea>;
      case 'button':
        return <button type={props.element.tag} {...commonProps} className={'btn'}>{props.element.content}</button>;
      case 'video':
        return <video   {...commonProps} src={props.element.link}  {...props.element.options}>{props.element.content}</video>;
      
      case 'audio':
        return <audio   {...commonProps} src={props.element.link}  {...props.element.options}>{props.element.content}</audio>;
      case 'iframe':
        return (
          <iframe
            key={props.element.id}
            src={props.element.src + props.element.content}
            className={classes()}
            onClick={(e) => {
              e.stopPropagation();
              props.setCurrent(props.element, refElement.current)
            }}
            data-element-tag={props.element.tag}>
          </iframe>
        );
      case "article":
        return <article  {...commonProps} >{props.element.content}</article>;
      case "aside":
        return <aside  {...commonProps}>{props.element.content}</aside>;
      case "header":
        return <header  {...commonProps}>{props.element.content}</header>;
      case "figcaption":
        return <figcaption  {...commonProps} {...editableProps}>{props.element.content}</figcaption>;
      case "figure":
        return <figure  {...commonProps}>{props.element.content}</figure>;

      case "label":
        return <label  {...commonProps} {...editableProps}>{props.element.content}</label>;
      case "mark":
        return <mark  {...commonProps}>{props.element.content}</mark>;
      case "section":
        return <section  {...commonProps}>{props.element.content}</section>;
      case "summary":
        return <summary  {...commonProps}>{props.element.content}</summary>;
      case "time":
        return <time  {...commonProps} {...editableProps}>{props.element.content}</time>;
      case "details":
        return <details  {...commonProps}>{props.element.content}</details>;
      case "main":
        return <main  {...commonProps}>{props.element.content}</main>;
      case "footer":
        return <footer  {...commonProps}>{props.element.content}</footer>;
      case "a":
        return <a  {...commonProps}>{props.element.content}</a>;
      case "hr":
        return <hr  {...commonProps} />;
     
      case "option":
        return <option  {...commonProps} {...editableProps}>{props.element.content}</option>;
      default:
        return <div {...commonProps}>{props.element.content}</div>;
    }
  }

  return props.element ? renderElement() : null;
};

export default BlockElement;
