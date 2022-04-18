const control = {
  rootGet: (req, res) => {
    console.log(req);
    res.status(201).send("Hello from Home");
  },
  rootPost: (req, res) => {
    console.log(req);
    console.log(res);
    // res.status(201).send(`Hello ${req.body.username}`);
  },
};

module.exports = control;
