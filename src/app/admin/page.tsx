'use client';

import { createForm } from '@/actions/formAction';
import { TCloudinary } from '@/utils/types';
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

function Admin() {
  const [state, action] = useFormState(createForm, { errors: {} });
  const { pending } = useFormStatus();
  const [imageData, setImageData] = useState('');
  const [videoData, setVideoData] = useState('');
  const [gigFileData, setGigFileData] = useState('');
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
          <div>
            <CldUploadWidget
              options={{ multiple: false, maxFiles: 1 }}
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              onUpload={(result, _) => {
                if (result.event !== 'success') return;
                const info = result.info as TCloudinary;
                setImageData(info.public_id);
              }}
            >
              {({ open }) => (
                <button className="btn" onClick={() => open()}>
                  Choose Image
                </button>
              )}
            </CldUploadWidget>
            <input
              type="text"
              className="input input-bordered "
              name="image"
              value={imageData}
            />
            <p className=" text-red-500 text-sm">{state.errors?.image}</p>
          </div>
          <div>
            <CldUploadWidget
              options={{ multiple: false, maxFiles: 1 }}
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              onUpload={(result, _) => {
                if (result.event !== 'success') return;
                const info = result.info as TCloudinary;
                setVideoData(info.public_id);
              }}
            >
              {({ open }) => (
                <button className="btn" onClick={() => open()}>
                  Choose Video
                </button>
              )}
            </CldUploadWidget>
            <input
              type="text"
              className="input input-bordered"
              name="video"
              value={videoData}
            />
            <p className="text-red-500 text-sm">{state.errors?.video}</p>
          </div>
          <div>
            <CldUploadWidget
              options={{ multiple: false, maxFiles: 1 }}
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              onUpload={(result, _) => {
                if (result.event !== 'success') return;
                const info = result.info as TCloudinary;
                setGigFileData(info.public_id);
              }}
            >
              {({ open }) => (
                <button className="btn" onClick={() => open()}>
                  Choose gigFile
                </button>
              )}
            </CldUploadWidget>
            <input
              type="text"
              name="gigFile"
              className="input input-bordered"
              value={gigFileData}
            />
            <p className="text-red-500 text-sm">{state.errors?.gigFile}</p>
          </div>

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
