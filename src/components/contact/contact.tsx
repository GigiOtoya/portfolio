import Image from "next/image";
import SectionLayout from "../section/sectionLayout";

export default function Contact() {
  const formAction = "https://api.web3forms.com/submit";
  const accessKey = process.env.ACESS_KEY;

  return (
    <SectionLayout id="contact" title="Contact">
      <form action={formAction} className="flex flex-col gap-y-4 max-w-xl se m-auto" method="POST">
        <input type="hidden" name="access_key" value={accessKey} />
        <div className="flex flex-col gap-1">
          <label>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-inherit border-b-2 border-slate-700 rounded-sm p-2"
            placeholder="Your name..."
            name="name"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="bg-inherit border-b-2 border-slate-700 rounded-sm p-2"
            placeholder="example@domain.com"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            className="bg-inherit border-2 border-slate-700 rounded-sm p-2 min-h-72 "
            placeholder="Your message..."
            name="message"
            required
          />
        </div>
        <div className="flex justify-center">
          <button className="flex justify-between gap-2 bg-inherit border-2 border-sky-800 hover:border-sky-600 rounded-sm font-semibold px-14 py-1">
            <span>Submit</span>
            <Image src={"/icons/send.svg"} width={24} height={24} alt="->" />
          </button>
        </div>
      </form>
    </SectionLayout>
  );
}
