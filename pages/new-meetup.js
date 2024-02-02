
import classes from "../components/global.module.css";
import { useRef } from "react";
function Newmeetup(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const data = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      address: addressRef.current.value,
      description: descRef.current.value
    };
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data), 
      headers:{ 
        'Content-type': 'application/json'
      }
    });
    const message=await response.json(); 
    console.log(message);
  };
  return (
    <div className={`mr-top flexCenter`}>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.divInput}>
          <label>
            <h3 className={classes.label}> meetup title</h3>
          </label>
          <input ref={titleRef} className={classes.input}></input>
        </div>
        <div className={classes.divInput}>
          <label>
            <h3 className={classes.label}> meetup Image</h3>
          </label>
          <input ref={imageRef} className={classes.input}></input>
        </div>
        <div className={classes.divInput}>
          <label>
            <h3 className={classes.label}> discreption</h3>
          </label>
          <input ref={descRef} className={classes.input}></input>
        </div>
        <div className={classes.divInput}>
          <label>
            <h3 className={classes.label}> address</h3>
          </label>
          <input ref={addressRef} className={classes.input}></input>
        </div>
        <div className={classes.buttonDiv}>
          <button className={classes.button}>add meetup</button>
        </div>
      </form>
    </div>
  );
}

export default Newmeetup;
