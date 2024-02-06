'use client';
import { createForm } from '@/actions/createFormAction';
import { updateForm } from '@/actions/updateFormAction';
import { TCloudinary, TData } from '@/utils/types';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
function Form({ data }: { data?: TData }) {
  const [imageData, setImageData] = useState('');
  const [videoData, setVideoData] = useState('');
  const [gigFileData, setGigFileData] = useState('');
  const conditionalForm = data ? updateForm.bind(null, data?.id) : createForm;
  const [state, action] = useFormState(conditionalForm, { errors: {} });
  const { pending } = useFormStatus();
  return (
    <div>
      <form action={action} className="form-control w-full space-y-2">
        <input
          defaultValue={data?.heading}
          type="text"
          name="heading"
          placeholder="Heading"
          className="input input-bordered "
        />
        <p className="text-red-500 text-sm">{state.errors?.heading}</p>
        <h1 className="font-semibold text-xl">Card One</h1>
        <input
          defaultValue={data?.cardOneTitle}
          type="text"
          name="cardOneTitle"
          placeholder="Card one title"
          className="input input-bordered "
        />
        <p className="text-red-500 text-sm">{state.errors?.cardOneTitle}</p>
        <textarea
          defaultValue={data?.cardOneDesc}
          name="cardOneDesc"
          className="textarea textarea-bordered"
          placeholder="Card one description"
        />
        <p className="text-red-500 text-sm">{state.errors?.cardOneDesc}</p>
        <h1 className="font-semibold text-xl">Card Two</h1>
        <input
          defaultValue={data?.cardTwoTitle}
          type="text"
          name="cardTwoTitle"
          placeholder="Card two title"
          className="input input-bordered "
        />
        <p className="text-red-500 text-sm">{state.errors?.cardTwoTitle}</p>
        <textarea
          defaultValue={data?.cardTwoDesc}
          name="cardTwoDesc"
          className="textarea textarea-bordered"
          placeholder="Card two description"
        />
        <p className="text-red-500 text-sm">{state.errors?.cardTwoDesc}</p>
        <h1 className="font-semibold text-xl">Card Three</h1>
        <input
          defaultValue={data?.cardThreeTitle}
          type="text"
          name="cardThreeTitle"
          placeholder="Card three title"
          className="input input-bordered "
        />
        <p className="text-red-500 text-sm">{state.errors?.cardThreeTitle}</p>
        <textarea
          defaultValue={data?.cardThreeDesc}
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
            value={data ? data.image : imageData}
          />
          <p className=" text-red-500 text-sm">{state.errors?.image}</p>
        </div>
        <div>
          <CldUploadWidget
            options={{ multiple: false, maxFiles: 1 }}
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
            onUpload={(result, _) => {
              if (result.event !== 'success') return;
              const info = result.info as { secure_url: string };
              setVideoData(info.secure_url);
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
            value={data ? data.video : videoData}
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
            value={data ? data.gigFile : gigFileData}
          />
          <p className="text-red-500 text-sm">{state.errors?.gigFile}</p>
        </div>

        <button
          disabled={pending}
          type="submit"
          className="disabled:disabled btn btn-primary text-white"
        >
          {pending ? (
            <span className="loading loading-spinner"></span>
          ) : data ? (
            'Update'
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
