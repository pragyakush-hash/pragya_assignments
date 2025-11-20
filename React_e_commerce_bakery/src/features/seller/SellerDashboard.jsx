import React, { useEffect, useState } from "react";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrderOFSeller, getAllProductsOfSeller } from "./sellerSlice";

const SellerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const dispatch = useDispatch();
  const { products, orders } = useSelector((state) => state.seller);

  console.log("seller all products", products);
  console.log("seller all orders", orders);

  useEffect(() => {
    dispatch(getAllProductsOfSeller());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllOrderOFSeller());
  }, [dispatch]);
  const stats = [
    {
      label: "Total Revenue",
      value: "₹45,230",
      change: "+12.5%",
      color: "bg-blue-500",
    },
    {
      label: "Total Orders",
      value: "234",
      change: "+8.2%",
      color: "bg-green-500",
    },
    { label: "Products", value: "48", change: "+3", color: "bg-purple-500" },
    {
      label: "Customers",
      value: "189",
      change: "+15.3%",
      color: "bg-orange-500",
    },
  ];

  //   const recentOrders = [
  //     {
  //       id: "#ORD001",
  //       customer: "Rajesh Kumar",
  //       product: "Chocolate Cake",
  //       quantity: 2,
  //       amount: "₹850",
  //       status: "Delivered",
  //       date: "2024-11-18",
  //     },
  //     {
  //       id: "#ORD002",
  //       customer: "Priya Sharma",
  //       product: "Vanilla Cupcakes",
  //       quantity: 12,
  //       amount: "₹600",
  //       status: "Processing",
  //       date: "2024-11-19",
  //     },
  //     {
  //       id: "#ORD003",
  //       customer: "Amit Patel",
  //       product: "Black Forest Cake",
  //       quantity: 1,
  //       amount: "₹1200",
  //       status: "Pending",
  //       date: "2024-11-19",
  //     },
  //     {
  //       id: "#ORD004",
  //       customer: "Sneha Reddy",
  //       product: "Bread Loaf",
  //       quantity: 5,
  //       amount: "₹250",
  //       status: "Delivered",
  //       date: "2024-11-17",
  //     },
  //     {
  //       id: "#ORD005",
  //       customer: "Vikram Singh",
  //       product: "Pastries",
  //       quantity: 8,
  //       amount: "₹480",
  //       status: "Processing",
  //       date: "2024-11-20",
  //     },
  //   ];

  //   const products = [
  //     { id: 1, name: 'Chocolate Cake', category: 'Cakes', price: '₹425', stock: 15, image: '🍰' },
  //     { id: 2, name: 'Vanilla Cupcakes', category: 'Cupcakes', price: '₹50', stock: 48, image: '🧁' },
  //     { id: 3, name: 'Black Forest Cake', category: 'Cakes', price: '₹1200', stock: 8, image: '🎂' },
  //     { id: 4, name: 'Croissant', category: 'Pastries', price: '₹80', stock: 32, image: '🥐' },
  //     { id: 5, name: 'Bread Loaf', category: 'Bread', price: '₹50', stock: 60, image: '🍞' },
  //     { id: 6, name: 'Donuts', category: 'Pastries', price: '₹60', stock: 25, image: '🍩' },
  //   ];

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "customers", label: "Customers", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-blue-100 text-blue-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg transition-all duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gray-800">🍰 Sweet Bakery</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 transition-colors ${
                  activeTab === item.id
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon size={20} />
                {sidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white shadow-sm border-b sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search products, orders..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {activeTab === "dashboard" && (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Dashboard Overview
              </h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-500 text-sm font-medium">
                        {stat.label}
                      </h3>
                      <div
                        className={`w-10 h-10 ${stat.color} rounded-lg opacity-10`}
                      ></div>
                    </div>
                    <p className="text-3xl font-bold text-gray-800 mb-1">
                      {stat.value}
                    </p>
                    <p className="text-green-600 text-sm font-medium">
                      {stat.change} from last month
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-bold text-gray-800">
                    Recent Orders
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Order ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {console.log(orders,"ordersss coming")}
                      {orders?.map((order) => (
                        <tr key={order._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {order?._id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {order.user}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {order.product}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {order.products.quantity}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            {order.totalAmount}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                order.status
                              )}`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {order.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === "products" && (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Products</h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                  + Add Product
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-6xl">
                      <img src={product.image} />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-800">
                          {product.name}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {product.category}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold text-blue-600">
                          {product.price}
                        </p>
                        <p className="text-sm text-gray-600">
                          Stock:{" "}
                          <span className="font-semibold">{product.stock}</span>
                        </p>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-sm font-medium">
                          Edit
                        </button>
                        <button className="flex-1 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 text-sm font-medium">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "orders" && (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                All Orders
              </h2>
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Order ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Customer
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {orders?.map((order) => (
                        <tr key={order._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {order._id}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {order.user}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {order.product}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {order?.products?.quantity}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            {order.totalAmount}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                order.status
                              )}`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {order.date}
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {(activeTab === "customers" ||
            activeTab === "analytics" ||
            activeTab === "settings") && (
            <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {menuItems.find((m) => m.id === activeTab)?.label}
              </h2>
              <p className="text-gray-600">
                This section is coming soon. You can add your content here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
