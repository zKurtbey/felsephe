import './Each.css'

export default function Each({item, length, index}){

    const {id, title, list, pic, span, hrefs} = item;

    return(

        <div className='philosophers' id={id}
        //  style={
        //     length > index + 1 ? {borderBottom: "1px solid #35383949"} : null
        // }
        >

            <div className='whois'>

                <h3>{title}</h3>

                <ul>

                    {list.map((item, index) => (

                        <li><strong>{item.title}:</strong>&nbsp;{item.description}</li>

                    ))}

                </ul>

            </div>

            <div className='picture'>

                <img src={pic} />

                <span>{span}&nbsp;{hrefs ? hrefs.map((item, index) => (<><a target='_blank' key={index} href={item.href}>{item.title}</a>{hrefs.length > index + 1 ? ", " : null}</>)) : null}</span>
            
            </div>

        </div>

    )

}