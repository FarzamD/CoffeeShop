import React from 'react';


// export default class Page extends React.Component {
// render(){return(
//     <body>
//         <Navbar/>
//             <div className='page__body'>{props.children}</div>
//         <Footer/>
//     </body>
// );
// }
// }
const Page= (props)=>(
    <div>
        <div className='page__body'>{props.children}</div>
    </div>
)
export default Page;