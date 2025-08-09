import * as SC from "./LoadingStyled"

const Loading: React.FC = () => {
  return (
    <SC.LoadingCon className="loading-container">
      <div className="dna-spinner">
        {[...Array(6)].map((_, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}></span>
        ))}
      </div>
      <p>...is Loading</p>
    </SC.LoadingCon>
  );
};
 
export default Loading;