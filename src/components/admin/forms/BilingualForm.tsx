import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface BilingualFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  fields: {
    name: string;
    label: string;
    type?: 'text' | 'textarea' | 'url' | 'number' | 'email';
    required?: boolean;
    placeholder?: {
      ar: string;
      en: string;
    };
  }[];
}

const BilingualForm: React.FC<BilingualFormProps> = ({ register, errors, fields }) => {
  return (
    <div className="space-y-8">
      {fields.map((field) => (
        <div key={field.name} className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{field.label}</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Arabic Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Arabic (العربية) {field.required && '*'}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  {...register(`${field.name}_ar`, { required: field.required })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  placeholder={field.placeholder?.ar || `Enter ${field.label} in Arabic`}
                  dir="rtl"
                />
              ) : (
                <input
                  type={field.type || 'text'}
                  {...register(`${field.name}_ar`, { required: field.required })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  placeholder={field.placeholder?.ar || `Enter ${field.label} in Arabic`}
                  dir="rtl"
                />
              )}
              {errors[`${field.name}_ar`] && (
                <p className="mt-1 text-sm text-red-600">This field is required</p>
              )}
            </div>

            {/* English Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                English {field.required && '*'}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  {...register(`${field.name}_en`, { required: field.required })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  placeholder={field.placeholder?.en || `Enter ${field.label} in English`}
                />
              ) : (
                <input
                  type={field.type || 'text'}
                  {...register(`${field.name}_en`, { required: field.required })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                  placeholder={field.placeholder?.en || `Enter ${field.label} in English`}
                />
              )}
              {errors[`${field.name}_en`] && (
                <p className="mt-1 text-sm text-red-600">This field is required</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BilingualForm;