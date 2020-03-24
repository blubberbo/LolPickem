import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

/**
 * mongo options
 */
export const MONGODB_URI = process.env['LOL_PICKEM_DB_URI']
  ? process.env['LOL_PICKEM_DB_URI']
  : '';

if (!MONGODB_URI) {
  console.log(
    'No mongo connection string. Set MONGODB_URI environment variable.',
  );
  process.exit(1);
}

/**
 * cors options to specify with domains are allowed as origins
 */
export const corsOptions = {
  origin: process.env['LOL_PICKEM_APP_URI'],
};

/**
 * middleware for checking the JWT
 */
export const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header and the singing keys provided by the JWKS endpoint
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://blubberbo.auth0.com/.well-known/jwks.json',
  }),

  // Validate the audience and the issuer
  audience: 'https://lolpickem-api.herokuapp.com/',
  issuer: 'https://blubberbo.auth0.com/',
  algorithms: ['RS256'],
});
