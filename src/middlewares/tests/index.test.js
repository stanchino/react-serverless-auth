import { routerMiddleware } from "react-router-redux";
import authMiddleware from "..";

jest.mock('react-router-redux');

describe("default middleware", () => {
  it('invokes the routerMiddleware', ()=> {
    expect(authMiddleware(jest.fn())).toEqual(routerMiddleware(jest.fn()));
    expect(routerMiddleware).toHaveBeenCalled()
  })
});