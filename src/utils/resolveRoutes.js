const resolveRoutes = (route) => {
  if (route === "/") return route;
  if (route === "easy") return "/:easy";
  if (route === "normal") return "/:normal";
  if (route === "hard") return "/:hard";

  return `/${route}`;
};

export default resolveRoutes;
