import React from "react";
import Link from 'next/link';
import {useRouter} from 'next/router';
import Head from 'next/head';


 const product= ()=>{
     const router=useRouter();
    
     return(
         
         <div style={{border: '1px solid black'}}>
             <Head>
                 <title>product {router.query.pname}</title>
             </Head>
             <h1>product {router.query.pname} </h1>

             <h2>
            <Link href="/Shop/">
                <a>Back to Shop</a>
                </Link>
                </h2>


                <style jsx>
                    {`
                     h1 {
                         color:blue;
                         background-color:yellow;
                     }
                    
                    `}

                </style>
         </div>
     );
 };
 export default product;