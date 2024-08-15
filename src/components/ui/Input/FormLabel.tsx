import clsx from 'clsx';
import { FC } from 'react';

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  isRequired?: boolean;
  containerClassname?: string;
}
export const InputLabel: FC<FormLabelProps> = ({
  label,
  htmlFor,
  isRequired,
  className = '',
  containerClassname = '',
  ...props
}) => {
  return (
    <div className={clsx('flex justify-between', containerClassname)}>
      <div>
        <label
          {...props}
          htmlFor={htmlFor}
          className={clsx(
            'block text-sm font-bold leading-6 text-gray-700 truncate',
            className
          )}
        >
          {label}
        </label>
      </div>

      {isRequired && <div className="text-zinc-500 text-right">Requerido</div>}
    </div>
  );
};
