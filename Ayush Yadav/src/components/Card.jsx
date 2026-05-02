

const Card = (props) => {
  return (
          <div>
            <img src={props.img}/>
            <img src={props.img}/>
            <h1>Student React</h1>
            <h3>Student Name:{props.name}</h3>
            <h4>class: {props.class}</h4>
          </div>
        )
      }

export default Card