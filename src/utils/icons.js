function PackIcon() {
  return (
    <img
      src={require("assets/images/myOrders/Timeline/pack.png")}
      alt="PackIcon"
    />
  );
}
function PreOrderIcon() {
  return (
    <img
      src={require("assets/images/myOrders/Timeline/pre-order.png")}
      alt="PreOrderIcon"
    />
  );
}
function OutToDeliveryIcon() {
  return (
    <img
      src={require("assets/images/myOrders/Timeline/express-delivery.png")}
      alt="OutToDeliveryIcon"
    />
  );
}
function DeliverdIcon() {
  return (
    <img
      src={require("assets/images/myOrders/Timeline/deliver.png")}
      alt="DeliverdIcon"
    />
  );
}
export { PackIcon, DeliverdIcon, OutToDeliveryIcon, PreOrderIcon };
