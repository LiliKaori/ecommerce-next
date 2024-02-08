/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['fakestoreapi.com', 'files.stripe.com', 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'],
        remotePatterns: [
            {hostname: 'fakestoreapi.com'},
            {hostname:'files.stripe.com'}
        ]
    }
};

export default nextConfig;
