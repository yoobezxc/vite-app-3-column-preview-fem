import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <main className="my-10 flex min-h-screen flex-col items-center justify-center lg:flex-row">
        <Card title="sedans" index="0" color="orange" position="first"></Card>
        <Card title="suvs" index="1" color="darkCyan" position="mid"></Card>
        <Card
          title="luxury"
          index="2"
          color="veryDarkCyan"
          position="last"
        ></Card>
      </main>
    </>
  );
}

export default App;
