import { useEffect, useState } from "react";
import { Connector, useConnect } from "wagmi";

export function WalletOptions() {
    const { connectors, connect } = useConnect();

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {connectors.map((connector) => (
                <WalletOption
                    key={connector.uid}
                    connector={connector}
                    onClick={() => connect({ connector })}
                />
            ))}
        </div>
    );
}

function WalletOption({ connector, onClick }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        (async () => {
            const provider = await connector.getProvider();
            setReady(!!provider);
        })();
    }, [connector]);

    return (
        <button
            disabled={!ready}
            onClick={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                color: "#FFF",
                backgroundColor: ready ? "#3B82F6" : "#6B7280",
                cursor: ready ? "pointer" : "not-allowed",
            }}
            onMouseOver={() =>
                ready && (this.style.backgroundColor = "#1E3A8A")
            }
            onMouseOut={() => ready && (this.style.backgroundColor = "#3B82F6")}
        >
            <img
                src={connector.icon}
                alt={connector.name}
                style={{ width: "1.5rem", height: "1.5rem" }}
            />
            {connector.name}
        </button>
    );
}

