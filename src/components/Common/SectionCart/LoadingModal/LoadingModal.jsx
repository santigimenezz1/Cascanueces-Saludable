import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function LoadingModal() {
  return (
    <Box sx={{ width: "100%", padding: "10px" }}>
      <LinearProgress color="success" style={{ width: "100%" }} />
    </Box>
  );
}
