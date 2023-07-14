const Collections = () => {
  return (
    <div>
      Collections
      <Card name="Whatever" />
    </div>
  );
};

const Card = ({ name }) => {
  return <div>{name}</div>;
};

export default Collections;
