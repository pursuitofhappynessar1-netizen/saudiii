import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { supabase, ScientificCommittee } from '../../lib/supabase';
import toast from 'react-hot-toast';
import BilingualForm from './forms/BilingualForm';
import { ArrowLeft, Save } from 'lucide-react';

const schema = yup.object({
  title_ar: yup.string().required('Arabic title is required'),
  title_en: yup.string().required('English title is required'),
  description_ar: yup.string().required('Arabic description is required'),
  description_en: yup.string().required('English description is required'),
  image_url: yup.string().url('Must be a valid URL'),
  order_index: yup.number().min(0, 'Order must be 0 or greater').required('Order is required'),
});

type FormData = yup.InferType<typeof schema>;

const ScientificCommitteeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(isEdit);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      order_index: 0,
    },
  });

  useEffect(() => {
    if (isEdit && id) {
      fetchItem();
    }
  }, [id, isEdit]);

  const fetchItem = async () => {
    try {
      const { data, error } = await supabase
        .from('scientific_committee')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      
      reset({
        title_ar: data.title_ar,
        title_en: data.title_en,
        description_ar: data.description_ar,
        description_en: data.description_en,
        image_url: data.image_url || '',
        order_index: data.order_index,
      });
    } catch (error) {
      toast.error('Error fetching member data');
      navigate('/admin/scientific-committee');
    } finally {
      setInitialLoading(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      if (isEdit) {
        const { error } = await supabase
          .from('scientific_committee')
          .update(data)
          .eq('id', id);

        if (error) throw error;
        toast.success('Member updated successfully');
      } else {
        const { error } = await supabase
          .from('scientific_committee')
          .insert([data]);

        if (error) throw error;
        toast.success('Member created successfully');
      }

      navigate('/admin/scientific-committee');
    } catch (error) {
      toast.error(isEdit ? 'Error updating member' : 'Error creating member');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  const bilingualFields = [
    {
      name: 'title',
      label: 'Title',
      type: 'text' as const,
      required: true,
      placeholder: {
        ar: 'أدخل المنصب أو اللقب',
        en: 'Enter position or title',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea' as const,
      required: true,
      placeholder: {
        ar: 'أدخل وصف العضو وخبراته',
        en: 'Enter member description and expertise',
      },
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/admin/scientific-committee')}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEdit ? 'Edit Member' : 'Add New Member'}
          </h1>
          <p className="text-gray-600">Scientific Committee</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <BilingualForm
          register={register}
          errors={errors}
          fields={bilingualFields}
        />

        {/* Additional Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              {...register('image_url')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
              placeholder="https://example.com/image.jpg"
            />
            {errors.image_url && (
              <p className="mt-1 text-sm text-red-600">{errors.image_url.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Display Order *
            </label>
            <input
              type="number"
              {...register('order_index')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
              placeholder="0"
              min="0"
            />
            {errors.order_index && (
              <p className="mt-1 text-sm text-red-600">{errors.order_index.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-4 pt-6 border-t">
          <button
            type="button"
            onClick={() => navigate('/admin/scientific-committee')}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-4 h-4" />
            {loading ? 'Saving...' : isEdit ? 'Update Member' : 'Create Member'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScientificCommitteeForm;