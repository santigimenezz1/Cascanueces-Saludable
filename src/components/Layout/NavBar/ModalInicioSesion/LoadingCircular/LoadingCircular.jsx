import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../LoadingCircular/loadingCircular.css";

export default function LoadingCircular() {
  return (
    <div className="loading__circular">
      <CircularProgress color="secondary" />
    </div>
  );
}
