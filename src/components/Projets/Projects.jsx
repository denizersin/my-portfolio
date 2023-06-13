import classNames from 'classnames'
import React from 'react'




const projects = [
    {
        name: 'twitter clone',
        techs: ['#next', '#react', '#tailwind', '#react-query', '#mysq', 'next-auth'],
        displayUrl: 'https://www.youtube.com/embed/1EwvgZ-Lx0k',
        code: 'https://github.com/denizersin/twitter-clone-next',
        live: '',
        preview: '',
        displayType: 'video'
    },
    {
        name: 'realtime full stack chat app',
        displayUrl: 'https://www.youtube.com/embed/pLerTzrwn8Q',
        techs: ['react', 'scss', 'redux', 'firebase', 'firebase-auth'],

        code: 'https://github.com/denizersin/react-chat-app',
        live: '',
        preview: '',
        displayType: 'video'
    },
    {
        name: 'instagram clone',
        displayUrl: 'https://www.youtube.com/embed/S2qmQ80-Xdc',
        techs: ['react', 'scss', 'redux', 'firebase', 'firebase-auth', 'firebase storage'],
        code: '',
        live: '',
        preview: '',
        displayType: 'video'
    },
    {
        name: 'responsive news home page design',
        displayUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/v65airxgaon8ew5b5dvw.jpg',
        techs: ['javascript', 'tailwind', 'css'],
        code: 'https://github.com/denizersin/frontend-mentor-challenges/tree/master/news-homepage-main',
        live: 'https://647fa197b45fb67990840517--resilient-mandazi-5b0c49.netlify.app/',
        displayType: 'image'
    },
    {
        name: 'responsive e-commerce page design',
        displayUrl: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_900/Screenshots/xibhvihvqu7rg0yulukn.jpg',
        techs: ['javascript', 'tailwind', 'css'],
        code: 'https://github.com/denizersin/frontend-mentor-challenges/tree/master/ecommerce-product-page-main',
        live: 'https://mellifluous-tiramisu-364063.netlify.app/',
        displayType: 'image'
    },
]

const Display = ({ displayType, className,...props }) => {
    if (displayType == 'image') {
        return (<img className={className} {...props} />)
    }
    else if (displayType == 'video') {
        return (<iframe className={className+' min-h-[300px]'} {...props} ></iframe>)
    }
}


export default function Projects(props) {


    return (
        <div className='projects flex flex-col  '>
            <div className="title text-4xl max-sm:text-2xl py-6 max-sm:py-4 max-sm:text-center">Projects</div>
            <div className={'Projects flex flex-wrap gap-8  '}>
                {projects.map(data => {
                    return (
                        <div className='project   card rounded-3xl grow border-gray-500/70 border p-4 w-[30%] min-w-[340px] max-sm:w-full min-h-[200px] flex flex-col gap-2'>
                            <div className="display w-full  ">
                                <Display displayType={data.displayType}
                                    src={data.displayUrl}
                                    className={" w-full  rounded-xl"} />
                            </div>
                            <div className="w-full text-lg py-2 ">{data.name} </div>
                            <div className="w-full flex flex-wrap gap-2">
                                {data?.techs.map(tech => (
                                    <span className='tech rounded-full  py-1 mr-2   text-gray-300'>{tech}</span>
                                ))}
                            </div>
                            <div className="menu flex gap-1 w-full self-end mt-auto max-sm:mt-0">
                                <a className={classNames(`btn2 px-7 py-[6px] rounded-full mr-2  `,
                                    { '!text-red-800': data.live })}
                                    href={`${data.live||'#'}`} target={data.live&&'_blank'} >live</a>  <a className='btn2 px-7 py-[6px] rounded-full' href={`${data.code}`} target="_blank">
                                    {`</code>`} </a>
                            </div>
                        </div>)
                })}

            </div>
        </div>
    )
}
