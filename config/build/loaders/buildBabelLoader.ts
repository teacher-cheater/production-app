import { BuildOptions } from '../types/config';

export function BuildBabelLoader(options: BuildOptions) {
    const { isDev } = options;
    return (
        {
            test: /\.(js|jsx|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        [
                            'i18next-extract',
                            {
                                locales: ['ru', 'en'],
                                keyAsDefaultValue: true,
                            },
                        ],
                        isDev && require.resolve('react-refresh/babel'),
                    ].filter(Boolean),
                },
            },
        }
    );
}
