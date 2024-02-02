import Link from 'next/link'
import classes from './NavBar.module.css'



export default function NavBar(props){ 
    return <div className={classes.navBar}> 
        <h1>Meetups Site</h1> 
        <ul className={classes.list}> 
           <li> <Link  className={classes.link} href={`/`}> meetup list</Link></li>
           <li> <Link className={classes.link} href={`/new-meetup`}>add a meetup</Link></li>
        </ul>
    </div>
}