import {MongoClient} from 'mongodb';
import Head from 'next/head';
import MeetupEle from '../components/MeetupEle'; 
import { Fragment } from 'react';




 function Home(props) {
  const meetup=props.meetups;
  return <Fragment> 
<Head> 
  <title>meetups</title>
  <meta name='description' content='this is my first metadata'></meta>
</Head>
<div className={`mr-top flexCenter`}> 
  <ul className='flexCenter'> 
    { 
        meetup.map(ele => <MeetupEle key={ele.id} id={ele.id} title={ele.title} image={ele.image} address={ele.address} description={ele.description}> 

        </MeetupEle>)
    }
  </ul>
  </div>
  </Fragment>
}

export async function getStaticProps(){ 
  const user= await MongoClient.connect('mongodb+srv://m7mdjedi:5dBNAOsk6vgcjbEr@atlascluster.qasteah.mongodb.net'); 
  const db=user.db();
  const table= db.collection('meetups');  
  const response = await table.find().toArray(); 
  const data=response.map(ele => ({ 
     
      id:ele._id.toString(),
      title:ele.title,
      image:ele.image,
      address:ele.address,
      description:ele.description
     
  }));
  user.close();

 return { 

  props:{ 
   meetups:data,
  } , 
  revalidate:1
 };

}

export default Home;