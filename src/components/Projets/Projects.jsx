import React from 'react'




const projects = [
    {
        name: 'full-stack-chat-app',
        imageURL: '',
        code: '',
        live: '',
        preview: ''
    },
    {
        name: 'realtime-full-stack-chat-app',
        imageURL: '',
        code: '',
        live: '',
        preview: ''
    },
    {
        name: 'full-stack-chat-app',
        imageURL: '',
        code: '',
        live: '',
        preview: ''
    },
    {
        name: 'full-stack-chat-app',
        imageURL: '',
        code: '',
        live: '',
        preview: ''
    }
]



export default function Projects() {
    return (
        <div className='projects flex flex-col  '>
            <div className="title text-4xl">Projects</div>
            <div className={'Projects flex flex-wrap gap-4 justify-center sm:justify-start'}>
                {projects.map(data => (
                    <div className='project grow border-2 h-max sm:w-80 p-2'>
                        <div className="image">
                            <img src="bw.jpg" alt="" />
                        </div>
                        {data.name}
                        <div className="menu flex gap-1">
                            <a href="">live</a><a href="">code</a><a href="">preview</a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
