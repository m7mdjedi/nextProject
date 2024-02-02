import {MongoClient,ObjectId} from 'mongodb'
import { Fragment } from 'react';  
import Head from 'next/head';
import classes from '../components/meetupEle.module.css'

export default function DetailsPage(props){ 
 
    return <Fragment> 
                     <Head> 
  <title>{props.title}</title>
  <meta name='description' content='this is my first metadata'></meta>
</Head>
    <div className={`flexCenter mr-top`}> 
    <div className={classes.meetupItem}> 
        <div className={classes.imageDiv}>
            <img className={classes.image} src={`${props.image}`}></img>
        </div>
        <div className={classes.detailsDiv}> 
                <div className={classes.detailsTitle}>{props.title} </div>
                <div className={classes.detailsDescription}>{props.description} </div>
                <div className={classes.detailsAddress}>{props.address} </div>
        </div>
     
    </div>
    </div>
                </Fragment>

}
export async function getStaticPaths(){ 
    const user= await MongoClient.connect('mongodb+srv://m7mdjedi:5dBNAOsk6vgcjbEr@atlascluster.qasteah.mongodb.net'); 
    const db=user.db();
    const table= db.collection('meetups');  
    const response = await table.find().toArray(); 
    const dynamicPaths= response.map(ele =>( 
        { 
            params:{ 
                id_details:ele._id.toString(),
            }
        }
    ))
    return { 
        paths:dynamicPaths
        , fallback:'blocking',
    }
}
export async function getStaticProps(context){ 
const meetupId=context.params.id_details;
const user= await MongoClient.connect('mongodb+srv://m7mdjedi:5dBNAOsk6vgcjbEr@atlascluster.qasteah.mongodb.net'); 
const db=user.db();
const table= db.collection('meetups');  
const response = await table.findOne({_id:new ObjectId(meetupId)});
const id=response._id.toString();
    return{ 
            props:{ 
                id,
                title:response.title,
                image:response.image,
                address:response.address,
                description:response.description,
            }
    }
}