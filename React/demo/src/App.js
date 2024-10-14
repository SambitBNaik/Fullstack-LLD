import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Navbar from './Components/Navbar';
import MainContainer from './Components/MainContainer';
import Footer from './Components/Footer';
import Counter from './Components/Counter';
import Product from './Components/Product';
import Form from './Components/Forms/Form';
import EffectHook from './Components/Effect/EffectHook';


function App() {
  const products =[{
    id:'1',
    heading: 'Completely Synergize',
    description:` Dramatically engage seamlessly visualize quality intellectual
    capital without superior collaboration and idea-sharing.`,
    buttonTile:`Here's how`,
    imageURL:"https://plus.unsplash.com/premium_photo-1666863910470-c5906f963cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fHx8MTY4NjkzNjgyOHwx&ixlib=rb-4.0.3&q=80&w=1080",
},
{
    id:'2',
    heading: 'Completely Synergize-2',
    description:` Dramatically engage seamlessly visualize quality intellectual
    capital without superior collaboration and idea-sharing.`,
    buttonTile:`Here's how`,
    imageURL:"https://plus.unsplash.com/premium_photo-1666863910470-c5906f963cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fHx8MTY4NjkzNjgyOHwx&ixlib=rb-4.0.3&q=80&w=1080",
},
{
    id:'3',
    heading: 'Completely Synergiz-3',
    description:` Dramatically engage seamlessly visualize quality intellectual
    capital without superior collaboration and idea-sharing.`,
    buttonTile:`Here's how`,
    imageURL:"https://plus.unsplash.com/premium_photo-1666863910470-c5906f963cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fHx8MTY4NjkzNjgyOHwx&ixlib=rb-4.0.3&q=80&w=1080",
},
{
  id:'4',
  heading: 'Completely Synergiz-3',
  description:` Dramatically engage seamlessly visualize quality intellectual
  capital without superior collaboration and idea-sharing.`,
  buttonTile:`Here's how`,
  imageURL:"https://plus.unsplash.com/premium_photo-1666863910470-c5906f963cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fHx8MTY4NjkzNjgyOHwx&ixlib=rb-4.0.3&q=80&w=1080",
},
{
  id:'5',
  heading: 'Completely Synergiz-3',
  description:` Dramatically engage seamlessly visualize quality intellectual
  capital without superior collaboration and idea-sharing.`,
  buttonTile:`Here's how`,
  imageURL:"https://plus.unsplash.com/premium_photo-1666863910470-c5906f963cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fHx8MTY4NjkzNjgyOHwx&ixlib=rb-4.0.3&q=80&w=1080",
},
{
  id:'6',
  heading: 'Completely Synergiz-3',
  description:` Dramatically engage seamlessly visualize quality intellectual
  capital without superior collaboration and idea-sharing.`,
  buttonTile:`Here's how`,
  imageURL:"https://plus.unsplash.com/premium_photo-1666863910470-c5906f963cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fHx8MTY4NjkzNjgyOHwx&ixlib=rb-4.0.3&q=80&w=1080",
}
];
  return (
    <div id="parent" className="App">
    {/* <div id="child"> */}
      {/* <h1 id="greeting">Hello From React</h1>
      <h1 id="greeting1">Hello From React-1</h1> */}
    {/* </div> */}
    <Heading/>
    <Navbar/>
    <MainContainer/>
    <Footer/>
    {/* <Counter/>
    <Counter/>
    <Counter/> */}
    {/* <Product products={products}/>
    <Form /> */}
    <EffectHook/>
  </div>
  );

}
export default App;
