import { useEffect, useState } from "react";

export function PinCode() {
  const address = [
    { city: "Kathmandu", pinCode: "1001", isDefault: true },
    { city: "Lalitpur", pinCode: "1002", isDefault: false },
    { city: "Bhaktapur", pinCode: "1003", isDefault: false },
    { city: "Pokhara", pinCode: "1004", isDefault: false },
  ];

  // Initial default address
  const [defaultAddress, setDefaultAddress] = useState(() =>
    address.find((item) => item.isDefault)
  );

  const [pinCode, setPinCode] = useState("");

  // Update default address when pin code matches
  function setPin() {
    const selectedAddress = address.find(
      (address) => address.pinCode === pinCode
    );
    if (selectedAddress) {
      setDefaultAddress(selectedAddress);
    } else {
      alert("Pin code not found!");
    }
  }

  // ✅ useEffect to log changes in defaultAddress
  useEffect(() => {
    console.log("Default address updated:", defaultAddress);
  }, [defaultAddress]); // ✅ dependency is correct here

  return (
    <>
      {console.table(address)}

      <h1>Dependency mistakes while using useEffect</h1>

      <input
        placeholder="Enter the pin code"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
      />
      <button onClick={setPin}>Set pin code</button>

      {defaultAddress && (
        <p>
          <strong>City:</strong> {defaultAddress.city} <br />
          <strong>Pin Code:</strong> {defaultAddress.pinCode}
        </p>
      )}
    </>
  );
}
