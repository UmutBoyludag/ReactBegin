import Pizza from "./Pizza";

export default function PizzaList() {


  const pizzaObj = {
    title : "Karışık Pizza",
    description :  "Süper nefis pizza",
    image : "/img/pizza1.jpg",
    price : 300
  };
    


    return (
      <div className='pizza-list'>
        <h2>Pizza List</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
          <Pizza title= "pizza 1"  description="Süper nefis pizza" image="/img/pizza1.jpg" price="300"/>
          <Pizza title= "pizza 2"  description="Süper nefis pizza" image="/img/pizza1.jpg" price="400"/>
        </div>
      </div>
    );
  }