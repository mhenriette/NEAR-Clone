function Modules({ text, url }) {
  return (
    <div className="flex flex-col gap-x-3 gap-y-3 items-center lg:flew-row lg:items-end mt-6">
      <div className="h-5 w-5"><img src={url}/></div>
      <p className="font-normal text-base lg:leading-6 lg:text-lg text-textgray">{text}</p>
    </div>
  );
}
export default Modules
