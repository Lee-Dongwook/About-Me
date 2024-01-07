export const FrontendTechInfoComponent = ({ FE }) => {
  return (
    <>
      {FE.Language.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
      {FE.LibraryOrFramework.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
      {FE.Style.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
      {FE.Test.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
      {FE.Format.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      })}
    </>
  );
};
