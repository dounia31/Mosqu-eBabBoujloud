import postCss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/js/index.js',
    output: [{
        format: 'umd',
        name: 'app',
        file: `www/dist/app.bundle.js`,
        sourcemap: false
    }],
    plugins: [
        postCss(),
        resolve(),
        commonJs(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    context: 'this'
};