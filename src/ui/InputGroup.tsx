import React, {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
  useState,
} from 'react';
import { IButton } from './IButton';
import { IInput } from './IInput';

export const InputGroup: React.FC<InputGroupProps> = ({
  children,
  onClickBtn,
  btnType,
  inputValue,
  handleClose,
  isBlur,
  ...props
}) => {
  const [value, setValue] = useState<string>(inputValue || '');

  const changeValue = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handler();
    }
  };

  const handleBlur = () => {
    if (isBlur) {
      handler();
    }
  };

  const close = () => {
    if (handleClose) {
      handleClose();
      setValue('');
    }
  };

  const handler = () => onClickBtn(value);

  return (
    <div className="input-append">
      <IInput
        value={value}
        onChange={changeValue}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        {...props}
      />
      <IButton btnType={btnType} onClick={handler}>
        {children}
      </IButton>
      {handleClose ? (
        <IButton btnType="danger" onClick={close}>
          <i className="icon-remove icon-white" />
        </IButton>
      ) : (
        <></>
      )}
    </div>
  );
};

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  btnType?:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'inverse'
    | 'link';
  onClickBtn: (value: string) => void;
  inputValue?: string;
  handleClose?: () => void;
  isBlur?: boolean;
}
