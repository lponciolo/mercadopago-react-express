jest.mock("../../src/validators");

import validationUtils from "../../test_utils/validators";
import validateRequest from "../../src/validators";
import { loginValidationSchema } from "../../src/validators/login.validation";

const emptyNext: any = () => {};
const emptyRes: any = () => {};
describe("Admin Service -> getAdminWelcome", () => {
  const mockValidateRequest = validateRequest as jest.Mock;
  mockValidateRequest.mockImplementation((mock, emptyNext, schema) =>
    validationUtils(mock, schema)
  );
  it("should get a successfull validation", async () => {
    const mockRequest: any = {
      body: { username: "username", password: "password" },
    };
    expect(loginValidationSchema(mockRequest, emptyRes, emptyNext)).toBe(true);
    expect(mockValidateRequest).toHaveBeenCalledTimes(1);
  });
  it('should throw Validation error: "password" is required', async () => {
    const mockRequest: any = { body: { username: "username" } };
    expect(() =>
      loginValidationSchema(mockRequest, emptyRes, emptyNext)
    ).toThrow('Validation error: "password" is required');
    expect(mockValidateRequest).toHaveBeenCalledTimes(1);
  });
  it('should throw Validation error: "password" is not allowed to be empty', async () => {
    const mockRequest: any = { body: { username: "username", password: "" } };
    expect(() =>
      loginValidationSchema(mockRequest, emptyRes, emptyNext)
    ).toThrow('Validation error: "password" is not allowed to be empty');
    expect(mockValidateRequest).toHaveBeenCalledTimes(1);
  });

  it('should throw Validation error: "password" must be a string', async () => {
    const mockRequest: any = { body: { username: "username", password: 432 } };
    expect(() =>
      loginValidationSchema(mockRequest, emptyRes, emptyNext)
    ).toThrow('Validation error: "password" must be a string');
    expect(mockValidateRequest).toHaveBeenCalledTimes(1);
  });
  it('should throw "Validation error: "username" is required"', async () => {
    const mockRequest: any = { body: { password: "password" } };
    expect(() =>
      loginValidationSchema(mockRequest, emptyRes, emptyNext)
    ).toThrow('Validation error: "username" is required');
    expect(mockValidateRequest).toHaveBeenCalledTimes(1);
  });
  it('should throw Validation error: "username" is not allowed to be empty', async () => {
    const mockRequest: any = { body: { username: "", password: "password" } };
    expect(() =>
      loginValidationSchema(mockRequest, emptyRes, emptyNext)
    ).toThrow('Validation error: "username" is not allowed to be empty');
    expect(mockValidateRequest).toHaveBeenCalledTimes(1);
  });

  it('should throw Validation error: "username" must be a string', async () => {
    const mockRequest: any = { body: { username: 432, password: "password" } };
    expect(() =>
      loginValidationSchema(mockRequest, emptyRes, emptyNext)
    ).toThrow('Validation error: "username" must be a string');
    expect(mockValidateRequest).toHaveBeenCalledTimes(1);
  });
});
