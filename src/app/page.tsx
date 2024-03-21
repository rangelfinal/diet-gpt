import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 ">
      <Button variant="outlined" color="primary" component={Link} href="/store">
        Plan a store trip
      </Button>
      <Button
        variant="outlined"
        color="primary"
        component={Link}
        href="/meal-prep"
      >
        Create a meal prep for the week
      </Button>
      <Button
        variant="outlined"
        color="primary"
        component={Link}
        href="/alternatives"
      >
        Get alternatives for recipes
      </Button>
    </div>
  );
}
