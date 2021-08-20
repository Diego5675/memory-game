import Home from "../pages/Home";
import EasyGame from "../pages/EasyGame";
import NormalGame from "../pages/NormalGame";
import HardGame from "../pages/HardGame";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:easy": EasyGame,
  "/:normal": NormalGame,
  "/:hard": HardGame,
};

const router = async () => {
  const content = null || document.getElementById("content");
  const hash = getHash();
  const route = await resolveRoutes(hash);
  const render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();
};

export default router;
