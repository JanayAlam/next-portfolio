interface INavigationItem {
  key: string;
  display: string;
  path?: string;
}

const useNavigationItems = (): INavigationItem[] => {
  return [
    {
      key: "about",
      display: "About",
      path: undefined,
    },
    {
      key: "projects",
      display: "Projects",
      path: undefined,
    },
    {
      key: "blogs",
      display: "Blogs",
      path: undefined,
    },
  ];
};

export default useNavigationItems;
