import { animate, AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import Task from './Task'





export default function Tasks({ currTasksData, setAllTaskData }) {
    console.log(currTasksData)
    return (
        <motion.div
            layout
            transition={{
                duration:.4
            }}
            className={'Tasks min-h-[1px]  h-auto gap-2 border-b-4 overflow-hidden p-2'}>
            {currTasksData?.map(data => (
                <Task key={data.id} data={data} setAllTaskData={setAllTaskData} />
            ))}
        </motion.div>
    )
}
