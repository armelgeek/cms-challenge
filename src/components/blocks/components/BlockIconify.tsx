import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import icon from '../../../utils/api/icon';
import { useDispatch } from '../../../store';
const ScrollItem = memo(({ setInfos, item, index }: any) => {
    return (
        <div className="text-sm  lowercase suggestion-item" key={item + '--' + index} onClick={(e) => {
            
          setInfos(item);
          console.log('icon clicked', item);
        }}><span className="iconify-wrapper  text-2xl"><span className={`iconify`} data-icon={`${item}`}></span></span></div>
    )
}, (prevProps: any, nextProps: any) => prevProps.item === nextProps.item && prevProps.index === nextProps.index)
const ScrollableList = ({ items, containerRef, setInfos }: any) => {
    const [visibleItems, setVisibleItems] = useState(10);
    const [loading, setLoading] = useState(false);

    const handleScroll = useCallback(() => {
        const container = containerRef.current as any;

        if (container) {
            const scrolledToBottom =
                Math.round(container.scrollTop + container.clientHeight + 2) >= container.scrollHeight;
            if (scrolledToBottom && !loading && visibleItems < items.length) {
                setLoading(true);
                setTimeout(() => {
                    setVisibleItems((prevVisibleItems) => Math.min(prevVisibleItems + 10, items.length));
                    setLoading(false);
                }, 100);
            }
        }
    }, [loading, items])


    useEffect(() => {
        const container = containerRef.current as any;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, [containerRef, loading, visibleItems, items])

    const renderedItems = items.slice(0, visibleItems).map((item: any, index: any) => (
        <ScrollItem item={item} index={index} setInfos={setInfos} />
    ));

    return (
        <div className='grid grid-cols-5'>
            {renderedItems}
        </div>
    );
}
const BlockIconify = () => {
    const [items, setItems] = useState(['mdi:love', 'mingcute:love-fill', 'mingcute:love-line', 'mdi:book-love', 'mdi:book-love-outline', 'mdi:head-love', 'mdi:head-love-outline', 'mdi:find-love', 'mdi:love-seat', 'mdi:love-seat-outline', 'iconoir:user-love', 'icon-park-outline:oval-love', 'icon-park:oval-love', 'game-icons:evil-love', 'game-icons:love-howl', 'game-icons:love-song', 'game-icons:self-love', 'mdi:robot-love', 'mdi:robot-love-outline', 'openmoji:love-hotel', 'twemoji:love-hotel', 'noto:love-hotel', 'fluent-emoji:love-hotel', 'fluent-emoji-flat:love-hotel', 'fluent-emoji-high-contrast:love-hotel', 'noto-v1:love-hotel', 'emojione:love-hotel', 'emojione-monotone:love-hotel', 'emojione-v1:love-hotel', 'streamline-emojis:love-hotel', 'game-icons:royal-love', 'mdi:love-letter', 'openmoji:love-letter', 'twemoji:love-letter', 'noto:love-letter', 'fluent-emoji:love-letter', 'fluent-emoji-flat:love-letter', 'fluent-emoji-high-contrast:love-letter', 'noto-v1:love-letter', 'emojione:love-letter', 'emojione-monotone:love-letter']);
    const editBlockIcon = useDispatch('editor', 'editBlockIcon');
    //editBlockIcon
    const containerRef = useRef();
    const searchIcon = (e: any) => {
        
        if (e.key === 'Enter' && e.target.value.length > 2) {
            let requestObj = icon.iconFinder(e.target.value).promise;
            requestObj.then((response: any) => {
                console.log('icons',response.icons);
                setItems(response.icons || []);
            })
        }
    }
    return (
        <div className="flex flex-col w-full h-full items-start bg-bluegray-200">
            <span className="uppercase font-bold  my-2" style={{ fontSize: '10px' }}>Icon</span>
            <div className="tag-input-sg-container  w-full">
                <input type="text" className="w-full input-sm  rounded-md  border-gray-200 focus:outline-0 focus:shadow-none focus:focus-within:ring-0 text-sm" placeholder='Search Icon ...' onKeyDown={(e) => searchIcon(e)} />
                <div className="suggestions-container" ref={containerRef} style={{
                    display: items.length > 0 ? 'block' : 'none'
                }}>
                    <ScrollableList items={items} containerRef={containerRef} setInfos={editBlockIcon} />
                </div>
            </div>
        </div>
    )
}

export default BlockIconify;