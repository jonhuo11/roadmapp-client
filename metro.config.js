const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts }
    } = await getDefaultConfig();
    return {

        transformer: {

            // svg transfomer
            babelTransformerPath: require.resolve("react-native-svg-transformer")
        },
        resolver: {

            // svg transformer
            assetExts: assetExts.filter(ext => ext !== "svg"),
            sourceExts: [...sourceExts, "svg"]
        }

    };
})();