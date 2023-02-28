import React, { useEffect, useState } from 'react';
import { AccordionItem } from 'stories/accordionItem';
import './style.scss';

export interface AccordionProps {
  traceTree?: boolean
  children: React.ReactNode,
}

interface Extended {
  Item: typeof AccordionItem
}

export const Accordion: React.FC<AccordionProps> & Extended = ({
  traceTree = true,
  children,
}: AccordionProps) => {
  const [array, setArray] = useState<React.ReactNode>()
  const [activeKey, setActiveKey] = useState<string>()
  const [activeTree, setActiveTree] = useState<string[]>([])

  function injectPropsToChildren(children:React.ReactNode){
    const views:any = React.Children.map(children, (element) => {
      if(React.isValidElement(element)){
        const props = element.props
        return (
          React.cloneElement(
            element,
            {
              onActive: (id:string) => {
                setActiveKey(id)
              },
              suffixIcon: props.suffixIcon ?? !!React.Children.count(props.children),
              isActive: activeTree.indexOf(props.id) !== -1
            } as any,
            injectPropsToChildren(props.children))
        );
      }
      return element
    })
    return views
  }

  // Track parent into leaf for active item
  function trackActiveTree(data:React.ReactNode[]){
    let obj:string[] = []
    for(let child of data ){
      if(React.isValidElement(child)){
        const props = child.props
        if(props.children){
          obj = trackActiveTree(React.Children.toArray(props.children))
        }
        if(obj.length){
          obj.push(props.id)
          return obj
        }else{
          if(props.id === activeKey) {
            return [activeKey ?? ""]
          }
        }
      }
    }
    return obj
  }

  useEffect(() => {
    if(!activeKey) return
    if(traceTree){
      const newActiveTree = trackActiveTree(React.Children.toArray(children))
      setActiveTree(newActiveTree)
    }else{
      setActiveTree([activeKey])
    }
  }, [activeKey, traceTree])

  useEffect(() => {
    const newArray = injectPropsToChildren(children)
    setArray(newArray)
  }, [children, activeTree, traceTree])

  return (
    <div className='w-[300px]'>
      {array}
    </div>
  );
};
Accordion.Item = AccordionItem