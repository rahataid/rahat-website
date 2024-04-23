import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export function Account() {
    const { address, connector } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address });
    const { data: ensAvatar } = useEnsAvatar({ name: ensName });
    const formattedAddress = formatAddress(address);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {connector && connector.icon ? (
                <img
                    alt="ENS Avatar"
                    style={{
                        width: "3rem",
                    }}
                    src={connector.icon}
                />
            ) : (
                <div
                    style={{
                        height: "3rem",
                        width: "3rem",
                        borderRadius: "50%",
                        backgroundColor: "#D1D5DB",
                    }}
                />
            )}
            <div>
                {address && (
                    <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                        {ensName
                            ? `${ensName} (${formattedAddress})`
                            : formattedAddress}
                    </div>
                )}
                <div style={{ fontSize: "1rem", color: "#6B7280" }}>
                    Connected to {connector?.name}
                </div>
            </div>
            <button
                onClick={() => disconnect()}
                style={{
                    backgroundColor: "#EF4444",
                    color: "#FFF",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.25rem",
                    width: "auto",
                }}
                // onMouseOver={() => (this.style.backgroundColor = "#B91C1C")}
                // onMouseOut={() => (this.style.backgroundColor = "#EF4444")}
            >
                Disconnect
            </button>
        </div>
    );
}

function formatAddress(address) {
    if (!address) return null;
    return `${address.slice(0, 6)}…${address.slice(38, 42)}`;
}

