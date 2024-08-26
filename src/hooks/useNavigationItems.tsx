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
      path: "/about",
    },
    {
      key: "projects",
      display: "Projects",
      path: "/projects",
    },
    {
      key: "blogs",
      display: "Blogs",
      path: "/blogs",
    },
  ];
};

export default useNavigationItems;
