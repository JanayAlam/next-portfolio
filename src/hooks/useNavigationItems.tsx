interface INavigationItem {
  key: string;
  display: string;
  path?: string;
}

const useNavigationItems = (): INavigationItem[] => {
  return [
    {
      key: "projects",
      display: "Projects",
      path: "/projects",
    },
    {
      key: "about",
      display: "About",
      path: "/about",
    },
    {
      key: "blogs",
      display: "Blogs",
      path: "/blogs",
    },
  ];
};

export default useNavigationItems;
