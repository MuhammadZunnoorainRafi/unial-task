'use server';
import { db } from '@/utils/db';
import { formSchema } from '@/utils/schemas';
import { FormState } from '@/utils/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const updateForm = async (
  id: string,
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const validation = formSchema.safeParse(Object.fromEntries(formData));
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  try {
    await db.form.update({
      where: {
        id,
      },
      data: {
        ...validation.data,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return { errors: { _form: ['Something went wrong please try later!'] } };
    }
  }

  revalidatePath('/');
  redirect('/');
};
