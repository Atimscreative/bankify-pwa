type HeaderProps = {
  page: string;
  pageInfo: string;
};

const Header = ({ page, pageInfo }: HeaderProps) => {
  return (
    <div className="border-b pb-3 pt-3">
      <div>
        <h2 className="font-bold capitalize text-gray-900">{page}</h2>
        <p className="text-sm text-slate-500">{pageInfo}</p>
      </div>
    </div>
  );
};

export default Header;
