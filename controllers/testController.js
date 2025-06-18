export const testPostController = async (req, res, next) => {
      const {name} = req.body;

    res.status(200).send (`Hello ${name}`);
}