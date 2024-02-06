'use server';

import { db } from '@/utils/db';
import { formSchema } from '@/utils/schemas';
import { FormState } from '@/utils/types';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validation = formSchema.safeParse(Object.fromEntries(formData));

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const {
    heading,
    cardOneTitle,
    cardOneDesc,
    cardTwoTitle,
    cardTwoDesc,
    cardThreeTitle,
    cardThreeDesc,
    image,
    video,
    gigFile,
  } = validation.data;

  try {
    await db.form.create({
      data: {
        heading,
        cardOneTitle,
        cardOneDesc,
        cardTwoTitle,
        cardTwoDesc,
        cardThreeTitle,
        cardThreeDesc,
        image,
        video,
        gigFile,
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
      return {
        errors: {
          _form: ['Something went wrong, please try later!'],
        },
      };
    }
  }

  revalidatePath('/');
  revalidatePath('/admin');
  redirect('/');
}
