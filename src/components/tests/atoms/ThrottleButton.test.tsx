import ThrottleButton from '@/components/atoms/Button/ThrottleButton';
import { render, fireEvent, waitFor, act } from '@testing-library/react';

describe('ThrottleButton', () => {
  it('throttleTime 동안에 버튼은 disabled이다.', () => {
    jest.useFakeTimers();
    const onClickMock = jest.fn();
    const throttleTime = 1000;
    const { getByText } = render(
      <ThrottleButton onClick={onClickMock} throttleTime={throttleTime}>
        Click me
      </ThrottleButton>
    );

    const button = getByText('Click me');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(onClickMock).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(throttleTime);
    });

    expect(button).toBeEnabled();
    jest.useRealTimers();
  });

  it('ThrottleButton이 disabled일때 onClick이벤트는 발생하지 않는다.', () => {
    jest.useFakeTimers();
    const onClickMock = jest.fn();
    const throttleTime = 1000;
    const { getByText } = render(
      <ThrottleButton onClick={onClickMock} throttleTime={throttleTime}>
        Click Button
      </ThrottleButton>
    );

    const button = getByText('Click Button');

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();

    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(onClickMock).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(throttleTime / 2);
    });

    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);

    act(() => {
      jest.advanceTimersByTime(throttleTime / 2);
    });

    expect(button).toBeEnabled();
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(2);
    jest.useRealTimers();
  });
});
