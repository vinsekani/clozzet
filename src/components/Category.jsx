export default function Category({img,name}) {
  return (
    <div className="flex flex-col items-center w-fit">
      <div className="bg-[#F0EFEF] rounded-full w-[80px] p-4">
        <img src={img} alt="Jacket" />
      </div>
      <p>{name}</p>
    </div>
  );
}

