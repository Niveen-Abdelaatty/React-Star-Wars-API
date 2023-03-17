import Card from 'react-bootstrap/Card';

function Starships({ starships }) {
  // console.log(starships.results.name);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {starships.results.map((e, index) => (
        <Card
          key={index}
          style={{
            width: '25rem',
            margin: '5px',
            backgroundColor: '#B2BEB5',
            textAlign: 'center',
          }}
        >
          <Card.Body>
            <Card.Title>{e.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{e.model}</Card.Subtitle>
            <Card.Text>
            {e.manufacturer}
        </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Starships;

//style={{ width: '20rem', margin: '5px' }}
