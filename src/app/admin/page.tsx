'use client';

import { useFormState } from 'react-dom';

function Admin() {
  const [] = useFormState();

  return (
    <div className="flex items-center justify-center mt-10 w-[500px] mx-auto">
      <div className="p-3 rounded-lg shadow-lg border flex-1 border-slate-200">
        <h1 className="font-bold text-2xl text-center py-2">Admin Panel</h1>
        <form className="form-control w-full space-y-2">
          <input
            type="text"
            name="heading"
            placeholder="Heading"
            className="input input-bordered "
          />
          <h1 className="font-semibold text-xl">Card One</h1>
          <input
            type="text"
            name="cardOneTitle"
            placeholder="Card one title"
            className="input input-bordered "
          />
          <textarea
            name="cardOneDesc"
            className="textarea textarea-bordered"
            placeholder="Card one description"
          />
          <h1 className="font-semibold text-xl">Card Two</h1>
          <input
            type="text"
            name="cardTwoTitle"
            placeholder="Card two title"
            className="input input-bordered "
          />
          <textarea
            name="cardTwoDesc"
            className="textarea textarea-bordered"
            placeholder="Card two description"
          />
          <h1 className="font-semibold text-xl">Card Three</h1>
          <input
            type="text"
            name="cardThreeTitle"
            placeholder="Card three title"
            className="input input-bordered "
          />
          <textarea
            name="cardThreeDesc"
            className="textarea textarea-bordered"
            placeholder="Card three description"
          />
          <div className="label">
            <span className="label-text font-semibold">Choose image</span>
            <input
              type="file"
              name="image"
              className="file-input file-input-bordered "
            />
          </div>
          <div className="label">
            <span className="label-text font-semibold">Choose Video</span>
            <input
              type="file"
              name="video"
              className="file-input file-input-bordered "
            />
          </div>
          <div className="label">
            <span className="label-text font-semibold">Choose Gig</span>
            <input
              type="file"
              name="file"
              className="file-input file-input-bordered "
            />
          </div>
          <button type="submit" className="btn btn-primary text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
