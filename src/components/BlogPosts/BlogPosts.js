import s from './blogpost.module.css'

const debug = [
    {
        title: 'how to train your dragon1',
        description:" some very long text some very long text some very long text some very long text",
        postedOn: 'Sep 15, 2034',
        link: ''

    },
    {
        title: 'how to train your dragon2',
        description:"some very long text some very long text some very long text some very long text ",
        postedOn: 'Sep 23, 2020',
        link: ''

    },
    {
        title: 'how to train your dragon3',
        description:" some very long text some very long text some very long text some very long text",
        postedOn: 'Sep 25, 2021',
        link: ''
    },
    
]

export default function BlogPosts({renderCount}) {


    return (
        <div className={s.container}>
            {
                debug.map( (item, index) => {
                    if(index < renderCount) {
                        return (
                            <div key={item.title} className={s.blogItem}>
                                <div className={s.blogCol}>
                                    <p className={s.title}>{item.title}</p>
                                    <p className={s.description}>{item.description}</p>
                                </div>
                                <div className={s.blogCol}>
                                    <p className={s.postedOn}>{item.postedOn}</p>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )

}