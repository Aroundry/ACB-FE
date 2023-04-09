import { ChangeEvent, ChangeEventHandler, useCallback, useState } from 'react';

type InputValidator = (value: string) => string;

const useInput = (
  validator: InputValidator,
  initialValue = ''
): [string, ChangeEventHandler<HTMLInputElement>, string] => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string>('');

  const getDefaultValue = useCallback((inputElement: HTMLInputElement) => {
    const inputType = inputElement.getAttribute('type');
    // switch (inputType) {
    //     case "number":
    //         return 0;
    //     default:
    //         return "";
    // }
    return '';
  }, []);

  const getInputValue = useCallback((inputElement: HTMLInputElement) => {
    const inputType = inputElement.getAttribute('type');
    const value = inputElement.value;
    // switch (inputType) {
    //   case 'number':
    //     return Number(value);
    //   default:
    //     return value;
    // }
    return value;
  }, []);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setError('');
      const error = validator(e.target.value);
      if (!error) {
        setValue(getInputValue(e.target));
        return;
      }
      setValue(getDefaultValue(e.target));
      setError(error);
      return;
    },
    [validator]
  );

  return [value, onChange, error];
};

export default useInput;
