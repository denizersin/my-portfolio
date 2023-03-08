import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'



export default function TaskForm({ isFormOpen, setAllTaskData }) {
    const [text, setText] = useState('');
    const handleAddTask = (e) => {
        setAllTaskData(prev => (
            [...prev, {
                id: prev.at(-1)?.id !== undefined ? (prev.at(-1).id + 1) : 0, task: text, done: false, remove: false
            }]
        ))
    }


    return (
        <>
            {

                <motion.div
                    className={`flex justify-between pr-2 overflow-hidden ${isFormOpen ? 'h-0' : 'h-max'}`}
                    layout  >
                    <div className="input-c w-[80%]  bg-transparent pl-2">
                        <input type="text" className='w-full h-full border-4 dark:bg-slate-400' value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div className='add-task w-12 h-10 border-2'>
                        <button
                            onClick={handleAddTask}
                            className="btn w-full h-full">+</button>
                    </div>
                </motion.div>}
        </>
    )
}
