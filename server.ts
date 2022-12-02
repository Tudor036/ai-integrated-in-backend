import app from "./src/app";
import { config } from "dotenv";

config({ path: ".env" });

const PORT = process.env.DEV_PORT || 9000;

app.listen(PORT, () => {
    console.log(`App live on port ${PORT}`);
})