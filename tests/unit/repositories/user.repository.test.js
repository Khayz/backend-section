const { UserRepository } = require("../../../src/repositories/");
const mockingoose = require("mockingoose").default;
const { User } = require("../../../src/models/index");
let {
  UserModelMock: { users, user }
} = require("../../mocks/index");

describe("User Repository Tests", async() => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should return a user by id", () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(User).toReturn(user, "findOne");
    const _userRepository = new UserRepository({ User });
    const expected = await _userRepository.get(_user._id)

    expected(JSON.parse(JSON.stringify(expected))).toMatchObject(_user)
  });
});