import validateRequest, { validateHeadersAndBody } from "../../src/validators";
import Joi from "joi";
import createError from "http-errors";

const validAuthorization =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjEzMDgzNzU0fQ.NyGG6MrYyizmTG4WRuavx7eciw9rmM_e3InltySjaog";
describe("validateRequest tests", () => {
  it("should call next function once", async () => {
    const nextMock = jest.fn();
    const mockRequest: any = {
      body: { username: "username", password: "password" },
    };
    const mockSchema = Joi.object({
      username: Joi.string().required().empty(),
      password: Joi.string().required(),
    });

    validateRequest(mockRequest, nextMock, mockSchema);
    expect(nextMock).toBeCalled();
  });

  it('should throw "Validation error: "password" is required ', async () => {
    const nextMock = jest.fn();
    const mockRequest: any = { body: { username: "username" } };
    const mockSchema = Joi.object({
      username: Joi.string().required().empty(),
      password: Joi.string().required(),
    });

    const message = 'Validation error: "password" is required';
    validateRequest(mockRequest, nextMock, mockSchema);
    expect(nextMock).toHaveBeenCalledWith(createError(422, message));
  });
});

describe("validateHeadersAndBody tests", () => {
  it("should call next function once", async () => {
    const nextMock = jest.fn();

    const mockRequest: any = {
      body: {},
      headers: { authorization: validAuthorization },
    };
    const mockBodySchema = Joi.object({
      username: Joi.string().required().empty(),
      password: Joi.string().required(),
    });
    const mockHeadersSchema = Joi.object({
      authorization: Joi.string().required().empty(),
    });

    validateHeadersAndBody(
      mockRequest,
      mockBodySchema,
      mockHeadersSchema,
      nextMock
    );
    expect(nextMock).toBeCalled();
  });

  it('should throw "Validation error: "authorization" is required ', async () => {
    const nextMock = jest.fn();
    const mockRequest: any = {
      body: { username: "username", password: "password" },
      headers: {},
    };
    const mockBodySchema = Joi.object({
      username: Joi.string().required().empty(),
      password: Joi.string().required(),
    });
    const mockHeadersSchema = Joi.object({
      authorization: Joi.string().required().empty(),
    });

    const message = 'Validation error: "authorization" is required';
    validateHeadersAndBody(
      mockRequest,
      mockHeadersSchema,
      mockBodySchema,
      nextMock
    );
    expect(nextMock).toHaveBeenCalledWith(createError(422, message));
  });
});
