import { DatePicker, Card } from 'antd';
import "./App.scss"

function App() {

  const test = (date, dateString) => {
    console.log(date);
  }

  return (
    <div className="app">
      <h1>Web Personal - Client</h1>
      <h2>Proyecto</h2>
      <DatePicker onChange={test}/>
      <Card
        title="Card with Ant Design"
        style={{
          width: 300,
        }}
      >
        <p>Card 1</p>
        <p>Card 2</p>
        <p>Card 3</p>
      </Card>
    </div>
  );
}

export default App;
