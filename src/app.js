import expres from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = expres();

//middleware implementaion
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    //credentials:ture
  }),
);

app.use(expres.json({ limit: "16kb" })); //file
app.use(expres.urlencoded({ extended: true, limit: "16kb" })); //url
app.use(expres.static("public")); // store public file inside the public folder
app.use(cookieParser); // cookie

export { app };
