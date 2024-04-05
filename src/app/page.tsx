import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-8">
      <Box className="mb-8">
        <Typography variant="h1">Focus on the flavors.</Typography>
        <Typography color="primary" variant="subtitle1" className="mb-8">
          Leave the rest to us.
        </Typography>
      </Box>
      <Typography>
        Give us your meal plan, and from that, we&apos;ll give you:
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        href="/store"
      >
        Plan a store trip
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        href="/meal-prep"
      >
        Meal prep for the week
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        component={Link}
        href="/alternatives"
      >
        Get alternatives for recipes
      </Button>
    </div>
  );
}
