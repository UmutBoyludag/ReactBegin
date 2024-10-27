export default function Pizza(props) {
  
  console.log(props);

    return (
      <div className='col'>
        <div className="card">
          <img src= {props.image} alt=""  className='card-img-top p-2 p-md-3 border-bottom'/>
          <div className="card-body">
            <h2 className='card-title'> {props.title} </h2>
            <p className='card-text'>{props.description}</p>
            <span className='badge text-bg-primary'>{props.price} TL</span>
          </div>
        </div>
      </div>
    );
  }