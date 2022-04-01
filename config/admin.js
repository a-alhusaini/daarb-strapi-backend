module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8023ee5ed92b0521feb115fdc4e3cec7'),
  },
});
