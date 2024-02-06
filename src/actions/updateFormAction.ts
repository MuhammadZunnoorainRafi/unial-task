import { formSchema } from '@/utils/schemas';
import { FormState } from '@/utils/types';

export const updateForm = (prevState: FormState, formData: FormData) => {
  const validation = formSchema.safeParse(Object.fromEntries(formData));
  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
    };
  }
};
