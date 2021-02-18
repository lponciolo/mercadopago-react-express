jest.mock("../../src/validators");

import { validateHeadersAndBodyUtil } from "../../test_utils/validators";
import { validateHeadersAndBody } from "../../src/validators";
import { getAdminRouteValidationSchema } from "../../src/validators/admin.validation";

const emptyNext: any = () => {};
const emptyRes: any = () => {};

describe("Admin Service -> getAdminWelcome", () => {
  const mockValidateHeadersAndBody = validateHeadersAndBody as jest.Mock;
  mockValidateHeadersAndBody.mockImplementation(
    (mock, bodySchema, headersSchema, next) =>
      validateHeadersAndBodyUtil(mock, headersSchema, bodySchema)
  );

  it("should get a successfull validation", async () => {
    const mockRequest: any = {
      body: {},
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjEzMDgzNzU0fQ.NyGG6MrYyizmTG4WRuavx7eciw9rmM_e3InltySjaog",
      },
    };
    expect(
      getAdminRouteValidationSchema(mockRequest, emptyRes, emptyNext)
    ).toBe(true);
    expect(mockValidateHeadersAndBody).toHaveBeenCalledTimes(1);
  });

  it('should throw Validation error: "authorization" is required', async () => {
    const mockRequest: any = { body: {}, headers: {} };
    expect(() =>
      getAdminRouteValidationSchema(mockRequest, emptyRes, emptyNext)
    ).toThrow('Validation error: "authorization" is required');
    expect(mockValidateHeadersAndBody).toHaveBeenCalledTimes(1);
  });

  it('should throw Validation error: "authorization" is not allowed to be empty', async () => {
    const mockRequest: any = { body: {}, headers: { authorization: "" } };
    expect(() =>
      getAdminRouteValidationSchema(mockRequest, emptyRes, emptyNext)
    ).toThrow('Validation error: "authorization" is not allowed to be empty');
    expect(mockValidateHeadersAndBody).toHaveBeenCalledTimes(1);
  });

  it('should throw Validation error: "user" is not allowed', async () => {
    const mockRequest: any = {
      body: { user: "user" },
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjEzMDgzNzU0fQ.NyGG6MrYyizmTG4WRuavx7eciw9rmM_e3InltySjaog",
      },
    };
    expect(() =>
      getAdminRouteValidationSchema(mockRequest, emptyRes, emptyNext)
    ).toThrow('Validation error: "user" is not allowed');
    expect(mockValidateHeadersAndBody).toHaveBeenCalledTimes(1);
  });
});
