module.exports = {
    //mode: "production",
    mode: 'development',
    devtool: 'inline-source-map',

    entry: ['./src/index.tsx' /*main*/],
    output: {
        filename: './bundle.js' // in /dist
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },

            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' }, // to inject the result into the DOM as a style block
                    { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file 
                    { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled
                    { loader: 'sass-loader' } // to convert SASS to CSS
                ]
            }
        ]
    }
};
