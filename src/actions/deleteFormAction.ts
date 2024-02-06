'use server';
import { db } from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const deleteForm = async (id: string) => {
  await db.form.delete({
    where: { id },
  });

  revalidatePath('/');
  redirect('/');
};
