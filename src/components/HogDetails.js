function HogDetails({ hog }) {
  return (
    <div>
      <div>{hog.specialty}</div>
      <div>
        {hog.greased
          ? `${hog.name} is greased!`
          : `${hog.name} is not greased!`}
      </div>
      <div>Weight: {hog.weight}</div>
      <div>Highest Medal Achieved: {hog["highest medal achieved"]}</div>
    </div>
  );
}

export default HogDetails;
