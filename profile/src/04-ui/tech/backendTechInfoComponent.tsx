export const BackendTechInfoComponent = ({ BE }) => {
  return (
    <>
      {BE.Language.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </>
  );
};
