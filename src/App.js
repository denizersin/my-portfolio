import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import TaskForm from './TaskForm'
import Tasks from './Tasks'







const initialTaskData = [
  {
    id: 0,
    task: 'to-do1',
    done: false,
    remove: false
  },
  {
    id: 1,
    task: 'to-do2',
    done: false,
    remove: false
  }
  , {
    id: 2,
    task: 'to-do3',
    done: false,
    remove: false
  }
]

export default function App() {
  const [currTasksData, setCurrTasksData] = useState(null);
  const [allTasksData, setAllTaskData] = useState(initialTaskData);
  const [currMenu, setCurrMenu] = useState('all');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [darkToggle, setDarkToggle] =useState(false)
  // return (
  //   <div
  //     class={`h-screen w-full flex items-center justify-center bg-gray-300 flex-col ${
  //       darkToggle && 'dark'
  //     }`}
  useEffect(() => {
    if (currMenu == 'all') setCurrTasksData(allTasksData);
    if (currMenu == 'completed') setCurrTasksData(allTasksData.filter(data => data.done))
    if (currMenu == 'uncompleted') setCurrTasksData(allTasksData.filter(data => !data.done))
  }, [allTasksData]);

  useEffect(() => {
    setAllTaskData([...allTasksData])
  }, [currMenu]);



  console.log(darkToggle)
  return (
    <>
      <div className={`home-layout w-full   flex justify-center overflow-hidden dark:bg-slate-400 dark:text-white ${darkToggle && 'dark-mode dark'}`}>
        <motion.div
          transition={{
            duration: .2
          }}
          layout className="content bg-slate-100  min-h-[120vh] dark:bg-slate-700">
          <Header currMenu={currMenu} setCurrMenu={setCurrMenu} setAllTaskData={setAllTaskData} isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} setDarkToggle={setDarkToggle} />
          <TaskForm isFormOpen={isFormOpen} setAllTaskData={setAllTaskData} />
          <Tasks currTasksData={currTasksData} setAllTaskData={setAllTaskData} currMenu={currMenu} />
        </motion.div>
      </div>
    </>
  )
}


