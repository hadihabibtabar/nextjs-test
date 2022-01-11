import Link from 'next/link'
import Head from 'next/head'


export default function firstpost() {
    return (
        <>
            <Head>
                <title>لیست محصولات</title>
            </Head>
            <h1>shop</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>

            <ul>
                <li><Link href='/Shop/Product/4570'>محصول1</Link></li>
                <li><Link href='/Shop/Product/4571'>محصول2</Link></li>
                <li><Link href='/Shop/Product/4572'>محصول3</Link></li>
                <li><Link href='/Shop/Product/4573'>محصول4</Link></li>
                <li><Link href='/Shop/Product/4574'>محصول5</Link></li>
                <li><Link href='/Shop/Product/4575'>محصول6</Link></li>
            </ul>
        </>
    )
}
