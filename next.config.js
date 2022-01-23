const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: isProd ? 'https://cdn.mydomain.com' : '',
    async headers() {
        return [
            {
                source: '/sitemap.xml',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'text/xml'
                    }
                ]
            }
        ]
    }
}