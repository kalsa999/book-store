import { createRemoteJWKSet, jwtVerify } from "jose";

const KEYCLOAK_URL = "http://localhost:8080";
const REALM = "bookstore-realm";

const jwks = createRemoteJWKSet(
  new URL(`${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/certs`)
);

export async function requireKeycloakAuth(req, res, next) {
  try {
    const auth = req.headers.authorization || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;

    if (!token) {
      return res.status(401).json({ message: "Missing token" });
    }

    const { payload } = await jwtVerify(token, jwks, {
      issuer: `${KEYCLOAK_URL}/realms/${REALM}`,
      // audience: "your-client-id", // optionnel pour plus de sécurité
    });

    req.user = payload;

    next(); 
  } catch (e) {
    console.error("JWT Error:", e.message); 
    return res.status(401).json({ message: "Invalid token" });
  }
}

// Middleware pour vérifier les rôles
export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthenticated" });
    }

    const roles = req.user?.realm_access?.roles || [];

    if (!roles.includes(role)) {
      return res.status(403).json({ message: "Forbidden" });
    }

    next();
  };
}