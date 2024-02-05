'use client';

import { createForm } from '@/actions/formAction';
import { useFormState, useFormStatus } from 'react-dom';

function Admin() {
  const [state, action] = useFormState(createForm, { errors: {} });
  const { pending } = useFormStatus();

  return (
    <div className="flex items-center justify-center mt-10 w-[500px] mx-auto">
      <div className="p-3 rounded-lg shadow-lg border flex-1 border-slate-200">
        <h1 className="font-bold text-2xl text-center py-2">Admin Panel</h1>
        <form action={action} className="form-control w-full space-y-1">
          <input
            type="text"
            name="heading"
            placeholder="Heading"
            className="input input-bordered "
          />
          <p className="text-red-500 text-sm">{state.errors?.heading}</p>
          <h1 className="font-semibold text-xl">Card One</h1>
          <input
            type="text"
            name="cardOneTitle"
            placeholder="Card one title"
            className="input input-bordered "
          />
          <p className="text-red-500 text-sm">{state.errors?.cardOneTitle}</p>
          <textarea
            name="cardOneDesc"
            className="textarea textarea-bordered"
            placeholder="Card one description"
          />
          <p className="text-red-500 text-sm">{state.errors?.cardOneDesc}</p>
          <h1 className="font-semibold text-xl">Card Two</h1>
          <input
            type="text"
            name="cardTwoTitle"
            placeholder="Card two title"
            className="input input-bordered "
          />
          <p className="text-red-500 text-sm">{state.errors?.cardTwoTitle}</p>
          <textarea
            name="cardTwoDesc"
            className="textarea textarea-bordered"
            placeholder="Card two description"
          />
          <p className="text-red-500 text-sm">{state.errors?.cardTwoDesc}</p>
          <h1 className="font-semibold text-xl">Card Three</h1>
          <input
            type="text"
            name="cardThreeTitle"
            placeholder="Card three title"
            className="input input-bordered "
          />
          <p className="text-red-500 text-sm">{state.errors?.cardThreeTitle}</p>
          <textarea
            name="cardThreeDesc"
            className="textarea textarea-bordered"
            placeholder="Card three description"
          />
          <p className="text-red-500 text-sm">{state.errors?.cardThreeDesc}</p>
          <div className="label">
            <span className="label-text font-semibold">Choose image</span>
            <input
              type="file"
              name="image"
              className="file-input file-input-bordered "
            />
          </div>
          <p className="text-red-500 text-sm">{state.errors?.image}</p>
          <div className="label">
            <span className="label-text font-semibold">Choose Video</span>
            <input
              type="file"
              name="video"
              className="file-input file-input-bordered "
            />
          </div>
          <p className="text-red-500 text-sm">{state.errors?.video}</p>
          <div className="label">
            <span className="label-text font-semibold">Choose Gig</span>
            <input
              type="file"
              name="file"
              className="file-input file-input-bordered "
            />
          </div>
          <p className="text-red-500 text-sm">{state.errors?.gigFile}</p>
          <button
            disabled={pending}
            type="submit"
            className="disabled:disabled btn btn-primary text-white"
          >
            {pending ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
