import './App.css';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
// import Card from "./components/Card"
// import Footer from "./components/Footer"
 

const fetchRandomPerson = async () => {
  const response = await fetch("https://randomuser.me/api/")
  const data = await response.json()
  let rawData = data['results'][0]
  let rawName = rawData['name']
  let name = rawName['first'] + ' ' + rawName['last']
  let title = "Life Lessons with " + name
  let picture = rawData['picture']['medium']
  let price = rawData['dob']['age']
  let reviewCount = rawData['registered']['age']
  let filteredData = {img:picture, title:title, price:price, rating:5, reviewCount:reviewCount, country:rawData['nat']}
  return await filteredData;
}

console.log(fetchRandomPerson())

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Card props="fetchRandomPerson()"> */}

    </div>
  );
}

export default App;
