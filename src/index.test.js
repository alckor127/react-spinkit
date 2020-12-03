import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import SpinKit from "."

Enzyme.configure({ adapter: new Adapter() })

describe("<SpinKit />", () => {
  const spinner = mount(<SpinKit />)

  it("renders without crashing", () => {
    expect(spinner).not.toBeNull()
  })

  it("type should be `fade-circle` by default", () => {
    expect(spinner.props().type).toBe("fade-circle")
  })

  it("allows us to set props", () => {
    expect(spinner.props().type).toBe("fade-circle")
    spinner.setProps({ type: "swing" })
    expect(spinner.props().type).toBe("swing")
  })
})
