// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log("api is triggered!");
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
