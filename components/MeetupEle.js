
import classes from './meetupEle.module.css'
import {useRouter} from 'next/router'
function MeetupEle(props){ 
    const router =useRouter();
    const onClickHandler = (event)=>{ 
            router.push(`/${props.id}`);
    }
    return <div className={classes.meetupItem}> 
        <div className={classes.imageDiv}>
            <img className={classes.image} src={`${props.image}`}></img>
        </div>
        <div className={classes.detailsDiv}> 
                <div className={classes.detailsTitle}>{props.title} </div>
                <div className={classes.detailsDescription}>{props.description} </div>
                <div className={classes.detailsAddress}>{props.address} </div>
        </div>
        <div className={classes.detailsDiv} > 
                <button className={classes.btnDetails} onClick={onClickHandler}>more details</button>
        </div>
    </div>
} 
export default MeetupEle;