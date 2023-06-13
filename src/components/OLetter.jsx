import { useSpring, useTransform, motion } from 'framer-motion';
import React from 'react'
import { TbCodeCircle2 } from 'react-icons/tb';

export default function OLetter({ sc1Progress, cs }) {
    let rotate = useTransform(sc1Progress, [0,1],[0, 420])
    rotate = useSpring(rotate, {stiffness:100,damping:30});
    return (
        <motion.span
            className={`border-2 border-dotted border-white h-max w-max  inline-flex items-center justify-center rounded-full ` + cs}
            style={{
                rotate: rotate
            }}

        >
            <TbCodeCircle2 className='max-sm:text-[25px] max-lg:text-[45px] max-xl:text-[45px] text-[60px]' />

        </motion.span>
    )
}
