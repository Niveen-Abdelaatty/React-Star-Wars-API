function Starships({ starships }) {
  // console.log(starships.results.name);

  return <div>
    {starships.results.map((e) => e.name)}
    </div>;
}

export default Starships;
