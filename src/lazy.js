import { lazy } from "react";

export const HomePage = lazy(() => import("pages/HomePage"));
export const CartPage = lazy(() => import("pages/CartPage"));
export const ProductLists = lazy(() => import("pages/ProductLists"));
export const ProductPage = lazy(() => import("pages/ProductPage"));
export const StoreLocatorPage = lazy(() => import("pages/StoreLocatorPage"));
export const ServiceCenterLocator = lazy(() =>
  import("pages/ServiceCenterLocator")
);
export const AboutPage = lazy(() => import("pages/AboutPage"));
export const Layout = lazy(() => import("layouts/layout/Layout"));
export const ProfileLayout = lazy(() => import("layouts/layout/ProfileLayout"));
export const MyAddressBook = lazy(() =>
  import("components/MyAccount/MyAddressBook/MyAddressBook")
);
export const MyOrders = lazy(() =>
  import("components/MyAccount/MyOrders/MyOrder")
);
export const MyOrdersDetails = lazy(() =>
  import("components/MyAccount/MyOrders/MyOrderDetails/MyOrderDetails")
);
export const MyProfile = lazy(() =>
  import("components/MyAccount/MyProfile/MyProfile")
);
export const MyWishlist = lazy(() =>
  import("components/MyAccount/MyWishlist/MyWishlist")
);
export const NotFound = lazy(() => import("errors/NotFound"));
