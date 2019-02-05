import Enzyme, { mount, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

// make enzyme functions available to all test files
// without having to import
global.mount = mount;
global.render = render;
global.shallow = shallow;

// easioly switch following config on / off
const mockConsole = false;
/**
 * Mock console
 *
 * @example
 * console.log('Hello World!'); // console spy
 * expect(console.log.mock.calls[0][0]).toBe('Hello World!');
 * console.log.mockReset();
 * console.log.mockRestore();
 * console.log('Hello World!'); // console
 */

if (mockConsole) {
  global.console.error = jest
    .spyOn(console, "error")
    .mockImplementation(message => message);
  global.console.info = jest
    .spyOn(console, "info")
    .mockImplementation(message => message);
  global.console.log = jest
    .spyOn(console, "log")
    .mockImplementation(message => message);
  global.console.warn = jest
    .spyOn(console, "warn")
    .mockImplementation(message => message);

  global.console.reset = () => {
    global.console.error.mockReset();
    global.console.info.mockReset();
    global.console.log.mockReset();
    global.console.warn.mockReset();
  };

  global.console.restore = () => {
    global.console.error.mockRestore();
    global.console.info.mockRestore();
    global.console.log.mockRestore();
    global.console.warn.mockRestore();
  };
}
