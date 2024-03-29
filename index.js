import express from "express"
// import { fileURLToPath } from "url"
// import { dirname, join } from "path"

// const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = process.env.PORT || 3000

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
