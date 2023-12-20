import { act, render, renderHook } from '@testing-library/react';
import ToastProvider, { useToast } from '@/hooks/Custom/Toast/ToastProvider';
import Toast from '@/components/atoms/Toast';

describe('useToast', () => {
  it('toast가 생성되고 durations가 지나면 toast가 사라진다.', () => {
    jest.useFakeTimers(); // Enable fake timers

    const message = 'success';
    const durations = 500;
    const { result } = renderHook(() => useToast(), {
      wrapper: ToastProvider,
    });

    expect(result.current).toBeDefined();

    act(() => {
      result.current.addToast.success(message, durations);
    });

    const { getAllByText } = render(<Toast type="success">{message}</Toast>);
    const toast = getAllByText(message)[0];
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveTextContent(message);

    act(() => {
      jest.advanceTimersByTime(durations / 2);
    });

    expect(toast).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(durations); // Wait for the duration of the toast
    });

    expect(toast).not.toBeInTheDocument();

    jest.useRealTimers(); // Restore real timers
  });
});
