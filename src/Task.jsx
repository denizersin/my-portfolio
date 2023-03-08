import React, { useEffect } from 'react'
import { animate, AnimatePresence, motion } from 'framer-motion'
import { MdDoneOutline, MdOutlineDeleteOutline } from 'react-icons/md';


const taskLineVariants = (isDone) => (isDone ? {
    initial: {
        width: "0px",
    },
    animate: {
        width: '100%'
    },
    transition: {
        duration: .2,
        delay: .4
    }
} : {})

const taskVaroiants = () => ({
    initial: {
        y: -100,
    },
    animate: {
        y: 0,
    },
    transition: {
        duration: .4
    },
    exit:{
        backgroundColor:'red',
        color:'white'

    }
}
)



export default function Task({ data, setAllTaskData }) {

    console.log('s')
    useEffect(() => {
        console.log('mount')
    }, []);


    const handleDoneTask = (e) => {
        if (data.done) return;
        setAllTaskData(prev => ([{ ...data, done: true }, ...prev.filter(d => d.id != data.id)]))
    }
    const handleDeleteTask = (e) => {

        setAllTaskData(prev => {
            let n = prev.map(dt => {
                if (dt.id == data.id) {
                    return { ...data, remove: true }
                }
                return dt
            })
            setAllTaskData(n);

        })

        setTimeout(() => {
            setAllTaskData(prev => (prev.filter(d => d.id !== data.id)))
        }, 400);
    }

    //transform cakismasi laypout element parent'i dinledigi icin o an transform uygulayamayiz.

    return (
        <AnimatePresence >
            {!data.remove && (<motion.div
                layout
                exit={{
                    height:0,
                }}
                className={`hero w-full h-auto   overflow-hidden`}>
                    
                <motion.div
                    layout
                    {...taskVaroiants()}
                    className={`Task component overflow-visible w-full bg-neutral-100 border  h-max flex px-2 py-1 pl-4 cursor-pointer dark:bg-slate-500 `}>
                    <div onClick={handleDoneTask} className={`done px-5 hover:scale-125 hover:text-green-400 cursor-pointer ${data.done ? 'text-green-500' : ''}`}>
                        <MdDoneOutline className='task-text' />
                    </div>
                    <div className="task grow">
                        <div className="task-container task-text w-max relative task-text ">
                            {data.task}
                            <motion.div  {...taskLineVariants(data.done)} className={`done-line h-[4px]  bg-green-500 absolute center-y-non-static left:0 rounded-md  `}></motion.div>
                        </div>
                    </div>
                    <div onClick={handleDeleteTask} className="delete  hover:scale-125 hover:text-red-400 cursor-pointer">
                        <MdOutlineDeleteOutline className='task-text' />
                    </div>
                </motion.div>
            </motion.div>)
            }
        </AnimatePresence>
    )

}
