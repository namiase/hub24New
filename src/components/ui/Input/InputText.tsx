'use client';
import { InputLabel } from '@/components';
import clsx from 'clsx';
import React, { FC, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline, IoEyeSharp } from 'react-icons/io5';

export const inputClassName =
  'focus block w-full rounded-lg border-0 ' +
  'shadow-sm ring-1 ring-inset ring-gray-300 ' +
  'placeholder:text-gray-400 focus:ring-2 focus:ring-inset ' +
  'focus:ring-main-500 sm:text-sm sm:leading-6 ' +
  'invalid:[&:not(:placeholder-shown):not(:focus)]:ring-red-500 peer ' +
  'h-10';

export interface FormTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label?: string;
  isRequired?: boolean;
  labelClassname?: string;
  containerClassname?: string;
  labelContainerClassname?: string;
  error?: string | string[]; //| FormikErrors<any> | FormikErrors<any>[];
  ref?: React.Ref<HTMLInputElement>;
}

export const InputText: FC<FormTextProps> = ({
  label = '',
  isRequired,
  name,
  type,
  error,
  className,
  labelClassname,
  containerClassname,
  labelContainerClassname,
  disabled,
  ref,
  ...props
}) => {
  const [currentType, setCurrentType] = useState(type);

  return (
    <div className={containerClassname}>
      <InputLabel
        label={label}
        htmlFor={name}
        isRequired={isRequired}
        className={labelClassname}
        containerClassname={labelContainerClassname}
      />

      <div className="flex flex-1 flex-col">
        <div className="relative flex flex-1 items-center">
          <input
            {...props}
            ref={ref}
            name={name}
            type={currentType}
            disabled={disabled}
            className={clsx(
              inputClassName,
              !!error && 'ring-red-500',
              disabled && 'bg-gray-100 text-gray-500',
              className
            )}
          />
          {type === 'password' && currentType === 'password' && (
            <IoEyeOutline
              onClick={() => setCurrentType('text')}
              className="absolute cursor-pointer text-main-500 h-5 w-5 right-2"
            />
          )}
          {type === 'password' && currentType === 'text' && (
            <IoEyeOffOutline
              onClick={() => setCurrentType('password')}
              className="absolute cursor-pointer text-main-500 h-5 w-5 right-2"
            />
          )}
        </div>

        {typeof error == 'string' && !!error && (
          <span className="mt-2 text-sm text-red-500">{error}</span>
        )}
        {Array.isArray(error) && (
          <span className="mt-2 text-sm text-red-500">{error.join(', ')}</span>
        )}
      </div>
    </div>
  );
};
