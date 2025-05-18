import { RingLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderWidth: "4px",
  borderColor: "#4B0082",
};
const Loader = ({ loading }) => {
  return (
      <div className="sweet-loading">
      <RingLoader
        color="#4B0082"
        loading={loading}
        cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
export default Loader;