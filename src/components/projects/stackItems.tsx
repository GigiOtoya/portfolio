type StackProps = {
  items: string[];
};
export default function StackItems({ items }: StackProps) {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2">
      {" "}
      {items.map((items, idx) => (
        <span key={idx} className="bg-sky-950 rounded-sm p-1 border  border-sky-800 ">
          {items}
        </span>
      ))}
    </div>
  );
}
