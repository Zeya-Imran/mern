const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//  const asycHandler = (n) => {} // normal function

//  const asycHandler = (func) => () => {} // higher order function

//  const asycHandler = (func) => async () => {} // // higher order fun wiht async

/*
* ---handle this concept wth async and await

const asycHandler = (fn) => async (req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status({
            success:false,
            message:error.message
        })
    }
}
*/
