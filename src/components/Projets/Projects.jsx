import React from 'react'




const projects = [
    {
        name: 'full-stack-chat-app',
        displayUrl: 'https://www.youtube.com/embed/1EwvgZ-Lx0k',
        code: '',
        live: '',
        preview: '',
        displayType: 'video'
    },
    {
        name: 'realtime-full-stack-chat-app',
        displayUrl: 'https://www.youtube.com/embed/1EwvgZ-Lx0k',

        code: '',
        live: '',
        preview: '',
        displayType: 'video'
    },
    {
        name: 'full-stack-chat-app',
        displayUrl: 'https://www.youtube.com/embed/1EwvgZ-Lx0k',

        code: '',
        live: '',
        preview: '',
        displayType: 'video'
    },
    {
        name: 'full-stack-chat-app',
        displayUrl: 'https://www.youtube.com/embed/1EwvgZ-Lx0k',

        code: '',
        live: '',
        preview: '',
        displayType: 'video'
    }
]

const Display = ({ displayType, ...props }) => {
    if (displayType == 'image') {
        return (<img {...props} />)
    }
    else if (displayType == 'video') {
        return (<iframe {...props} ></iframe>)
    }
}


export default function Projects(props) {


    return (
        <div className='projects flex flex-col  '>
            <div className="title text-4xl">Projects</div>
            <div className={'Projects flex flex-wrap gap-4 max-sm:justify-around'}>
                {projects.map(data => {
                    return (
                        <div className='project  border-2   p-2 w-[30%] min-w-[340px]  '>
                            <div className="display w-full">
                                <Display displayType={data.displayType}
                                    src={data.displayUrl}
                                    className={"border w-full"} />
                            </div>
                            <div className="w-full">{data.name}</div>
                            <div className="menu flex gap-1 w-full">
                                <a href="">live</a><a href="">code</a><a href="">preview</a>
                            </div>
                        </div>)
                })}

            </div>
        </div>
    )
}
