import webpack from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoaders} from "../build/loaders/buildCssLoaders";

export default ({config}: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('ts', 'tsx');

    config.module.rules.push(buildCssLoaders(true));

    return config;
}
