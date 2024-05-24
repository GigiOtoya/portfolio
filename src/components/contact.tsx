import SectionLayout from "./sectionLayout";

export default function Contact() {
  return (
    <SectionLayout id="contact" title="Contact">
      <form className="flex flex-col gap-y-4  max-w-xl se m-auto">
        <div className="flex flex-col gap-1">
          <label>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="bg-inherit border-2 border-slate-700 rounded-sm p-2"
            placeholder="Your name..."
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>
            Subject <span className="text-red-500">*</span>
          </label>
          <textarea
            className="bg-inherit border-2 border-slate-700 rounded-sm p-2 min-h-72 "
            placeholder="Your message..."
          />
        </div>
      </form>
    </SectionLayout>
  );
}
