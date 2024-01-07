export const CommunicationTechInfoComponent = ({ Communication }) => {
  return (
    <>
      {Communication.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </>
  );
};
