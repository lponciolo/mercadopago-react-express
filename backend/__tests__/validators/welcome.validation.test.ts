jest.mock("../../src/validators");

import validationUtils from "../../test_utils/validators";
import validateRequest from "../../src/validators";
import { welcomeValidationSchema } from "../../src/validators/welcome.validation";

const emptyNext: any = () => {};
const emptyRes: any = () => {};
describe("Welcome Service -> welcomeValidationSchema", () => {
  const mockRequest: any = { body: {} };
  const mockValidateRequest = validateRequest as jest.Mock;
  mockValidateRequest.mockImplementation((mock, emptyNext, schema) =>
    validationUtils(mock, schema)
  );
  it("should get a successfull validation", async () => {
    expect(welcomeValidationSchema(mockRequest, emptyRes, emptyNext)).toBe(
      true
    );
    expect(mockValidateRequest).toHaveBeenCalledTimes(1);
  });
});
