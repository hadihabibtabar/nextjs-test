import React from 'react';
import Link from 'next/link';
import axios from 'axios';

const Index = ({ posts }) => {

  return (
    <div>
      <ul>
        {posts.map(post => <li key={post.id}><Link href={"/Posts/" + post.id}><a>{post.title}</a></Link></li>)}
      </ul>
    </div>
  );

};


export async function getStaticProps() {


  const response = await axios.get('http://localhost:3001/posts')

  return {
    props: {
      posts: response.data,
    },
  }
};

export default Index;