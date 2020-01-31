const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware
} = require("../middlewares/index");
const { CACHE_TIME } = require("../helpers/index");

module.exports = ({ UserController }) => {
  const router = Router();

  router.get(
    "/",
    [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CACHE_TIME.ONE_HOUR)],
    UserController.getAll
  );
  router.get("/:userId", UserController.get);
  router.patch("/:userId", AuthMiddleware, UserController.update);
  router.delete("/:userId", AuthMiddleware, UserController.delete);

  return router;
};
