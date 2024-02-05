'use server';

import { formSchema } from '@/utils/schemas';
import { FormState } from '@/utils/types';

export const createForm = (formData: FormData, prevState: FormState) => {
  const validation = formSchema.safeParse(Object.fromEntries(formData));

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }
};
