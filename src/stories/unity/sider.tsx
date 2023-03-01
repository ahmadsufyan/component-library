import { Accordion } from 'stories/accordion';
import { AccordionItemProps } from 'stories/accordionItem';
import './sider.style.scss';

export interface SiderProps {
  type?: "left"|"right"
}

export const Sider:React.FC<SiderProps> = ({
  type
}) => {
  if(type === "left"){
    return(
     <Left/>
    )
  }else if(type === "right"){
    return(
      <Right/>
    )
  }
  return null
}

const Left:React.FC<SiderProps> = ({
}) => {
  return(
    <div className='w-[360px] h-screen bg-neutral-100 px-2 py-1 overflow-y-scroll'>
      <Accordion>
        <Accordion.Item
          id={"1"}
          title={"Welcome to Cloud Content Deliver (CCD)"}
        >
          <Accordion.Item id={"1-1"} title={"CCD interfaces"}/>
          <Accordion.Item id={"1-2"} title={"CCD organization"}/>
        </Accordion.Item>
        <Accordion.Item
          id={"2"}
          title={"CCD command-line interface (CLI)"}
        >
          <Accordion.Item id={"2-1"} title={"Getting started"}/>
          <Accordion.Item id={"2-2"} title={"CLI usage"}/>
          <Accordion.Item id={"2-3"} title={"CLI examples"}/>
          <Accordion.Item id={"2-4"} title={"Using CCD via the CLI"}/>
        </Accordion.Item>
        <Accordion.Item
          id={"3"}
          title={"CCD Management SDK"}
        >
          <Accordion.Item id={"3-1"} title={"Prerequisites"}/>
          <Accordion.Item id={"3-2"} title={"Installation"}/>
          <Accordion.Item id={"3-3"} title={"Getting started"}/>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

const Right:React.FC<SiderProps> = ({
}) => {
  const props = {
    suffixIcon: false,
    collapsible: false
  } as AccordionItemProps

  return(
    <div className='w-max h-screen pl-2 py-1 overflow-y-auto'>
      <Accordion traceTree={false}>
        <Accordion.Item
          id={"1"}
          title={"Welcome to Cloud Content Deliver (CCD)"}
          {...props}
        >
          <Accordion.Item id={"1-1"} title={"CCD interfaces"} {...props}/>
          <Accordion.Item
            id={"1-2"}
            title={"CCD organization"}
            {...props}
          >
            <Accordion.Item id={"1-2-1"} title={"Environments"} {...props}/>
            <Accordion.Item id={"1-2-2"} title={"Buckets"} {...props}/>
            <Accordion.Item id={"1-2-3"} title={"Entry"} {...props}/>
            <Accordion.Item id={"1-2-4"} title={"Release"} {...props}/>
            <Accordion.Item id={"1-2-5"} title={"Badge"} {...props}/>
          </Accordion.Item>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}