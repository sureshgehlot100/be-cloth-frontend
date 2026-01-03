"use client";

import React, { useEffect, useState } from "react";
import { orderApi } from "@/app/api/order";
import SliderCommen from "@/app/(component)/SliderCommen";

/* ===================== HELPERS ===================== */

function formatCurrency(amount, currency) {
  try {
    const code = (currency || "USD").toUpperCase();
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: code,
    }).format(amount);
  } catch {
    return `${amount} ${currency}`;
  }
}

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function StatusBadge({ type, children }) {
  const base =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  const styles = {
    paid: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    failed: "bg-red-100 text-red-800",
    placed: "bg-blue-100 text-blue-800",
    shipped: "bg-indigo-100 text-indigo-800",
    default: "bg-gray-100 text-gray-800",
  };

  return (
    <span
      className={`${base} ${styles[type?.toLowerCase()] || styles.default
        }`}
    >
      {children}
    </span>
  );
}

/* ===================== COMPONENT ===================== */

export default function Orders() {
  const text = 'My-Account';
  const [orders, setOrders] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggle = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard");
    } catch {
      alert("Copy failed");
    }
  };

  /* ===================== FETCH ORDERS ===================== */
  useEffect(() => {
    let mounted = true;

    const fetchOrders = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await orderApi(); // ✅ await promise
        if (mounted) setOrders(data || []);
      } catch (err) {
        const msg =
          err?.response?.data?.message ||
          err.message ||
          "Failed to load orders";
        if (mounted) setError(msg);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchOrders();

    return () => {
      mounted = false;
    };
  }, []);

  /* ===================== UI ===================== */

  return (
    <>
      <SliderCommen text={text} />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold">Orders</h1>
            <p className="text-sm text-gray-500">
              Recent orders —
            </p>
          </header>

          {loading && <p className="text-gray-500">Loading orders...</p>}
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {!loading && orders.length === 0 && (
              <div className="col-span-full text-center text-gray-400 border rounded-lg p-6">
                No orders found
              </div>
            )}

            {orders.map((order) => (
              <article
                key={order._id}
                className="bg-white border shadow-sm rounded-2xl p-4 hover:shadow-lg transition"
              >
                <div className="flex justify-between">
                  <div>
                    <h2 className="font-medium text-lg">
                      Order #{(order.orderRef || order._id).slice(-6)}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {order.customerEmail}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="flex gap-2 justify-end">
                      <StatusBadge type={order.paymentStatus}>
                        {order.paymentStatus}
                      </StatusBadge>
                      <StatusBadge type={order.orderStatus}>
                        {order.orderStatus}
                      </StatusBadge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {formatDate(order.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="border-t mt-4 pt-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">
                        {formatCurrency(order.amount, order.currency)}
                      </p>
                      <p className="text-xs text-gray-400">
                        {order.items?.length || 0} item(s)
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => toggle(order._id)}
                        className="border px-3 py-1 rounded text-sm"
                      >
                        {expanded[order._id] ? "Hide" : "Details"}
                      </button>

                      <button
                        onClick={() =>
                          copyToClipboard(
                            order.stripeSessionId ||
                            order.orderRef ||
                            order._id
                          )
                        }
                        className="bg-gray-100 px-3 py-1 rounded text-sm"
                      >
                        Copy Ref
                      </button>
                    </div>
                  </div>

                  {expanded[order._id] && (
                    <div className="mt-3 space-y-3 text-sm">
                      <div>
                        <p className="font-medium">Shipping</p>
                        {order.shipping ? (
                          <>
                            <p className="text-xs text-gray-500">
                              {order.shipping.fullName} •{" "}
                              {order.shipping.phone}
                            </p>
                            <p className="text-xs text-gray-400">
                              {order.shipping.addressLine1},{" "}
                              {order.shipping.city},{" "}
                              {order.shipping.state}{" "}
                              {order.shipping.postalCode},{" "}
                              {order.shipping.country}
                            </p>
                          </>
                        ) : (
                          <p className="text-xs text-gray-400">—</p>
                        )}
                      </div>

                      <div>
                        <p className="font-medium">Items</p>
                        <ul className="mt-2 space-y-2">
                          {order.items?.map((it, idx) => (
                            <li
                              key={idx}
                              className="flex justify-between border rounded p-2"
                            >
                              <div>
                                <p className="font-medium">{it.name}</p>
                                <p className="text-xs text-gray-400">
                                  Qty: {it.quantity}
                                </p>
                              </div>
                              <p className="font-semibold">
                                {formatCurrency(
                                  it.price * it.quantity,
                                  order.currency
                                )}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between text-xs text-gray-500">
                        <span>
                          Updated: {formatDate(order.updatedAt)}
                        </span>
                        <span className="font-semibold">
                          Total:{" "}
                          {formatCurrency(order.amount, order.currency)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <footer className="mt-8 text-center text-xs text-gray-400">
            Showing {orders.length} orders
          </footer>
        </div>
      </div>
    </>
  );
}
