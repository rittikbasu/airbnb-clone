import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
 
// let cardArr = []
// const fetchRandomPerson = async () => {
//   for (let i = 0; i < 3; i++) {
//     let response = await fetch("https://randomuser.me/api/")
//     let data = await response.json()
//     let rawData = data['results'][0]
//     let rawName = rawData['name']
//     let name = rawName['first'] + ' ' + rawName['last']
//     let title = "Life Lessons with " + name
//     let picture = rawData['picture']['medium']
//     let price = rawData['dob']['age']
//     let reviewCount = rawData['registered']['age']
//     // cardArr.push(<Card img={picture} title={title} price={price} rating={5} reviewCount={reviewCount} country={rawData['nat']} />)
//     cardArr.push({img:picture, title:title, price:price, rating:5, reviewCount:reviewCount, country:rawData['nat']})
//   }
// }


// fetchRandomPerson()  

// const cardElements = cardArr.map(data => {
//   return (
//   <Card 
//   img={data.img} title={data.title} price={data.price} rating={data.rating} reviewCount={data.reviewCount} country={data.country} 
//   />
//   )
// })

function App() {
  const cards = data.map(item => {
    return (
      <Card 
      img={item.coverImg} 
      title={item.title} 
      price={item.price} 
      rating={item.stats.rating} 
      reviewCount={item.stats.reviewCount} 
      country={item.location} 
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
