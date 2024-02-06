'use client';

import { deleteForm } from '@/actions/deleteFormAction';

function DeleteForm({ id }: { id: string }) {
  const deleteFormWithId = deleteForm.bind(null, id);
  return (
    <div className="my-2">
      <form action={deleteFormWithId}>
        <button className="btn btn-error text-white w-full" type="submit">
          Delete
        </button>
      </form>
    </div>
  );
}

export default DeleteForm;
