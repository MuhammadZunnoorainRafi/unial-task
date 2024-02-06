import Form from '@/components/Form';
import { db } from '@/utils/db';

async function Admin() {
  const data = await db.form.findFirst();
  const organizedData = { heading: data?.heading };
  return (
    <div className="flex items-center justify-center mt-10 w-[500px] mx-auto">
      <div className="p-3 rounded-lg shadow-lg border flex-1 border-slate-200">
        <h1 className="font-bold text-2xl text-center py-2">Admin Panel</h1>
        <Form data={organizedData} />
      </div>
    </div>
  );
}

export default Admin;
