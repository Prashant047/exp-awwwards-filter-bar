import * as Tabs from '@radix-ui/react-tabs';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { ReactNode, createContext, useContext, useState } from 'react';
import { motion } from 'framer-motion';

const FilterContext = createContext({});

function FilterContextProvider({children}:{children:ReactNode}){
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState('');

  const data = {
    expanded,
    setExpanded,
    active,
    setActive
  };

  return (
    <FilterContext.Provider value={data}>
      { children }
    </FilterContext.Provider>
  )
}

function useFilterBar(){
  const {
    // @ts-ignore
    expanded,
    // @ts-ignore
    setExpanded,
    // @ts-ignore
    active,
    // @ts-ignore
    setActive
  } = useContext(FilterContext);
  return {
    expanded,
    setExpanded,
    setActive,
    active
    
  }
}

function App(){
  return (
    <FilterContextProvider>
      <FilterBar/>
    </FilterContextProvider>
  )
}

function FilterBar() {
  
  const { active, expanded, setActive, setExpanded} = useFilterBar();

  return (
    <div 
      className="fixed flex items-center justify-center bottom-8 left-0 right-0"
    >
      <div className='border p-1 rounded-lg w-[600px] bg-neutral-500/90'>
        <div
          onMouseLeave={() => {
            setExpanded(false);
            setActive('');
          }}
        >
          <Tabs.Root value={active} onValueChange={(value) => setActive(value)}>
            <motion.div
              initial={{height:0}}
              animate={{height: expanded?'auto':0}}
              transition={{duration:0.1}}
              className='overflow-hidden'
            >
              <TabContent value='awards'>
                awards
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
              </TabContent>
              <TabContent value='popular'>
                popular
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
              </TabContent>
              <TabContent value='countries'>
                countries
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
              </TabContent>
              <TabContent value='font'>
                font
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
              </TabContent>
              <TabContent value='color'>
                color
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, distinctio nesciunt? Fugit a ducimus voluptate soluta, itaque adipisci eligendi cumque odio eos dolores? Provident facere nulla magnam distinctio, omnis cum.
                </p>
              </TabContent>
            </motion.div>
            <Tabs.List 
              className='flex overflow-hidden rounded-md px-2 bg-neutral-700'
              // onMouseLeave={() => {
              //   setExpanded(false);
              //   setActive('');
              // }}
            >
              <span
                className='flex-1 flex items-center justify-center text-neutral-200 text-xs border-r border-neutral-800'
              >Filters</span>
              <TabTrigger value='awards'>
                Awards
              </TabTrigger>
              <TabTrigger value='popular'>
                Popular
              </TabTrigger>
              <TabTrigger value='countries'>
                Countries
              </TabTrigger>
              <TabTrigger value='font'>
                Font
              </TabTrigger>
              <TabTrigger value='color'>
                Color
              </TabTrigger>
            </Tabs.List>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
}

function TabTrigger({
  children, 
  value,
}:{
  children:ReactNode, 
  value: string,
}){
  
  const {setExpanded} = useFilterBar();
  
  return (
    <Tabs.Trigger
      className={`group flex-1 flex items-center justify-center gap-2 py-4 text-neutral-200 bg-neutral-700 font-light text-sm data-[state=active]:bg-neutral-900
        border-r border-neutral-800 last:border-none
      `}
      value={value}
      onClick={() => setExpanded(true)}
    >
      <span>{children}</span>
      <span className='group-data-[state=active]:rotate-180 transition'>
        <ChevronDownIcon/>
      </span>
    </Tabs.Trigger>
  )
}

function TabContent({children, value}: {children:ReactNode, value: string}){
  return (
    <Tabs.Content 
      className={`p-10 text-sm mb-1 bg-neutral-800 text-neutral-200 rounded-md`}
      value={value}
    >
      {children}
    </Tabs.Content>
  )
}


export default App

