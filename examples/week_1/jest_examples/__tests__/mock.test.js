test("returns undefined by default", () => {
    const mock = jest.fn();

    let result = mock("foo");
    
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo");
})

test("mock implementation", () => {
    const mock = jest.fn(() => "bar");

    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
})

test("mock return value", () => {
    const mock = jest.fn();
    mock.mockReturnValue("bar");

    expect(mock("foo")).toBe("bar");
})

test("mock promise resolution", () => {
    const mock = jest.fn();

    mock.mockResolvedValue("bar");

    expect(mock("foo")).resolves.toBe("bar");
})