type StackProps = {
  languages: string[];
};
export default function StackItems({ languages }: StackProps) {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      {" "}
      {languages.map((language, idx) => (
        <span key={idx} className="bg-sky-950 rounded-sm p-1 border  border-sky-800 ">
          {language}
        </span>
      ))}
    </div>
  );
}
