import { renderHook, act } from "@testing-library/react";
import { useTypewriter } from "@/hooks/useTypewriter";

describe("useTypewriter", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("starts with an empty string", () => {
    const { result } = renderHook(() => useTypewriter(["Hello"]));

    expect(result.current.text).toBe("");
  });

  it("types the first character after one type-speed interval", () => {
    const { result } = renderHook(() => useTypewriter(["Hello"], 80, 40, 1000));

    act(() => {
      jest.advanceTimersByTime(80);
    });

    expect(result.current.text).toBe("H");
  });

  it("types the full string after all characters are ticked", () => {
    const { result } = renderHook(() => useTypewriter(["Hi"], 80, 40, 1000));

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(result.current.text).toBe("Hi");
  });

  it("begins deleting after the pause duration elapses", () => {
    // typeSpeed=10: "H" at 10ms, "i" at 20ms, pause tick at 30ms
    // pauseDuration=100: pause fires at 130ms, first delete tick at 135ms → text="H"
    const { result } = renderHook(() => useTypewriter(["Hi"], 10, 5, 100));

    act(() => {
      jest.advanceTimersByTime(136);
    });

    expect(result.current.text).toBe("H");
  });
});
