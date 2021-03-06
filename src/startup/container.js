const { createContainer, asValue, asClass, asFunction } = require("awilix");

// Config
const config = require("../config/index");
const app = require(".");

// Services
const {
  HomeService,
  UserService,
  IdeaService,
  CommentService,
  AuthService
} = require("../services/index");

// Controllers
const {
  HomeController,
  UserController,
  IdeaController,
  CommentController,
  AuthController
} = require("../controllers");

// Routes
const {
  HomeRoutes,
  IdeaRoutes,
  CommentRoutes,
  UserRoutes,
  AuthRoutes
} = require("../routes/index.routes");
const Routes = require("../routes/index");

// Models
const { User, Idea, Comment } = require("../models/index");

// Repositories
const {
  UserRepository,
  IdeaRepository,
  CommentRepository
} = require("../repositories/index");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    AuthService: asClass(AuthService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
  });

module.exports = container;
