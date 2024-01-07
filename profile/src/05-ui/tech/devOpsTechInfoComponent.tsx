export const DevOpsTechInfoComponent = ({ DevOps }) => {
  return (
    <>
      {DevOps.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </>
  );
};
